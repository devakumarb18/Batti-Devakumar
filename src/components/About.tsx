import { motion } from 'motion/react';
import { Code2, Database, Layout, Server } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Layout className="w-6 h-6 text-emerald-400" />,
      title: 'Frontend Development',
      description: 'Building responsive, accessible, and performant user interfaces using React, HTML5, and CSS3.',
    },
    {
      icon: <Server className="w-6 h-6 text-cyan-400" />,
      title: 'Backend Development',
      description: 'Creating robust RESTful APIs and server-side logic with Node.js, Python, and PHP.',
    },
    {
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      title: 'Database Management',
      description: 'Designing and optimizing databases using MySQL and MongoDB for scalable applications.',
    },
    {
      icon: <Code2 className="w-6 h-6 text-purple-400" />,
      title: 'Full Stack Solutions',
      description: 'Delivering complete end-to-end applications, from modern frontends to secure backends.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
            <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
              <p>
                I am a Full Stack Developer with hands-on experience in building scalable and responsive web applications for e-commerce and B2B platforms. I focus on writing clean, efficient code and delivering reliable, user-friendly solutions.
              </p>
              <p>
                My technical skill set includes React, JavaScript (ES6+), Node.js, Python, PHP, HTML5, CSS3, MySQL, MongoDB, and RESTful API development. I also have experience with Git/GitHub, server deployment, debugging, testing, and performance optimization.
              </p>
              <p>
                I am a self-driven learner who built many of my skills through online resources, YouTube tutorials, and continuous practice. Solving coding problems and working on real projects has strengthened my problem-solving ability and technical confidence.
              </p>
              <p>
                My goal is to grow as a skilled software engineer and contribute to teams that build impactful and scalable digital products.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
