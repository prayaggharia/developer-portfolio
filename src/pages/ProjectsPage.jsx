import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ProjectsPage.css';

const projects = [
    {
        id: 1,
        name: 'Prompting Guide',
        date: '03 Mar 2026',
        description: 'A comprehensive guide to crafting effective prompts for AI image generation.',
        complete: true,
        pinProtected: true,
        pin: '0040',
        route: '/projects/prompting-guide',
    },
    {
        id: 2,
        name: 'Music Portfolio',
        date: '04 Mar 2026',
        description: 'A curated showcase of music projects and compositions.',
        wip: true,
    },
    {
        id: 3,
        name: 'Project PS4',
        date: '04 Mar 2026',
        description: '',
        wip: true,
    },
];

export default function ProjectsPage() {
    const navigate = useNavigate();
    const [pinModal, setPinModal] = useState(null); // project being unlocked
    const [pinValue, setPinValue] = useState('');
    const [pinError, setPinError] = useState(false);
    const [shake, setShake] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (pinModal) {
            setPinValue('');
            setPinError(false);
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [pinModal]);

    const handleCardClick = (project) => {
        if (project.pinProtected) {
            setPinModal(project);
        }
    };

    const handlePinSubmit = (e) => {
        e.preventDefault();
        if (pinValue === pinModal.pin) {
            setPinModal(null);
            navigate(pinModal.route);
        } else {
            setPinError(true);
            setShake(true);
            setPinValue('');
            setTimeout(() => setShake(false), 500);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setPinModal(null);
        }
    };

    return (
        <div className="projects-page">
            <div className="projects-page__header">
                <span className="projects-page__label">// projects</span>
                <h1 className="projects-page__title">Interactive Showcase</h1>
            </div>

            <div className="projects-page__grid">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`project-card${project.pinProtected ? ' project-card--locked' : ''}`}
                        onClick={() => handleCardClick(project)}
                        role={project.pinProtected ? 'button' : undefined}
                        tabIndex={project.pinProtected ? 0 : undefined}
                        onKeyDown={project.pinProtected ? (e) => e.key === 'Enter' && handleCardClick(project) : undefined}
                    >
                        <div className="project-card__top">
                            <span className="project-card__date">{project.date}</span>
                            {project.pinProtected && (
                                <span className="project-card__lock" aria-label="PIN protected">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                    </svg>
                                </span>
                            )}
                        </div>
                        <h2 className="project-card__name">{project.name}</h2>
                        <p className="project-card__desc">{project.description}</p>
                        {project.wip && (
                            <span className="project-card__wip">
                                currently working on this
                            </span>
                        )}
                        {project.complete && (
                            <span className="project-card__complete">
                                complete
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {pinModal && (
                <div className="pin-overlay" onClick={handleOverlayClick}>
                    <div className={`pin-modal${shake ? ' pin-modal--shake' : ''}`}>
                        <div className="pin-modal__lock">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                            </svg>
                        </div>
                        <h3 className="pin-modal__title">{pinModal.name}</h3>
                        <p className="pin-modal__subtitle">enter pin to access</p>
                        <form onSubmit={handlePinSubmit} className="pin-modal__form">
                            <input
                                ref={inputRef}
                                type="password"
                                inputMode="numeric"
                                maxLength={4}
                                value={pinValue}
                                onChange={(e) => {
                                    setPinError(false);
                                    setPinValue(e.target.value.replace(/\D/g, ''));
                                }}
                                className={`pin-modal__input${pinError ? ' pin-modal__input--error' : ''}`}
                                placeholder="••••"
                                autoComplete="off"
                            />
                            {pinError && (
                                <span className="pin-modal__error">incorrect pin</span>
                            )}
                            <button type="submit" className="pin-modal__btn">
                                unlock
                            </button>
                        </form>
                        <button className="pin-modal__cancel" onClick={() => setPinModal(null)}>
                            cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
