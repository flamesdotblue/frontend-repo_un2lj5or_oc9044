import React from 'react';
import { motion } from 'framer-motion';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'MySQL'];

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-[#1E293B] sm:text-4xl">About</h2>
          <p className="mt-4 text-slate-600">
            I’m Sam, a passionate tech enthusiast exploring AI, data, and web development. I love
            crafting seamless experiences and turning ideas into clean, scalable products.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-700 shadow-sm"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-80px' }}
          className="relative h-64 w-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-[#3B82F6]/10 via-white to-[#10B981]/10 shadow-sm"
        >
          <div className="absolute right-6 top-6 text-sm font-medium text-slate-600">
            Craft your logic. Shape your vision.
          </div>
          <div className="absolute bottom-6 left-6 text-xs text-slate-500">
            Building with care, curiosity, and clean code.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
