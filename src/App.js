
// Components
import Footer from "./components/common/Footer";
import Nav from "./components/common/Nav";
import RouteComponent from "./components/reusedComponents/RouteComponent";


function App() {
  return (
    <div className="wrapper">
    
        <Nav />
        <RouteComponent />
        <Footer />

    </div>
  );
}

export default App;
