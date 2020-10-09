import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

import UserView from "./features/userview/UserView";
import Nutrition from "./features/nutrition/Nutrition";
import Train from "./features/train/Train";
import Login from "./features/login/Login";
import Register from "./features/register/Register";
import Calculator from "./features/calculator/Calculator";
import CardNutritionDetail from "./features/nutrition/CardNutritionDetail";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/userView" component={UserView} />
          <Route exact path="/nutrition" component={Nutrition} />
          <Route
            exact
            path="/nutrition-detail/:id"
            component={CardNutritionDetail}
          />
          <Route exact path="/train" component={Train} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
         
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
