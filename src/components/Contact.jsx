import gmailicon from "../images/gmail-icon.png";
import githublogo from "../images/github-logo.png";
import instalogo from "../images/insta-logo.png";
import linkedInlogo from "../images/linkedIn-logo.png";

export default function Contact(){
    return(
        <section className="Contact" id="contact">
        <h2>Contact Me!</h2>
        <p className="contact-text">
            Whether you have a project idea, a job opportunity, or simply want to connect, 
            I'd love to hear from you. <br/>
            Let's build something amazing together!<br/><br/>
        </p>
        <div className="contact-logo">
            <a href="mailto:gandhamvinaysai@gmail.com">
                <img src={gmailicon} alt="gmail"/>
            </a>
            <a href="https://www.linkedin.com/in/vinay-sai-gandham-5131142b9/" target="_blank">
                <img src={linkedInlogo} alt="linkedIn"/>
            </a>
            <a href="https://github.com/vinaysai18" target="_blank">
                <img src={githublogo} alt="github"/>
            </a>
            <a href="https://www.instagram.com/vinay.sai.18/" target="_blank">
                <img src={instalogo} alt="instagram"/>
            </a>
        </div>
        <a href="#home" className="name-text">@VinaySaiGandham</a>
    </section>
    )
}