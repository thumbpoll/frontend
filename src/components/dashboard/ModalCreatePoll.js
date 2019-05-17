import React from "react";
import { Button, Modal, Form, Input, Icon, message } from "antd";
import { connect } from "react-redux";
import { createPoll } from "../../redux/actions/create";
import { withRouter } from "react-router-dom";
import axios from "axios";

// MODAL
let id = 0;
const CreatePollForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    remove = k => {
      const { form } = this.props;
      // can use data-binding to get
      const keys = form.getFieldValue("keys");
      // We need at least one passenger
      if (keys.length === 1) {
        return;
      }

      // can use data-binding to set
      form.setFieldsValue({
        keys: keys.filter(key => key !== k)
      });
    };

    add = () => {
      const { form } = this.props;
      // can use data-binding to get
      const keys = form.getFieldValue("keys");
      const nextKeys = keys.concat(id++);
      // can use data-binding to set
      // important! notify form to detect changes
      form.setFieldsValue({
        keys: nextKeys
      });
    };
    render() {
      const { getFieldDecorator, getFieldValue } = this.props.form;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 }
        }
      };
      const formItemLayoutWithOutLabel = {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 }
        }
      };
      getFieldDecorator("keys", { initialValue: [] });
      const keys = getFieldValue("keys");
      const formItems = keys.map((k, index) => (
        <Form.Item
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label={index === 0 ? "Option" : ""}
          required={true}
          key={k}
        >
          {getFieldDecorator(`options[${k}]`, {
            validateTrigger: ["onChange", "onBlur"],
            rules: [
              {
                required: true,
                whitespace: true,
                message: "Please input option or delete this field."
              }
            ]
          })(
            <Input
              placeholder="option"
              style={{ width: "60%", marginRight: 8 }}
              onChange={this.handleChange}
            />
          )}
          {keys.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              onClick={() => this.remove(k)}
            />
          ) : null}
        </Form.Item>
      ));
      const { visible, onCancel, onCreate } = this.props;

      return (
        <Modal
          visible={visible}
          title="Create a Poll"
          okText="Create"
          width="475px"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <div layout="vertical">
            <Form.Item label="Title">
              {getFieldDecorator("title", {
                rules: [
                  {
                    required: true,
                    message: "Please input the title of Poll!"
                  }
                ]
              })(<Input onChange={this.handleChange} />)}
            </Form.Item>
            <Form onSubmit={this.handleSubmit}>
              {formItems}
              <Form.Item {...formItemLayoutWithOutLabel}>
                <Button
                  type="dashed"
                  onClick={this.add}
                  style={{ width: "60%" }}
                >
                  <Icon type="plus" /> Add options
                </Button>
              </Form.Item>
              <Form.Item {...formItemLayoutWithOutLabel} />
            </Form>
          </div>
          {/* <DateRange /> */}
        </Modal>
      );
    }
  }
);

class PollModal extends React.Component {
  state = {
    visible: false,
    title: "",
    option: ""
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields(async (err, values) => {
      if (err) {
        return;
      }

      const postPollsRes = await axios
        .post(
          `${process.env.REACT_APP_API_URL}/polls`,
          { title: values.title },
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.token}`
            }
          }
        )
        .then(res => res, message.success("Poll created", 1))
        .catch(err => err);

      if (postPollsRes.status === 200) {
        values.options.forEach((value, index) => {
          axios
            .post(
              `${process.env.REACT_APP_API_URL}/options`,
              {
                description: value,
                pollId: postPollsRes.data.resultPoll._id
              },
              {
                headers: {
                  Authorization: `Bearer ${window.localStorage.token}`
                }
              }
            )
            .then(res => {
              console.log(res);
              this.props.history.push("/poll");
            })
            .catch(err => {
              console.log(err);
            });
        });
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
      // console.log(this.state)
    );
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Create a Poll
        </Button>
        <CreatePollForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { createPoll }
)(withRouter(PollModal));
