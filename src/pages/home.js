import '../styles/reset.css';
import '../styles/style.css';
import Nav from '../components/nav';
import Landing from '../components/landing'; 

const Home = () => {
    const windowHeight = document.documentElement.clientHeight;
    const windowWidth = document.documentElement.clientWidth;
    const leftWidth = windowWidth / 4;
    const rightWidth = (windowWidth / 4) * 3;

    const styles = {
        window: {
            display: "flex",
            height: windowHeight
        },
        left: {
            width: leftWidth,
            border: "1px solid white"
        },
        right: {
            width: rightWidth,
            border: "1px solid white"
        }
    }

    return (
        <section style={styles.window}>
            <section style={styles.left}><Nav /></section>
            <section style={styles.right}><Landing /></section>
        </section>
    )
}

export default Home;