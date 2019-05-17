import React from "react";
import { Collapse, Icon, Progress, Statistic } from "antd";
import axios from "axios";

const Panel = Collapse.Panel;
const Countdown = Statistic.Countdown;
const time = 1000 * 60 * 60 * 0 * 1 + 5000;
const deadline = Date.now() + time;
function onFinish() {
  console.log("finished!");
}

const CountdownRunning = () => {
  return <Countdown title="Times left" value={deadline} onFinish={onFinish} />;
};

const CountdownFinish = () => {
  return <Progress type="circle" percent={100} format={() => "Done"} />;
};

class CountdownTernary extends React.Component {
  render() {
    return time === onFinish ? <CountdownRunning /> : <CountdownFinish />;
  }
}

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
            return (
              <Panel header={poll.title} key={index} style={customPanelStyle}>
                <div>
                  {poll.options.map((option, index) => (
                    <div key={index}>
                      <span>{option.description}</span>{" "}
                      <Progress
                        percent={parseInt(
                          (option.voters.length / total) * 100
                        ).toFixed(0)}
                        status="active"
                      />
                    </div>
                  ))}
                </div>
                <br />
                <Countdown
                  title="Times left"
                  value={deadline}
                  onFinish={onFinish}
                />
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
