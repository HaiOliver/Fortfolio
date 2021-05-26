import React, { Component, lazy, Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Loading from "../components/Loading/Loading-component";
import { settings } from "../portfolio.js";
import ErrorBoundary from "../components/error-boundary/error";
const Home = lazy(() => import("../pages/home/HomeComponent"));
const Splash = lazy(() => import("../pages/splash/Splash"));
const Opensource = lazy(() => import("../pages/opensource/Opensource"));
const Contact = lazy(() => import("../pages/contact/ContactComponent"));

export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    console.log(theme);
    if (settings.isSplash) {
      return (
        <div>
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <BrowserRouter basename="/">
                <Switch>
                  <Route
                    path="/"
                    exact
                    render={(props) => (
                      <Splash {...props} theme={this.props.theme} />
                    )}
                  />
                  <Route
                    path="/home"
                    render={(props) => (
                      <Home {...props} theme={this.props.theme} />
                    )}
                  />
                  <Route
                    path="/opensource"
                    render={(props) => (
                      <Opensource {...props} theme={this.props.theme} />
                    )}
                  />
                  <Route
                    path="/contact"
                    render={(props) => (
                      <Contact {...props} theme={this.props.theme} />
                    )}
                  />
                </Switch>
              </BrowserRouter>
            </Suspense>
          </ErrorBoundary>
        </div>
      );
    } else {
      return (
        <div>
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <BrowserRouter basename="/">
                <Switch>
                  <Route
                    path="/"
                    exact
                    render={(props) => (
                      <Home {...props} theme={this.props.theme} />
                    )}
                  />
                  <Route
                    exact
                    path="/home"
                    render={(props) => (
                      <Home {...props} theme={this.props.theme} />
                    )}
                  />
                  <Route
                    path="/opensource"
                    render={(props) => (
                      <Opensource {...props} theme={this.props.theme} />
                    )}
                  />
                  <Route
                    path="/contact"
                    render={(props) => (
                      <Contact {...props} theme={this.props.theme} />
                    )}
                  />
                </Switch>
              </BrowserRouter>
            </Suspense>
          </ErrorBoundary>
        </div>
      );
    }
  }
}
