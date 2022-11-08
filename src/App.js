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
    
        <Nav />
        
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

        <Footer />

    </div>
  );
}

export default App;
