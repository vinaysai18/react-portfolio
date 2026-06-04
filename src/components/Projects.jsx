import ProjectCard from "./ProjectCard";
import Gradgateway from "../images/Grad-gateway.png";
import chefclaudeicon from "../images/chef-claude-icon.png";

export default function Projects() {

    const projects = [
        {
            title: "GradGateway Placement Portal",
            description:
                "A comprehensive placement management platform that helps students discover opportunities, track applications, and participate in campus recruitment processes efficiently.",
            image: Gradgateway,
            link: "https://grad-gateway-project-ra98.vercel.app/",
            alt: "GradGateway Placement Portal"
        },
        {
            title: "Chef Claude",
            description:
                "An AI-powered recipe assistant built with React that generates personalized recipe suggestions from available ingredients.",
            image: chefclaudeicon,
            link: "https://chef-claude-project-oj9v.vercel.app",
            alt: "Chef Claude Logo"
        }
    ];

    return (
        <section className="Projects" id="projects">
            <h2>My Projects</h2>

            <div className="Project">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                        alt={project.alt}
                    />
                ))}
            </div>
        </section>
    );
}