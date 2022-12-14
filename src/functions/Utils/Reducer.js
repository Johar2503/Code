export const initialState = {
    user: null,
    userType: null
};
  
export const actionTypes = {
    SET_USER: "SET_USER"
};
  
const reducer = (state, action) => {
    switch(action.type) {
        case actionTypes.SET_USER:
            return {
                ...state, 
                user: action.user,
                userType: action.userType,
            };
        default: 
            return state;
    }
}
  
export default reducer;