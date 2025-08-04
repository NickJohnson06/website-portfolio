import express from "express";
import Project from "../models/Project";

const router = express.Router();

// GET all projects
router.get("/", async (req, res) => {
    try {
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

        const projects = await Project.find(filter)
        .sort(sortObj)
        .limit(parseInt(limit))
        .skip(skip)
        
        const total = await Project.countDocuments(filter);

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
        const projects = await Project.getFeatured();
        res.json(projects);
    } catch (error) {
        console.error("Error fetching featured projects:", error);
        res.status(500).json({ error: "Failed to fetch featured projects" });
    }
});

// GET projects by category
router.get("/category/:category", async (req, res) => {
    try {
        const { category } = req.params;
        const projects = await Project.getByCategory(category);
        res.json(projects);
    } catch (error) {
        console.error("Error fetching projects by category:", error);
        res.status(500).json({ error: "Failed to fetch projects by category" });
    }
});

// GET projects by technology
router.get("/technology/:technology", async (req, res) => {
    try {
        const { technology } = req.params;
        const projects = await Project.getByTechnology(technology);
        res.json(projects);
    } catch (error) {
        console.error("Error fetching projects by technology:", error);
        res.status(500).json({ error: "Failed to fetch projects by technology" });
    }
});

// GET single project by ID
router.get("/:id", async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }

        if (!project.isPublic) {
            return res.status(403).json({ error: "Unauthorized access" });
        }
        
        res.json(project);
    } catch (error) {
        console.error("Error fetching project:", error);
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ error: "Invalid project ID" });
        }
        res.status(500).json({ error: "Failed to fetch project" });
    }
});

// POST create new project
router.post("/", async (req, res) => {
    try {
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
  
      const project = new Project(projectData);
      await project.save();
      
      res.status(201).json(project);
    } catch (error) {
      console.error("Error creating project:", error);
      
      if (error.name === 'ValidationError') {
        const errors = Object.values(error.errors).map(err => err.message);
        return res.status(400).json({ error: errors.join(', ') });
      }
      
      res.status(500).json({ error: "Failed to create project" });
    }
});
  
// PUT update project
router.put("/:id", async (req, res) => {
    try {
      const projectData = req.body;
      const project = await Project.findByIdAndUpdate(
        req.params.id,
        projectData,
        { new: true, runValidators: true }
      );
  
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
  
      res.json(project);
    } catch (error) {
      console.error("Error updating project:", error);
      
      if (error.name === 'ValidationError') {
        const errors = Object.values(error.errors).map(err => err.message);
        return res.status(400).json({ error: errors.join(', ') });
      }
      
      if (error.kind === 'ObjectId') {
        return res.status(400).json({ error: "Invalid project ID" });
      }
      
      res.status(500).json({ error: "Failed to update project" });
    }
});
  
// DELETE project
router.delete("/:id", async (req, res) => {
    try {
      const project = await Project.findByIdAndDelete(req.params.id);
      
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
  
      res.json({ message: "Project deleted successfully" });
    } catch (error) {
      console.error("Error deleting project:", error);
      
      if (error.kind === 'ObjectId') {
        return res.status(400).json({ error: "Invalid project ID" });
      }
      
      res.status(500).json({ error: "Failed to delete project" });
    }
});
  
// GET project statistics
router.get("/stats/overview", async (req, res) => {
    try {
      const stats = await Project.aggregate([
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
      ]);
  
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