export default function pedidoReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_PEDIDO':
      return [...state, Object.assign({}, action.pedido)];
    default:
      return state;
  }
}
