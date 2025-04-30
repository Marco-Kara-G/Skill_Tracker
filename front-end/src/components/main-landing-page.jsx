import { useEffect, useState } from "react";
import "./main-landing-page.css";
import separatorImg from "../assets/BG_Separator_Main-Page_V2.webp";

export function MainPage() {
  // switch between different day time
  const [dayTime, setDayTime] = useState(null);

  useEffect(() => {
    // check if the time is before 12, between 12 and 18, or after 18
    if (new Date().getHours() < 12) {
      setDayTime("Good Morning");
    } else if (new Date().getHours() < 18 && new Date().getHours() >= 12) {
      setDayTime("Good Afternoon");
    } else {
      setDayTime("Good Evening");
    }
  }, []);

  return (
    <>
      <div className="main-page__container">
        <section className="main-page__hero">
          <div className="hero__text">
            <h2>{dayTime}</h2>
            <h4>*********</h4>
          </div>
          <p>carry on your jurney </p>
          <div className="hero__BTN-container">
            <button className="hero__BTN">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 24H36M36 24L28 16M36 24L28 32"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>
        <div
          className="main-page__separator"
          style={{
            backgroundImage: `url(${separatorImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "250px",
            opacity: "1",
            bottom: "100px",
            position: "relative",
            borderRadius: "1rem",
            zIndex: "0",
          }}
        ></div>
        <section className="main-page_navigation">
          <div className="navigation__container">
            <div className="navigation__item">
              <div className="item__text">
                <h4>My Profile</h4>
                <p>View and edit your profile</p>
              </div>
              <div className="item__icon"></div>
            </div>
            <div className="navigation__item">
              <div className="item__text">
                <h4>My Profile</h4>
                <p>View and edit your profile</p>
              </div>
              <div className="item__icon"></div>
            </div>
            <div className="navigation__item">
              <div className="item__text">
                <h4>My Profile</h4>
                <p>View and edit your profile</p>
              </div>
              <div className="item__icon"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
