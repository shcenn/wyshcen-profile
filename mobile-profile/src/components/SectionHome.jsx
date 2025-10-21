import monkey from "../assets/images/monkey.jpg";

function SectionHome({ onSectionChange }) {
  return (
    <>
      <h1>◆ Wyshcen Uy ◆</h1>
      <img className="profile-img" src={monkey} alt="Profile" />
      <h4>student, developer, and illustrator</h4>
      <p>I love making digital art and</p>
      <p>sharing my work online.</p>
      <button
        className="cta-button"
        onClick={() => onSectionChange("about")}
      >
        Learn More
      </button>
    </>
  );
}

export default SectionHome;
