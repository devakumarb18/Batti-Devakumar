import { motion } from 'motion/react';

const skills = [
  { category: 'Frontend', items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PHP', 'RESTful APIs'] },
  { category: 'Database', items: ['MySQL', 'MongoDB'] },
  { category: 'Tools & Others', items: ['Git/GitHub', 'Server Deployment', 'Debugging', 'Testing', 'Performance Optimization'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors"
            >
              <h3 className="text-xl font-semibold text-emerald-400 mb-6">{skillGroup.category}</h3>
              <ul className="space-y-4">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
