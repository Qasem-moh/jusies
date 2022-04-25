import { React, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";

import MainHeader from "./components/MainHeader";
import Intake from "./pages/Intake";
import { Dashboard } from "./pages/Dcotors";
import RiseLoader from "react-spinners/RiseLoader";
import "./App.css"
import MerH from "./pages/MerH";
import Carsoul from "./pages/carsoul";
import EnNews from "./pages/En_News";
import UkNews from "./pages/Uk_News";
import BbcNews from "./pages/BBC_News";
import Sports from "./pages/Sports";
import SportAr from "./pages/Sport-ar";
import Science from "./pages/Science";
import SinceAr from "./pages/Since-ar";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="as">
          {" "}
          <RiseLoader size={80} color={"#CE6591"} loading={loading} />
        </div>
      ) : (
        <div>
          <MainHeader />
          <MerH/>
          <Carsoul/>
          <main>
            <Switch>
              <Route exact path="/">
                <Welcome />
              </Route>
              <Route path="/new-en">
                <EnNews />
                <BbcNews/>
              </Route>
              <Route path="/ukra">
                <UkNews />
              </Route>
              <Route path="/sports">
                <SportAr/>
                <Sports />
              </Route>
              <Route path="/science">
                <SinceAr/>
                <Science />
              </Route>
             < Route path="/health">
              <SinceAr/>
              <Science />
            </Route>
              {/* <Route path="*">
            <h1>404</h1>
          </Route> */}
            </Switch>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
