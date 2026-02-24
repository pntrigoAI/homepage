# My Applications Dashboard

A modern homepage dashboard built with React and Tailwind CSS to organize and access all your web applications in one place.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Fast and lightweight with Vite + React
- 📱 Mobile-friendly interface
- 🔗 Easy link management for your apps

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd homepage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
homepage/
├── src/
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # Entry point
│   └── index.css      # Tailwind CSS imports
├── index.html         # HTML template
├── package.json       # Dependencies
└── vite.config.js     # Vite configuration
```

## Customization

To add or modify applications, edit the `apps` array in `src/App.jsx`:

```javascript
const apps = [
  {
    id: 1,
    title: "Your App",
    description: "Description of your app",
    link: "https://your-app-url.com",
    available: true
  },
  // Add more apps...
]
```

## Technologies Used

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Build tool and dev server

## License

MIT

---

Created with ❤️ | Dashboard © 2026
