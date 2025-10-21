'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">AI-Powered</span> Software Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with enterprise-grade software solutions, strategic outsourcing, and managed services powered by cutting-edge AI.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link href="#contact" className="btn-primary">
            Start Your Project
          </Link>
          <button className="btn-secondary">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-4 md:gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500+</div>
            <p className="text-gray-400">Projects Delivered</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">150+</div>
            <p className="text-gray-400">Team Members</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">95%</div>
            <p className="text-gray-400">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
