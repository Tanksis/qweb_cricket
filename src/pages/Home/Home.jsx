import "./Home.css";
import AboutSection from "../../components/AboutSection/AboutSection";
import MemberForm from "../../components/MemberForm/MemberForm";

function Home() {
  const title = "About Us";
  const content = [
    {
      text: "We are a student run cricket club. Our goal is to connect like-minded individuals who share a love or cricket and play competitive and friendly matches and tournaments. We promote team building and encourage healthy competition.",
      text: "We are a student run cricket club. Our goal is to connect like-minded individuals who share a love or cricket and play competitive and friendly matches and tournaments. We promote team building and encourage healthy competition.",
    },
    {
      text: "Lets unite, empower, and elevate our cricket game together!",
      text: "Lets unite, empower, and elevate our cricket game together!",
    },
    {
      text: "To stay tuned for updates, events, and the latest new in the world of cricket follow us on instagram at ",
      link: {
        url: "https://www.instagram.com/queens_cricket",
        text: "@queens_cricket!",
      },
    },
        text: "@queens_cricket!",
      },
    },
  ];

  return (
    <>
      <div className="home-container">
        <div className="overlay"></div>
        <div className="content">
          <p className="title">QUEEN'S CRICKET CLUB</p>
          <p className="intro">
            Introducing Cricket to Queen's University and Kingston Community
          </p>
        </div>
      </div>
      <AboutSection title={title} content={content} />
      <div className="reg-box">
        <AboutSection title={'temporary about section'} content={[{text:'image will be located here'}]} />
        <MemberForm />
      </div>
      
    </>
  );
}
}

export default Home;

