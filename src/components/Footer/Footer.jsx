import React from "react";
import "./footer.scss";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "10172a145dmshb83dac7d267dc78p10d21bjsn9dbfe6a5073d",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((result) => console.log(result));

  return (
    <div className="footer">
      <div className="icons">
        <div className="sm-icons">
          <a
            href="https://www.linkedin.com/in/dipesh-yadav-174911212/"
            rel="noreferrer"
            target="_blank"
            className="icon"
          >
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-linkedin hovered"></i>
          </a>
          <a
            href="https://github.com/techboydk"
            rel="noreferrer"
            target="_blank"
            className="icon"
          >
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-github hovered"></i>
          </a>
        </div>
      </div>
      <div className="text">
        © <span>{year}</span>, All right reserved <strong>Dipesh Yadav</strong>
      </div>
    </div>
  );
};

export default Footer;
