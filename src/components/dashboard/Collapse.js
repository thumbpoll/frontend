import React from "react";
import { Collapse, Icon, Progress, Statistic } from "antd";

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

const text = (
  <div>
    <span>Option 1</span> <Progress percent={30} status="active" />
    <span>Option 2</span> <Progress percent={50} status="active" />
    <span>Option 3</span> <Progress percent={20} status="active" />
  </div>
);

const customPanelStyle = {
  background: "#f7f7f7",
  borderRadius: 4,
  marginBottom: 7,
  border: 0,
  overflow: "hidden"
};

class ResultCollapse extends React.Component {
  render() {
    return (
      <div>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <Icon type="caret-right" rotate={isActive ? 90 : 0} />
          )}
        >
          <Panel header="Poll 1" key="1" style={customPanelStyle}>
            <div>{text}</div>
            <br />
            <Countdown
              title="Times left"
              value={deadline}
              onFinish={onFinish}
            />
            <CountdownTernary isFinish={deadline} />
          </Panel>
          <Panel header="Poll 2" key="2" style={customPanelStyle}>
            <div>{text}</div>
            <br />
            <Countdown
              title="Times left"
              value={deadline}
              onFinish={onFinish}
            />
          </Panel>
          <Panel header="Poll 3" key="3" style={customPanelStyle}>
            <div>{text}</div>
            <br />
            <Countdown
              title="Times left"
              value={deadline}
              onFinish={onFinish}
            />
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default ResultCollapse;
