import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black -z-10"></div>

        <div className="inline-block mb-4 px-3 py-1 bg-blue-900/30 border border-blue-800 rounded-full text-blue-400 text-sm font-medium">
          New: Block Entire Networks Instantly
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Cure content<br />spam on X.
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          The only extension that blocks affiliate networks by <strong>Image Fingerprinting</strong>.
          Stop playing whack-a-mole with throwaway accounts. Block the source.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-sm sm:max-w-none">
          <Link
            href="https://buymeacoffee.com/zeeskylaw/e/487978"
            target="_blank"
            className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
          >
            Get Pro - $3.99
          </Link>
          <button className="px-8 py-4 bg-gray-900 border border-gray-800 text-white rounded-lg hover:bg-gray-800 transition-colors">
            View on GitHub
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-600">
          One-time payment • Lifetime updates • No recurring fees
        </p>
      </section>

      {/* Feature Grid */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/20">
            🎯
          </div>
          <h3 className="text-xl font-bold">Precision Blocking</h3>
          <p className="text-gray-400">
            We identify affiliates by the parent company badge they display. One block wipes out thousands of promoters.
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center border border-purple-500/20">
            ⚡
          </div>
          <h3 className="text-xl font-bold">Zero-Lag Sentinel</h3>
          <p className="text-gray-400">
            Our Sentinel Engine scans the DOM effeciently using MutationObservers. No page flicker, no performance cost.
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20">
            🔒
          </div>
          <h3 className="text-xl font-bold">Privacy First</h3>
          <p className="text-gray-400">
            All blocking happens locally on your device. Zero data collection. Zero tracking.
          </p>
        </div>
      </section>

      <footer className="border-t border-gray-900 py-12 text-center text-gray-600">
        <p>&copy; 2024 Twitter Affiliate Blocker. Not affiliated with X Corp.</p>
      </footer>
    </main>
  );
}
