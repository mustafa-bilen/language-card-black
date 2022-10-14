import { languages } from "./helper/data";
import "./App.css";
import reactsvg from "./assets/react.svg";
import Card from "./components/Card";

function App() {
  return (
    <div className="bos-div">
      {/*  */}
      <img src={reactsvg} alt="reactlogo" className="reactlogo" />
      <div className="down-container">
        <div>
          <h2>Language</h2>
          <div className="main-container">
            {languages.map((language, index) => {
              return (
                <div className="container">
                  <Card key={index} {...language} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default App;
