import React from "react";
import { Table, Checkbox } from "antd";

const columns = [
  {
    title: "ID",
    width: "1%",
    dataIndex: "id",
    key: "id",
    fixed: "left"
  },
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left"
  },
  { title: "Email", dataIndex: "email", key: "email" },
  {
    title: "Add as participant",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => (
      <Checkbox
        onChange={function onChange(e) {
          console.log(`checked = ${e.target.checked}`);
        }}
        style={{ marginLeft: "30px" }}
      />
    )
  }
];

const data = [
  {
    key: "1",
    id: "1",
    name: "Atta Ashiap",
    email: "atta@ashiap.com"
  },
  {
    key: "2",
    id: "2",
    name: "Atta Ashiap",
    email: "atta@ashiap.com"
  },
  {
    key: "3",
    id: "3",
    name: "Atta Ashiap",
    email: "atta@ashiap.com"
  }
];

class ParticipantTables extends React.Component {
  render() {
    return (
      <div>
        <Table columns={columns} dataSource={data} scroll={{ x: 400 }} />,
      </div>
    );
  }
}
export default ParticipantTables;
