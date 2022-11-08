import React from 'react';
import { Route } from 'react-router-dom';
import IndexPage from './IndexPage';
import Form from './Form';
import DisplayIndividualInfo from './DisplayIndividualInfo';

function RouteComponent({endpoint}) {
    console.log(endpoint)
    return (
        <Route path = {`/${endpoint }`} > 
                  <Route index element = {<IndexPage endpoint = {endpoint } />}/>
                  <Route path = "new" element = {<Form endpoint = {endpoint } />}/>
                  <Route path = ":id" >
                    <Route index element = {<DisplayIndividualInfo endpoint = {endpoint } />} />
                    <Route path = "edit" element = {<Form endpoint= {endpoint } edit = {true} />}/>
                  </Route>
                </Route>
    );
}

export default RouteComponent;