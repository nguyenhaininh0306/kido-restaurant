import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import CreateContainer from './components/CreateContainer'

function App() {
  return (
    <AnimatePresence>
      <div className='w-screen h-auto flex flex-col bg-slate-50'>
        <Header />

        <main className='mt-24 p-8 w-full'>
          <Routes>
            <Route path='/' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App
