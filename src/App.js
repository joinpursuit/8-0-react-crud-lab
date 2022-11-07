import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import IndexPage from "./components/reusedComponents/IndexPage";
import DisplayIndividualInfo from "./components/reusedComponents/DisplayIndividualInfo";
import Form from "./components/reusedComponents/Form";


function App() {
  const endpointOptions = [`shows`, `movies`]
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        
        <Routes>
          <Route path="/" element={<Home />} />
            {
              endpointOptions.map(endpoint => 

                <Route path = {`/${endpoint }`} > 
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

        <Footer />

      </Router>
    </div>
  );
}

export default App;


// <Route path = "/shows" > 
//             <Route index element = {<IndexPage endpoint = {`shows`} />}/>
//             <Route path = "new" element = {<Form endpoint = {`shows`} />}/>
//             <Route path = ":id" >
//               <Route index element = {<DisplayIndividualInfo endpoint = {`shows`} />} />
//               <Route path = "edit" element = {<Form endpoint= {`shows`} edit = {true} />}/>
//             </Route>
          
//           </Route>
//           {/* MOVIE ROUTES*/}
//           {/* route for all movies */}
//           <Route path = "/movies" > 

//             {/* NESTED ROUTES BELOW, DECLARE BASE PATH (above), USE index (below) TO DEFINE THAT THE BASE PATH SHOULD RENDER WHICH COMPONENT (below) THEN ADD ANY OTHER NESTED ROUTES ACCORDINGLY*/}
//             <Route index element = {<IndexPage endpoint = {`movies`} />}/>
//             <Route path = "new" element = {<Form endpoint = {`movies`} />}/>
//             <Route path = ":id" >
//               {/* NESTED ROUTES FOR :id endpoint (seems nested only one lvl deep works) SO DECLARING :id as index path to then nest :id/edit */}
//               <Route index element = {<DisplayIndividualInfo endpoint = {`movies`} />} />
//               <Route path = "edit" element = {<Form endpoint= {`movies`} edit = {true} />}/>
//             </Route>
          
//           </Route>
         