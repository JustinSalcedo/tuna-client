import React from 'react'
import { Route } from 'react-router-dom'

import { SubHeader } from './SubHeader'
import { LayoutDashboard } from './layouts/LayoutDashboard'
import { ColorDashboard } from './colors/ColorDashboard'
import { FontDashboard } from './fonts/FontDashboard'

export const StylesMenu = ({ match }) => {
    return (
        <>
            <SubHeader match={match}/> 
            <Route path={match.url + "/layouts"} component={LayoutDashboard} />
            <Route path={match.url + "/colors"} component={ColorDashboard} />
            <Route path={match.url + "/fonts"} component={FontDashboard} />
        </>
    )
}
