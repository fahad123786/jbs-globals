import ServicesGrid from './ServicesGrid'

const DEV_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDY4iiRI-GiiWBKfOJobT8cFHAX2n2KTH1zCSUOI_TJ1DTAe6i2hudyeXSxg5nK_Y5F2IHk7qky5lhRJBVOvtgH5GxOTqQtP9wEoHVXAL4scydy7vknXfwG0GN2rkg-wZP2DzMbEOqBq-fh3P9ge6H8BpO1L7gWow2hzCTnV7XnLgdm-RPgBaiM0iGbg5B0MjythiIiOeZqZyvJ15Orh8cYaSr83-mnggofmT_J3CIpuEB9_l7XZUtDPx4MSYgjCQct4H5fVMaVP2g'

export default function Services() {
  return (
    <>
      <ServicesGrid />

      <section className="bg-surface-container-low py-section-gap">
        <div className="max-w-container-max mx-auto px-baseline md:px-gutter">
          <div className="text-center mb-16 reveal">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
              Our Expertise
            </span>

            <h2 className="font-headline-md text-headline-md text-navy-deep">
              Comprehensive Digital Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 reveal">

          {/* Web Development */}
          <div className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary-container/10 rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary">code</span>
            </div>

            <h3 className="font-headline-md text-[22px] text-navy-deep mb-4">Web Development</h3>

            <p className="text-on-surface-variant font-body-md">
              We build responsive, scalable, and modern websites using the latest technologies.
            </p>
          </div>

          {/* App Development */}
          <div className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary-container/10 rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary">smartphone</span>
            </div>

            <h3 className="font-headline-md text-[22px] text-navy-deep mb-4">Mobile App Development</h3>

            <p className="text-on-surface-variant font-body-md">
              Android and iOS applications designed for performance, security, and user experience.
            </p>
          </div>

          {/* UI UX */}
          <div className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary-container/10 rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary">design_services</span>
            </div>

            <h3 className="font-headline-md text-[22px] text-navy-deep mb-4">UI / UX Design</h3>

            <p className="text-on-surface-variant font-body-md">
              Clean and intuitive designs that improve user engagement and brand identity.
            </p>
          </div>

          {/* Digital Marketing */}
          <div className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary-container/10 rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary">campaign</span>
            </div>

            <h3 className="font-headline-md text-[22px] text-navy-deep mb-4">Digital Marketing</h3>

            <p className="text-on-surface-variant font-body-md">
              SEO, social media marketing, and paid advertising strategies to grow your business.
            </p>
          </div>

          {/* Graphic Design */}
          <div className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary-container/10 rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary">palette</span>
            </div>

            <h3 className="font-headline-md text-[22px] text-navy-deep mb-4">Graphic Design</h3>

            <p className="text-on-surface-variant font-body-md">
              Professional branding, logos, banners, and social media creatives for businesses.
            </p>
          </div>

          {/* SEO */}
          <div className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary-container/10 rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary">search</span>
            </div>

            <h3 className="font-headline-md text-[22px] text-navy-deep mb-4">SEO Optimization</h3>

            <p className="text-on-surface-variant font-body-md">
              Improve website rankings and visibility with advanced SEO optimization techniques.
            </p>
          </div>

          {/* Cloud & Hosting Services */}
          <div className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary-container/10 rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary">cloud</span>
            </div>

            <h3 className="font-headline-md text-[22px] text-navy-deep mb-4">Cloud & Hosting Services</h3>

            <p className="text-on-surface-variant font-body-md">
              Reliable website hosting, cloud deployments, server management, and domain setup.
            </p>
          </div>

          {/* Maintenance & Support */}
          <div className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary-container/10 rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary">support_agent</span>
            </div>

            <h3 className="font-headline-md text-[22px] text-navy-deep mb-4">Maintenance & Support</h3>

            <p className="text-on-surface-variant font-body-md">
              Ongoing website maintenance, bug fixes, technical support, and security updates.
            </p>
          </div>

          {/* AI & Automation Services */}
          <div className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary-container/10 rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary">auto_fix_high</span>
            </div>

            <h3 className="font-headline-md text-[22px] text-navy-deep mb-4">AI & Automation Services</h3>

            <p className="text-on-surface-variant font-body-md">
              AI chatbots, automation systems, data analysis solutions, and ML integration.
            </p>
          </div>

          {/* Software Development */}
          <div className="md:col-span-3 glass-card p-10 rounded-xl flex flex-col md:flex-row items-center gap-10 group hover:-translate-y-1 transition-all duration-300">
            <div className="flex-1">
              <div className="w-12 h-12 bg-secondary-container/10 rounded flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">terminal</span>
              </div>

              <h3 className="font-headline-md text-[30px] text-navy-deep mb-4">Custom Software Solutions</h3>

              <p className="text-on-surface-variant font-body-lg mb-6">
                We create enterprise-grade software, management systems, SaaS platforms, and custom digital solutions tailored to your business needs.
              </p>

              <button className="bg-navy-deep text-white px-6 py-3 rounded-lg font-bold hover:bg-secondary transition-colors">Get Started</button>
            </div>

            <div className="flex-1 w-full h-full min-h-[250px] bg-navy-deep/5 rounded-lg overflow-hidden border border-glass-stroke">
              <img src={DEV_IMG} alt="Software Development" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}