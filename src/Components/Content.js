import React from 'react';
import pic1 from '../Images/work.jpg'
import pic2 from'../Images/pc.jpg'




function Content () {
    return (
        <div className = {"content col-lg-12 h-100"}>
            <div className={"container-fluid"}>
           

                <div className={"row"}>

                    {/*Empty column for the left sidebar */}
                    <div className={"col-sm-1"}></div>
                        
                    {/* This div contains all main content*/}
                    <div className={"col-sm-10 bg-light"} style={{minHeight:500}}>
                        <br/>
                        <blockquote className={" display-4 text-center fst-italic"}>Introducing Loop Agile own intra-firm social media platform. Create an account to start linking!</blockquote>
                        <br/>
                        {/*Card 1*/}
                        <div className= 'card '>
                            <div className = 'row g-0'>
                                <div className = 'col-md-4'>
                                    <img className = 'card-img img-fluid ' src = {pic1} alt='bg'/>
                                </div>
                                <div className = 'col-md-8 text-center'>
                                    <div className = 'card-body'>
                                        <p className = 'card-text display-5 text-center '>Collaborating with colleages is now made simplier and easy to use.</p>
                                    </div>
                                </div>  
                            </div>
                        </div>
                        <br/>
                        <br/>


                        {/* Card 2*/}
                        <div className= 'card'>
                            <div className = 'row g-0'>
                                <div className = 'col-md-8'>
                                    <div className = 'card-body'>
                                        <p className = 'card-text display-5 text-center'>See what your colleages are up to via the feed. Whether it be work related or personal.</p>
                                    </div>
                                </div> 
                                <div className = 'col-md-4'>
                                    <img className = 'card-img-bottom' src = {pic2} alt='bg'/>
                                </div> 
                            </div>
                        </div>
                        <br/>
                        <br/>


                    


                        
                    </div>
                    

                    {/*Empty column for the right sidebar */}
                    <div className={"col-sm-1"}></div>
                </div>
            </div>
        </div>
    );
}

export default Content