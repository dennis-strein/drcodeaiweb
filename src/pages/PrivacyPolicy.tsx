import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-12">Last updated: 3/28/2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-lg leading-relaxed">
              Style Chat AI ("we", "our", or "us") is committed to protecting your privacy.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not collect, store, or share any personal data or personally identifiable information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Camera and Photos</h2>
              <p className="text-gray-700 leading-relaxed">
                The app requests access to your device's camera to allow you to take photos.
              </p>
              <p className="text-gray-700 leading-relaxed">
                All photos are stored locally on your device. We do not collect, upload, or share your photos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Permissions Used</h2>
              <p className="text-gray-700 leading-relaxed">
                Camera – used only to take photos of the app
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Data Sharing</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not share, sell, or disclose any user data to third parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                All data remains on your device under your control.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                This app does not knowingly collect personal information from children.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy. Changes will be posted on this page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">8. Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                Email:{' '}
                <a
                  href="mailto:contact@dr-code.ai"
                  className="text-black font-medium hover:underline"
                >
                  contact@dr-code.ai
                </a>
              </p>
            </section>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                By using this app, you agree to this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p>&copy; 2026 dr-code.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
