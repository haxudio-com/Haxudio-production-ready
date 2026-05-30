import { motion } from 'motion/react';
import { Eye, Target, Users, Award, Globe, Zap } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const stats = [
  { label: 'Projects Completed', value: '80+' },
  { label: 'Global Clients', value: '50+' },
  { label: 'Team Members', value: '30+' },
  { label: 'Years of Experience', value: '2+' },
];
const team = [
  { name: 'Malik Abdul Ghafoor', role: 'CEO', initials: 'MG', bio: 'Visionary leader driving digital innovation in Pakistan.', image: '/CEO.avif' },
  { name: 'Syed Ali', role: 'CTO', initials: 'SA', bio: 'Tech strategist specializing in scalable cloud architectures.', image: '/CTO.avif' },
  { name: 'Mian Dad', role: 'CMO', initials: 'MD', bio: 'Creative growth expert with a passion for global brand scale.', image: '/CMO.avif' },
  { name: 'Farooq', role: 'CPO', initials: 'F', bio: 'Product perfectionist ensuring every pixel drives value.', image: '/CPO.avif' },
];

export default function About() {
  return (
    <div className="bg-bg-main">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] -z-10 rounded-full" />
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-text-h">About Haxudio</h1>
            <p className="text-text-m text-xl max-w-2xl mx-auto">
              We are a passionate team of digital creators building the future, one project at a time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24 bg-bg-section border-y border-border-s px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="text-center p-6 md:p-8 bg-bg-main rounded-3xl border border-border-s shadow-sm">
                <span className="block text-3xl md:text-6xl font-bold gradient-text mb-2 tracking-tight">{stat.value}</span>
                <span className="text-text-muted text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">{stat.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 px-4 bg-bg-main">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <div className="bg-bg-card p-12 rounded-[2rem] border-t-4 border-primary h-full shadow-sm">
              <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-8">
                <Eye className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-text-h">Our Vision</h2>
              <p className="text-text-m text-lg leading-relaxed">
                To become Pakistan's most trusted digital agency by delivering world-class creative and technical solutions that empower businesses globally.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-bg-card p-12 rounded-[2rem] border-t-4 border-accent h-full shadow-sm">
              <div className="p-4 bg-accent/10 rounded-2xl w-fit mb-8">
                <Target className="text-accent" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-text-h">Our Mission</h2>
              <p className="text-text-m text-lg leading-relaxed">
                To provide innovative, affordable, and high-quality digital services — from web development to digital marketing — helping brands grow in the modern digital landscape.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-bg-section border-y border-border-s px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-text-h">Our Core Values</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: 'Innovation', desc: 'We leverage the latest technologies to stay ahead of the curve.' },
              { icon: Award, title: 'Quality', desc: 'Excellence is not an act, but a habit for our entire team.' },
              { icon: Globe, title: 'Trust', desc: 'Building long-term partnerships through transparency and results.' }
            ].map((value, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} className="text-center group">
                <div className="mx-auto p-6 bg-bg-main rounded-full w-fit mb-8 border border-border-s group-hover:scale-110 transition-transform shadow-sm">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-text-h">{value.title}</h3>
                <p className="text-text-m leading-relaxed">{value.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-4 bg-bg-main">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 italic text-text-h">The Leadership Team</h2>
            <p className="text-text-m max-w-2xl mx-auto text-lg underline decoration-primary/20 underline-offset-8">The brilliant minds behind Haxudio's success</p>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {team.map((member, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="text-center group">
                  <div className="aspect-square rounded-full flex items-center justify-center text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8 group-hover:scale-105 transition-all duration-500 shadow-xl shadow-primary/10 relative overflow-hidden bg-bg-main border-2 border-border-s cursor-pointer">
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
                            const span = document.createElement('span');
                            span.className = "relative z-10";
                            span.innerText = member.initials;
                            fallback.appendChild(span);
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full gradient-bg flex items-center justify-center">
                        <span className="relative z-10">{member.initials}</span>
                      </div>
                    )}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-text-h">{member.name}</h4>
                  <span className="block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest w-fit mx-auto mb-4 border border-primary/20">
                    {member.role}
                  </span>
                  <p className="text-text-muted text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                    {member.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
