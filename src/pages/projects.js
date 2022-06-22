import ProjectCard from '../components/projectCard';
import '../styles/reset.css';
import '../styles/style.css';
import projectsData from '../data/projectsData';

const Projects = ({setCount}) => {
    return (
        <>
            {projectsData.map((project, index) => {
                return (
                    <ProjectCard
                    title={project.title}
                    description={project.description}
                    repo={project.repo}
                    live={project.live}
                    tech={project.tech}

                    setCount={setCount}
                    projectNumber={index}
                    key={index}
                    />
                )
            })}
        </>
    )
}

export default Projects;