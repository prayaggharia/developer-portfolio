import { Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import BlogsPage from './pages/BlogsPage';

export default function App() {
    const { theme: themeMode, toggleTheme } = useTheme();

    return (
        <div className="app-wrapper">
            <Navbar theme={themeMode} toggleTheme={toggleTheme} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
            </Routes>
            <Footer />
        </div>
    );
}
