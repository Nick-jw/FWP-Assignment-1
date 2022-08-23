import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';



function SignIn ({onSignIn}) {
    
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [error, setError] = useState("")
    const navigate = useNavigate()


    let user_list = JSON.parse(localStorage.getItem('users'))
    if (user_list === null) {
    user_list = []  
    }


    const handleSubmit = event => {
        event.preventDefault();
        setError("")
        
        let curr_user_index = -1
        let valid_user = false
        for (var i = 0; i < user_list.length; i++) {
            if (user_list[i]['email'] === email) {
                curr_user_index = i
                valid_user = true 
                break
            }
        }
        if ((valid_user) && password === user_list[curr_user_index]['password']) {
            onSignIn(email);
            navigate('/profile', {replace: true});
        } else{
            setError('Login failed! Email or password do not match');
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
                                    <br/>
                                    {error !== "" &&  <div className = 'alert alert-danger'>{error}</div>}
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
