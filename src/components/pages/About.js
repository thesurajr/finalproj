import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("item")) {
      navigate("/signup");
    }
  }, []);
  return (
    <div>
      <h3 className="about">This is the About Page....</h3>
    </div>
  );
};

export default About;
