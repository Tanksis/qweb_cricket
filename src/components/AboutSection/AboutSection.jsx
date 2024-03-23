import './AboutSection.css';

const AboutSection = ({ title, content }) => {
    return (
        <div className="main">
            <div className="about">
                <h3>{title}</h3>
                {content.map((paragraph, index) => (
                    <p key={index}>
                        {paragraph.text}
                        {paragraph.link &&
                            <a href={paragraph.link.url}>
                                {paragraph.link.text}
                            </a>
                        }
                    </p>
                ))}
            </div>
        </div>
    );
}

export default AboutSection;