import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ArrowRight,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  Send,
  Loader2
} from 'lucide-react';
import { submitContact, ContactPayload } from '../lib/leadsService';

const NEEDS_OPTIONS = [
  'Branding',
  'E-Commerce',
  'Website',
  'Software',
  'Mobile App',
  'SaaS',
  'Digital Marketing',
  'AI & Automation',
  'Other'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  
  // Status states
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  // Handler for custom link dispatch
  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear validation error on change
    if (validationErrors[e.target.name]) {
      setValidationErrors({
        ...validationErrors,
        [e.target.name]: ''
      });
    }
  };

  const toggleNeed = (need: string) => {
    if (selectedNeeds.includes(need)) {
      setSelectedNeeds(selectedNeeds.filter((n) => n !== need));
    } else {
      setSelectedNeeds([...selectedNeeds, need]);
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.businessName.trim()) errors.businessName = 'Business Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone / WhatsApp is required';
    if (selectedNeeds.length === 0) {
      errors.needs = 'Please select at least one requirement';
    }
    if (!formData.message.trim()) errors.message = 'Please describe your project';
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    
    if (!validateForm()) return;
    
    setIsLoading(true);

    const payload: ContactPayload = {
      fullName: formData.fullName,
      businessName: formData.businessName,
      email: formData.email,
      phone: formData.phone,
      needs: selectedNeeds,
      budget: formData.budget || undefined,
      message: formData.message
    };

    const result = await submitContact(payload);
    
    setIsLoading(false);
    if (result.success) {
      setSuccess(true);
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        phone: '',
        budget: '',
        message: ''
      });
      setSelectedNeeds([]);
    } else {
      setErrorMsg(result.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-[var(--color-background)] min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="relative pt-12 pb-12 border-b border-slate-100 overflow-hidden text-left">
        <div className="absolute inset-0 bg-radial-gradient(circle_at_top,rgba(8,102,198,0.02)_0%,transparent_60%) pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-6 font-mono">
            <button onClick={() => navigateTo('/')} className="hover:text-primary transition-colors cursor-pointer">HOME</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary uppercase">CONTACT</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest text-primary bg-primary/5 uppercase font-mono border border-primary/10">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-primary" />
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102033] tracking-tight">
              Let's Talk About What You Want to Build.
            </h1>
            <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
              Tell us where you are today and where you want to go. We'll help you find the right path to design, build, and scale your digital pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* FORM & DETAILS SECTION */}
      <section className="py-12 sm:py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-[#102033] tracking-tight">
                  Why Partner with Pure Path?
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                  We integrate multiple technical disciplines under one unified partner ecosystem, ensuring brand, data, and user experience flow beautifully without vendor friction.
                </p>
              </div>

              {/* Core Checklist */}
              <div className="space-y-3.5">
                {[
                  '100% Consolidated Partner, Zero Subcontracting',
                  'Type-Safe Modular Codebases (TypeScript)',
                  'Pristine Desktop & Mobile Layout Aesthetics',
                  'Proactive Maintenance & Optimization Channels'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#102033] font-bold">
                    <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              {/* WhatsApp direct block */}
              <div className="p-6 bg-white border border-slate-150 rounded-2xl space-y-4 shadow-xs">
                <div>
                  <h4 className="text-sm font-extrabold text-[#102033]">Prefer Direct Messaging?</h4>
                  <p className="text-xs text-[var(--color-muted)] mt-1">Connect with our solutions engineers instantly on WhatsApp:</p>
                </div>
                <a
                  href="https://wa.me/1234567890?text=Hi,%20I'm%20interested%20in%20discussing%20a%20project%20with%20Pure%20Path%20Infotech."
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200/50 text-emerald-600 text-xs font-bold transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-500" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Form Card Column */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-150 rounded-[32px] p-6 sm:p-10 shadow-xs">
                
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-extrabold text-[#102033]">Inquiry Received Successfully!</h3>
                      <p className="text-xs sm:text-sm text-[var(--color-muted)] max-w-sm mx-auto leading-relaxed">
                        Thank you for sharing your project details. Our solutions team will review your requirements and respond within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => setSuccess(false)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline font-mono uppercase cursor-pointer"
                    >
                      Send another message
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {errorMsg && (
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-xs">
                        <AlertTriangle className="w-5 h-5 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Full Name & Business Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label htmlFor="fullName" className="text-xs font-extrabold text-[#102033] tracking-wide font-mono uppercase block">Full Name</label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                            validationErrors.fullName ? 'border-red-400 focus:border-red-400' : 'border-slate-150 focus:border-primary focus:bg-white'
                          }`}
                        />
                        {validationErrors.fullName && <p className="text-[10px] text-red-500 font-bold">{validationErrors.fullName}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="businessName" className="text-xs font-extrabold text-[#102033] tracking-wide font-mono uppercase block">Business Name</label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          placeholder="Company name"
                          className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                            validationErrors.businessName ? 'border-red-400 focus:border-red-400' : 'border-slate-150 focus:border-primary focus:bg-white'
                          }`}
                        />
                        {validationErrors.businessName && <p className="text-[10px] text-red-500 font-bold">{validationErrors.businessName}</p>}
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-extrabold text-[#102033] tracking-wide font-mono uppercase block">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@company.com"
                          className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                            validationErrors.email ? 'border-red-400 focus:border-red-400' : 'border-slate-150 focus:border-primary focus:bg-white'
                          }`}
                        />
                        {validationErrors.email && <p className="text-[10px] text-red-500 font-bold">{validationErrors.email}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-extrabold text-[#102033] tracking-wide font-mono uppercase block">Phone / WhatsApp</label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone number"
                          className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                            validationErrors.phone ? 'border-red-400 focus:border-red-400' : 'border-slate-150 focus:border-primary focus:bg-white'
                          }`}
                        />
                        {validationErrors.phone && <p className="text-[10px] text-red-500 font-bold">{validationErrors.phone}</p>}
                      </div>
                    </div>

                    {/* What do you need help with? */}
                    <div className="space-y-2">
                      <label className="text-xs font-extrabold text-[#102033] tracking-wide font-mono uppercase block">What do you need help with?</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {NEEDS_OPTIONS.map((opt) => {
                          const isSelected = selectedNeeds.includes(opt);
                          return (
                            <button
                              type="button"
                              key={opt}
                              onClick={() => {
                                toggleNeed(opt);
                                if (validationErrors.needs) {
                                  setValidationErrors({ ...validationErrors, needs: '' });
                                }
                              }}
                              className={`px-3 py-2 text-left rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-primary/5 border-primary text-primary shadow-xs'
                                  : 'bg-slate-50/40 border-slate-150 text-[var(--color-muted)] hover:bg-slate-50'
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                      {validationErrors.needs && <p className="text-[10px] text-red-500 font-bold">{validationErrors.needs}</p>}
                    </div>

                    {/* Project Budget & Description */}
                    <div className="space-y-1.5">
                      <label htmlFor="budget" className="text-xs font-extrabold text-[#102033] tracking-wide font-mono uppercase block">Project Budget (Optional)</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-150 bg-slate-50/50 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under $5k">Under $5k</option>
                        <option value="$5k - $10k">$5k - $10k</option>
                        <option value="$10k - $25k">$10k - $25k</option>
                        <option value="$25k - $50k">$25k - $50k</option>
                        <option value="$50k+">$50k+</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-extrabold text-[#102033] tracking-wide font-mono uppercase block">Tell us about your project</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Briefly describe your objectives, timelines, and requirements..."
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none ${
                          validationErrors.message ? 'border-red-400 focus:border-red-400' : 'border-slate-150 focus:border-primary focus:bg-white'
                        }`}
                      />
                      {validationErrors.message && <p className="text-[10px] text-red-500 font-bold">{validationErrors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          Sending Inquiry...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-white" />
                          Send Inquiry
                        </>
                      )}
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
