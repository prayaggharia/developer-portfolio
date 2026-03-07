import { Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
    const { theme: themeMode, toggleTheme } = useTheme();

    return (
        <div className="app-wrapper">
            <Navbar theme={themeMode} toggleTheme={toggleTheme} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
            <Footer />
        </div>
    );
}
