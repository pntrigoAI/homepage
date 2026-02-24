import React from 'react';

export default function App() {
    return (
        <div className="bg-gradient-to-b from-blue-700 to-blue-400 min-h-screen text-white">
            <header className="py-6 bg-blue-900 shadow-md text-center">
                <h1 className="text-3xl font-bold">🌟 My Applications Dashboard 🌟</h1>
            </header>
            <main className="p-8 grid gap-6 md:grid-cols-3">
                <ApplicationCard 
                    title="Ideas Board" 
                    description="Organize and manage your creative ideas" 
                    link="https://ideas-board-ten.vercel.app" 
                />
                <ApplicationCard 
                    title="Homepage Dashboard" 
                    description="A central hub for all your projects!" 
                    link="https://homepage-dun-one-70.vercel.app" 
                />
                {/* You can add more ApplicationCards here */}
            </main>
            <footer className="py-4 bg-blue-900 text-center">
                <p>Created with ❤️ by your AI Assistant — 2026</p>
            </footer>
        </div>
    );
}

function ApplicationCard({ title, description, link }) {
    return (
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 ">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="mb-4">{description}</p>
            <a href={link} className="text-blue-500 hover:underline bg-blue-100 py-1 px-2 rounded">
                Open App
            </a>
        </div>
    );
}