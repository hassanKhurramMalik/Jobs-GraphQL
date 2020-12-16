import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Routes from "./routes/index";
import client from "./client/index";
import "./App.css";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          {Routes.map((route) => (
            <Route key={`route-${route.name}`} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
