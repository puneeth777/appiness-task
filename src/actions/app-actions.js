import * as types from './action-types';
import { message } from 'antd';
const user = {"username":"hruday@gmail.com", "password":"hruday123"};
const userList = [{
    "id":1,
    "name":"test1",
    "age" : "11",
    "gender":"male",
    "email" : "test1@gmail.com",
    "phoneNo" : "9415346313"
    },
    {
    "id" : 2,
    "name":"test2",
    "age" : "12",
    "gender":"male",
    "email" : "test2@gmail.com",
    "phoneNo" : "9415346314"
    },
    {
    "id":3,
    "name":"test3",
    "age" : "13",
    "gender":"male",
    "email" : "test3@gmail.com",
    "phoneNo" : "9415346315"
    },
    {
    "id":4,
    "name":"test4",
    "age" : "14",
    "gender":"male",
    "email" : "test4@gmail.com",
    "phoneNo" : "9415346316"
    },
    {
    "id":5,
    "name":"test5",
    "age" : "15",
    "gender":"male",
    "email" : "test5@gmail.com",
    "phoneNo" : "9415346317"
    },
    {
    "id":6,
    "name":"test6",
    "age" : "16",
    "gender":"male",
    "email" : "test6@gmail.com",
    "phoneNo" : "9415346318"
    }
   ];

export function userLogin(credentials) {
    let loggedIn = false;
    if(user.username===credentials.username && user.password===credentials.password) {
        loggedIn = true;
    }else{
        message.warning('Invalid user');
    }
    let login = {user:loggedIn};
    console.log(credentials,login)
        return { type: types.USER_LOGIN_SUCCESS, login };
}

export function fetchUserList() {
    return { type: types.LIST_USERS_SUCCESS, userList };
}