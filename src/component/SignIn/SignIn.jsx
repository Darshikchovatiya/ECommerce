import React, { useState } from 'react'
import '../SignIn/SignIn.css';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleSignAsync, signinAsync } from '../../services/actions/auth_action';
import { Form } from 'react-bootstrap';


function SignIn() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { err, isLogin } = useSelector(state => state.Auth_Re);
    // console.log(err, "err");


    const [inputFiled, setInputFiled] = useState({
        email: '',
        password: ''
    })



    const handleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        // console.log(name ,":", value );
        setInputFiled({ ...inputFiled, [name]: value });

    }

    const handleSignin = (e) => {
        e.preventDefault();


        if(inputFiled.email == "" && inputFiled.password == ""){
            alert("Please Enter Email & Password");
        }
        else{
            dispatch(signinAsync(inputFiled));
            if(inputFiled.email == ""){
                alert("Please Enter Email");
            }
            else if(inputFiled.password == ""){
                alert("Please Enter Password");
            }
            else if(err == 'auth/wrong-password'){
                alert("Your Password is Wrong");
            }
            else if(err == 'auth/invalid-login-credentials' || err == 'auth/user-not-found'){
                alert("Don't have an account? Please Sign Up");
                navigate('/signup');
            }
            
            if(isLogin){
                alert("Login Successfully");
                navigate('/');

            }
        }

    }


    const handleGoogle = async () => {

        await dispatch(GoogleSignAsync());
        
    }

    // if(isLogin){
    //     alert("SignIn Successfully");
    //     navigate('/');
    // }


    return (
        <>
            <div className="limiter">
                <div className="container-login100" >
                    <div className="wrap-login100">

                        <form className="login100-form validate-form">
                            <span className="login100-form-title">Sign In With</span>

                            <a className="btn-google" onClick={handleGoogle}>
                                <img src="icon-google.png" alt="GOOGLE" />Google
                            </a>

                            <div className="ema_ptb">
                                <span className="txt1">Email</span>
                            </div>

                            <div className="wrap-input100 validate-input">

                                <input className="input100" onChange={handleChange} type="email" name="email" value={inputFiled.email} />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="pas_ptb">
                                <span className="txt1">Password</span>
                            </div>

                            <div className="wrap-input100 validate-input">
                                <input className="input100" onChange={handleChange} type="password" name="password" value={inputFiled.password} />
                                <span className="focus-input100"></span>
                            </div>

                            <a className="txt2 bo1" style={{ marginTop: "15px", cursor: "pointer" }}>
                                Forgot Password
                            </a>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" onClick={handleSignin}>
                                    Sign In
                                </button>
                            </div>

                            <div className="noame_supn">
                                <span className="txt2" style={{ marginRight: "10px" }}>
                                    Not a member?
                                </span>
                                <a className="txt2 bo1" style={{ cursor: "pointer" }} onClick={() => navigate('/signup')}>
                                    Sign up now
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;













