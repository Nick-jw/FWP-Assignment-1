import React, {useState} from 'react'

function Feed () {

    const [postContent, setPostContent] = useState('')
    const [postLinks, setPostLinks] = useState([])
    const [error, setError] = useState(false)

    let link = "https://i.imgur.com/PGloYsy.jpeg"

    {/* Also add reply-to, replies */}
    
    let posts = JSON.parse(localStorage.getItem('posts'))
    if (posts === null) {
        posts = []
    }

    console.table(posts)

    const onPostChange = (e) => {
        setPostContent(e.target.value)

    }

    const onLinkChange = (e) => {
        setPostLinks(postLinks.push(e.target.value))
    }

    const onPost = (e) => {

        if (postContent.length > 0 && postContent.length < 251) {
            {/* Add post information to posts object, re-render on form submit will make the post auto post */}
            let curr_post = {
                ID: 99,
                owner: 'jeff',
                content: postContent
            }

            posts.push(curr_post)

            localStorage.setItem('posts', JSON.stringify(posts))
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
                                <form>
                                    <div className='form-group'>
                                        <textarea className='form-control' rows='4' placeholder='Begin typing here...' onChange={onPostChange}></textarea>
                                        <h5 className='card-subtitle text-muted' style={{marginTop:5, marginBottom:5}}>Image links</h5>
                                        <input className='form-control' type='URL' placeholder='Direct image links only' style={{marginBottom:10}} onChange={onLinkChange}></input>
                                        <button className="btn btn-primary" onClick={onPost}>Post</button>

                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Iterating through list of posts and rendering them all */}
                        <div className={'container'}>
                            {posts.map(post => {
                                return(
                                <div key={post.ID}>
                                    <div key={post.ID} className={'card'}> {/* Add bottom padding */}
                                        <div className={"card-header"}>owner: {post.owner} </div>
                                        <div className={"card-body"}>content: {post.content}</div>
                                    </div>
                                </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    {/*Empty column for the right sidebar */}
                    <div className={"col-sm-1"}></div>
                </div>
            </div>
        </div>
    );
};
export default Feed

