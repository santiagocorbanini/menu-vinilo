import React from "react";

const Nivel = (props) => {
    return ( 
        <p className="estrellas">Nivel De Alcohol: {
            (() => {
                switch(props.estrellas){
                    case 1: return "🍸";
                    case 2: return "🍸🍸";
                    case 3: return "🍸🍸🍸";
                    case 4: return "🍸🍸🍸🍸";
                    case 5: return "🍸🍸🍸🍸🍸";
                    default: return "";
                } 
            }) ()
        }</p>
    )   
};

export default Nivel;
