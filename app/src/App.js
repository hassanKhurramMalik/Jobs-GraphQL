import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Routes from "./routes/index";

const App = () => {
  const client = new ApolloClient({
    uri: "https://api.graphql.jobs/",
  });
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
