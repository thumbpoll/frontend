import React, { Fragment } from "react";
import { Table, Modal, Radio } from "antd";
import RadioGroup from "antd/lib/radio/group";
import fetchPoll from "../../redux/actions/polls";
import { connect } from "react-redux";

const columns = [
  {
    title: "Poll list",
    dataIndex: "title",
    key: "title",
    width: "65%",
    render: text => <a href="#link">{text}</a>
  }
  // {
  //   title: "Action",
  //   key: "action",
  //   render: (text, record) => (
  //     <span>
  //       {/* <a href="#link">Share</a>
  //       <Divider type="vertical" /> */}
  //       <a href="#link">Edit</a>
  //     </span>
  //   )
  // }
];

class PollTable extends React.Component {
  componentDidMount() {
    this.props.fetchPoll();
  }
  state = {
    visible: false,
    data: [],
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
    const { activeIndex, visible } = this.state;
    const { pollList } = this.props;
    // const pollList = data.length ? (
    //   data.map(dataItem => {
    //     return <div key={dataItem.id}>{dataItem.title}</div>;
    //   })
    // ) : (
    //   <div>No Polls yet</div>
    // );

    return (
      <div>
        <Table
          columns={columns}
          dataSource={pollList}
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
          title=""
          visible={visible}
          width="475px"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <h2>{pollList[activeIndex] && pollList[activeIndex].title}</h2>
          <RadioGroup>
            {pollList[activeIndex] &&
              pollList[activeIndex].options &&
              pollList[activeIndex].options.map((data, index) => (
                <Fragment key={index}>
                  <Radio value={data.description}>{data.description}</Radio>
                  <br />
                  <br />
                </Fragment>
              ))}
          </RadioGroup>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  pollList: store.polls.pollList
});

export default connect(
  mapStateToProps,
  { fetchPoll }
)(PollTable);
