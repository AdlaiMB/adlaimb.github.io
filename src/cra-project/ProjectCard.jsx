export default function ProjectCard({ title, description, stack, link }) {
  return (
    <div className="project-card">
      <div className="project-card-description">
        <p className="bold-font-weight card-header-font-size card-text">
          {title}
        </p>
        <p className="card-text">{description}</p>
      </div>
      <div className="project-card-info">
        <section>
          <p className="xsmall-font-size medium-font-weight card-text">
            Tech Stack:
          </p>
          <div className="project-card-stack">
            {stack.map((item, index) => (
              <p key={index} className="xsmall-font-size pill-shape">
                {item}
              </p>
            ))}
          </div>
        </section>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          className="button"
        >
          Github
        </a>
      </div>
    </div>
  );
}
