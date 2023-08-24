import Typewriter from "typewriter-effect";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { about } from "../../portfolio";
import "./About.css";

const About = () => {
  const { name, role, description, social } = about;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Nosheen-CV.pdf";
    link.download = "Nosheen-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" , marginTop: "1rem"}}>
        <h3>I am working in </h3>
        <Typewriter
          options={{
            autoStart: true,

            loop: true,

            delay: 50,

            strings: [
              " ReactJS",

              " NextJS",

              "Redux Toolkit",

              " JavaScript",

              " TypeScript",

              " Bootstrap",

              " Material-UI",

              " Ant Design",

              " React Hook Form",

              " React hooks",

              " React bootstrap",

              " Styled Components",

              " Restfull-API",

              " CSS3",

              " HTML5",
            ],
          }}
        />
      </div>

      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        <span
          onClick={handleDownload}
          type="button"
          className="btn btn--outline"
        >
        Download CV
        </span>

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon fontSize={'large'}/>
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon fontSize={'large'}/>
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
