import Me from '../assets/image/about.png'
//import Socials from '../components/Socials'
//babatunde-tunde-974019155
const About = () => {
    return (
        <section className="about my-2 py-2">
        <div className="container grid">
            <div className="text-center">
                <h1 className="lg">Hello, I'm Tunde</h1>
                <p className="lead my-1">I am a software developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus earum deserunt autem, optio eius impedit porro tempore minus nam inventore!</p>
                <a download href="../assets/image/resume.pdf" class="btn btn-dark">Download Resume</a>
            </div>
            {/* <img src="images/cloud.png" alt=""> */}
            <img src={Me} alt="" />
        </div>
        {/* <Socials /> */}
    </section>
    )
}

export default About
