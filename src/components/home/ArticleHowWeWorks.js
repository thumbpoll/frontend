import React from "react";
import Fade from "react-reveal/Fade";
import Image1 from "../../assets/images/question.png";
import Image2 from "../../assets/images/response.png";
import Image3 from "../../assets/images/instant-result.png";

const articles = [
  {
    image: Image1,
    title: "Ask a question",
    description:
      "Question can be about organizational structure, event issues with friends or partners, even trivial things like eating places, watching movies and so on"
  },
  {
    image: Image2,
    title: "Collect consensus response",
    description:
      "Invite the participant to take a roll and do a poll to make a consensus response or result"
  },
  {
    image: Image3,
    title: "See instant result",
    description:
      "You can set how long the poll will be active and see the actual result."
  }
];

class ArticlesWorks extends React.Component {
  render() {
    return articles.map((article, index) => {
      return (
        <div style={{ display: "inline-block", margin: "0 5px" }} key={index}>
          <div
            style={{
              width: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            <Fade bottom>
              <img
                src={article.image}
                alt="how-we-work"
                style={{ height: "auto", width: "150px" }}
              />
              <h4>{article.title}</h4>
              <p style={{ fontSize: "12px", color: "black" }}>
                {article.description}
              </p>
            </Fade>
          </div>
        </div>
      );
    });
  }
}
export default ArticlesWorks;
