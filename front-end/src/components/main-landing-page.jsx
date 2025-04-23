import { useEffect, useState } from "react";
import "./main-landing-page.css";

export function MainPage() {
  // set the time to loc time string
  const [date, setDate] = useState(null);

  // switch between different day time
  const [dayTime, setDayTime] = useState(null);

  useEffect(() => {
    // set the date to local time string
    setDate(new Date().toLocaleTimeString());

    // check if the time is before 12, between 12 and 18, or after 18
    if (new Date().getHours() < 12) {
      setDayTime("Good Morning");
    } else if (new Date().getHours() < 18 && date.getHours() >= 12) {
      setDayTime("Good Afternoon");
    } else {
      setDayTime("Good Evening");
    }
  }, []);

  return (
    <>
      <div className="main-page__container">
        <section className="main-page__Hero">
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
                  stroke="#0D2F6E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>
      </div>
      ;
    </>
  );
}
