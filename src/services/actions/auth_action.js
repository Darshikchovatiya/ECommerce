import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth, provider } from "../../Firebase"

export const signupAsync = (data) => {
    return dispatch => {
        createUserWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
            const user = userCredential.user;
            // console.log("user", user);
            dispatch(signup_suc(user));

        }).catch((error) => {
            // console.log("err", err);
            const errorCode = error.code;
            dispatch(signup_err(errorCode));
            // const errorMessage = error.message;
        })
    }
}

const signup_suc = (user) => {
    return {
        type: "Signup_Suc",
        payload: user
    }
}

const signup_err = (msg) => {
    return {
        type: "Signup_Err",
        payload: msg
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



export const GoogleSignAsync = () => {
    return dispatch => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                // console.log(result,"credential");
                // console.log(credential,"credential");
                dispatch(Googlesign_suc(user));


            }).catch((error) => {
                // console.log(error, "error");
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);

                dispatch(Googlesign_err(errorCode));
                // ...
            });
    }
}


const Googlesign_suc = (user) => {
    return {
        type: "googleSign_Suc",
        payload: user
    }
}

const Googlesign_err = (msg) => {
    return {
        type: "googleSign_Err",
        payload: msg
    }
}



export const LogoutAsync = () => {
    return dispatch => {
        signOut(auth).then((res) => {
            // console.log(res, "res");
            dispatch(Logout_suc());
            // Sign-out successful.
        }).catch((error) => {
            // console.log(error, "error");
            dispatch(Logout_err(error));
            // An error happened.
        });
    }
}

const Logout_suc = () => {
    return {
        type: "logout_Suc"
    }
}

const Logout_err = (msg) => {
    return {
        type: "logout_Err",
        payload: msg
    }
}