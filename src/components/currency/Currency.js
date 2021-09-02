import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";

const Currency = () => {
    const [EUR, setData] = useState(false);

    useEffect(() => {
        fetch("http://api.nbp.pl/api/exchangerates/rates/A/EUR/today/")
            .then(response => response.text())
            .then(EUR => {
                setData(EUR);
            });
    });


if (EUR === false) {
    return <h1>Błąd</h1>;
    }
else {
    let VAL ="";
for (let i = 0; i < EUR.length - 2; i++){
    console.log(EUR.charAt(i));
        if (EUR.charAt(i) == "m" && EUR.charAt(i+1) == "i" && EUR.charAt(i+2) == "d"){
            console.log(EUR.length);
    i +=5;
while(EUR.charAt(i) != "}"){
    VAL += EUR.charAt(i);
    i++;
}
break;

    }
}
        return <div className="currency-container">
            <h1 className="currency-size">Kurs euro : {VAL}</h1>
        </div>
    }
};




export default Currency;