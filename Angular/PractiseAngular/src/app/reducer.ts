import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR, ADD_TODO, ADD_TODO_SUCCESS,ADD_TODO_ERROR } from "./constant";

const initialState = {
  data: [],
  pending: false,
  error: null
}

export function Reducer( state = initialState, {type, payload} ) {

  switch( type ) {
    // case GET_TODOS:
    //     console.log("get todo")
    //   // return Object.assign({}, state, {pending: true, error: null})
    //   return Object.assign({}, state, {
    //     data: [...state.data, payload]
    //   });
    case GET_TODOS_SUCCESS:
    console.log("get todo GET_TODOS_SUCCESS");
      return Object.assign({}, state, {data: payload, pending: false})
    case GET_TODOS_ERROR:
    console.log("GET_TODOS_ERROR");
      return Object.assign({}, state, {pending: false, error: "Error"})
    case ADD_TODO_SUCCESS:
        console.log("ADD_TODO_SUCCESS");
      return Object.assign({}, state, {
        data: [...state.data, payload]
      });
  case ADD_TODO:
    console.log("comming to Reducer");
    // return Object.assign({}, state, {
    //   data: [...state.data, payload]
    // });
    default:
    console.log("default");
      return state;
  }
}
