import React, { useState } from 'react'

const apps = [
  {
    id: 1,
    title: "📋 Ideas Board",
    description: "Organize and share your ideas with a simple tool.",
    link: "https://ideas-board-ten.vercel.app",
    available: true,
    category: "Productivity"
  },
  {
    id: 2,
    title: "💰 IRS Simulator",
    description: "Calculate Portuguese IRS taxes for 2026 with deductions.",
    link: "https://irs-simulator-portugal.vercel.app",
    available: true,
    category: "Finance"
  },
  {
    id: 3,
    title: "📝 Notes App",
    description: "Take quick notes and keep them organized.",
    link: "#",
    available: false,
    category: "Productivity"
  },
  {
    id: 4,
    title: "📊 Analytics",
    description: "Track your metrics and visualize data.",
    link: "#",
    available: false,
    category: "Business"
  },
  {
    id: 5,
    title: "🎨 Portfolio",
    description: "Showcase your projects and achievements.",
    link: "#",
    available: false,
    category: "Creative"
  },
  {
    id: 6,
    title: "📚 Resources",
    description: "Collection of useful links and tools.",
    link: "#",
    available: false,
    category: "Productivity"
  },
  {
    id: 7,
    title: "⚙️ Settings",
    description: "Configure your preferences and options.",
    link: "#",
    available: false,
    category: "System"
  }
]

function App() {
  const [filter, setFilter] = useState('all')
  
  const filteredApps = filter === 'all' 
    ? apps 
    : filter === 'available' 
      ? apps.filter(app => app.available)
      : apps.filter(app => !app.available)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">My Apps Dashboard</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#apps" className="text-gray-700 hover:text-blue-600 font-medium transition">Apps</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</a>
              <a href="https://github.com/pntrigoAI" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 font-medium transition">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Apps</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            A curated collection of tools and applications to boost your productivity and simplify your daily tasks
          </p>
          <div className="flex justify-center gap-4">
            <a href="#apps" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg">
              Explore Apps
            </a>
            <a href="https://github.com/pntrigoAI" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition">
              View Source
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-600">{apps.length}</div>
            <div className="text-gray-600 mt-2">Total Apps</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-green-600">{apps.filter(a => a.available).length}</div>
            <div className="text-gray-600 mt-2">Available Now</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-orange-600">{apps.filter(a => !a.available).length}</div>
            <div className="text-gray-600 mt-2">Coming Soon</div>
          </div>
        </div>
      </div>

      {/* Apps Section */}
      <main id="apps" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-lg font-medium transition ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            All Apps
          </button>
          <button
            onClick={() => setFilter('available')}
            className={`px-5 py-2 rounded-lg font-medium transition ${
              filter === 'available'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setFilter('coming-soon')}
            className={`px-5 py-2 rounded-lg font-medium transition ${
              filter === 'coming-soon'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Coming Soon
          </button>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                    {app.title}
                  </h2>
                  {app.available && (
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                      Live
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4 min-h-[3rem]">
                  {app.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    {app.category}
                  </span>
                  
                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      app.available
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                    onClick={(e) => !app.available && e.preventDefault()}
                  >
                    {app.available ? 'Open App →' : 'Coming Soon'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Dashboard</h2>
            <p className="text-gray-600 text-lg">
              A personal collection of web applications and tools designed to solve everyday problems. 
              Each app is crafted with attention to detail, focusing on usability and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">My Apps Dashboard</h3>
              <p className="text-sm text-gray-400">
                Building useful tools and applications, one project at a time.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#apps" className="hover:text-white transition">All Apps</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="https://github.com/pntrigoAI" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Featured Apps</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://ideas-board-ten.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Ideas Board</a></li>
                <li><a href="https://irs-simulator-portugal.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">IRS Simulator</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 My Apps Dashboard. Built with React and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
