import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const USERNAME = 'a@hotmail.com';
const PASSWORD = 'a';

function SignIn ({onSignIn}) {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault();
        setError("")
        
        if (email === USERNAME && password === PASSWORD) {
            onSignIn(email);
            navigate('/feed', {replace: true});
        } else{
            setError('Login failed!');
        }
    };
    
    
    return (
        <div className = {"content col-lg-12"}>
            <div className={"container-fluid"}>
                <div className={"row"}>

                    {/*Empty column for the left sidebar */}
                    <div className={"col-sm-1"}></div>

                    {/* This div contains all main content*/}
                    <div className={"col-sm-10 bg-light"} style={{minHeight:500}}>
                        <div style = {{margin:70}}>
                            <div className = {"form-group row mx-auto"} style = {{width:400}}>
                                
                                <div className = {'card-header'}>
                                    <p className = {'h1 text-center'}>Sign In</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label className = {'col-sm2 col-form-label h6'}>Email</label>
                                        <input className = {'form-control'}
                                        type = 'email'
                                        name = 'email'
                                        placeholder='john@example.com'
                                        value = {email}
                                        onChange = {event => {setEmail(event.target.value)}}
                                        required
                                        />
                                    </div>
                                    <div>
                                        <label className= {'col-sm2 col-form-label h6'}>Password</label>
                                        <input className= {'form-control'}
                                        type = 'password'
                                        name = 'password'
                                        placeholder = 'password'
                                        value = {password}
                                        onChange = {event => {setPassword(event.target.value)}}
                                        required
                                        />
                                    </div>
                                    {error !== "" && <div className = 'login'>{error}</div>}
                                    <button className = {'btn btn-primary'} style = {{'margin-top':20}} type = 'submit'>Submit</button>

                                </form>
                            </div>
                        </div>
                    </div>

                {/*Empty column for the right sidebar */}
                <div className={"col-sm-1"}></div>
            </div>
        </div>
    </div>
    );
}

export default SignIn
