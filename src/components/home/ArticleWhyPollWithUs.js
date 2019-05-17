import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Image1 from "../../assets/images/connect.png";
import Image2 from "../../assets/images/accessible.png";
import Image3 from "../../assets/images/help.png";
import Image4 from "../../assets/images/deal.png";
import Image5 from "../../assets/images/result.png";

const article = [
  {
    title: "Poll with everyone, every time, and everywhere around the World",
    image: Image1
  },
  {
    title: "Can be accessed from your various platforms",
    image: Image2
  },
  {
    title:
      "Help and simplify your problem, e.g the organizational structure of your business, even simple things that bother you",
    image: Image3
  },
  {
    title: "Unite us with the deal result",
    image: Image4
  },
  {
    title: "Complete, reliable, and competent polling data result",
    image: Image5
  }
];

class ArticlesUs extends Component {
  render() {
    return article.map((article, index) => {
      return index % 2 === 0 ? (
        <div
          key={index}
          style={{
            padding: "10px 25px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "20px"
          }}
        >
          <Fade left>
            <h4 style={{ padding: "25px 25px" }}>{article.title}</h4>
            <img
              src={article.image}
              alt="poll-with-us"
              style={{ width: "auto", height: "165px" }}
            />
          </Fade>
        </div>
      ) : (
        <div
          key={index}
          style={{
            padding: "25px 15px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "20px"
          }}
        >
          <Fade right>
            <img
              src={article.image}
              alt="poll-with-us"
              style={{ width: "auto", height: "165px" }}
            />
            <h4 style={{ padding: "25px 25px" }}>{article.title}</h4>
          </Fade>
        </div>
      );
    });
  }
}

export default ArticlesUs;
