import React, { Fragment } from "react";
import { Table, Modal, Radio } from "antd";
import RadioGroup from "antd/lib/radio/group";
import fetchPoll from "../../redux/actions/polls";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";

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
    activeIndex: 0,
    optionId: ""
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
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/polls/vote/${
          this.props.pollList[this.state.activeIndex]._id
        }`,
        { optionId: this.state.optionId },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.token}`
          }
        }
      )
      .then(res => {
        console.log(res);
        this.props.history.push("/results");
      })
      .then(err => {
        console.log(err);
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

  onClickRadio = e => {
    this.setState({
      optionId: e.target.value
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
                  <Radio value={data._id} onClick={this.onClickRadio}>
                    {data.description}
                  </Radio>
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
)(withRouter(PollTable));
