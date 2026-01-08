import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "AI-Mock Interview App",
    description: "An AI-powered mock interview platform built with Next.js, OpenAI API, and PostgreSQL. Features include real-time interview simulation, secure authentication, analytics dashboard, and payment integration.",
    technologies: ["React","Next.js","Node.js", "PostgreSQL", "Stripe","OpenAI"],
    image: "/aimock.png",
    demoUrl: "https://ai-mock-interview-psi-ruddy.vercel.app/",
    githubUrl: "https://github.com/Dinesh-babu-19/AI-Mock-Interview",
    category: "Full-Stack"
  },
  {
    id: 2,
    title: "Online Grocery Delivery Platform",
    description: "A full-stack grocery delivery platform with secure authentication, product management, and seamless checkout. Includes Stripe payments, image uploads, and a responsive, user-friendly interface.",
    technologies: ["React", "Node.js","Express.js", "MongoDB", "Tailwind CSS"],
    image: "/zionix.png",
    demoUrl: "https://zionix-cart.vercel.app/",
    githubUrl: "https://github.com/Dinesh-babu-19/Zionix_cart",
    category: "Full-Stack"
  },
  {
    id: 3,
    title: "Talk Message Blog Application",
    description: "A real-time messaging application that allows users to chat, share media, and create groups, featuring intelligent notifications, search functionality, and a clean, interactive user interface.",
    technologies: ["Javascript", "EJS", "JQuery", "Html", "CSS"],
    image: "/talkmessage.png",
    demoUrl: "#",
    githubUrl: "https://github.com/Dinesh-babu-19/talk_message",
    category: "Blog Application"
  },
  // {
  //   id: 4,
  //   title: "Mobile Fitness App",
  //   description: "A cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social features.",
  //   technologies: ["React Native", "Firebase", "Redux", "Expo"],
  //   image: "/api/placeholder/600/400",
  //   demoUrl: "#",
  //   githubUrl: "#",
  //   category: "Mobile"
  // },
  // {
  //   id: 5,
  //   title: "Real Estate Platform",
  //   description: "A comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.",
  //   technologies: ["React", "Express.js", "MySQL", "Google Maps API"],
  //   image: "/api/placeholder/600/400",
  //   demoUrl: "#",
  //   githubUrl: "#",
  //   category: "Web App"
  // },
  // {
  //   id: 6,
  //   title: "Blockchain Voting System",
  //   description: "A secure and transparent voting system built on blockchain technology with smart contracts and decentralized architecture.",
  //   technologies: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
  //   image: "/api/placeholder/600/400",
  //   demoUrl: "#",
  //   githubUrl: "#",
  //   category: "Blockchain"
  // }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="glass-card border-0 overflow-hidden h-full m-t-10">
        <div className="relative overflow-hidden">
          {/* Project Image */}
          <div className="h-48 relative overflow-hidden">
            {project.image && project.image !== "/api/placeholder/600/400" ? (
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="h-full bg-gradient-secondary flex items-center justify-center">
                <p className="text-white/80 text-lg font-medium">Project Screenshot</p>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          
          {/* Overlay with Actions */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-4">
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors cursor-pointer"
                title="Live Demo"
              >
                <ExternalLink className="h-6 w-6 text-white" />
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors cursor-pointer"
                title="GitHub Repository"
              >
                <Github className="h-6 w-6 text-white" />
              </motion.a>
            </div>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-muted/30 text-foreground text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-3">
            <Button
              size="sm"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 flex-1"
              onClick={() => window.open(project.demoUrl, '_blank', 'noopener,noreferrer')}
            >
              <Play className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-border hover:bg-muted/20"
              onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-12 lg:py-20 relative" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-secondary opacity-5 blur-3xl rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, spanning from web applications to mobile apps and 
            innovative solutions that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary hover:bg-primary hover:text-white hover:border-primary px-8 py-6 text-lg transition-all duration-300 hover:shadow-glow"
          >
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
