import React from "react";
import "./App.css";
import "./Data.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {Data} from './Data';
import Header from './Header';
import "bootstrap/dist/css/bootstrap.min.css";


const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
});



function App(){
 
 
  return(
  <ApolloProvider client={client}>  
  <Header></Header>
    <div className="App">
      <h2>
        Buscador de Paises{''}
        <span role="img" aria-label="Globe">
        <br/> <FontAwesomeIcon   icon={faGlobe} />
        </span>
      </h2>
     <Data></Data>
    </div>
  </ApolloProvider>
)};
export default App;
