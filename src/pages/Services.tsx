import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Code2, Palette, Video, Share2, TrendingUp, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const services = [
  {
    title: 'Web Development',
    icon: Code2,
    desc: 'We build fast, responsive, and scalable websites and web applications using the latest technologies like Next.js, React, and Node.js.',
    features: ['Custom Website Design', 'E-Commerce Development', 'Web App Development', 'CMS Integration', 'Performance Optimization'],
  },
  {
    title: 'Graphic Design',
    icon: Palette,
    desc: 'We create stunning visual identities that communicate your brand\'s personality across all touchpoints.',
    features: ['Logo & Brand Identity', 'Social Media Graphics', 'Marketing Materials', 'UI/UX Design', 'Print Design'],
  },
  {
    title: 'Video Editing',
    icon: Video,
    desc: 'Professional video production and editing for brand stories, ads, reels, and corporate content.',
    features: ['Promotional Videos', 'Social Media Reels', 'Motion Graphics', 'Color Grading', 'YouTube Content'],
  },
  {
    title: 'Social Media Management',
    icon: Share2,
    desc: 'We manage and grow your social media presence with strategic content and community engagement.',
    features: ['Content Calendar', 'Post Scheduling', 'Community Management', 'Analytics Reports', 'Paid Ads Management'],
  },
  {
    title: 'Digital Marketing',
    icon: TrendingUp,
    desc: 'Data-driven digital marketing strategies to grow your brand, increase traffic, and boost conversions.',
    features: ['SEO Optimization', 'Google Ads', 'Meta Ads', 'Email Marketing', 'Conversion Rate Optimization'],
  },
];

const pricing = [
  {
    name: 'Basic',
    price: '25,000',
    badge: 'Starter',
    features: [
      { text: '1 Core Service', included: true },
      { text: 'Up to 5 Deliverables', included: true },
      { text: '7-Day Delivery', included: true },
      { text: '1 Revision Round', included: true },
      { text: 'Email Support', included: true },
      { text: 'Dedicated Manager', included: false },
      { text: 'Priority Support', included: false },
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Standard',
    price: '60,000',
    badge: 'Most Popular',
    features: [
      { text: '3 Services Bundled', included: true },
      { text: 'Up to 20 Deliverables', included: true },
      { text: '14-Day Delivery', included: true },
      { text: '3 Revision Rounds', included: true },
      { text: 'Priority Email Support', included: true },
      { text: 'Dedicated Manager', included: true },
      { text: 'Unlimited Revisions', included: false },
    ],
    cta: 'Get Started',
    popular: true
  },
  {
    name: 'Premium',
    price: '140,000',
    badge: 'Enterprise',
    features: [
      { text: 'All 5 Services', included: true },
      { text: 'Unlimited Deliverables', included: true },
      { text: '30-Day Delivery', included: true },
      { text: 'Unlimited Revisions', included: true },
      { text: '24/7 Priority Support', included: true },
      { text: 'Dedicated Account Manager', included: true },
      { text: 'Monthly Performance Reports', included: true },
    ],
    cta: 'Contact Us',
    popular: false
  },
];

export default function Services() {
  return (
    <div className="bg-bg-main">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <nav className="flex justify-center space-x-2 text-sm text-text-muted mb-6">
              <Link to="/" className="hover:text-primary transition-colors font-bold">Home</Link>
              <span>{'>'}</span>
              <span className="text-text-h font-bold">Services</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-text-h">Our Services</h1>
            <p className="text-text-m text-xl max-w-2xl mx-auto">Complete digital solutions under one roof</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-24 px-4 bg-bg-main">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="group bg-bg-card p-10 rounded-[2.5rem] border border-border-s hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 h-full flex flex-col relative overflow-hidden shadow-sm">
                  <div className="mb-8 p-4 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                    <service.icon className="text-primary" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-text-h">{service.title}</h3>
                  <p className="text-text-m mb-8 leading-relaxed text-sm">{service.desc}</p>
                  
                  <div className="mt-auto space-y-4">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-3 text-sm text-text-m">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-4 bg-bg-section border-y border-border-s">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-h">Transparent Pricing</h2>
            <p className="text-text-m max-w-2xl mx-auto text-lg underline decoration-primary/20 underline-offset-8">Choose the package that fits your business needs</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-8 md:pt-0 pb-12 md:pb-0">
            {pricing.map((plan, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} className="h-full">
                <div className={`relative h-full bg-bg-main p-8 md:p-10 rounded-[2.5rem] border ${plan.popular ? 'border-primary shadow-2xl shadow-primary/10 lg:scale-105 z-10' : 'border-border-s'} transition-all duration-500 flex flex-col shadow-sm`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-bg text-white text-[10px] font-bold px-5 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-primary/20">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <span className="text-text-muted text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">{plan.badge}</span>
                    <h3 className="text-3xl font-bold mb-4 text-text-h">{plan.name}</h3>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-bold gradient-text tracking-tight">PKR {plan.price}</span>
                      <span className="text-text-muted text-sm font-medium">/project</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className={`flex items-center space-x-3 text-sm ${feature.included ? 'text-text-h font-medium' : 'text-text-muted opacity-50'}`}>
                        <div className={`shrink-0 ${feature.included ? 'text-primary' : 'text-text-muted'}`}>
                          {feature.included ? <CheckCircle2 size={18} /> : <div className="w-[18px] h-[1px] bg-current" />}
                        </div>
                        <span className={feature.included ? '' : 'line-through'}>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/contact" 
                    className={`block text-center py-4 rounded-2xl font-bold transition-all duration-300 ${plan.popular ? 'gradient-bg text-white hover:scale-105 shadow-xl shadow-primary/20' : 'bg-bg-section border border-border-s text-text-h hover:bg-bg-card'}`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
