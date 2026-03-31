import { ArrowLeft } from 'lucide-react';

interface DeleteAccountProps {
  onBack: () => void;
}

export default function DeleteAccount({ onBack }: DeleteAccountProps) {
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Delete Account</h1>
          <p className="text-gray-600 mb-12">Request account and data deletion</p>

          <div className="space-y-8">
            <p className="text-lg leading-relaxed">
              If you would like to request that your account and associated data be deleted, please send an email to:
            </p>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <a
                href="mailto:contact@dr-code.ai?subject=Account%20Deletion%20Request&body=Please%20delete%20my%20account%20and%20all%20associated%20data."
                className="text-2xl font-semibold text-black hover:underline"
              >
                contact@dr-code.ai
              </a>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Please include "Account Deletion Request" in the subject line and provide any relevant account information to help us process your request.
              </p>
              <p>
                We will respond to your request within 30 days and confirm once your account and data have been deleted.
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
