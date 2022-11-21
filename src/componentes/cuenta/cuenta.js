/*import React, {useEffect, useRef, useState} from "react";
import { ReactDOM } from "react";

const ctare = ({cuentaregre}) => {
const [timerDays,setTimerDays ] = useState(30);
const [timerHours,setTimerHours ] = useState(20);
const [timerMinutes,setTimerMinutes ] = useState(40);
const [timerSeconds,setTimerSeconds ] = useState(10);

let interval = useRef();

const cuenta = () => {
    const cuentaregresiva = new Date ('november 20, 2022 00:00:00').getTime();

interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = cuentaregresiva - now ;

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24) / (1000*60*60)));
    const minutes = Math.floor((distance % (1000*60*60)/ (1000*60)));
    const seconds = Math.floor((distance % (1000*60)) / 1000);

    if (distance < 0 ){
        //stop out timer
        clearInterval(interval.current);
    }else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
    }
    
},1000);
};

useEffect(() => {
    startTimer() ;
return () =>  {
     clearInterval(interval.current);
};
});

return (
    <section className="reloj-contenedor">
        <section className="reloj">
            <p> reloj sarlanga</p>
            <div>
                <section>
                    <p>87</p>
                    <p>dias</p>
                </section>
                <span>:</span>
                <section>
                    <p>87</p>
                    <p>Horas</p>
                </section>
                <span>:</span>
                <section>
                    <p>87</p>
                    <p>minutos</p>
                </section>
                <span>:</span>
                <section>
                    <p>87</p>
                    <p>segundos</p>
                </section>
                <span>:</span>
            </div>
        </section>
    </section>
);
}

export default ctare;*/