import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2 } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';
import { getSupabase } from '../lib/supabase';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    project_details: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const supabase = getSupabase();
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            full_name: formData.full_name, 
            email: formData.email, 
            project_details: formData.project_details 
          }
        ]);

      if (error) throw error;

      toast.success("Message sent! We'll get back to you within 24 hours.");
      setFormData({ full_name: '', email: '', project_details: '' });
    } catch (err: any) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-bg-main min-h-screen pt-24 md:pt-40 pb-12 md:pb-20 px-4">
      <Toaster position="bottom-right" />
      
      {/* Hero Section */}
      <section className="text-center relative overflow-hidden mb-12 md:mb-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 text-text-h">Get In Touch</h1>
            <p className="text-text-m text-lg md:text-xl max-w-2xl mx-auto underline decoration-primary/20 underline-offset-8 px-4">Have a project in mind? Let's talk and make it happen</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-2 md:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <ScrollReveal direction="left">
              <div className="p-5 md:p-16 bg-bg-card rounded-[1.5rem] md:rounded-[3.5rem] border border-border-s h-full relative overflow-hidden shadow-sm text-[18px]">
                <div className="absolute top-0 right-0 p-5 md:p-12 opacity-5">
                  <MessageSquare className="text-primary w-[100px] h-[100px] md:w-[160px] md:h-[160px]" />
                </div>
                
                <h2 className="text-xl md:text-5xl font-bold mb-6 md:mb-12 italic text-text-h">Contact Information</h2>
                
                <div className="space-y-5 md:space-y-10 relative z-10">
                  <div className="group flex items-start space-x-4 md:space-x-6">
                    <div className="p-2.5 md:p-4 bg-primary/10 rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform text-primary shadow-sm shrink-0">
                      <Mail className="w-4 h-4 md:w-6 md:h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-text-muted text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-1">Email Us</p>
                      <h4 className="text-sm md:text-2xl font-bold text-text-h group-hover:text-primary transition-colors break-all">hello@haxudio.com</h4>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4 md:space-x-6">
                    <div className="p-2.5 md:p-4 bg-primary/10 rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform text-primary shadow-sm shrink-0">
                      <Phone className="w-4 h-4 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-text-muted text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-1">Phone / WhatsApp</p>
                      <h4 className="text-sm md:text-2xl font-bold text-text-h group-hover:text-primary transition-colors">+92 318 3690179</h4>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4 md:space-x-6">
                    <div className="p-2.5 md:p-4 bg-primary/10 rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform text-primary shadow-sm shrink-0">
                      <MapPin className="w-4 h-4 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-text-muted text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-1">Our Location</p>
                      <h4 className="text-sm md:text-2xl font-bold text-text-h group-hover:text-primary transition-colors leading-relaxed">A-1 City, Brewery Road<br />Quetta, Pakistan</h4>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-16">
                  <a 
                    href="https://wa.me/923183690179" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-[#25D366] text-white px-5 md:px-10 py-3 md:py-5 rounded-xl md:rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-[#25D366]/20 text-xs md:text-xl"
                  >
                    <MessageSquare className="w-4 h-4 md:w-6 md:h-6" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <div className="p-5 md:p-16 bg-bg-card rounded-[1.5rem] md:rounded-[3.5rem] border border-border-s shadow-sm text-[18px]">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-10">
                  <div>
                    <label htmlFor="full_name" className="block text-[10px] md:text-[14px] font-bold text-text-h uppercase tracking-[0.2em] mb-2 md:mb-4 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      id="full_name"
                      required
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      placeholder="John"
                      className="w-full bg-bg-main border border-border-s rounded-xl md:rounded-2xl px-3.5 md:px-8 py-2.5 md:py-5 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-text-h placeholder:text-text-muted shadow-sm text-sm md:text-xl"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] md:text-[14px] font-bold text-text-h uppercase tracking-[0.2em] mb-2 md:mb-4 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-bg-main border border-border-s rounded-xl md:rounded-2xl px-3.5 md:px-8 py-2.5 md:py-5 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-text-h placeholder:text-text-muted shadow-sm text-sm md:text-xl"
                    />
                  </div>

                  <div>
                    <label htmlFor="project_details" className="block text-[10px] md:text-[14px] font-bold text-text-h uppercase tracking-[0.2em] mb-2 md:mb-4 ml-1">Project Details</label>
                    <textarea 
                      id="project_details..."
                      required
                      rows={4}
                      value={formData.project_details}
                      onChange={(e) => setFormData({ ...formData, project_details: e.target.value })}
                      placeholder="Tell us about your project goals and timeline..."
                      className="w-full bg-bg-main border border-border-s rounded-xl md:rounded-2xl px-3.5 md:px-8 py-2.5 md:py-5 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-text-h placeholder:text-text-muted resize-none shadow-sm text-sm md:text-xl"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full gradient-bg text-white py-3.5 md:py-6 rounded-xl md:rounded-2xl font-bold text-sm md:text-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-3 disabled:opacity-50 disabled:hover:scale-100 shadow-xl shadow-primary/30"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin w-5 h-5 md:w-7 md:h-7" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 md:w-6 md:h-6" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
