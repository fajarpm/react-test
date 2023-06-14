import React from 'react'
import {Route } from 'react-router-dom'

export const RouteWithLayout = (props) => {
    const { layout: Layout, component: Component, path } = props;
    return (
        <>
            {path}
            render={matchProps => (
                <Layout>
                    <Component {...matchProps} />
                </Layout>
            )}
       </>
    )
}
