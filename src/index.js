import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './About';
import img1 from './teamimages/aryan photo.jpg'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <section className='team'>
      <div className='center'>
        <h1>Our Team</h1>
      </div>
      <div className='team-content'>
      <About image={img1} Name="Aryan Ruthwik" Role="Technical Coordinator" Link1="https://www.facebook.com/" Link2="https://www.facebook.com/"/>
      <About image={img1} Name="Aryan Ruthwik" Role="Technical Coordinator" Link1="https://www.facebook.com/" Link2="https://www.facebook.com/"/>
      <About image={img1} Name="Aryan Ruthwik" Role="Technical Coordinator" Link1="https://www.facebook.com/" Link2="https://www.facebook.com/"/>
      <About image={img1} Name="Aryan Ruthwik" Role="Technical Coordinator" Link1="https://www.facebook.com/" Link2="https://www.facebook.com/"/>
      <About image={img1} Name="Aryan Ruthwik" Role="Technical Coordinator" Link1="https://www.facebook.com/" Link2="https://www.facebook.com/"/>
      <About image={img1} Name="Aryan Ruthwik" Role="Technical Coordinator" Link1="https://www.facebook.com/" Link2="https://www.facebook.com/"/>
      <About image={img1} Name="Aryan Ruthwik" Role="Technical Coordinator" Link1="https://www.facebook.com/" Link2="https://www.facebook.com/"/>
      <About image={img1} Name="Aryan Ruthwik" Role="Technical Coordinator" Link1="https://www.facebook.com/" Link2="https://www.facebook.com/"/>
      <About image={img1} Name="Aryan Ruthwik" Role="Technical Coordinator" Link1="https://www.facebook.com/" Link2="https://www.facebook.com/"/>  
      </div>
    </section>
   

  </React.StrictMode>
);
