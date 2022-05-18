import React from "react";
import './Data.css'

class Header extends React.Component{
    render(){
        return(
            <div className="container">
            <div  className="navbar-dark bg-dark navbar-responsive ">
                <div>
                    <a className="navbar-brand" href="#home">
                        County-Search
                    </a>
                </div>
            </div>
            
            </div>
        );
    }
}

export default Header;