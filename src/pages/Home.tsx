import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Code2, Palette, TrendingUp, CheckCircle2, Quote } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';
import { getSupabase } from '../lib/supabase';
import ScrollReveal from '../components/ScrollReveal';

const stats = [
  { label: 'Years of Experience', value: '2+' },
  { label: 'Global Clients', value: '50+' },
  { label: 'Team Members', value: '30+' },
  { label: 'Projects Completed', value: '80+' },
];

const services = [
  {
    title: 'Web Development',
    icon: Code2,
    desc: 'Custom websites and web apps built with modern technologies',
  },
  {
    title: 'Creative Design',
    icon: Palette,
    desc: 'Brand identity, UI/UX, and graphic design that speaks your brand',
  },
  {
    title: 'Digital Growth',
    icon: TrendingUp,
    desc: 'SEO, social media & digital marketing to grow your online presence',
  },
];

const projects = [
  {
    name: 'E-Commerce Platform',
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80'
  },
  {
    name: 'Brand Identity Kit',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&q=80'
  },
  {
    name: 'Social Media Campaign',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80'
  },
];

const testimonials = [
  {
    text: "Haxudio delivered our website in record time. Exceptional quality and communication.",
    author: "James K.",
    location: "UK"
  },
  {
    text: "Their social media team tripled our engagement in just 2 months. Highly recommended!",
    author: "Sarah L.",
    location: "Canada"
  },
  {
    text: "Best digital agency we've worked with. Professional, creative, and reliable.",
    author: "Ahmed R.",
    location: "UAE"
  },
];

const team = [
  { name: 'Malik Abdul Ghafoor', role: 'CEO', initials: 'MG', image: '/CEO.avif' },
  { name: 'Syed Ali', role: 'CTO', initials: 'SA', image: '/CTO.avif' },
  { name: 'Mian Dad', role: 'CMO', initials: 'MD', image: '/CMO.avif' },
  { name: 'Farooq', role: 'CPO', initials: 'F', image: '/CPO.avif' },
];

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="overflow-hidden text-text-h">
      <Toaster position="bottom-right" />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-2 sm:px-4 bg-bg-main">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-bg-card border border-border-s px-4 py-2 rounded-full mb-8 backdrop-blur-sm shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold tracking-wide text-text-m uppercase">Pakistan's Growing Digital Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.1] text-text-h"
          >
            We Build <span className="gradient-text tracking-tight">Digital Experiences</span> That Drive Results
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-text-m text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Haxudio transforms your vision into stunning digital products — from web development to full-scale digital marketing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/contact" className="gradient-bg text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/20">
              Start Your Project →
            </Link>
            <Link to="/projects" className="bg-bg-main border border-border-s text-text-h px-8 py-4 rounded-full font-bold hover:bg-bg-section transition-all duration-300">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-bg-section border-y border-border-s">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="text-center p-6 md:p-8 border border-border-s rounded-3xl bg-bg-main shadow-sm hover:shadow-md transition-all">
                  <span className="block text-3xl md:text-6xl font-bold gradient-text mb-2 tracking-tight">{stat.value}</span>
                  <span className="text-text-m text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 px-4 bg-bg-main">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 italic text-text-h">What We Do</h2>
            <p className="text-text-m max-w-2xl mx-auto text-lg underline decoration-primary/20 underline-offset-8">We offer end-to-end digital solutions tailored for your business growth</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="p-8 md:p-10 rounded-3xl bg-bg-card border border-border-s hover:border-primary/30 transition-all duration-300 group h-full shadow-sm">
                  <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform">
                    <service.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-text-h">{service.title}</h3>
                  <p className="text-text-m text-sm md:text-base leading-relaxed mb-8">{service.desc}</p>
                  <Link to="/services" className="text-primary font-bold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                    <span>Learn More</span>
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/services" className="inline-flex items-center space-x-2 text-text-h hover:text-primary transition-colors font-bold text-lg">
              <span>Explore All Services</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-32 px-4 bg-bg-section border-y border-border-s">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 italic text-text-h">Our Work Speaks</h2>
            <p className="text-text-m max-w-2xl mx-auto text-lg underline decoration-primary/20 underline-offset-8">A glimpse at what we've built for our global clients</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Link to="/projects" className="block group bg-bg-main rounded-[2.5rem] border border-border-s overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      loading="lazy"
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">{project.category}</span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors text-text-h">{project.name}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link to="/projects" className="gradient-bg text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-primary/40 hover:scale-105 transition-all duration-300">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 bg-bg-main relative overflow-hidden">
        <div className="absolute -right-20 top-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-h">Feedback From Global Partners</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="p-8 md:p-10 rounded-3xl bg-bg-card border border-border-s hover:border-primary/30 transition-all duration-300 relative shadow-sm group">
                  <Quote className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors" size={60} />
                  <p className="text-text-h text-base md:text-lg mb-8 italic relative z-10 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="h-10 md:h-12 w-10 md:w-12 rounded-full gradient-bg flex items-center justify-center font-bold text-base md:text-lg text-white shadow-lg shadow-primary/20">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base text-text-h">{t.author}</h4>
                      <p className="text-text-muted text-[10px] font-bold uppercase tracking-[0.2em]">{t.location}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-4 bg-bg-section border-y border-border-s">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 italic text-text-h">Meet The Team</h2>
            <p className="text-text-m max-w-2xl mx-auto text-lg underline decoration-primary/20 underline-offset-8">The brilliant minds behind Haxudio</p>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {team.map((member, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="text-center group">
                  <div className="aspect-square rounded-full flex items-center justify-center text-2xl md:text-4xl font-bold text-white mb-6 group-hover:scale-105 transition-all duration-500 shadow-xl shadow-primary/10 bg-bg-main overflow-hidden border-2 border-border-s cursor-pointer">
                    {member.image ? (
                      <img
                        loading="lazy"
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            const fallback = document.createElement('div');
                            fallback.className = "w-full h-full gradient-bg flex items-center justify-center";
                            fallback.innerText = member.initials;
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full gradient-bg flex items-center justify-center">
                        {member.initials}
                      </div>
                    )}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-text-h">{member.name}</h4>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest border border-primary/20">
                    {member.role}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-bg-section border-t border-border-s relative overflow-hidden" id="home-contact">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-text-h">Ready to <span className="gradient-text">Hax</span> Your Success?</h2>
            <p className="text-text-m text-xl mb-12 max-w-2xl mx-auto">Let's build something amazing together. Get in touch for a free consultation.</p>

            <form
              className="max-w-xl mx-auto"
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                const project = (form.elements.namedItem('project') as HTMLTextAreaElement).value;

                try {
                  const supabase = getSupabase();
                  const { error } = await supabase
                    .from('contact_submissions')
                    .insert([{ full_name: name, email: email, project_details: project }]);

                  if (error) throw error;
                  toast.success("Message sent! We'll get back to you within 24 hours.");
                  form.reset();
                } catch (err) {
                  toast.error("Something went wrong. Please try again.");
                } finally {
                  setLoading(false);
                }
              }}
            >
              <div className="grid grid-cols-1 gap-4 mb-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="bg-bg-main border border-border-s text-text-h rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all placeholder:text-text-muted"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="bg-bg-main border border-border-s text-text-h rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all placeholder:text-text-muted"
                  required
                />
                <textarea
                  name="project"
                  placeholder="Project Detail"
                  rows={4}
                  className="bg-bg-main border border-border-s text-text-h rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all placeholder:text-text-muted resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full gradient-bg text-white py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center disabled:opacity-50 shadow-xl shadow-primary/20"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Start Your Journey →"
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
