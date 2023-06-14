import React from 'react'

export const Master = (props) => {
    const { children } = props;
    return (
        <div className="row home-container">
            {/* <Header /> */}
            <h1>Hi there</h1>
            <div className="col-md-12 pd-0-0" >
                {/* <Sidebar /> */}
            </div>
            <main>{children}</main>
        </div>
    )
}
