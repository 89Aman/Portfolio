import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import WaveTransition from './components/WaveTransition'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showWave, setShowWave] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simulate loading time (minimum 2 seconds for user to see the loading screen)
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
      setShowWave(true)
    }, 2000)

    return () => clearTimeout(loadingTimer)
  }, [])

  const handleWaveComplete = () => {
    setShowWave(false)
    setShowContent(true)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {showWave && <WaveTransition onComplete={handleWaveComplete} />}

      <AnimatePresence>
        {showContent && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-[#171717]"
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
