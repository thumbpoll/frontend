import React from "react";
import { Table, Divider, Modal, Radio } from "antd";
import RadioGroup from "antd/lib/radio/group";

const columns = [
  {
    title: "Poll list",
    dataIndex: "poll",
    key: "poll",
    width: "65%",
    render: text => <a href="#link">{text}</a>
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="#link">Share</a>
        <Divider type="vertical" />
        <a href="#link">Edit</a>
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
        poll: "Poll 2",
        option: [
          {
            id: 1,
            description: "option 1"
          },
          {
            id: 2,
            description: "option 2"
          },
          {
            id: 3,
            description: "option 3"
          }
        ]
      },
      {
        key: 3,
        poll: "Poll 3",
        option: [
          {
            id: 1,
            description: "option 1"
          },
          {
            id: 2,
            description: "option 2"
          },
          {
            id: 3,
            description: "option 3"
          }
        ]
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
          <RadioGroup>
            <Radio value={1}>
              {this.state.data[this.state.activeIndex].option[0].description}
            </Radio>
            <br />
            <br />
            <Radio value={2}>
              {this.state.data[this.state.activeIndex].option[1].description}
            </Radio>
          </RadioGroup>
        </Modal>
      </div>
    );
  }
}

export default PollTable;
