import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Web Development Intern',
    company: 'CODTECH IT SOLUTIONS',
    location: 'India',
    date: 'May 2025 - June 2025 (2 months)',
    description: [
      'Collaborated with engineers to design and develop efficient web solutions using React and Node.js.',
      'Provided technical support to team members, assisting in debugging complex frontend issues.',
      'Implemented data protection measures in compliance with security standards during API development.',
      'Kept up to date with new trends in web development to continuously improve product features.',
    ],
  },
  {
    title: 'Student / Fresher',
    company: 'Self-Taught / Personal Projects',
    location: 'Vishakhapatnam, India',
    date: 'May 2022 - Present',
    description: [
      'Self-driven learner, building skills through online resources, YouTube tutorials, and continuous practice.',
      'Developed complete end-to-end applications, from designing modern frontends to building secure backends and managing databases.',
      'Worked on real-world problems such as bug fixing, API integration, database optimization, and application deployment.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/50 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <p className="text-zinc-400 text-lg">My professional journey and hands-on experience.</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="hidden md:block col-span-1 text-right pt-1">
                  <span className="text-sm font-medium text-emerald-400">{exp.date}</span>
                </div>
                
                <div className="md:col-span-3 relative">
                  <div className="absolute -left-10 md:-left-12 top-1 w-6 h-6 rounded-full bg-zinc-900 border border-emerald-500/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  
                  <div className="bg-zinc-900/50 rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-zinc-400 text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {exp.company}
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span>{exp.location}</span>
                      <span className="sm:hidden block text-emerald-400 font-medium">{exp.date}</span>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-zinc-300 text-sm leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
