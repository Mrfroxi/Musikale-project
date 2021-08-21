import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import {publicRoutes,authRoutes} from '../routes'
function AppRouter() {
  return (
    <Switch>
      {publicRoutes.map( ({path,Component}) =>
        <Route key={path} path={path} component={Component} exact/>
      )}
      {/* <Redirect to={}/> */}
    </Switch>
  );
}

export default AppRouter;

// {authRoutes.map( ({path,Component}) =>{
//   <Route key={path} path={path} component={Component} exact/>
// })}
