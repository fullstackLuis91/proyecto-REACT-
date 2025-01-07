import React from "react";
import "./Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="top-image-container">
        <img 
          src="https://hondamaquina.com/imagenes/Caracteristicas-de-los-sistemas-anti-wheelie-o-anti-caballitos-de-honda.jpg" 
          alt="Sistema Anti Wheelie Honda"
          className="top-image"
        />
      </div>
      
      <div className="title-container">
        <div className="image-item-left">
          <img 
            src="https://www.moto.ch/wp-content/uploads/2020/11/Yamaha_R6_Race_01.jpg" 
            alt="Yamaha R6"
            className="moto-image-small"
          />
        </div>
        <h1 className="title">
          Motos <span className="red-r">R</span>ioja
        </h1>
        <div className="image-item-right">
          <img 
            src="https://img.remediosdigitales.com/24a60c/honda-cbr1000rr-r-sp-fireblade-2020-014/1366_2000.jpg" 
            alt="Honda CBR1000RR"
            className="moto-image"
          />
        </div>
      </div>

    </div>
  );
};

export default Home;
