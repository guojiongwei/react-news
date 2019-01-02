import { combineReducers } from 'redux'

const todoCart = (state = '1111', action) => {
  const { type, data} = action;
  switch (type){
  	case "ADD_CART":
  	   return data;
  		// break;
	  case "DEL_CART":
	   return []
	   return state
      //break; 
   	default:
	   return state;
  }
}


let reducer = combineReducers({
  todoCart
})
export default reducer;