import * as types from '../actions/action-types';
import initialState from './initial-state';

export default function (state = initialState.login, action) {
    switch (action.type) {
        case types.USER_LOGIN_SUCCESS: {
            let useroggedIn = action.login.user;
            state = { ...state, user: useroggedIn };
            return state;
        }

        case types.LIST_USERS_SUCCESS: {
            console.log(action);
            let users = action.userList;
            state = { ...state, userList: users };
            return state;
        }

        default:
            return state
    }
}