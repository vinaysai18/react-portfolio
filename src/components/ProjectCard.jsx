export default function ProjectCard({
    title,
    description,
    image,
    link,
    alt
}) {
    return (
        <div className="project-card">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                    src={image}
                    alt={alt}
                    className="project-logo"
                />
            </a>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}