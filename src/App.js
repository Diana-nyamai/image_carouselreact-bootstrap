import React from 'react';
import {Carousel} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
<div className="upper">
   <h1>IMAGE CAROUSEL</h1>
</div>
    
    <div className="bg">
    <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="image"
        src="nature1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Sunset</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="image"
        src="nature4.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Green land</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="image"
        src="nature5.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Hills</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  <div className="lower">
   created by Diana
  </div>
  </div>
  );
}

export default App;
