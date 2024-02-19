/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Book.jpg";

const imageAltText = "Read the books";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Red Wine Quality Predictor",
    description:
      "Predict the Quality of the red wine given the physiochemical data of the wine. Improved the accuracy of the model using EDA and features selection using correlations.",
    url: "https://github.com/Garvit414/Projects/tree/main/Red_Wine_Quality_Prediction",
  },
  {
    title: "A Eye Vision",
    description:
      "An extraordinary device of AIoT for blind people and create social impact as well Taking video input from esp32 camera module and converting them into speech by using object detection for the blinds.",
    url: "https://github.com/Garvit414/A-EYE-VISION",
  },
  {
    title: "Basic Python Projects",
    description:
      "The basic python projects or tasks.",
    url: "https://github.com/Garvit414/Analystt.ai-Task",
  },
  {
    title: "Zero Fi",
    description:
      "ZeroFi is the website integrated with the Machine Learning and Blockchain that helps to provide microloans to people with Zero-interest loans, pure CSR.",
    url: "https://github.com/Garvit414/ZeroFi",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
