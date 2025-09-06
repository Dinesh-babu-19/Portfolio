import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Code, 
  Palette, 
  Server, 
  Database, 
  Smartphone, 
  Globe,
  Layers,
  GitBranch
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const allSkills = [
  "Java", "HTML", "CSS", "JavaScript",
  "React.js", "Next.js", "Node.js", "Express.js",
  "Bootstrap", "jQuery", "Tailwind CSS",
  "SQL", "MongoDB", "PostgreSQL","Python",
  "Git & GitHub", "Cloudinary", "Multer", "RESTful APIs"
];

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: ["React", "Next.js", "HTML", "CSS", "TailwindCSS"]
  },
  {
    icon: Server,
    title: "Backend Development", 
    skills: ["Node.js", "Javascript", "Express.js", "REST APIs"]
  },
  {
    icon: Database,
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL"]
  },
  {
    icon: Palette,
    title: "Design & Tools",
    skills: ["Lovable",  "Git/GitHub", "VS Code"]
  },
];

const MovingSkills = () => {
  return (
    <div className="overflow-hidden w-full bg-gradient-primary/5 rounded-2xl p-6">
      <motion.div
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex space-x-8 whitespace-nowrap"
      >
        {[...allSkills, ...allSkills].map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="px-4 py-2 glass-card text-foreground font-medium rounded-full flex-shrink-0"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-12 lg:py-20 relative" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-accent opacity-5 blur-3xl rounded-full"
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks that I use to build 
            exceptional digital experiences.
          </p>
        </motion.div>

        {/* Moving Skills Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <MovingSkills />
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-card border-0 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="px-3 py-2 bg-muted/20 rounded-lg text-sm font-medium text-foreground"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
};