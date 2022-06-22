import '../styles/reset.css';
import '../styles/style.css';

const Nav = ({
    setCount
}) => {

    const handleClick = (e) => {
        setCount(e.target.id)
    };

    const styles = {
        list: {
            display: "flex",
            flexDirection: "Column",
            alignItems: "center",
        },
        listItem: {
            cursor: "pointer",
            margin: "10px 0px"
        }
    }

    return (
        <section style={styles.body}>
            <section className="nav">
                <h1 className="nav__heading">Jesse DE Jong</h1>
                <p className="nav__script">web <a href="https://github.com/Jesse-DeJong" target="_target" alt="github link" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a> dev</p>
            </section>
            <ul style={styles.list}>
                <li style={styles.listItem} id="0" onClick={handleClick}>About Me</li>
                <li style={styles.listItem} id="1" onClick={handleClick}>Projects</li>
                <li style={styles.listItem} id="2" onClick={handleClick}>Contact</li>
            </ul>
        </section>
        
    )
}

export default Nav;