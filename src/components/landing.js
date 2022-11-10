import '../styles/reset.css';
import '../styles/style.css';



const Landing = (windowHeight) => {

    const styles = {
        window: {
            display: "flex",
            height: windowHeight
        }
    }

    return (
        <>
        <section style={styles.windowHeight} className='landing'>
            <p>Hi, I am a nascent software engineer looking to expand my knowledge with new technologies and create interesting things!</p>
            <br></br>
            <p>I'm a full stack web developer with a broad background in business, finance and government services. My foundation outside of tech provides a formidable set of transferable skills well suited to solving business problems and communicating effectively with internal and external stakeholders to achieve strong outcomes.</p>
            <br></br>
            <p> I am now looking to combine these well honed skills with my newly developed technical skills so that I can explore my passion through my work.</p>
        </section>
        </>
    )
}    

export default Landing;