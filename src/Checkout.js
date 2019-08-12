import React from 'react';
import { useSpring, animated, config } from 'react-spring';

const Checkout = ({ isOpen }) => {
  const { x } = useSpring({
    x: isOpen ? 0 : 100,
    // config: {
    //   duration: 1000,
    //   tension: 400,
    //   friction: 200,
    // },
    config: config.wobbly,
  });
  return (
    <animated.div
      className="checkout"
      style={{
        pointerEvents: isOpen ? 'all' : 'none',
      }}
    > 
      <animated.div style={{
        transform: x.interpolate(x => `translate3d(-${x}%, 0, 0)`)
      }} className="checkout-left"></animated.div>
      <animated.div style={{
        transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`)
      }} className="checkout-right"></animated.div>
    </animated.div>
  );
};

export default Checkout;
