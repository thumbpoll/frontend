import React from "react";
import { Card } from "antd";

const { Meta } = Card;

class BigCard extends React.Component {
  render() {
    return (
      <Card
        hoverable
        style={{ width: 140 }}
        cover={
          <img
            alt="jumbotron"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      />
    );
  }
}
export default BigCard;
