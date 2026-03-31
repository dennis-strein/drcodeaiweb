import { ArrowLeft } from 'lucide-react';

interface ImpressumProps {
  onBack?: () => void;
}

export default function Impressum({ onBack }: ImpressumProps) {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Back</span>
          </button>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-gray-700">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-8">Impressum</h1>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="leading-relaxed space-y-1">
              <span className="block">Dr. Dennis Strein</span>
              <span className="block">Luisenstr 90</span>
              <span className="block">76137 Karlsruhe</span>
              <span className="block">Germany</span>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Kontakt</h2>
            <p className="leading-relaxed">
              E-Mail: <a href="mailto:contact@dr-code.ai" className="text-black hover:underline font-medium">contact@dr-code.ai</a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Verantwortung für Inhalte</h2>
            <p className="leading-relaxed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 des TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Haftung für Links</h2>
            <p className="leading-relaxed">
              Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Urheberrecht</h2>
            <p className="leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder Erstellers.
            </p>
          </div>
        </div>
      </div>

      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p>&copy; 2024 dr-code.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
