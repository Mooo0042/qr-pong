import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Beer, Dice6, Home, Globe } from 'lucide-react';

const App = () => {
  const [page, setPage] = useState('home');
  const [language, setLanguage] = useState('en');
  const [currentTask, setCurrentTask] = useState(null);
  const [tasks, setTasks] = useState([]);

  const taskUrl = typeof window !== 'undefined' ? `${window.location.origin}/?page=task` : '';

  // Load tasks from JSON file
  useEffect(() => {
    fetch('/tasks.json')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error loading tasks:', error));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlPage = params.get('page');
    if (urlPage === 'task') {
      setPage('task');
      generateRandomTask();
    }
  }, [tasks]);

  const generateRandomTask = () => {
    if (tasks.length > 0) {
      const randomIndex = Math.floor(Math.random() * tasks.length);
      setCurrentTask(tasks[randomIndex]);
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'de' : 'en');
  };

  const translations = {
    en: {
      title: "Beer Pong Challenge",
      subtitle: "Add excitement to your beer pong games!",
      howItWorks: "How It Works",
      step1: "Print out the QR code below",
      step2: "Place it near your beer pong table",
      step3: "When someone makes a shot, scan the code",
      step4: "Complete the random challenge that appears!",
      downloadQR: "Download & Print QR Code",
      goToTask: "Go to Task Page",
      newTask: "New Task",
      backHome: "Back to Home",
      scanPrompt: "Scan this QR code after making a shot!"
    },
    de: {
      title: "Beer Pong Challenge",
      subtitle: "Bringe Spannung in deine Beer Pong Spiele!",
      howItWorks: "So funktioniert's",
      step1: "Drucke den QR-Code unten aus",
      step2: "Platziere ihn neben deinem Beer Pong Tisch",
      step3: "Wenn jemand trifft, scanne den Code",
      step4: "Erfülle die zufällige Herausforderung die erscheint!",
      downloadQR: "QR-Code herunterladen & drucken",
      goToTask: "Zur Aufgabenseite",
      newTask: "Neue Aufgabe",
      backHome: "Zurück zur Startseite",
      scanPrompt: "Scanne diesen QR-Code nach einem Treffer!"
    }
  };

  const t = translations[language];

  if (page === 'task') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => setPage('home')}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition"
            >
              <Home size={20} />
              {t.backHome}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition"
            >
              <Globe size={20} />
              {language.toUpperCase()}
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <Beer size={64} className="text-amber-500" />
            </div>
            
            {currentTask && (
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  {language === 'en' ? currentTask.name : currentTask.name_de}
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  {language === 'en' ? currentTask.description : currentTask.description_de}
                </p>
              </div>
            )}

            <button
              onClick={generateRandomTask}
              className="mt-10 flex items-center gap-3 mx-auto bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl text-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition transform hover:scale-105 shadow-lg"
            >
              <Dice6 size={24} />
              {t.newTask}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition"
          >
            <Globe size={20} />
            {language.toUpperCase()}
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Beer size={72} className="text-amber-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-4">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              {t.subtitle}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              {t.howItWorks}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                <p className="text-gray-700 text-lg">{t.step1}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
                <p className="text-gray-700 text-lg">{t.step2}</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-pink-600 mb-2">3</div>
                <p className="text-gray-700 text-lg">{t.step3}</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                <p className="text-gray-700 text-lg">{t.step4}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              {t.scanPrompt}
            </h3>
            <div className="flex justify-center mb-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <QRCodeSVG value={taskUrl} size={256} level="H" />
              </div>
            </div>
            <div className="text-center text-sm text-gray-600 break-all px-4">
              {taskUrl}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setPage('task')}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105 shadow-lg"
            >
              <Dice6 size={24} />
              {t.goToTask}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;