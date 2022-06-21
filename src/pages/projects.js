import ProjectCard from '../components/projectCard';
import '../styles/reset.css';
import '../styles/style.css';

const Projects = ({setCount}) => {
    return (
        <>
            <h1>Projects</h1>
            <ProjectCard 
                title="Portfolio"
                description="A portfolio to introduce myself and my work to others."
                repo="https://github.com/Jesse-DeJong/portfolio-latvia"
                live="https://jesse-dejong.github.io/portfolio-latvia"
                setCount={setCount}
                projectNumber="1"
            />
            <ProjectCard 
                title="Portfolio"
                description="A portfolio to introduce myself and my work to others."
                repo="https://github.com/Jesse-DeJong/portfolio-latvia"
                live="https://jesse-dejong.github.io/portfolio-latvia"
                setCount={setCount}
                projectNumber="2"
            />
            <ProjectCard 
                title="Portfolio"
                description="A portfolio to introduce myself and my work to others."
                repo="https://github.com/Jesse-DeJong/portfolio-latvia"
                live="https://jesse-dejong.github.io/portfolio-latvia"
                setCount={setCount}
                projectNumber="3"
            />
        </>
    )
}

export default Projects;