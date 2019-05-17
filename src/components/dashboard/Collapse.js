import React from "react";
import { Collapse, Icon, Progress } from "antd";
import axios from "axios";

const Panel = Collapse.Panel;

const customPanelStyle = {
  background: "#f7f7f7",
  borderRadius: 4,
  marginBottom: 7,
  border: 0,
  overflow: "hidden"
};

class ResultCollapse extends React.Component {
  state = {
    polls: []
  };
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/polls`)
      .then(res => {
        console.log(res);
        this.setState({
          polls: res.data.polls
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Collapse
          bordered={false}
          defaultActiveKey={["0"]}
          expandIcon={({ isActive }) => (
            <Icon type="caret-right" rotate={isActive ? 90 : 0} />
          )}
        >
          {this.state.polls.map((poll, index) => {
            let total = 0;
            poll.options.forEach(option => {
              total += option.voters.length;
            });
            // let percentNumber = 0;
            // if (poll.options.voters.length !== 0) {
            //   percentNumber = (
            //     (poll.options.voters.length / total) *
            //     100
            //   ).toFixed(0);
            // }

            return (
              <Panel header={poll.title} key={index} style={customPanelStyle}>
                <div>
                  {poll.options.map((option, index) => {
                    let percentNumber = 0;
                    if (option.voters.length !== 0) {
                      percentNumber = (
                        (option.voters.length / total) *
                        100
                      ).toFixed(0);
                    }
                    return (
                      <div key={index}>
                        <span>{option.description}</span>{" "}
                        <Progress percent={percentNumber} status="active" />
                        <p style={{ fontSize: "11px" }}>
                          votes: {option.voters.length}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <p style={{ fontWeight: "Bold" }}>Total votes: {total}</p>
                <br />
                {/* <Countdown
                  title="Times left"
                  value={deadline}
                  onFinish={onFinish}
                /> */}
                {/* <CountdownTernary isFinish={deadline} /> */}
              </Panel>
            );
          })}
        </Collapse>
      </div>
    );
  }
}

export default ResultCollapse;
