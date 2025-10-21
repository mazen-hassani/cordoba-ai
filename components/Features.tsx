'use client';

export default function Features() {
  const features = [
    {
      title: 'AI-Assisted Development',
      description: 'Leverage cutting-edge AI tools to accelerate development cycles and improve code quality.',
      icon: '🤖'
    },
    {
      title: 'Expert Team',
      description: 'Work with experienced developers, architects, and specialists across all technologies.',
      icon: '👨‍💼'
    },
    {
      title: 'Agile Methodology',
      description: 'Fast-paced iterative development with continuous feedback and optimization.',
      icon: '⚡'
    },
    {
      title: 'Scalable Solutions',
      description: 'Solutions designed to grow with your business from startup to enterprise scale.',
      icon: '📈'
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security standards and compliance certifications.',
      icon: '🔒'
    },
    {
      title: '24/7 Support',
      description: 'Dedicated support team available round the clock for your critical needs.',
      icon: '📞'
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Cordoba AI?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Industry-leading capabilities and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
