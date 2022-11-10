import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './Form';
import IndexPage from './IndexPage';
import DisplayIndividualInfo from './DisplayIndividualInfo';
import Home from '../home/Home';

function RouteComponent(props) {
    const endpointOptions = [`shows`, `movies`]
    return (
        <Routes>
        <Route path="/" element={<Home />} />
         {
          endpointOptions.map(endpoint =>
            <Route path = {`/${endpoint}`} > 
                <Route index element = {<IndexPage endpoint = {endpoint } />}/>
                <Route path = "new" element = {<Form endpoint = {endpoint } />}/>
                <Route path = ":id" >
                  <Route index element = {<DisplayIndividualInfo endpoint = {endpoint } />} />
                  <Route path = "edit" element = {<Form endpoint= {endpoint } edit = {true} />}/>
                </Route>
            </Route>
              )
         }
      </Routes>
    );
}

export default RouteComponent;