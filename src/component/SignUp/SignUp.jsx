import React from 'react'
import { useNavigate } from 'react-router';
import '../SignIn/SignIn.css'

function SignUp() {

    const navigate = useNavigate();

    const handleSignup = () => {

    }


    return (
        <>
            <div className="limiter">
                <div className="container-login100" >
                    <div className="wrap-login100">
                        <form className="login100-form validate-form" id='form_val'>
                            <span className="login100-form-title">Sign Up With</span>

                            <a className="btn-google">
                                <img src="icon-google.png" alt="GOOGLE" />Google
                            </a>

                            <div className="ema_ptb">
                                <span className="txt1">Email</span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Email is required">
                                <input className="input100" type="text" name="email" />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="pas_ptb">
                                <span className="txt1">Password</span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="password" />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="pas_ptb">
                                <span className="txt1">Confirm Password</span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Confirm Password is required">
                                <input className="input100" type="password" name="c_password" />
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
                                <a className="txt2 bo1" style={{cursor: "pointer"}} onClick={()=>navigate('/signin')}>
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