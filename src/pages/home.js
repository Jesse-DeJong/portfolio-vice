import '../styles/reset.css';
import '../styles/style.css';
import Nav from '../components/nav';
import Landing from '../components/landing'; 
import Projects from './projects';
import { useState } from 'react';
import Contact from './contact';

const Home = () => {
    const initializeWindow = {
        windowHeight: document.documentElement.clientHeight,
        windowWidth: document.documentElement.clientWidth,
        leftWidth: document.documentElement.clientWidth / 4,
        rightWidth: (document.documentElement.clientWidth / 4) * 3
    };

    const [windowSize, setWindowSize] = useState(initializeWindow);
    const [count, setCount] = useState(0);

    // hook to trigger state update on window re-size

    const styles = {
        window: {
            display: "flex",
            height: windowSize.windowHeight
        },
        left: {
            width: windowSize.leftWidth,
            border: "1px solid white"
        },
        right: {
            width: windowSize.rightWidth,
            border: "1px solid white"
        }
    }

    return (
        <section style={styles.window}>
            
            <section style={styles.left}>
                <Nav 
                    setCount={setCount}
                    window={windowSize}
                />
            </section>
            
            <section style={styles.right}>
                {count == 0 ?
                    <>
                        <Landing windowHeight={windowSize.windowHeight}/>
                    </>
                : count == 1 ?
                    <>
                        <Projects setCount={setCount}/>
                    </>
                : count == 2 ?
                    <>
                        <Contact />
                    </>
                : <p>Whoops! Something went wrong. {console.log(count)}</p>
                }
            </section>
        </section>
    )
}

export default Home;