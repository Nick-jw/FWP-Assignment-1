import React from 'react';


function Post ({curr_post}, {key}) {
    {/* Displays the contents of a post object as a card */}

    return (
        <div  key={curr_post.ID}>
            <div>
                <div key={curr_post.ID} className={'card'} style={{marginTop:10, marginBottom:20}}>
                    {/* Post header with username and profile icon */}
                    <div className={"card-header"}>
                        <img src = "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" className='rounded-circle img-fluid' alt = 'profile' style = {{width: '50px', display:'inline', marginRight:20}}/>
                        <p className='card-title h4 align-middle' style={{display:'inline'}}>{curr_post.owner}</p>
                    </div>
                    {/* Post contents with image if an image is included */}
                    <div className={"card-body"}>
                        {curr_post.content}
                        {curr_post.imgURL && <div><hr/><img src={curr_post.imgURL} className='img-thumbnail' style={{maxWidth:500}}></img></div>}
                    </div>
                </div>
            </div>
        </div> 
        
    );
}

export default Post