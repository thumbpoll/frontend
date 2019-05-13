import React from "react";
import { Table, Divider, Modal } from "antd";

const columns = [
  {
    title: "Poll list",
    dataIndex: "poll",
    key: "poll",
    width: "65%",
    render: text => <a href="">{text}</a>
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="">Share</a>
        <Divider type="vertical" />
        <a href="">Edit</a>
      </span>
    )
  }
];

class PollTable extends React.Component {
  state = {
    visible: false,
    data: [
      {
        key: "1",
        poll: "Sobat Sebat mau kumpul dimana malam ini?",
        option: [
          {
            id: 1,
            description: "McD"
          },
          {
            id: 2,
            description: "Starbucks"
          }
        ]
      },
      {
        key: "2",
        poll: "Poll 2"
      },
      {
        key: 3,
        poll: "Poll 3"
      }
    ],
    activeIndex: 0
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  setActiveIndex = index => {
    this.setState({
      activeIndex: index
    });
  };
  render() {
    return (
      <div>
        <Table
          columns={columns}
          dataSource={this.state.data}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                this.showModal();
                this.setActiveIndex(rowIndex);
                event.preventDefault();
              }
            };
          }}
        />
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{this.state.data[this.state.activeIndex].poll}</p>
          <p>
            {
              this.state.data[this.state.activeIndex].option[
                this.state.activeIndex
              ].description
            }
          </p>
        </Modal>
      </div>
    );
  }
}

export default PollTable;
