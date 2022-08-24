import React from 'react';
 
function Post ({curr_post}, {key}) {

    {/* Gives a list of the indexes of posts that are a reply to the post currently being rendered - FOR REPLIES / NOT USED
    let post_list = JSON.parse(localStorage.getItem('posts'))


    if (curr_post.replyIDs !== []) {
        let replyIndexes = []
        hasReplies = true
        for (let i = 0; i < post_list.length; ++i) {
            if (curr_post.replyIDs.includes(post_list[i].ID)) {
                replyIndexes.push(i)
            }
        }
    }
    */}


    return (
        <div  key={curr_post.ID}>

            <div>
                <div key={curr_post.ID} className={'card'} style={{marginTop:10, marginBottom:20}}>
                    <div className={"card-header"}>
                        <img src = "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" className='rounded-circle img-fluid' alt = 'profile' style = {{width: '50px', display:'inline', marginRight:20}}/>
                        <p className='card-title h4 align-middle' style={{display:'inline'}}>{curr_post.owner}</p>
                    </div>
                    <div className={"card-body"}>
                        {curr_post.content}
                        {curr_post.imgURL && <div><hr/><img src={curr_post.imgURL} className='img-thumbnail' style={{maxWidth:500}}></img></div>}
                    </div>
                </div>
            </div>


            {/* FOR REPLIES - DOES NOT WORK
            }
            <div style={{minHeight:50, backgroundColor:'red'}}>
                {post_list.map(post => {
                    if (curr_post.replyIDs.includes(post.ID)) {
                        console.log("rendering reply");
                        console.log("reply contents:");
                        console.table(post);
                        <Post curr_post={post} key={post.ID}/>
                    }
                })}
            </div>
            */}
        </div> 
        
    );
}

export default Post


{/*}
{posts.map(post => {
    console.log(post)
    if (post.isReply === false) {
        return(
            <Post post_list={posts} curr_post={post}> </Post>
        )
    }
})
}


{if (curr_post.replyIDS !== []) {
    post_list.map(post => {
        if (curr_post.replyIDS.includes(post.ID)) {
            <div className='card'></div>
        }
    })
}}
*/}