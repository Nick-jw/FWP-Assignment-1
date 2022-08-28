import {React,useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'


function Update () {
    const navigate = useNavigate()


    {/* Variables needed to get current user info */}
    let user_list = JSON.parse(localStorage.getItem('users'))
    let curr_email = JSON.parse(localStorage.getItem('loggedInUser'))
    let curr_user_index = 0

     // Getting current user information to be updated
     for (var i = 0; i < user_list.length; i++) {
        if (user_list[i]['email'] === JSON.parse(localStorage.getItem('loggedInuser'))) {
            curr_user_index = i
            break
        }
     }
    let curr_username = user_list[curr_user_index]['username']
    let curr_password = user_list[curr_user_index]['password']
    let curr_posts = user_list[curr_user_index]['posts']
    let curr_joinDate = user_list[curr_user_index]['joinDate']

    let post_list = JSON.parse(localStorage.getItem('posts'))

    {/* Focuses name input field on initial page render */}
    useEffect(() => {
        document.getElementById('nameInput').focus()
    }, [])

    {/* Status of update (success / fail) */}
    const [status, setStatus] = useState('')

    {/* State variables to hold updated name and email */}
    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')

    {/* Recording inputs in state variables */}
    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setNewEmail(e.target.value)
    }

    const onSubmit = (e) => {
        setStatus('')
        e.preventDefault()

        {/* Initialized new profile info as current profile info */}
        let nameToBeSet = curr_username
        let emailToBeSet = curr_email
        let passToBeSet = curr_password


        {/* Sets name to be changed as new name input */}
        if (newName !== '') {
            nameToBeSet = newName

            {/* Changes 'owner' of user's posts to new username */}
            for (let post of post_list) {
                if (post.owner === curr_username) {
                    post.owner = newName
                }
            }

            localStorage.setItem('posts', JSON.stringify(post_list))

        }
        {/* Sets email to be set as new input email and updates loggedInUser in localstorage */}
        if (newEmail !== '') {
            emailToBeSet = newEmail
            localStorage.setItem('loggedInUser', JSON.stringify(newEmail))
        }

        {/* Object to replace old user info */}
        let newUserInfo = {
            username: nameToBeSet,
            email: emailToBeSet,
            password: passToBeSet,
            joinDate: curr_joinDate,
            posts: curr_posts
        }

        {/* Replaces user info with new object and pushes to localstorage */}
        user_list.splice(curr_user_index, 1)
        user_list.push(newUserInfo)

        localStorage.setItem('users', JSON.stringify(user_list))

        setStatus('success')
    }
    
    return (
        <div className = 'content col-lg-12'>
            <div className = 'container-fluid'>
                <div className = 'row'>
                    {/*leftside bar */}
                    <div className = 'col-sm-1'></div>

                    <div className = 'col-sm-10 bg-light' style = {{minHeight:500}}>
                        <div style={{margin:70}}>
                            <div className = 'form-group row mx-auto' style = {{width:400}}>
                                <div className = 'card-header'>
                                    <p className = 'h1 text-center'>Edit Profile</p>
                                </div>
                                <form  onSubmit = {onSubmit}>
                                    <div>
                                        <label className = 'col-sm-2 col-form-label h6'>Name</label>
                                        <input 
                                        className = 'form-control' 
                                        id='nameInput' 
                                        type = 'text' 
                                        placeholder = 'Username' 
                                        onChange = {handleNameChange}/>
                                    </div>
                                    <div>
                                    <label className = 'col-sm-2 col-form-label h6'>Email</label>
                                    <input 
                                    className = 'form-control' 
                                    type = 'email' 
                                    placeholder = 'Email' 
                                    onChange =  {handleEmailChange}/>
                                    </div>

                                    {/* Conditionally renders success message after updating profile info */}
                                    {status === 'success' &&  <div className = 'alert alert-success' style={{marginTop:20}}>Successfully Updated</div>}

                                    {/* Update / cancel buttons */}
                                    <div className = 'container d-flex justify-content-between'>
                                        <button 
                                        type= 'button' 
                                        className ='btn btn-lg btn-secondary btn-rounded  m-3'
                                        onClick = {() => {
                                            navigate("/profile", {replace: true,})
                                        }}>
                                            Cancel
                                        </button>
                                        <button 
                                        type = 'submit'  
                                        className = 'btn btn-lg btn-info btn-rounded  m-3'
                                        >
                                            Save changes
                                        </button>
                                    </div>
                                </form>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Update