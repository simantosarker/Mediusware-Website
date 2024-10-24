// App.js
import Header from "./components/Header"; // Adjust the path if needed
import "./index.css"; // Tailwind styles
import Services from "./Components/Services";
import AboutUs from "./Components/AboutUs";
import Front from "./Components/Front";

function App() {
  return (
    <div className="App max-h-8494px max-w-1920px mx-auto ">
      <Front />
      <Services />
      <AboutUs />
      {/* Add more components here if needed */}
    </div>
  );
}

export default App;
