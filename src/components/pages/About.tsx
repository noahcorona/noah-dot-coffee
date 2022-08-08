import '../../style/App.css';

const About = () => {
    return (
        <div
            id="about"
            className="Section"
        >
            <div className="decorated bottom-spaced">
                <span><h1>Noah Corona</h1></span>
            </div>
            <div className="d-flex gap-4">
                <div className="d-flex gap-4">
                    <div>
                        <h2>Software Engineer</h2>
                        <div>
                            <p>I take pride in the software I build. Between professional, academic, and personal projects, I've been writing software for over a decade. I'm specializing in web and mobile development, but enjoy working on embedded and machine learning projects.</p>
                            <p>If you're hiring, please consider taking a look at <a href="#portfolio">my resume</a> and <a href="#content">feel free to reach out</a>.</p>
                        </div>
                    </div>
                    <img src="/me.jpeg" alt="me" className="Portrait" />
                </div>
            </div>
            <h3>Technologies I work with</h3>
            <ul>
                <li>JavaScript (es6+)</li>
                <li>Python</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Node</li>
                <li>C++</li>
                <li>C#</li>
                <li>Swift</li>
            </ul>
            <h3>About Me</h3>
            <p>My interest in software development started in 2010, when I started exploring source code of video game modifications for Microsoft's Xbox platform. In 2022, I graduated from UC, Santa Barbara with a B.S. in Computer Engineering. In the years between, I've written software professionally, academically, and for fun.</p>
            <p>I have been fortunate to work with some great folks, like a research team at Aptitude Medical Systems.</p>
        </div>
    );
}

export default About;
