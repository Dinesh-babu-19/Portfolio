import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, MapPin, Code, Heart, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";


const highlights = [
  {
    icon: Calendar,
    title: "Experience",
    description: "Hands-on experience through projects and internships at SmartEd",
  },
  {
    icon: Code,
    title: "Technologies",
    description: "React.js, Node.js, Next.js, Express.js, Tailwind CSS, PostgreSQL, MongoDB",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Oracle Gen AI Certified with cloud knowledge expertise",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-12 lg:py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Passionate about code and design, I work as a Full-Stack Developer & UI/UX Designer to craft digital solutions that are both functional and visually engaging.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                During my journey, I've gained hands-on experience through projects and internships, including developing responsive front-end features at SmartEd, integrating APIs, and optimizing UI performance. I specialize in React.js, Node.js, Next.js, Express.js, and Tailwind CSS, along with working knowledge of databases like PostgreSQL, MongoDB, and SQL.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Some of my favorite projects include an AI-Powered Mock Interview App built with Next.js, OpenAI API, and PostgreSQL; a MERN-based Grocery Delivery Platform with JWT authentication, Stripe payments, and Cloudinary integration; and a Talk Message Blog Website built with Node.js, Bootstrap, and EJS for interactive blogging.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Outside of development, I stay curious by exploring generative AI tools, improving my cloud knowledge (Oracle Gen AI Certified), and contributing to open-source projects.
              </p>

              <div className="space-y-4 mt-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-80 h-80 rounded-full overflow-hidden"
              >
                <img 
                  src="/Photopass.jpeg" 
                  alt="Dinesh Babu - Full-Stack Developer" 
                  className="w-60 h-90 rounded-full object-cover object-center transform translate-x-8"
                />
              </motion.div>
              <div className="absolute -inset-1 bg-gradient-primary rounded-full blur opacity-30 animate-pulse -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};