import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import '../SignIn/SignIn.css'
import { useDispatch, useSelector } from 'react-redux';
import { GoogleSignAsync, signupAsync } from '../../services/actions/auth_action';

function SignUp() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { err, isSignup, suc } = useSelector(state => state.Auth_Re);
    // console.log(err, "err");


    const [inputFiled, setInputFiled] = useState({
        email: '',
        password: '',
        c_password: ''
    })

    const handleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        // console.log(name ,":", value );
        setInputFiled({ ...inputFiled, [name]: value });

    }

    const handleSignup = async (e) => {
        e.preventDefault();

        if (inputFiled.email == "" && inputFiled.password == "" && inputFiled.c_password == "") {
            alert("Please Enter Email & Password & Confirm Password");
        }
        else {

            if (inputFiled.email == "") {
                alert("Please Enter Email");
            }
            else if (inputFiled.password == "") {
                alert("Please Enter Password");
            }
            else if (inputFiled.c_password == "") {
                alert("Please Enter Confirm Password");
            }
            else if(err == 'auth/weak-password'){
                alert("Your Password is Weak");
            }

            if (inputFiled.password == inputFiled.c_password) {
                if(inputFiled.password.length > 8){
                    await dispatch(signupAsync(inputFiled));
                    navigate('/signin');
                }
                else{
                    alert("Password must be 8 characters");
                }
                // alert("SignUp Successfully");
                // navigate('/signin');
            }
            else {
                alert("Password and Confirm Password is not same");
            }
        }


    }

    const handleGoogle = async () => {

        await dispatch(GoogleSignAsync());

    }


    return (
        <>
            <div className="limiter">
                <div className="container-login100" >
                    <div className="wrap-login100">
                        <form className="login100-form validate-form" id='form_val'>
                            <span className="login100-form-title">Sign Up With</span>

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

                            <div className="pas_ptb">
                                <span className="txt1">Confirm Password</span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Confirm Password is required">
                                <input className="input100" onChange={handleChange} type="password" name="c_password" value={inputFiled.c_password} />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" onClick={handleSignup}>
                                    Sign Up
                                </button>
                            </div>

                            <div className="noame_supn">
                                <span className="txt2" style={{ marginRight: "10px" }}>
                                    Already Account
                                </span>
                                <a className="txt2 bo1" style={{ cursor: "pointer" }} onClick={() => navigate('/signin')}>
                                    Sign in now
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp