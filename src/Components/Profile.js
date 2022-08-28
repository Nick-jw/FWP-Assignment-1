import React from 'react'
import {useNavigate} from 'react-router-dom'

function Profile ({onLogout}) {

    const navigate = useNavigate()
    {/* Variables required for getting username */}
    let email = JSON.parse(localStorage.getItem('loggedInUser'));
    let user_list = JSON.parse(localStorage.getItem('users'));
    let curr_user_index = -1

    {/* Obtains loggedInUser email array */}
    for (var i = 0; i < user_list.length; i++) {
        if (user_list[i]['email'] === email) {
            curr_user_index = i
            break
        }
    }

    {/* Initializes post list */}
    let posts = JSON.parse(localStorage.getItem('posts'));
    if (posts === null) {
        posts = []
    }


    // Saves name and join date for display, user ID for deleting posts
    let name = user_list[curr_user_index]['username']
    let join_date = user_list[curr_user_index]['joinDate']


    // When user deletes account, removes their details, logs out and removes posts made by them
    const deleteUser = () => {
    //splices user list to remove current sign in email and overwrites data
    user_list.splice(curr_user_index,1)
    localStorage.setItem('users', JSON.stringify(user_list))


    // Removes posts by user in posts list
    let j = posts.length
    while (j--) {
        if (posts[j].owner === name) {
            posts.splice(j, 1)
        }
    }

    // Saves edited post list
    localStorage.setItem('posts', JSON.stringify(posts))
    
    onLogout() // logs out user to display sign in and out button
    navigate('/', {replace:true,}) // returns to home page after user deletes acc
    }

    return (
        <div className = {"content col-lg-12 h-100"}>
            <div className={"container-fluid"}>
           

                <div className={"row"}>

                    {/*Empty column for the left sidebar */}
                    <div className={"col-sm-1"}></div>
                        
                    {/* This div contains all main content*/}
                    <div className={"col-sm-10 bg-light"} style={{minHeight:500}}>
                        <h1 className= 'text-center' style={{paddingTop: 30}}>My profile</h1>
                            <div className = 'container py-5 h-100 w-75'>
                                <div className='row d-flex justify-content-center align-items-center h-100'>
                                    <div className='card' style = {{borderRadius:'15px'}}>
                                        <div className='card-body text-center'>
                                            <div className='mt-3 mb-4'>
                                                <img src = "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" className='rounded-circle img-fluid' alt = 'profile' style = {{width: '100px'}}/>

                                            </div>
                                            <h4 className='mb-2'> {name}</h4>
                                            <p className='text-muted mb-4'>{email}</p>
                                            <p className='text-muted mb-4'>Joined: {join_date}</p>
                                        </div>
                                        <div className = ' container d-flex justify-content-between'>
                                            <button type = 'button' className='btn btn-lg btn-info btn-rounded w-50 m-3'
                                            onClick={() =>{
                                                navigate("/update", {replace : true,})
                                            }}
                                            >
                                                Edit
                                            </button>
                                            <br/>
                                            <br/>
                                            <button type = 'button' className='btn btn-lg btn-danger btn-rounded w-50 m-3'
                                            data-bs-toggle = 'modal' 
                                            data-bs-target = '#exampleModal'
                                            >
                                                Delete
                                            </button>
                                            <br/>
                                            <br/>
                                            
                                            {/*Modal for deleting profile */}     
                                            <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body text-center">
                                                        Are you sure you want to delete your account?<br/>This action cannot be undone!
                                                        </div>
                                                        <div class="modal-footer d-flex justify-content-evenly">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                                            onClick = {deleteUser}
                                                            >Confirm</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                </div>
                    

                {/*Empty column for the right sidebar */}
                <div className={"col-sm-1"}></div>
            </div>
        </div>
  
    )

}

export default Profile