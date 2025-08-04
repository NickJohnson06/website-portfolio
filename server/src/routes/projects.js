import express from "express";
import { getDB } from "../db.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// GET all projects
router.get("/", async (req, res) => {
    try {
        const db = getDB();
        if (!db) {
            return res.status(500).json({ error: "Database not connected" });
        }

        const {
            category,
            technology,
            featured,
            status,
            limit = 20,
            page = 1,
            sort = "order",
        } = req.query;

        // Build filter object
        const filter = { isPublic: true };

        if (category) filter.category = category;
        if (technology) filter.technologies = { $in: [technology] };
        if (featured !== undefined) filter.featured = featured === 'true';
        if (status) filter.status = status;

        // Build sort object
        let sortObj = {};
        if (sort === 'newest') sortObj = { createdAt: -1} ;
        else if (sort === 'oldest') sortObj = { createdAt: 1} ;
        else if (sort === 'title') sortObj = { title: 1} ;
        else sortObj = { order: 1, createdAt: -1 }; // default sort

        const skip = (parseInt(page) - 1) * parseInt(limit);

        const projects = await db.collection("projects")
            .find(filter)
            .sort(sortObj)
            .limit(parseInt(limit))
            .skip(skip)
            .toArray();
        
        const total = await db.collection("projects").countDocuments(filter);

        res.json({
            projects,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                pages: Math.ceil(total / parseInt(limit))
            }
        });
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ error: "Failed to fetch projects" });
    }
});

// GET featured projects
router.get("/featured", async (req, res) => {
    try {
        const db = getDB();
        if (!db) {
            return res.status(500).json({ error: "Database not connected" });
        }

        const projects = await db.collection("projects")
            .find({ featured: true, isPublic: true })
            .sort({ order: 1, createdAt: -1 })
            .toArray();
        res.json(projects);
    } catch (error) {
        console.error("Error fetching featured projects:", error);
        res.status(500).json({ error: "Failed to fetch featured projects" });
    }
});

// GET projects by category
router.get("/category/:category", async (req, res) => {
    try {
        const db = getDB();
        if (!db) {
            return res.status(500).json({ error: "Database not connected" });
        }

        const { category } = req.params;
        const projects = await db.collection("projects")
            .find({ category, isPublic: true })
            .sort({ order: 1, createdAt: -1 })
            .toArray();
        res.json(projects);
    } catch (error) {
        console.error("Error fetching projects by category:", error);
        res.status(500).json({ error: "Failed to fetch projects by category" });
    }
});

// GET projects by technology
router.get("/technology/:technology", async (req, res) => {
    try {
        const db = getDB();
        if (!db) {
            return res.status(500).json({ error: "Database not connected" });
        }

        const { technology } = req.params;
        const projects = await db.collection("projects")
            .find({ 
                technologies: { $in: [technology] }, 
                isPublic: true 
            })
            .sort({ order: 1, createdAt: -1 })
            .toArray();
        res.json(projects);
    } catch (error) {
        console.error("Error fetching projects by technology:", error);
        res.status(500).json({ error: "Failed to fetch projects by technology" });
    }
});

// GET single project by ID
router.get("/:id", async (req, res) => {
    try {
        const db = getDB();
        if (!db) {
            return res.status(500).json({ error: "Database not connected" });
        }

        let projectId;
        try {
            projectId = new ObjectId(req.params.id);
        } catch (error) {
            return res.status(400).json({ error: "Invalid project ID" });
        }

        const project = await db.collection("projects").findOne({ _id: projectId });
        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }

        if (!project.isPublic) {
            return res.status(403).json({ error: "Unauthorized access" });
        }
        
        res.json(project);
    } catch (error) {
        console.error("Error fetching project:", error);
        res.status(500).json({ error: "Failed to fetch project" });
    }
});

