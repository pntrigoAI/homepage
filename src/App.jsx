import React from 'react'

const apps = [
  {
    id: 1,
    title: "📋 Ideas Board",
    description: "Organize and share your ideas with a simple tool.",
    link: "https://ideas-board-ten.vercel.app",
    available: true
  },
  {
    id: 2,
    title: "📝 Notes App",
    description: "Take quick notes and keep them organized.",
    link: "#",
    available: false
  },
  {
    id: 3,
    title: "📊 Analytics",
    description: "Track your metrics and visualize data.",
    link: "#",
    available: false
  },
  {
    id: 4,
    title: "🎨 Portfolio",
    description: "Showcase your projects and achievements.",
    link: "#",
    available: false
  },
  {
    id: 5,
    title: "📚 Resources",
    description: "Collection of useful links and tools.",
    link: "#",
    available: false
  },
  {
    id: 6,
    title: "⚙️ Settings",
    description: "Configure your preferences and options.",
    link: "#",
    available: false
  }
]

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-cyan-700">
      {/* Header */}
      <header className="bg-slate-900 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-white text-center">
            Welcome to the Professional Dashboard
          </h1>
        </div>
      </header>

      {/* App Cards Container */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {apps.map((app) => (
            <div
              key={app.id}
              className="bg-blue-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform"
            >
              <h2 className="text-2xl font-bold text-white mb-3">
                {app.title}
              </h2>
              <p className="text-blue-100 mb-4 min-h-[3rem]">
                {app.description}
              </p>
              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-6 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                  app.available
                    ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-300'
                    : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                }`}
              >
                {app.available ? 'Open App' : 'Coming Soon'}
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-300 text-center">
            Created with ❤️ | Dashboard © 2026
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
