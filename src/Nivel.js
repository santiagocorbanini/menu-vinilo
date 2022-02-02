import React from "react";

const Nivel = (props) => {
    const santiago = props.estrellas;
    return ( 
        <p className="estrellas">Nivel De Alcohol: {
            (() => {
                switch(santiago){
                    case 1: return "🍸";
                    case 2: return "🍸🍸";
                    case 3: return "🍸🍸🍸";
                    case 4: return "🍸🍸🍸🍸";
                    default: return "";
                } 
            }) ()
        }</p>
    )   
};

export default Nivel;
