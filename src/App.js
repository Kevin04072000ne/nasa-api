import React, { useEffect, useState } from 'react';
import { getAPOD } from './utils/nasaAPI';
import { Link } from 'react-router-dom';

const App = () => {
  // State para almacenar la imagen astronómica del día


  return (
    <div className="container">
      <h1 className='col-12 text-center mt-4'>¿Sabias que?</h1>
      <h3 className='col-12 text-center'>La NASA tiene camaras en sus exploradores de Marte</h3>
      <h6 className='col-12 text-center mb-5'>Puedes admirar este planeta a travez del curiosity en estas paginas, disfruta de cada una de las camaras en estas secciones</h6>
      <div class="row d-flex flex-wrap justify-content-center align-items-center mt-5">
        <div class="col-9 col-md-5 col-lg-3 mt-5 d-flex flex-column justify-content-between shadow text-center border rounded p-3 bg-dark me-3 m-lg-4" style={{'minHeight':'200px'}}>
          <h2 className=' text-light '> Front Hazard Avoidance Camera </h2>
          <Link to='/fhaz'>Ver ahora</Link>
        </div>
        <div class="col-9 col-md-5 col-lg-3  d-flex flex-column justify-content-between shadow text-center border rounded p-3 bg-dark me-3 m-lg-4" style={{'minHeight':'200px'}}>
          <h2 className=' text-light '> Rear Hazard Avoidance Camera </h2>
          <Link to='/rhaz'>Ver ahora</Link>
        </div>
        
        <div class="col-9 col-md-5 col-lg-3  d-flex flex-column justify-content-between shadow text-center border rounded p-3 bg-dark me-3 m-lg-4" style={{'minHeight':'200px'}}>
          <h2 className=' text-light '> Mast Camera </h2>
          <Link to='/mast'>Ver ahora</Link>
        </div>
        <div class="col-9 col-md-5 col-lg-3  d-flex flex-column justify-content-between shadow text-center border rounded p-3 bg-dark me-3 m-lg-4" style={{'minHeight':'200px'}}>
          <h2 className=' text-light '> Chemistry and Camera Complex</h2>
          <Link to='/chemcam'>Ver ahora</Link>
        </div>
        
        <div class="col-9 col-md-5 col-lg-3  d-flex flex-column justify-content-between shadow text-center border rounded p-3 bg-dark me-3 m-lg-4" style={{'minHeight':'200px'}}>
          <h2 className=' text-light '> Mars Hand Lens Imager </h2>
          <Link to='/mahli'>Ver ahora</Link>
        </div>
        <div class="col-9 col-md-5 col-lg-3  d-flex flex-column justify-content-between shadow text-center border rounded p-3 bg-dark me-3 m-lg-4" style={{'minHeight':'200px'}}>
          <h2 className=' text-light '> Mars Descent Imager </h2>
          <Link to='/mardi'>Ver ahora</Link>
        </div>
        <div class="col-9 col-md-5 col-lg-3  d-flex flex-column justify-content-between shadow text-center border rounded p-3 bg-dark me-3 m-lg-4" style={{'minHeight':'200px'}}>
          <h2 className=' text-light '> Navigation Camera </h2>
          <Link to='/navcam'>Ver ahora</Link>
        </div>
        
      </div>
    </div>
  );
};

export default App;
