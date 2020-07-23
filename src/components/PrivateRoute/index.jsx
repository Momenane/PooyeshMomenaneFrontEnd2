import React from 'react'
import { Route,Redirect } from 'react-router-dom'

export default ({component:Component,userToken,...rest})=>(
  <Route
    {...rest}
    render={(props)=>
      userToken?(<Component {...props} {...rest}/>):(
        <Redirect
          to={{pathname:"/login",state:{from:props.location}}}
        />
      )
    }
  />
)