import AboutSection from '../../components/AboutSection/AboutSection'
import './About.css'

function About() {
    const title = "ABOUT CRICKET CLUB"
    const content = [
        {
            text: "We are a student run cricket club. Our goal is to connect like-minded individuals who share a love or cricket and play competitive and friendly matches and tournaments. We promote team building and encourage healthy competition."
        },
        {
            text: "Lets unite, empower, and elevate our cricket game together!"
        },
        {
            text: "To stay tuned for updates, events, and the latest new in the world of cricket follow us on instagram at ",
            link: {
                url: "https://www.instagram.com/queens_cricket",
                text: "@queens_cricket!"
            }
        }
    ];

    return (
        <div className="about-sections">
            <AboutSection title={title} content={content} />
        </div>
    );
};



export default About;