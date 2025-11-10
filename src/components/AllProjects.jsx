import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { portfolio, additionalProjects } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const AllProjects = () => {
  // Categorize project function
  const categorizeProject = (project) => {
    const desc = project.description.toLowerCase();
    if (
      desc.includes("game") ||
      desc.includes("memory") ||
      desc.includes("battle")
    )
      return "game";
    if (
      desc.includes("ecommerce") ||
      desc.includes("e-commerce") ||
      desc.includes("shop") ||
      desc.includes("bicycle")
    )
      return "ecommerce";
    if (desc.includes("travel") || desc.includes("booking")) return "travel";
    if (
      desc.includes("learning") ||
      desc.includes("educational") ||
      desc.includes("communication")
    )
      return "education";
    if (
      desc.includes("task") ||
      desc.includes("document") ||
      desc.includes("management")
    )
      return "productivity";
    return "web";
  };

  // Get comprehensive tags for each project
  const getProjectTags = (project) => {
    const { name, description } = project;
    const tags = [];

    // Technology tags
    if (description.includes("React"))
      tags.push({ name: "React", color: "from-blue-400 to-blue-600" });
    if (description.includes("Next.js"))
      tags.push({ name: "Next.js", color: "from-gray-700 to-gray-900" });
    if (description.includes("TypeScript"))
      tags.push({ name: "TypeScript", color: "from-blue-500 to-blue-700" });
    if (description.includes("JavaScript"))
      tags.push({ name: "JavaScript", color: "from-yellow-400 to-yellow-600" });
    if (description.includes("Tailwind CSS"))
      tags.push({ name: "Tailwind CSS", color: "from-cyan-400 to-cyan-600" });
    if (description.includes("Firebase"))
      tags.push({ name: "Firebase", color: "from-orange-400 to-orange-600" });
    if (description.includes("Vite"))
      tags.push({ name: "Vite", color: "from-purple-400 to-pink-400" });
    if (description.includes("Redux"))
      tags.push({ name: "Redux", color: "from-purple-500 to-purple-700" });
    if (description.includes("Framer Motion"))
      tags.push({ name: "Framer Motion", color: "from-pink-400 to-pink-600" });
    if (description.includes("REST API"))
      tags.push({ name: "REST API", color: "from-purple-400 to-purple-600" });
    if (description.includes("Context API"))
      tags.push({
        name: "Context API",
        color: "from-indigo-400 to-indigo-600",
      });
    if (description.includes("React Router"))
      tags.push({ name: "React Router", color: "from-red-400 to-red-600" });
    if (description.includes("Firestore"))
      tags.push({ name: "Firestore", color: "from-orange-500 to-orange-700" });
    if (description.includes("Local Storage"))
      tags.push({
        name: "Local Storage",
        color: "from-green-400 to-green-600",
      });
    if (description.includes("CSS Grid"))
      tags.push({ name: "CSS Grid", color: "from-teal-400 to-teal-600" });
    if (description.includes("CSS transforms"))
      tags.push({ name: "CSS Animations", color: "from-pink-500 to-pink-700" });
    if (description.includes("Netlify"))
      tags.push({ name: "Netlify", color: "from-teal-500 to-teal-700" });
    if (description.includes("Vercel"))
      tags.push({ name: "Vercel", color: "from-gray-600 to-gray-800" });

    // Project type tags
    if (
      name.toLowerCase().includes("red horizon") ||
      description.includes("travel") ||
      description.includes("booking")
    ) {
      tags.push({
        name: "Travel Platform",
        color: "from-emerald-400 to-emerald-600",
      });
    }
    if (
      name.toLowerCase().includes("breakaway") ||
      description.includes("e-commerce") ||
      description.includes("shopping")
    ) {
      tags.push({ name: "E-commerce", color: "from-green-500 to-green-700" });
    }
    if (
      name.toLowerCase().includes("joshua hub") ||
      description.includes("task management") ||
      description.includes("document")
    ) {
      tags.push({ name: "Productivity", color: "from-blue-500 to-blue-700" });
    }
    if (
      description.includes("game") ||
      description.includes("matching") ||
      description.includes("battle")
    ) {
      tags.push({ name: "Game", color: "from-red-500 to-red-700" });
    }
    if (
      description.includes("learning") ||
      description.includes("educational") ||
      description.includes("communication")
    ) {
      tags.push({ name: "Education", color: "from-violet-500 to-violet-700" });
    }

    // Feature tags
    if (description.includes("responsive"))
      tags.push({ name: "Responsive", color: "from-gray-500 to-gray-700" });
    if (description.includes("real-time"))
      tags.push({ name: "Real-time", color: "from-red-400 to-red-600" });
    if (description.includes("authentication"))
      tags.push({ name: "Auth", color: "from-indigo-500 to-indigo-700" });
    if (
      description.includes("performance") ||
      description.includes("optimized")
    )
      tags.push({ name: "Optimized", color: "from-green-400 to-green-600" });
    if (description.includes("SEO"))
      tags.push({ name: "SEO", color: "from-yellow-500 to-yellow-700" });

    return tags.slice(0, 6); // Limit to 6 tags per project
  };

  const [allProjects] = useState([...portfolio, ...additionalProjects]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Enhanced project data with comprehensive tags
  const [enhancedProjects] = useState(() =>
    allProjects.map((project) => ({
      ...project,
      tags: getProjectTags(project),
      category: categorizeProject(project),
    }))
  );

  const [filteredProjects, setFilteredProjects] = useState(enhancedProjects);

  // Filter and search logic
  useEffect(() => {
    let filtered = enhancedProjects;

    // Apply category filter
    if (activeFilter === "featured") {
      filtered = filtered.filter((project) => project.featured);
    } else if (activeFilter !== "all") {
      filtered = filtered.filter(
        (project) => project.category === activeFilter
      );
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.tags.some((tag) =>
            tag.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredProjects(filtered);
  }, [activeFilter, searchTerm, enhancedProjects]);

  const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`w-full mt-8 flex flex-col lg:flex-row ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-8 group`}
      >
        {/* Project Image */}
        <div className="relative w-full lg:w-3/5">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<div class="w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center rounded-2xl"><i class="fas fa-image text-6xl text-white/30"></i></div>';
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

            {/* Project Links Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex gap-4">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-4 rounded-full text-white transition-all duration-300 hover:scale-110 group"
                >
                  <i className="fas fa-external-link-alt text-lg"></i>
                </a>
              </div>
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                <i className="fas fa-star mr-1"></i>Featured
              </div>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div
          className={`w-full lg:w-2/5 flex flex-col justify-center ${
            isEven ? "text-left lg:text-left" : "text-left lg:text-right"
          } px-4 lg:px-8`}
        >
          {/* Project Title */}
          <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4 group-hover:text-white transition-all duration-300">
            {project.name}
          </h3>

          {/* Project Description */}
          <p className="text-secondary text-base md:text-lg leading-relaxed mb-6">
            {project.description.length > 200
              ? `${project.description.substring(0, 200)}...`
              : project.description}
          </p>

          {/* Tech Tags */}
          <div
            className={`flex flex-wrap gap-2 mb-6 ${
              isEven ? "justify-start" : "lg:justify-end"
            }`}
          >
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${tag.color} shadow-lg backdrop-blur-sm border border-white/20`}
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div
            className={`flex gap-3 ${
              isEven ? "justify-start" : "lg:justify-end"
            }`}
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <i className="fas fa-external-link-alt"></i>
              View Project
            </a>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: project.name, url: project.href });
                } else {
                  navigator.clipboard.writeText(project.href);
                  alert("Project link copied to clipboard!");
                }
              }}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              <i className="fas fa-share-alt"></i>
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-primary/80 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 bg-tertiary/20 hover:bg-tertiary/40 border border-tertiary/30 hover:border-tertiary/50 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <i className="fas fa-arrow-left"></i>
              <span className="hidden sm:inline">Back to Portfolio</span>
              <span className="sm:hidden">Back</span>
            </button>
            <motion.h1
              variants={textVariant()}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-violet-400"
            >
              All Projects
            </motion.h1>
          </div>

          {/* Search and Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4"
          >
            <div className="relative max-w-md">
              <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search projects or technologies..."
                className="w-full pl-12 pr-4 py-4 rounded-xl text-white placeholder-gray-400 focus:outline-none bg-white/5 border border-white/10 backdrop-blur-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Filter Tabs */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          {[
            { key: "all", label: "All Projects", icon: "fa-th-large" },
            { key: "featured", label: "Featured", icon: "fa-star" },
            { key: "web", label: "Web Apps", icon: "fa-globe" },
            { key: "ecommerce", label: "E-commerce", icon: "fa-shopping-cart" },
            { key: "game", label: "Games", icon: "fa-gamepad" },
            { key: "education", label: "Education", icon: "fa-graduation-cap" },
            { key: "productivity", label: "Productivity", icon: "fa-tasks" },
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full text-sm font-semibold border transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-violet-500 border-violet-400 text-white scale-105 shadow-lg"
                  : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <i className={`fas ${filter.icon} mr-2`}></i>
              {filter.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects List */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <i className="fas fa-search text-6xl text-gray-600 mb-6"></i>
            <h3 className="text-3xl font-bold text-gray-400 mb-3">
              No projects found
            </h3>
            <p className="text-gray-500 text-lg">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        ) : (
          <div className="space-y-16">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AllProjects;
