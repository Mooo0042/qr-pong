# 🍺 Beer Pong Challenge

A fun, bilingual web app that adds exciting challenges to your beer pong games! Scan a QR code after making a shot to get a random task to complete.

## ✨ Features

- 📱 **QR Code Integration** - Print and scan to get instant challenges
- 🌐 **Bilingual Support** - Full English and German translations
- 🎲 **Random Tasks** - Keep the game exciting with varied challenges
- 🎨 **Modern Design** - Beautiful gradients and smooth animations
- 📦 **Easy to Extend** - Add new tasks or languages via JSON file
- 📱 **Mobile Responsive** - Works perfectly on all devices

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Create a new directory and set up the files:
```bash
mkdir beer-pong-challenge
cd beer-pong-challenge
```

2. Create the folder structure:
```bash
mkdir -p public src
```

3. Copy all 6 files into their respective locations:
   - `public/index.html`
   - `public/tasks.json`
   - `src/index.js`
   - `src/App.js`
   - `package.json` (in root)
   - `README.md` (in root)

4. Install dependencies:
```bash
npm install
```

5. Start the development server:
```bash
npm start
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect it's a React app
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts and your site will be live in seconds!

## 📁 Project Structure

```
beer-pong-challenge/
├── public/
│   ├── index.html          # Main HTML file
│   └── tasks.json          # All beer pong tasks
├── src/
│   ├── App.js              # Main React component
│   └── index.js            # React entry point
├── package.json            # Dependencies
└── README.md               # This file
```

### Complete File Setup

You need these 6 files in your project:

1. **public/index.html** - The HTML template
2. **public/tasks.json** - The tasks data
3. **src/index.js** - React entry point
4. **src/App.js** - Main component
5. **package.json** - Dependencies
6. **README.md** - Documentation

## 🎮 How to Use

1. **Print the QR Code**: Visit the home page and print the QR code
2. **Set Up**: Place the printed QR code near your beer pong table
3. **Play**: When someone makes a shot, scan the QR code
4. **Complete the Task**: Follow the random challenge that appears!

## 🌍 Adding New Languages

To add a new language (e.g., Spanish):

1. Open `public/tasks.json`
2. Add new fields to each task:
```json
{
  "name": "Swap Hands",
  "description": "Switch your throwing hand...",
  "name_de": "Hände Tauschen",
  "description_de": "Wechsle deine Wurfhand...",
  "name_es": "Cambiar Manos",
  "description_es": "Cambia tu mano de lanzamiento..."
}
```

3. Update `src/App.js` to include the new language in the translations object
4. Add the language toggle functionality

## 📝 Adding New Tasks

Edit `public/tasks.json` and add new tasks following this structure:

```json
{
  "name": "Task Name",
  "description": "Task description in English",
  "name_de": "Aufgabenname",
  "description_de": "Aufgabenbeschreibung auf Deutsch"
}
```

## 🛠️ Built With

- [React](https://reactjs.org/) - UI Framework
- [qrcode.react](https://www.npmjs.com/package/qrcode.react) - QR Code generation
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) - Styling (via CDN)

## 📱 Screenshots

### Home Page
Beautiful landing page with instructions and printable QR code

### Task Page
Clean, fun interface showing random beer pong challenges

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new tasks to `tasks.json`
- Translate to new languages
- Improve the UI/UX
- Fix bugs

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Have Fun!

Remember to drink responsibly and enjoy your beer pong games! 🍻

---

Made with ❤️ for beer pong enthusiasts everywhere