import "./App.css";
import SiteContainer from "./SiteContainer/SiteContainer";
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <SiteContainer/>
    </div>
  );
}

export default App;
