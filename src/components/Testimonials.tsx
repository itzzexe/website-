import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Metazest didn't just build us a website. They built us a universe.",
      author: "CEO, Global Retail Brand",
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      text: "Every click feels alive. Every scroll feels like a journey.",
      author: "Founder, FinTech Startup",
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      text: "This is not design. This is digital alchemy.",
      author: "Creative Director, Lifestyle Brand",
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Voices From the Void
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-slate-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-500 hover:scale-105 fade-in-up"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Quote className="text-white" size={24} />
              </div>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                "{testimonial.text}"
              </p>
              
              <p className="text-violet-400 font-medium">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;