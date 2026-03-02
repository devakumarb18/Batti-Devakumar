import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology, Mechanical Engineering',
    institution: 'Anil Neerukonda Institute Of Technology & Sciences',
    date: '2022 - 2026',
  },
  {
    degree: '12th (MPC)',
    institution: 'Pardesipalem Narayana Junior College',
    date: '2020 - 2022',
  },
  {
    degree: '10th',
    institution: 'Kuntikota Narayana High School',
    date: '2010 - 2020',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-zinc-400 text-lg">My academic background and qualifications.</p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-zinc-400 text-base">{edu.institution}</p>
                </div>
              </div>
              <div className="md:text-right">
                <span className="inline-block px-4 py-2 rounded-full bg-zinc-950 text-emerald-400 text-sm font-medium border border-white/5">
                  {edu.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
