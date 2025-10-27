import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-[#1E293B] sm:text-4xl">Contact</h2>
        <p className="mt-3 text-slate-600">Have a project or idea? Let’s build it together.</p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#3B82F6]"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#3B82F6]"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows="5"
              className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#3B82F6]"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#10B981] px-5 py-3 font-medium text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#059669]"
            >
              <Send size={18} /> Send Message
            </button>
          </div>
        </form>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#1E293B]">Connect</h3>
          <p className="mt-2 text-slate-600">Find me on social platforms:</p>
          <div className="mt-4 flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-[#3B82F6]">
              <Github className="transition group-hover:text-[#3B82F6]" size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-[#3B82F6]">
              <Linkedin className="transition group-hover:text-[#3B82F6]" size={18} /> LinkedIn
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-[#3B82F6]">
              <Instagram className="transition group-hover:text-[#3B82F6]" size={18} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
