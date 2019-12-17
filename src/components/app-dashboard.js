import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../actions/app-actions';
import "antd/dist/antd.css";
import "../index.css";
import { Layout, Table } from "antd";
const { Header, Content, Footer } = Layout;
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{text}</a>,
      },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone No',
      dataIndex: 'phoneNo',
      key: 'phoneNo',
    }
  ];

class AppDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList:this.props.userList
        };
      }

    componentWillMount() {
        this.props.actions.fetchUserList();
    }

  componentWillReceiveProps(nextProps) {
    this.setState({userList:nextProps.userList});
  }

  render() {
      console.log(this.state.userList)
    return (
      <Layout className="layout">
        <Header>
          <div><h3 className="logo">Welcome Hruday</h3></div>
        </Header>
        <Content style={{ padding: "25px 50px" }}>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            <h4>Dashboard</h4>
            <Table columns={columns} dataSource={this.state.userList} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

function mapStoreToProps(state) {
    return {
      userList:state.login.userList
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(appActions, dispatch)
    };
  }
  
  export default connect(
    mapStoreToProps,
    mapDispatchToProps
  )(AppDashboard);