// POST create new project
router.post("/", async (req, res) => {
    try {
      const db = getDB();
      if (!db) {
        return res.status(500).json({ error: "Database not connected" });
      }

      const projectData = req.body;
      
      // Ensure required fields are present
      if (!projectData.title || !projectData.description || !projectData.shortDescription) {
        return res.status(400).json({ 
          error: "Title, description, and short description are required" 
        });
      }
  
      if (!projectData.technologies || projectData.technologies.length === 0) {
        return res.status(400).json({ 
          error: "At least one technology is required" 
        });
      }

      // Add timestamps and defaults
      const newProject = {
        ...projectData,
        createdAt: new Date(),
        updatedAt: new Date(),
        isPublic: projectData.isPublic !== undefined ? projectData.isPublic : true,
        featured: projectData.featured || false,
        order: projectData.order || 0,
        status: projectData.status || "completed"
      };
  
      const result = await db.collection("projects").insertOne(newProject);
      const createdProject = await db.collection("projects").findOne({ _id: result.insertedId });
      
      res.status(201).json(createdProject);
    } catch (error) {
      console.error("Error creating project:", error);
      res.status(500).json({ error: "Failed to create project" });
    }
});
  
// PUT update project
router.put("/:id", async (req, res) => {
    try {
      const db = getDB();
      if (!db) {
        return res.status(500).json({ error: "Database not connected" });
      }

      let projectId;
      try {
        projectId = new ObjectId(req.params.id);
      } catch (error) {
        return res.status(400).json({ error: "Invalid project ID" });
      }

      const projectData = req.body;
      const updateData = {
        ...projectData,
        updatedAt: new Date()
      };

      const result = await db.collection("projects").findOneAndUpdate(
        { _id: projectId },
        { $set: updateData },
        { returnDocument: 'after' }
      );
  
      if (!result.value) {
        return res.status(404).json({ error: "Project not found" });
      }
  
      res.json(result.value);
    } catch (error) {
      console.error("Error updating project:", error);
      res.status(500).json({ error: "Failed to update project" });
    }
});
  
// DELETE project
router.delete("/:id", async (req, res) => {
    try {
      const db = getDB();
      if (!db) {
        return res.status(500).json({ error: "Database not connected" });
      }

      let projectId;
      try {
        projectId = new ObjectId(req.params.id);
      } catch (error) {
        return res.status(400).json({ error: "Invalid project ID" });
      }

      const result = await db.collection("projects").findOneAndDelete({ _id: projectId });
      
      if (!result.value) {
        return res.status(404).json({ error: "Project not found" });
      }
  
      res.json({ message: "Project deleted successfully" });
    } catch (error) {
      console.error("Error deleting project:", error);
      res.status(500).json({ error: "Failed to delete project" });
    }
});
  
// GET project statistics
router.get("/stats/overview", async (req, res) => {
    try {
      const db = getDB();
      if (!db) {
        return res.status(500).json({ error: "Database not connected" });
      }

      const stats = await db.collection("projects").aggregate([
        { $match: { isPublic: true } },
        {
          $group: {
            _id: null,
            totalProjects: { $sum: 1 },
            featuredProjects: { $sum: { $cond: ["$featured", 1, 0] } },
            categories: { $addToSet: "$category" },
            technologies: { $push: "$technologies" }
          }
        },
        {
          $project: {
            _id: 0,
            totalProjects: 1,
            featuredProjects: 1,
            categories: 1,
            technologies: { $reduce: { input: "$technologies", initialValue: [], in: { $concatArrays: ["$$value", "$$this"] } } }
          }
        }
      ]).toArray();
  
      if (stats.length === 0) {
        return res.json({
          totalProjects: 0,
          featuredProjects: 0,
          categories: [],
          technologies: []
        });
      }
  
      // Get unique technologies
      const uniqueTechnologies = [...new Set(stats[0].technologies)];
      
      res.json({
        totalProjects: stats[0].totalProjects,
        featuredProjects: stats[0].featuredProjects,
        categories: stats[0].categories,
        technologies: uniqueTechnologies
      });
    } catch (error) {
      console.error("Error fetching project stats:", error);
      res.status(500).json({ error: "Failed to fetch project statistics" });
    }
});
  
  export default router;