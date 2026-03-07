import { Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
<<<<<<< HEAD
=======
import BlogsPage from './pages/BlogsPage';
import PromptingGuidePage from './pages/PromptingGuidePage';
>>>>>>> 388bcf2ac9aefbc3727189e205741250c1800204

export default function App() {
    const { theme: themeMode, toggleTheme } = useTheme();

    return (
        <div className="app-wrapper">
            <Navbar theme={themeMode} toggleTheme={toggleTheme} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
<<<<<<< HEAD
=======
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/projects/prompting-guide" element={<PromptingGuidePage />} />
>>>>>>> 388bcf2ac9aefbc3727189e205741250c1800204
            </Routes>
            <Footer />
        </div>
    );
}
