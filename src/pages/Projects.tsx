import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import ScrollReveal from '../components/ScrollReveal';

const categories = [
  'All',
  'Web Development',
  'Graphic Design',
  'Video Editing',
  'Social Media',
  'Digital Marketing'
];

const projects = [
  {
    name: "TechVibe E-Commerce",
    category: "Web Development",
    desc: "Full-stack e-commerce platform with payment integration and admin dashboard",
    tags: ["Next.js", "Supabase", "Stripe"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80"
  },
  {
    name: "Bloom Brand Identity",
    category: "Graphic Design",
    desc: "Complete brand identity package including logo, color palette, and brand guidelines",
    tags: ["Illustrator", "Branding", "Logo"],
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&q=80"
  },
  {
    name: "QuickBite Promo Reel",
    category: "Video Editing",
    desc: "30-second promotional reel for a food delivery startup's Instagram campaign",
    tags: ["Premiere Pro", "Motion Graphics"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80"
  },
  {
    name: "FitLife Social Growth",
    category: "Social Media",
    desc: "3-month social media strategy that grew follower count by 240%",
    tags: ["Instagram", "Content Strategy"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80"
  },
  {
    name: "GreenTech SEO Campaign",
    category: "Digital Marketing",
    desc: "SEO + Google Ads campaign that increased organic traffic by 180% in 4 months",
    tags: ["SEO", "Google Ads", "Analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
  },
  {
    name: "UrbanStyle Web App",
    category: "Web Development",
    desc: "Fashion brand web app with AR try-on feature and product recommendation engine",
    tags: ["React", "Node.js", "AI"],
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=600&q=80"
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="bg-bg-main min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 md:pt-40 pb-12 md:pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 text-text-h tracking-tight">Our <span className="gradient-text">Masterpieces</span></h1>
            <p className="text-text-m text-lg md:text-xl max-w-2xl mx-auto underline decoration-primary/20 underline-offset-8 font-medium">Explore how we've helped brands scale through design and technology.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 md:py-12 px-4 sticky top-16 md:top-16 z-40 bg-bg-main/80 backdrop-blur-xl border-y border-border-s">
        <div className="max-w-7xl mx-auto overflow-x-hidden no-scrollbar relative">
          {/* Mobile Carousel (Marquee) */}
          <div className="flex md:hidden gap-3 animate-marquee whitespace-nowrap">
            {[...categories, ...categories].map((cat, idx) => (
              <button
                key={`${cat}-${idx}`}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 whitespace-nowrap flex-shrink-0 ${activeTab === cat
                    ? 'gradient-bg text-white shadow-lg shadow-primary/30'
                    : 'bg-bg-section border border-border-s text-text-m hover:text-text-h hover:bg-bg-card'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Desktop Filter */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${activeTab === cat
                    ? 'gradient-bg text-white shadow-xl shadow-primary/30 scale-105'
                    : 'bg-bg-section border border-border-s text-text-m hover:text-text-h hover:bg-bg-card'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-24 px-4 bg-bg-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group bg-bg-card rounded-[2rem] md:rounded-[2.5rem] border border-border-s overflow-hidden flex flex-col h-full hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
                >
                  <div className="h-56 md:h-64 relative overflow-hidden">
                    <img
                      loading="lazy"
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-10 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-text-h group-hover:text-primary transition-colors tracking-tight text-balance">{project.name}</h3>
                    <p className="text-text-m text-sm mb-6 md:mb-8 leading-relaxed line-clamp-3">{project.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted bg-bg-main px-2.5 py-1.5 rounded-lg md:rounded-xl border border-border-s shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link to="/contact" className="mt-auto inline-flex items-center space-x-3 text-primary font-bold group-hover:translate-x-3 transition-transform uppercase tracking-widest text-[10px] md:text-xs">
                      <span>View Case Study</span>
                      <span className="text-xl">→</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-32">
              <p className="text-text-m text-xl font-medium italic opacity-50">No projects found in this category yet. Stay tuned!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
