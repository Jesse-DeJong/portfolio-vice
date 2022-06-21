import '../styles/reset.css';
import '../styles/style.css';

const Nav = () => {

    // less 75 pixels to compensate for the navbar
    const windowWidth = document.documentElement.clientWidth;
    const navWidth = windowWidth / 4;

    const styles = {
        body: {
            width: navWidth,
            height: "100%",
            border: "1px solid white"
        }
    }

    return (
        <section style={styles.body}>
            <h1>Jesse De Jong</h1>
            <ul>
                <li>About Me</li>
                <li>Projects</li>
            </ul>
        </section>
        
    )
}

export default Nav;