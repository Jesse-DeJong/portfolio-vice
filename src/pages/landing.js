import '../styles/reset.css';
import '../styles/style.css';

const Landing = () => {

    // less 75 pixels to compensate for the navbar
    const windowHeight = document.documentElement.clientHeight;
  
    const styles = {
        div: {
          height: windowHeight
        }
    }

    return (
        <section style={styles.div} className="landing">
            <h1 className="landing__heading">Jesse DE Jong</h1>
            <p className="landing__script">web <a href="https://github.com/Jesse-DeJong" target="_target" alt="github link" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a> dev</p>
        </section>
    )
}

export default Landing;