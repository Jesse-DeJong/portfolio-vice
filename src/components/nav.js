import '../styles/reset.css';
import '../styles/style.css';

const Nav = ({
    setCount
}) => {

    const handleClick = (e) => {
        setCount(e.target.id)
    };

    return (
        <section>
            <section className="nav">
                <h1 className="nav__heading">Jesse DE Jong</h1>
                <p className="nav__script">web <a href="https://github.com/Jesse-DeJong" target="_target" alt="github link" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a> dev</p>
            </section>
            <ul className="nav__list">
                <li className="nav__listItem" id="0" onClick={handleClick}>About Me</li>
                <li className="nav__listItem" id="1" onClick={handleClick}>Projects</li>
                <li className="nav__listItem" id="2" onClick={handleClick}>Contact</li>
            </ul>
        </section>
        
    )
}

export default Nav;