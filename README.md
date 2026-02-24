# My Applications Dashboard

A modern homepage dashboard built with React and Tailwind CSS to organize and access all your web applications in one place.

## 🌐 Live Demo

🚀 **Deployed on Vercel**: [https://homepage-pntrigoai.vercel.app](https://homepage-pntrigoai.vercel.app)

## 📦 Repository

- **GitHub**: [https://github.com/pntrigoAI/homepage](https://github.com/pntrigoAI/homepage)
- **Git Clone**: `git clone https://github.com/pntrigoAI/homepage.git`

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Fast and lightweight with Vite + React
- 📱 Mobile-friendly interface
- 🔗 Easy link management for your apps
- 🌊 Beautiful gradient background (slate to cyan)
- 🎯 Card-based layout with hover effects

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pntrigoAI/homepage.git
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

## 🚀 Deployment

### Deploy to Vercel

1. **Via Vercel CLI:**
```bash
npm install -g vercel
vercel
```

2. **Via Vercel Dashboard:**
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite and configure build settings
   - Click "Deploy"

### Build Settings (Vercel)
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Environment Variables
No environment variables required for basic setup.

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

### Adding/Modifying Applications

To add or modify applications, edit the `apps` array in `src/App.jsx`:

```javascript
const apps = [
  {
    id: 1,
    title: "📋 Ideas Board",
    description: "Organize and share your ideas with a simple tool.",
    link: "https://ideas-board-ten.vercel.app",
    available: true
  },
  // Add more apps...
]
```

### Current Applications

| App | Status | Link |
|-----|--------|------|
| 📋 Ideas Board | ✅ Available | https://ideas-board-ten.vercel.app |
| 📝 Notes App | 🚧 Coming Soon | - |
| 📊 Analytics | 🚧 Coming Soon | - |
| 🎨 Portfolio | 🚧 Coming Soon | - |
| 📚 Resources | 🚧 Coming Soon | - |
| ⚙️ Settings | 🚧 Coming Soon | - |

### Styling Customization

The project uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.js` - Theme configuration
- `src/App.jsx` - Component styles
- `src/index.css` - Global styles

## Technologies Used

- [React](https://reactjs.org/) ^18.2.0 - UI library
- [Tailwind CSS](https://tailwindcss.com/) ^3.4.0 - Utility-first CSS framework
- [Vite](https://vitejs.dev/) ^5.0.8 - Build tool and dev server
- [PostCSS](https://postcss.org/) ^8.4.32 - CSS transformation tool
- [Autoprefixer](https://github.com/postcss/autoprefixer) ^10.4.16 - CSS vendor prefixing

## 📋 Technical Details

### Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

### Dev Dependencies
```json
{
  "@vitejs/plugin-react": "^4.2.1",
  "tailwindcss": "^3.4.0",
  "postcss": "^8.4.32",
  "autoprefixer": "^10.4.16",
  "vite": "^5.0.8"
}
```

### Configuration Files
- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS plugins configuration
- `package.json` - Project metadata and scripts

## 📝 Available Scripts

```bash
npm run dev      # Start development server (localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📊 Version History

- **v0.1.0** (Current) - Initial release
  - Dashboard homepage with app cards
  - Responsive design
  - Ideas Board integration
  - Vercel deployment

## 🔗 Related Projects

- [Ideas Board](https://ideas-board-ten.vercel.app) - First application in the dashboard

## 🐛 Issues & Support

If you encounter any issues or have questions:
- Open an issue on GitHub: [https://github.com/pntrigoAI/homepage/issues](https://github.com/pntrigoAI/homepage/issues)
- Check existing issues before creating a new one

## 📄 License

MIT

## 📞 Contact

- **GitHub**: [@pntrigoAI](https://github.com/pntrigoAI)
- **Vercel**: [homepage-pntrigoai.vercel.app](https://homepage-pntrigoai.vercel.app)

## 🙏 Acknowledgments

- Built with [Create Vite](https://vitejs.dev/guide/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Hosted on [Vercel](https://vercel.com/)

---

Created with ❤️ | Dashboard © 2026
