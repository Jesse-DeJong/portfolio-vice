const Landing = () => {
    
    // less 75 pixels to compensate for the navbar
    
    return (
        <>
        <section className="landing">
            <h1 className="landing__heading">Jesse DE Jong</h1>
            <p className="landing__script">web <a href="https://github.com/Jesse-DeJong" target="_target" alt="github link" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a> dev</p>
        </section>
        <section>
            <p>A nascent software engineer looking to expand my knowledge and create cool things</p>
            <br></br>
            <p>I'm a full stack web developer with a broad background across buiness, finance and government services. My foundation outside of tech provides a formidable set of transferable skills well suited to solving business problems and communicating effectively with internal and external stakeholders to achieve strong outcomes</p>
            <br></br>
            <p> I am now looking to combine these well honed skills with my newly developed technical skills so that I can explore my passion through my work</p>
        </section>
        </>
    )
}    

export default Landing;