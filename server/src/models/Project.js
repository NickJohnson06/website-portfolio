import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Project title is required"],
    trim: true,
    maxlength: [100, "Title cannot exceed 100 characters"]
  },
  description: {
    type: String,
    required: [true, "Project description is required"],
    trim: true,
    maxlength: [1000, "Description cannot exceed 1000 characters"]
  },
  shortDescription: {
    type: String,
    required: [true, "Short description is required"],
    trim: true,
    maxlength: [200, "Short description cannot exceed 200 characters"]
  },
  technologies: [{
    type: String,
    trim: true,
    required: [true, "At least one technology is required"]
  }],
  category: {
    type: String,
    enum: ["web", "mobile", "desktop", "api", "other"],
    default: "web",
    required: true
  },
  difficulty: {
    type: String,
    enum: ["beginner", "intermediate", "advanced", "expert"],
    default: "intermediate"
  },
  githubUrl: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/github\.com\/.+/.test(v);
      },
      message: "Please provide a valid GitHub URL"
    }
  },
  liveUrl: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\//.test(v);
      },
      message: "Please provide a valid URL"
    }
  },
  demoUrl: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\//.test(v);
      },
      message: "Please provide a valid URL"
    }
  },
  images: [{
    url: {
      type: String,
      required: true,
      trim: true
    },
    alt: {
      type: String,
      trim: true,
      default: "Project screenshot"
    },
    caption: {
      type: String,
      trim: true
    }
  }],
  featured: {
    type: Boolean,
    default: false
  },
  featuredImage: {
    type: String,
    trim: true
  },
  completionDate: {
    type: Date
  },
  startDate: {
    type: Date
  },
  status: {
    type: String,
    enum: ["completed", "in-progress", "planned"],
    default: "completed"
  },
  tags: [{
    type: String,
    trim: true
  }],
  challenges: [{
    type: String,
    trim: true
  }],
  learnings: [{
    type: String,
    trim: true
  }],
  order: {
    type: Number,
    default: 0
  },
  isPublic: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for duration
projectSchema.virtual('duration').get(function() {
  if (this.startDate && this.completionDate) {
    const diffTime = Math.abs(this.completionDate - this.startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  return null;
});

// Index for better query performance
projectSchema.index({ featured: 1, order: 1 });
projectSchema.index({ category: 1, status: 1 });
projectSchema.index({ technologies: 1 });

// Pre-save middleware to ensure at least one image
projectSchema.pre('save', function(next) {
  if (this.images && this.images.length > 0 && !this.featuredImage) {
    this.featuredImage = this.images[0].url;
  }
  next();
});

// Static method to get featured projects
projectSchema.statics.getFeatured = function() {
  return this.find({ featured: true, isPublic: true })
    .sort({ order: 1, createdAt: -1 });
};

// Static method to get projects by category
projectSchema.statics.getByCategory = function(category) {
  return this.find({ category, isPublic: true })
    .sort({ order: 1, createdAt: -1 });
};

// Static method to get projects by technology
projectSchema.statics.getByTechnology = function(technology) {
  return this.find({ 
    technologies: { $in: [technology] }, 
    isPublic: true 
  }).sort({ order: 1, createdAt: -1 });
};

const Project = mongoose.model('Project', projectSchema);

export default Project;
