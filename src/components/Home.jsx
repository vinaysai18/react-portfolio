import photo from "../images/photo.png";

export default function Home() {
    return (
        <section className="Home" id="home">
            <div className="left">
                <h1>
                    Hi, I'm <span className="name">Vinay Sai</span>
                </h1>

                <h3>Full Stack Developer</h3>

                <p>
                    Passionate Full Stack Developer skilled in MySQL, MongoDB,
                    NodeJS, ReactJS, HTML, CSS, and JavaScript. I enjoy building
                    scalable web applications, creating responsive user interfaces,
                    and solving real-world problems through clean and efficient
                    code. I am passionate about learning new technologies and
                    continuously improving my development skills.
                </p>
            </div>

            <div className="right">
                <img src={photo} alt="Profile Image" />
            </div>
        </section>
    );
}