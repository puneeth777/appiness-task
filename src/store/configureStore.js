import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

let loggerMiddleware = createLogger();


export default function configureStore(initialState) {
    
    return createStore(rootReducer, initialState,
    applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );

}
