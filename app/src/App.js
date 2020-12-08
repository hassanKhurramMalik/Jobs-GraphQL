import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Home from './screens/Home'
import Details from './screens/Details'
//import Client from './ApolloProvider/index'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

const App=()=> {
  const client = new ApolloClient({
    uri: 'https://api.graphql.jobs/',
  })
  return (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/details/:id" component={Details} exact={true}/>
            </Switch>
        </BrowserRouter>
    </ApolloProvider>
    
  )
}

export default App