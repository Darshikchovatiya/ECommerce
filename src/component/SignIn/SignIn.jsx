import React, { useState } from 'react'
import '../SignIn/SignIn.css';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleSignAsync, signinAsync } from '../../services/actions/auth_action';
import { Form } from 'react-bootstrap';


function SignIn() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { err, user } = useSelector(state => state.Auth_Re);
    // console.log(err, "err");


    // const [validated, setValidated] = useState(false);


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

        // let form = e.currentTarget;


        // if (form.checkValidity() === false) {
        //     e.stopPropagation();
        // }
        // setValidated(true);


        e.preventDefault();

        // let validInpu = document.getElementById('valid_inpu');

        // inputFiled.email == "" && inputFiled.password == "" ? validInpu.classList.add('alert-validate') : dispatch(signinAsync(inputFiled));



        // if(inputFiled.email == ""){

        //     let validInpu = document.getElementById('valid_inpu');
        //     validInpu.classList.add('alert-validate');
        //     // alert("Fill the Form");

        //     // err == "auth/invalid-email" ? "Please Enter Details" : ""


        // }
        // else if(inputFiled.password == ""){
        //     let validInpu = document.getElementById('valid_inpu');
        //     validInpu.classList.add('alert-validate');
        // }
        // else{
        //     let validInpu = document.getElementById('valid_inpu');

        //     validInpu.classList.remove('alert-validate');
        //     dispatch(signinAsync(inputFiled));
        // }




    }


    const handleGoogle = async () => {

        await dispatch(GoogleSignAsync());
        await alert("SignIn Successfully");
        await navigate('/');
    }


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

                            <div className="wrap-input100 validate-input" id='valid_inpu'

                                data-validate={
                                    err == "auth/invalid-email" ? "Please Enter Details" : err == "auth/missing-password" ? "Please Enter Password" : err == "auth/wrong-password" ? "Your Password is Wrong" : err == "auth/user-not-found" ? "Don't have an account? Please Sign Up" : ""
                                } >

                                <input className="input100" onChange={handleChange} type="text" name="email" value={inputFiled.email} />
                                <span className="focus-input100"></span>
                                {/* <Form.Control.Feedback type="invalid">
                                    Please Enter Email
                                </Form.Control.Feedback> */}

                                {/* <input type="email" className="input100" name="email" value={inputFiled.email} onChange={handleChange} required />
                                <Form.Control.Feedback type="invalid">
                                    Please Enter Email
                                </Form.Control.Feedback> */}
                            </div>

                            <div className="pas_ptb">
                                <span className="txt1">Password</span>
                            </div>

                            <div className="wrap-input100 validate-input" id='valid_inpu' data-validate={
                                err == "auth/invalid-email" ? "Please Enter Details" : err == "auth/missing-password" ? "Please Enter Password" : err == "auth/wrong-password" ? "Your Password is Wrong" : err == "auth/user-not-found" ? "Don't have an account? Please Sign Up" : ""
                            }>
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













