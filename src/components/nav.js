import '../styles/reset.css';
import '../styles/style.css';

const Nav = () => {

    // less 75 pixels to compensate for the navbar
    // const windowWidth = document.documentElement.clientWidth;
    // const navWidth = windowWidth / 4;
    // const windowHeight = document.documentElement.clientHeight;

    const styles = {
        // body: {
        //     width: navWidth,
        //     height: windowHeight,
        //     border: "1px solid white"
        // },
        list: {
            display: "flex",
            flexDirection: "Column",
            alignItems: "center",
        },
        listItem: {
            margin: "10px 0px"
        }
    }

    return (
        <section style={styles.body}>
            <h1>Jesse De Jong</h1>
            <ul style={styles.list}>
                <li style={styles.listItem}>About Me</li>
                <li style={styles.listItem}>Projects</li>
                <li style={styles.listItem}>Contact</li>
            </ul>
        </section>
        
    )
}

export default Nav;