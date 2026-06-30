const ABOUT_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDHrAs2FiB2gDpYuxKDAGdgqxa4c9UGi_qzezEg0VT2kyv46m5x7vdB1UZvk_Q8UbbJLW6vfzoamYS15ATeOq2J5lFQzZtyrFzeNXIC-4Yv-iBtcXBJPqBqA3ilo6G7S0inQCkcx7jA1FCMSufOOq65DHog6RHELTOzZwSl6mgU62bslmrmBc5YhugaRXdZucFglc43EuDupEYLtZw72TeXb435fJB4iuv3HzyKCqsvpCrQaoqc-zALGGPgTcinEWx4MY8gigunnbo'

export default function About() {
  return (
    <section className="py-section-gap max-w-container-max mx-auto px-baseline md:px-gutter">
      <div className="grid md:grid-cols-2 gap-gutter items-center reveal">
        <div>
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
            Our Identity
          </span>
          <h2 className="font-headline-md text-headline-md text-navy-deep mb-6">
            Bridging the Gap Between Talent and Demand
          </h2>
          <div className="space-y-4 font-body-lg text-body-lg text-on-surface-variant">
            <p>
              JBS Globals is a fast-growing, result-oriented BPO service provider. We specialize in
              transforming how modern enterprises manage their operations, customer relations, and
              digital footprint.
            </p>
            <p>
              By leveraging a global network of specialized professionals and cutting-edge digital
              frameworks, we ensure your business doesn't just grow—it scales with surgical
              precision and efficiency.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <div className="text-secondary font-display-lg text-headline-md font-bold">150+</div>
              <div className="text-slate-gray font-label-caps text-label-caps">Active Clients</div>
            </div>
            <div>
              <div className="text-secondary font-display-lg text-headline-md font-bold">24/7</div>
              <div className="text-slate-gray font-label-caps text-label-caps">Global Support</div>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <img
            src={ABOUT_IMG}
            alt="A diverse team of professional corporate executives collaborating around a glass conference table"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
