import { useState, useEffect } from 'react';
import { Brain, Sparkles, Zap, ArrowRight, Smartphone } from 'lucide-react';
import Impressum from './pages/Impressum';
import StyleChatAI from './pages/StyleChatAI';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DeleteAccount from './pages/DeleteAccount';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);

    if (path === '/privacy') {
      setCurrentPage('privacy');
    } else if (path === '/impressum') {
      setCurrentPage('impressum');
    } else if (path === '/delete-account' || path === '/deleteaccount') {
      setCurrentPage('deleteaccount');
    } else if (path === '/stylechatai' || path === '/style-chat-ai' || path === '/app/stylechatai') {
      setCurrentPage('stylechatai');
    } else if (searchParams.get('page') === 'stylechatai') {
      setCurrentPage('stylechatai');
    }
  }, []);

  useEffect(() => {
    if (currentPage === 'privacy') {
      window.history.pushState({}, '', '/privacy');
    } else if (currentPage === 'impressum') {
      window.history.pushState({}, '', '/impressum');
    } else if (currentPage === 'deleteaccount') {
      window.history.pushState({}, '', '/delete-account');
    } else if (currentPage === 'stylechatai') {
      window.history.pushState({}, '', '/stylechatai');
    } else {
      window.history.pushState({}, '', '/');
    }
  }, [currentPage]);

  if (currentPage === 'impressum') {
    return <Impressum onBack={() => setCurrentPage('home')} />;
  }
  if (currentPage === 'stylechatai') {
    return <StyleChatAI onBack={() => setCurrentPage('home')} />;
  }
  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
  }
  if (currentPage === 'deleteaccount') {
    return <DeleteAccount onBack={() => setCurrentPage('home')} />;
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
            <a href="#portfolio" className="text-gray-600 hover:text-black transition-colors">Portfolio</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                Building the<br />Future with AI
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                We build innovative apps and tools powered by artificial intelligence.
                From smart assistants to creative solutions, we love exploring what AI can do.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all group"
              >
                Get in Touch
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
              We're passionate about AI and building great experiences. We create
              apps that make life easier, more fun, and more creative. Whether it's helping
              you find your style or solving everyday problems, we're here to experiment
              and innovate.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center mb-16">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 rounded-2xl hover:border-gray-400 transition-all group">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Apps</h3>
              <p className="text-gray-600 leading-relaxed">
                Building intelligent applications that understand and adapt to what you need.
              </p>
            </div>

            <div className="p-8 border border-gray-200 rounded-2xl hover:border-gray-400 transition-all group">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Creative Ideas</h3>
              <p className="text-gray-600 leading-relaxed">
                Exploring new possibilities and turning wild ideas into real products.
              </p>
            </div>

            <div className="p-8 border border-gray-200 rounded-2xl hover:border-gray-400 transition-all group">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fast & Fun</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating experiences that are quick, smooth, and enjoyable to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center mb-4">Our Apps</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Innovative applications powered by artificial intelligence
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              onClick={() => setCurrentPage('stylechatai')}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-400 transition-all cursor-pointer hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/applogo.png"
                  alt="Style Chat AI"
                  className="w-16 h-16 rounded-2xl shadow-md group-hover:scale-105 transition-transform"
                />
                <div>
                  <h3 className="text-xl font-semibold">Style Chat AI</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Smartphone className="w-4 h-4" />
                    <span>Android</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Finding your next-level style is as easy as a chat. AI-powered fashion recommendations tailored to your unique taste.
              </p>
              <div className="flex items-center text-sm font-medium text-black group-hover:gap-2 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold tracking-tight">Let's Chat</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have an idea? Want to collaborate? Just want to say hi? We'd love to hear from you.
          </p>
          <div className="pt-6">
            <a
              href="mailto:contact@dr-code.ai"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-medium"
            >
              Get in Touch
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
