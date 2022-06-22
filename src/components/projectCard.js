import '../styles/reset.css';
import '../styles/style.css';
import icons from '../data/icons';

const ProjectCard = ({
    title,
    description,
    repo,
    live,
    tech,
    setCount,
    projectNumber
}) => {
    
    const handleClick = (e) => {
        setCount(projectNumber)
    };

    const styles = {
        div: {
            display: "flex",
            justifyContent: "center"
        }
    }

    return (
        <>
            {projectNumber % 2 == 0 ?
                <>
                    <section style={styles.div}>
                        <section>
                            <h5>{title}</h5>
                            <p>{description}</p>
                            <ul>
                                {tech.map((tech, index) => (
                                    <li key={index}>
                                        <i className={icons[tech]}></i>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <section>
                            <img src="https://picsum.photos/600/400" 
                            className="project__img" 
                            alt={title}></img>
                        </section>
                    </section>
                </>
            :
                <>
                    <section style={styles.div}>
                        <section>
                            <img src="https://picsum.photos/600/400" 
                            className="project__img" 
                            alt={title}></img>
                        </section>
                        <section>
                            <h5>{title}</h5>
                            <p>{description}</p>
                            <ul>
                                {tech.map((tech, index) => (
                                    <li key={index}>
                                        <i className={icons[tech]}></i>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </section>
                </>
            }
        </>
    )
}

export default ProjectCard;