import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/2294403/pexels-photo-2294403.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Push Your Limits</h3>
          <p>Whatever your current skill level</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/371049/pexels-photo-371049.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Working out doesn't have to be dreadful!</h3>
          <p>KLB Athletics makes it fun to workout.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/931321/pexels-photo-931321.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Dont Suffer Alone!</h3>
          <p>
            We know that working out alone is not fun... Compete with your
            training partners and push each other!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel;
