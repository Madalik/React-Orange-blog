import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <section>
      <div className="image">
        <img
          src="https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
          alt=""
        />
      </div>
      <div className="content">
        <h2>About Me</h2>
        <p className="about">
          My name is Madalina, a Front End developer from Brasov. I am confident
          that my determination, my learning and growing desire will take me
          very quickly to higher levels in Web Designing. <br></br>
          My hobbies include
          traveling, skiing and hiking. Since I am curently in the learning
          stage, I am looking forward to excitind projects to work on.
        </p>
        <ul className="links">
          <li>
            <a target="_blank" href="https://github.com/Madalik/">
              my work
            </a>
          </li>
          <div className="vertical-line"></div>
        </ul>
        <p>Contact: Madalina Bularca</p>
        <p>E-mail: bularcamada@gmail.com</p>
        <p>Phone: +40 764 089 888</p>

        <ul className="icons">
          <li>
            <a target="_blank" href="https://www.facebook.com/">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/?lang=en">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.github.com/">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
