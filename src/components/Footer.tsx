import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="text-2xl font-bold text-white tracking-tighter">
            BD<span className="text-emerald-500">.</span>
          </a>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Batti Devakumar. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 text-zinc-500">
          <a href="mailto:devakumarb18@gmail.com" className="hover:text-white transition-colors">
            <Mail size={20} />
          </a>
          <a href="https://www.linkedin.com/in/batti-devakumar-29924b350" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
