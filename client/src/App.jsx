import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import ProjectDetails from './pages/ProjectDetails'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-details" element={<ProjectDetails />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
