import React from 'react'
import {  Link } from "react-router-dom";

const PageNotFound = () => (
  <section className="PageNotFound">
    <div className='text-center mt-5'>
      <img src={window.location.origin + '/404.png'} className='img-fluid img-thumbnail'></img>
    </div>
    <div className='text-center'>
      <Link className="btn btn-info btn btn-lg  mt-5" to={`/`}>Volver al inicio</Link>
    </div>
  </section>
)

export default PageNotFound