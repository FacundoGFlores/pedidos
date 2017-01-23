import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import pedidos from './pedidosReducer';

const rootReducer = combineReducers({
  form: formReducer,
  pedidos,
});

export default rootReducer;
