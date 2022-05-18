import React,  {  useState } from "react";
import {Query} from 'react-apollo';
import { gql} from 'apollo-boost';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


export function Data() {
  const [tablaPaises, setTablaPaises]= useState([]);
  const [paises, setPaises]= useState([]);
  const [texto, setTexto]= useState("");
  const[filtro,setFiltro]= useState("");
  const handleChange=e=>{
    setTexto(e.target.value);
    filtrar(e.target.value);
  }
  const groupBy=(agrupar)=>{
      continent = paises.map(con=>{return con.name});
     tablaPaises.reduce((continente, { continent,code, name, capital,continent, emoji, languages  }) => {
      if (!continente[continent]) continente[continent] = [];
      continente[continent].push(code,name,capital,continent,languages.map(len=>{return len.name}),emoji);
      console.log(continente);
      return continente;
    }, {});
  }

  const filtrar=(terminoBusqueda)=>{
    console.log(tablaPaises.filter((elemento)=>{return elemento}));
    var resultadoBusqueda=tablaPaises.filter((elemento)=>{
      if(elemento.name.toString().includes(terminoBusqueda) || elemento.continent.name.toString().includes(terminoBusqueda)){
        console.log(elemento);
        return elemento;
      }setPaises(resultadoBusqueda);
    });
    setPaises(resultadoBusqueda);
  }
    return <Query query={gql`{
        countries{
          code,
          name,
          languages{
            name
            native
            code
          },
          continent{
            name
            code
            
          },
          emoji
          states{
            code
            name
          }
          capital
          currency
        }
      }`}>
      {({loading, error , data}) => {
        //console.log(data);
        if(loading) return <p>Cargando ...</p>
        if(error) return <p>Error {error} contanctese con el administrador</p>
        
        //if(data) return console.log(data.countries);
        setTablaPaises(data.countries);
        if(paises.length>0){

        }else{

          setPaises(data.countries);
        }
          return <><div className="containerInput">
            <input type="search" className="form-control inputSearch"
              value={texto}
              placeholder="Buscar pais" 
              onChange={handleChange}></input>
              <button className="btn btn-success">
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              </button>
          </div>
          <div className="containerInput">
              <button onClick={groupBy('continente')} className="btn btn-success buttonFilter ">
              Continente 
              </button>
              <button onClick={groupBy('lenguaje')} className="btn btn-danger buttonFilter">
              Lenguaje 
              </button>
          </div>
          <div className="table-responsive">
              <table className="table table-sm table-bordered">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Nombre</th>
                    <th>Capital</th>
                    <th>Continente</th>
                    <th>Lenguaje</th>
                    <th>Emoji</th>
                  </tr>
                </thead>
                <tbody>
                  {paises && paises.map(pais => (
                    <tr key={pais.code}>
                      <td>{pais.code}</td>
                      <td>{pais.name}</td>
                      <td>{pais.capital}</td>
                      <td>{pais.continent.name}</td>
                      <td>{pais.languages.map(lenguaje=>{
                        return lenguaje.name
                      })}</td>
                      <td>{pais.emoji}</td>
                    </tr>

                  ))}

                </tbody>
              </table>
            </div></>
                   
        
      } }
    </Query>
    };

  
      
    