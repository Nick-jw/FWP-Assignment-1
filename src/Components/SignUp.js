import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp () {

    {/* Variables to hold state of login information */}
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
<<<<<<< HEAD
    const [error, setError] = useState("")
=======
    {/* Router setup for redirecting on successful login */}
>>>>>>> 8b210d6655d466bcdc7ee7cc328c7cbf197303ff
    const navigate = useNavigate()


    {/* Record input values in state variables */}
    const onUserChange = (e) => {
        setUsername(e.target.value)
    }

    const onPassChange = (e) => {
        setPassword(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }



    const onSubmit = (e) => {
        e.preventDefault()

        {/* Regex of 'special characters' required for a strong password */}
        const required_chars = /[!@#$%&]/

        {/* Check if password is 'strong' (8 chars long and has 1 special char) */}
        if ((password.length >= 8) && required_chars.test(password)) {

            {/* Gets array of users from local storage, initializes to empty array if null */}
            let users_list = JSON.parse(localStorage.getItem('users'))

            if (users_list === null) {  
            users_list = [] 
            }   

            {/* Data structure for saving user data */}
            let curr_user = {
                'username': username,
                'email': email,
                'password': password,
                'posts': []
            }

            {/* Adds new user to user list and pushes to local storage */}
            users_list.push(curr_user)
            localStorage.setItem('users', JSON.stringify(users_list))
<<<<<<< HEAD
            setError("")
            
        }
        else {
            setError("Password does not meet requirements:\nMust be at least 8 characters long\nMust contain one of ' ! @ # $ % & '")
=======

            {/* Notifies user and redirects to sign in page on success */}
            alert("Sign Up Successful")
            navigate('/sign_in', {replace: true});
            
        }
        else {
            {/* When strong password check fails, notifies user of requirements */}
            alert("Password does not meet requirements\nMust be at least 8 characters long\nMust contain one of ' ! @ # $ % & '")
>>>>>>> 8b210d6655d466bcdc7ee7cc328c7cbf197303ff
        }
    }


    return(
        <div className = {"content col-lg-12"}>
            <div className={"container-fluid"}>
                <div className={"row"}>

                    {/*Empty column for the left sidebar */}
                    <div className={"col-sm-1"}></div>

                    {/* This div contains all main content*/}
                    <div className={"col-sm-10 bg-light"} style={{minHeight:500}}>
                        <div style={{margin:70}}>
                            <div className={"form-group row mx-auto"} style={{width:400}}>
                                <div className={"card-header"}>
                                    <p className={"h1 text-center"}>Sign Up</p>
                                </div>
                                <form onSubmit={onSubmit}>
                                    <div>
                                        <label className={"col-sm-2 col-form-label h6"}>Name</label>
                                        <input className={"form-control"} type="text"  placeholder = 'John Smith'value={username} onChange={onUserChange} />
                                    </div>
                                    <div>
                                        <label className={"col-sm-2 col-form-label h6"}>Email</label>
                                        <input className={"form-control"} type="email" placeholder = 'john@example.com' value={email} onChange={onEmailChange} />
                                    </div>
                                    <div>
                                        <label className={"col-sm-2 col-form-label h6"}>Password</label>
                                        <input className={"form-control"} type="password" placeholder = 'password'value={password} onChange={onPassChange} />
                                    </div>
                                    <br/>
                                    {error !== "" &&  <div className = 'alert alert-danger'>{error}</div>}
                                    {error === "" &&  <div className = 'alert alert-success'>Sign up successful</div>}
                                    <button className={"btn btn-primary"} style={{"margin-top":20}} type="submit">Submit</button>
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

export default SignUp
