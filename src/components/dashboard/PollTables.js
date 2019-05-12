import React from "react";
import { Table, Divider } from "antd";

const columns = [
  {
    title: "Poll list",
    dataIndex: "poll",
    key: "poll",
    width: "65%",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="javascript:;">Share</a>
        <Divider type="vertical" />
        <a href="javascript:;">Edit</a>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    poll: "Poll 1"
  },
  {
    key: "2",
    poll: "Poll 2"
  },
  {
    key: "3",
    poll: "Poll 3"
  }
];

class PollTable extends React.Component {
  render() {
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default PollTable;
