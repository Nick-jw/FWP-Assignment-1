import React, {useState} from 'react'
import Post from './Post'

function Feed () {

    {/* State variables for post contents / error checking */}
    const [postContent, setPostContent] = useState('')
    const [postLink, setPostLink] = useState('')
    const [error, setError] = useState(false)


    {/* Gets username corresponding to logged in user, otherwise displays Error */}
    const user_list = JSON.parse(localStorage.getItem('users'))
    const userEmail = JSON.parse(localStorage.getItem('loggedInUser'))
    let userName = 'Error'

    for (let i = 0; i < user_list.length; ++i) {
        if (user_list[i].email === userEmail) {
            userName = user_list[i].username;
        }
    }


    {/* Initialising list of posts */}
    let posts = JSON.parse(localStorage.getItem('posts'))
    if (posts === null) {
        posts = []
    }

    {/* Reversed post list for displaying newest posts first */}
    let postsReversed = posts.slice().reverse()


    {/* Storing contents on posts in state */}
    const onPostChange = (e) => {
        setPostContent(e.target.value)
    }

    const onLinkChange = (e) => {
        setPostLink(e.target.value)
    }


    const onPost = (e) => {
        e.preventDefault()

        {/* Checking post content for valid length */}
        if (postContent.length > 0 && postContent.length < 251) {
            let curr_post = {
                owner: userName,
                content: postContent,
                isReply: false,
                replyIDs: [],
                imgURL: postLink
            }

            {/* Storing new post in localstorage, is displaying upon re-render */}
            posts.push(curr_post)
            localStorage.setItem('posts', JSON.stringify(posts))

            {/* Resetting fields */}
            setPostContent('')
            setPostLink('')
            document.getElementById('textInput').value = ""
            document.getElementById("linkInput").value = ''
        }
        else {
            setError(true)
        }
    }



    return (
        <div className = {"content col-lg-12 h-100"}>
            <div className={"container-fluid"}>
                <div className={"row"}>

                    {/*Empty column for the left sidebar */}
                    <div className={"col-sm-1"}></div>

                    {/* This div contains all main content*/}
                    <div className={"col-sm-10 bg-light"} style={{minHeight:500}}>
                        <h1 className="text-center" style={{padding:40}}>Forum</h1>
                        {/* New post section */}
                        <div className={"card w-75 mx-auto border-0"}>
                            <div className={"card-body  bg-light"}>
                                <h3 className={'card-title'}>Create a new post</h3>
                                <form onSubmit={onPost}>
                                    <div className='form-group'>

                                        <textarea 
                                        className='form-control' 
                                        rows='3' 
                                        id='textInput' 
                                        placeholder='Begin typing here...' 
                                        onChange={onPostChange}>
                                        </textarea>

                                        <h5 className='card-subtitle text-muted' style={{marginTop:5, marginBottom:5}}>Image link</h5>
                                        
                                        <input 
                                        className='form-control' 
                                        type='URL' 
                                        id='linkInput' 
                                        placeholder='Direct image link only' 
                                        style={{marginBottom:10}} 
                                        onChange={onLinkChange}></input>

                                        <button className="btn btn-primary" type="submit">Post</button>
                                    </div>
                                </form>
                                {error && <div className = 'alert alert-danger'>Error: Post does not meet requirements</div>}
                            </div>
                        </div>

                        <hr/>

                        {/* Iterating through list of posts and rendering them all */}
                        <div className={'container'}>
                            {postsReversed.map(post => {
                                if (post.isReply === false) {
                                    return(
                                        <Post curr_post={post} key={post.ID}> </Post>
                                    )
                                }
                            })
                            }
                        </div>
                        
                        <div style={{minHeight:50}}></div>
                    </div>
                    
                    {/*Empty column for the right sidebar */}
                    <div className={"col-sm-1"}></div>
                </div>
            </div>
        </div>
    );
};
export default Feed

