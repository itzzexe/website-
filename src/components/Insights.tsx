import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const Insights: React.FC = () => {
  const articles = [
    {
      title: 'Flat Design Is Dead: Long Live Dimensions',
      excerpt: 'Why static visuals no longer resonate with modern audiences.',
      date: 'January 15, 2025',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-violet-600 to-purple-700'
    },
    {
      title: 'AI as the New Co-Designer',
      excerpt: 'The evolving role of artificial intelligence in shaping creativity.',
      date: 'January 10, 2025',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-cyan-600 to-blue-700'
    },
    {
      title: 'The Future of Interactive Worlds',
      excerpt: 'How immersive experiences are redefining digital engagement.',
      date: 'January 5, 2025',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-pink-600 to-rose-700'
    }
  ];

  return (
    <section id="insights" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Future Visions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            At Metazest, we don't just follow trends — we anticipate them. Our insights explore the future of design, technology, and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={article.title}
              className="group bg-slate-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all duration-500 hover:scale-105 fade-in-up"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-20 transition-opacity duration-500 group-hover:opacity-40`}></div>
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={14} />
                  {article.date}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-violet-300 transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {article.excerpt}
                </p>
                
                <button className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-all duration-300 group-hover:gap-3">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;