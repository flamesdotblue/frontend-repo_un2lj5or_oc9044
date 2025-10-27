import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'InterviewPulse',
    description: 'AI-powered mock interviews with feedback and analytics.',
    stack: ['React', 'Tailwind', 'Node'],
    github: 'https://github.com',
  },
  {
    name: 'TaskFlow',
    description: 'Minimal task manager to plan and execute your day.',
    stack: ['React', 'Vite', 'LocalStorage'],
    github: 'https://github.com',
  },
  {
    name: 'DataSketch',
    description: 'Interactive charts and dashboards for quick insights.',
    stack: ['D3.js', 'React', 'CSS'],
    github: 'https://github.com',
  },
  {
    name: 'DevNotes',
    description: 'A clean space to save code snippets and ideas.',
    stack: ['React', 'IndexedDB'],
    github: 'https://github.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-[#1E293B] sm:text-4xl">Projects</h2>
        <p className="mt-3 text-slate-600">A selection of things I’ve been crafting lately.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.name}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold text-[#1E293B]">{p.name}</h3>
            </div>
            <p className="mt-2 text-slate-600">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {s}
                </span>
              ))}
            </div>
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[#3B82F6] transition-colors hover:text-[#2563EB]"
            >
              <ExternalLink size={18} /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
