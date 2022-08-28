import {React,useState} from 'react'
import {useNavigate} from 'react-router-dom'


function Update () {
    const navigate = useNavigate()


    //getting user list
    let user_list = JSON.parse(localStorage.getItem('users'))
    let curr_email = JSON.parse(localStorage.getItem('loggedInUser'))
    let curr_user_index = 0

     //getting current name, email password
    
     for (var i = 0; i < user_list.length; i++) {
        if (user_list[i]['email'] === JSON.parse(localStorage.getItem('loggedInuser'))) {
            curr_user_index = i
            break
        }
     }
    // logged in username and password for modification
    let curr_username = user_list[curr_user_index]['username']
    let curr_password = user_list[curr_user_index]['password']
    let curr_posts = user_list[curr_user_index]['posts']
    let curr_joinDate = user_list[curr_user_index]['joinDate']

    let post_list = JSON.parse(localStorage.getItem('posts'))

   

    const [status, setStatus] = useState('')

    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')

    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setNewEmail(e.target.value)
    }

    const onSubmit = (e) => {
        setStatus('')
        e.preventDefault()
        let nameToBeSet = curr_username
        let emailToBeSet = curr_email
        let passToBeSet = curr_password


        if (newName !== '') {
            nameToBeSet = newName

            for (let post of post_list) {
                if (post.owner === curr_username) {
                    post.owner = newName
                }
            }

            localStorage.setItem('posts', JSON.stringify(post_list))

        }
        if (newEmail !== '') {
            emailToBeSet = newEmail
            localStorage.setItem('loggedInUser', JSON.stringify(newEmail))
        }

        let newUserInfo = {
            username: nameToBeSet,
            email: emailToBeSet,
            password: passToBeSet,
            joinDate: curr_joinDate,
            posts: curr_posts
        }

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
                                        <input className = 'form-control' type = 'text' placeholder = 'Username' onChange = {handleNameChange}/>

                                    </div>
                                    <div>
                                    <label className = 'col-sm-2 col-form-label h6'>Email</label>
                                    <input className = 'form-control' type = 'email' placeholder = 'Email' onChange =  {handleEmailChange}/>
                                    </div>

                                    {status === 'success' &&  <div className = 'alert alert-success' style={{marginTop:20}}>Successfully Updated</div>}

                                    <div className = 'container d-flex justify-content-between'>
                                        <button type= 'button' className ='btn btn-lg btn-secondary btn-rounded  m-3'
                                        onClick = {() => {
                                            navigate("/profile", {replace: true,})
                                        }}>
                                            Cancel
                                        </button>
                                        <button type = 'submit'  className = 'btn btn-lg btn-info btn-rounded  m-3'
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