const initionState = {
    suc: '',
    err: '',
    user: '',
    isLogin: false,
    isSignup: false
}

export const Auth_Re = (state = initionState, action) => {
    switch (action.type) {
        case "Signin_Suc":
            return{
                ...state,
                suc: "SignIn Successfully",
                isLogin: true,
                user: action.payload,
                err: ''
            }

        case "Signin_Err":
            return{
                ...state,
                err: action.payload
            }

        case "googleSign_Suc":
            return{
                ...state,
                suc: "SignIn Successfully",
                isLogin: true,
                user: action.payload,
                err: ''
            }

        case "googleSign_Err":
            return{
                ...state,
                err: action.payload
            }

        case "logout_Suc":
            return{
                ...state,
                suc: "Logout Successfully",
                isLogin: false,
                user: '',
                err: ''
            }
    
        default:
            return state;
    }
}