import { useState } from 'react';
import { Brain, Sparkles, Zap, ArrowRight } from 'lucide-react';
import Impressum from './pages/Impressum';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  if (currentPage === 'impressum') {
    return <Impressum onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/Gemini_Generated_Image_w24dy4w24dy4w24d.png"
              alt="Dr. Code AI"
              className="h-10 w-10"
            />
            <span className="text-xl font-semibold tracking-tight">dr-code.ai</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="text-gray-600 hover:text-black transition-colors">About</a>
            <a href="#services" className="text-gray-600 hover:text-black transition-colors">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                Building the Future<br />with AI
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                We harness the latest artificial intelligence technologies to create
                innovative solutions that drive your business forward.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/Gemini_Generated_Image_w24dy4w24dy4w24d.png"
                alt="Dr. Code AI"
                className="w-64 h-64 md:w-80 md:h-80 object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At dr-code.ai, we specialize in leveraging cutting-edge artificial intelligence
              to solve complex challenges. Our expertise spans the latest AI technologies,
              enabling us to deliver intelligent solutions tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center mb-16">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 rounded-2xl hover:border-gray-400 transition-all group">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom AI solutions built with the latest machine learning frameworks and technologies.
              </p>
            </div>

            <div className="p-8 border border-gray-200 rounded-2xl hover:border-gray-400 transition-all group">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Cutting-edge solutions that push the boundaries of what's possible with AI.
              </p>
            </div>

            <div className="p-8 border border-gray-200 rounded-2xl hover:border-gray-400 transition-all group">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Performance</h3>
              <p className="text-gray-600 leading-relaxed">
                High-performance AI systems designed to scale with your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold tracking-tight">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with AI technology.
          </p>
          <div className="pt-6">
            <a
              href="mailto:contact@dr-code.ai"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p>&copy; 2026 dr-code.ai. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <button onClick={() => setCurrentPage('impressum')} className="text-gray-500 hover:text-black transition-colors">Impressum</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
