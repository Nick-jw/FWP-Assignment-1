import React from 'react'

function Feed () {

    {/* Also add reply-to, replies */}
    const posts = [
        {ID: 0, owner: 'jake', content: 'hello world'},
        {ID: 1, owner: 'jake', content: 'hello world!'},
        {ID: 2, owner: 'jake', content: 'hello world?'},
    ];

    return (
        <div>
        <h1>Hello</h1>
        <div className={'container'}>
        {posts.map(post => {
            return(
            <div key={post.ID}>
                <div key={post.ID} className={'card'}> {/* Add bottom padding */}
                    <div className="card-header">owner: {post.owner} </div>
                    <div className="card-body">content: {post.content}</div>
                </div>
            </div>
            )
        })
        }
        </div>
        </div>
    );
};
export default Feed

