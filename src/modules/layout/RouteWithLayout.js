import React from 'react'
// import {Route } from 'react-router-dom'

export const RouteWithLayout = (props) => {
    const { layout: Layout, component: Component } = props;
    return (
        <>
            <Layout>
                <Component/>
            </Layout>
            {/*         
            render={matchProps => (
                <Layout>
                    <Component {...matchProps} />
                </Layout>
            )} */}
        </>
    )
}
