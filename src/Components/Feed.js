import React from 'react'

function Feed () {

    {/* Also add reply-to, replies */}
    const posts = [
        {ID: 0, owner: 'jake', content: 'hello world'},
        {ID: 1, owner: 'jake', content: 'hello world!'},
        {ID: 2, owner: 'jake', content: 'hello world?'},
    ];

    return (
        <div className = {"content col-lg-12 h-100"}>
            <div className={"container-fluid"}>
                <div className={"row"}>

                    {/*Empty column for the left sidebar */}
                    <div className={"col-sm-1"}></div>

                    {/* This div contains all main content*/}
                    <div className={"col-sm-10 bg-light"} style={{minHeight:500}}>
                        {/* New post section */}
                        <div className={"card w-75 mx-auto"}>
                            <div className={"card-body"}>
                                <h3 className={'card-title'}>Create a new post</h3>
                                <form>
                                    <div className='form-group'>
                                        <textarea className='form-control' rows='4' placeholder='Begin typing here...'></textarea>
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

