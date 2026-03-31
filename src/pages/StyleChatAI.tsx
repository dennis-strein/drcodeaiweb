import { ArrowLeft, ExternalLink } from 'lucide-react';

interface StyleChatAIProps {
  onBack: () => void;
}

export default function StyleChatAI({ onBack }: StyleChatAIProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <img
              src="/applogo.png"
              alt="Style Chat AI"
              className="w-24 h-24 mx-auto mb-6 rounded-3xl shadow-lg"
            />
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Style Chat AI
            </h1>
            <p className="text-2xl text-gray-600 max-w-2xl mx-auto mb-8">
              Finding your next-level style is as easy as a chat
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-orange-200 rounded-[3rem] blur-3xl opacity-30"></div>
              <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <img
                    src="/Screenshot_2026-03-30-13-11-42-468_com.stylechatai.debug.jpg"
                    alt="Style Chat AI Screenshot"
                    className="w-[280px] h-[600px] object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 max-w-xl space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Discover Your Perfect Style</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Style Chat AI uses advanced artificial intelligence to help you discover fashion
                  that matches your personality and preferences. Just chat with our AI stylist and
                  get personalized recommendations instantly.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700">AI-powered style recommendations tailored to you</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700">Conversational interface for easy styling advice</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700">Personalized outfit suggestions and fashion tips</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.stylechatai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all group"
                >
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-base font-semibold -mt-1">Google Play</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="https://dr-code.ai/privacy"
                  className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:text-black transition-all"
                >
                  Privacy Policy
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
