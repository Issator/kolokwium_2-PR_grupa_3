import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import Navbar from "./components/JNnavbar";
import home from "./components/JNhome";

function App() {

  return (
      <div className="container-fluid">
	  < Navbar/>
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/" exact component={Posts} />
					<Route part="/home" component={home} />
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
