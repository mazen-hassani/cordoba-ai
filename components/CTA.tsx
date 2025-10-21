'use client';

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="section-title mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Join hundreds of companies leveraging AI-powered solutions with Cordoba AI. Let's discuss how we can help you achieve your goals.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="btn-primary">
            Schedule a Consultation
          </button>
          <button className="btn-secondary">
            View Case Studies
          </button>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-gray-400 mb-2">Email</p>
            <a href="mailto:hello@cordoba-ai.com" className="text-blue-400 hover:text-blue-300">
              hello@cordoba-ai.com
            </a>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Phone</p>
            <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300">
              +1 (234) 567-890
            </a>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Location</p>
            <p className="text-blue-400">
              Global Remote Team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
