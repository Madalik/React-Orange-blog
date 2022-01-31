import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Home from "././components/Home";
import Create from "././components/Create";
import BlogDetails from "././components/BlogDetails";
import NotFound from "././components/NotFound";
import Edit from "./components/Edit";
import About from "./components/About";
import initFontAwesome from "./components/initFontAwesome";
import TravelHints from "./components/TravelHints";
initFontAwesome();


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/travelhints">
              <TravelHints />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/blogs/:id/edit">
              <Edit />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
