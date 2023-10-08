import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../Firebase"

export const signupAsync = () => {
    return dispatch => {
        createUserWithEmailAndPassword(auth, email, password).then((res) => {
            console.log("res", res);
            // const user = userCredential.user;
        }).catch((err) => {
            console.log("err", err);
            // const errorCode = error.code;
            // const errorMessage = error.message;
        })
    }
}

export const signinAsync = (data) => {
    return dispatch => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch(signin_suc(user));
                // console.log(userCredential,"userCredential");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                dispatch(signin_err(errorCode));
            });
    }
}

const signin_suc = (user) => {
    return {
        type: "Signin_Suc",
        payload: user
    }
}

const signin_err = (msg) => {
    return {
        type: "Signin_Err",
        payload: msg
    }
}