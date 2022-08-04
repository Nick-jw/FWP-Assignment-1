import React from 'react';

function Sign_Up () {
    return(
        <div className = {"content col-lg-12"}>
            <div className={"container-fluid"}>
                <div className={"row"}>

                    {/*Empty column for the left sidebar */}
                    <div className={"col-sm-1"}></div>

                    {/* This div contains all main content*/}
                    <div className={"col-sm-10 bg-light"} style={{minHeight:500}}>
                        <p className={"h1"}>Sign Up area here</p>
                        <p className={"h6"}>lorem ipsum</p>
                    </div>

                    {/*Empty column for the right sidebar */}
                    <div className={"col-sm-1"}></div>
                </div>
            </div>
        </div>
    );
}

export default Sign_Up