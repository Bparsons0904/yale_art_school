// Main controll page

// Import requried methods and files
import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { auth } from "./services/firebase";

// Import components
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import News from "./pages/News";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from './components/Footer';

// Import CSS sheet
import "./styles/styles.min.css";


// Create route passed on user authenticaiton state, not authorized to login
function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

// Public route to non-restricted pages
function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }


  // Once component is mounted, check on user authentication
  componentDidMount() {
    window.scrollTo(0, 0);
    // Watch for authentication changes
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    });
    
  }

  render() {
    return this.state.loading === true ? (
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
      <Router>
        <ScrollToTop>
        {/* Always display header */}
        <Route
          exact
          path="*"
          render={(props) => (
            <Header isAuth={this.state.authenticated} {...props} />
          )}
        />
        {/* Route switch based on URL path */}
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home isAuth={this.state.authenticated} {...props} />
            )}
          />
          <PrivateRoute
            path="/chat"
            authenticated={this.state.authenticated}
            component={Chat}
          />
          <PublicRoute
            path="/signup"
            authenticated={this.state.authenticated}
            component={Signup}
          />
          <PublicRoute
            path="/login"
            authenticated={this.state.authenticated}
            component={Login}
          />
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
        </Switch>
        <Footer></Footer>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
