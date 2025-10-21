'use client';

export default function Services() {
  const services = [
    {
      title: 'Software Solutions',
      description: 'Custom-built applications tailored to your business needs with AI-assisted development and optimization.',
      icon: '🚀',
      features: ['Web Applications', 'Mobile Apps', 'Cloud Integration', 'API Development']
    },
    {
      title: 'Outsourcing & Staffing',
      description: 'Access a talented pool of developers and specialists for your projects, with flexible engagement models.',
      icon: '👥',
      features: ['Dedicated Teams', 'Project-Based', 'Staff Augmentation', 'Flexible Scaling']
    },
    {
      title: 'Managed Services',
      description: 'End-to-end management of your technical infrastructure with 24/7 monitoring and support.',
      icon: '⚙️',
      features: ['Infrastructure Management', 'Security & Compliance', '24/7 Support', 'Performance Monitoring']
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions powered by AI to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300">
                    <span className="text-blue-400">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
