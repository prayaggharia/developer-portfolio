import '../css/ProjectsPage.css';

const projects = [
    {
        id: 1,
        name: 'Music Portfolio',
        date: '03 Mar 2026',
        description: 'A curated showcase of music projects and compositions.',
        tags: [],
    },
];

export default function ProjectsPage() {
    return (
        <div className="projects-page">
            <div className="projects-page__header">
                <span className="projects-page__label">// projects</span>
                <h1 className="projects-page__title">Interactive Showcase</h1>
            </div>

            <div className="projects-page__grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-card__top">
                            <span className="project-card__date">{project.date}</span>
                        </div>
                        <h2 className="project-card__name">{project.name}</h2>
                        <p className="project-card__desc">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
