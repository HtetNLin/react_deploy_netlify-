import Typical from "react-typical";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <div className="profile-container">

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>

        <div className="profile-parent">

          <div className="profile-details">

           
            <div className="profile-details-name">
              <span className="primary-text1">
                {""}
                Hi , I'm <span className="highlighted-text">HNL</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Htet Nay Lin",
                      3000,
                      "Web Developer",
                      3000,
                      "React",
                      3000,
                      "Developer",
                      3000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  Everything is great.
                </span>
              </span>
            </div>
            <div className="profile-options">
              <a href="hnl.pdf" download="hnl.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
       
       </div>
      </div>
    </div>
  );
};

export default Profile;
