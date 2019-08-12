import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const { color, y } = useSpring({
    // opacity: isToggled ? 1 : 0,
    // fontSize: isToggled ? '2rem' : '5rem',
    // transform: isToggled ? 'translate3d(0, 0, 0)' : 'translate3d(0, -50px, 0)',
    color: isToggled ? '#000' : 'green',
    y: isToggled ? 0 : 1,
  });
  return (
    <div>
      <animated.h1 style={{
        color,
        transform: y
          .interpolate({
            range: [0, .25, .50, .75, 1],
            output: [0, -25, -50, -100, -50],
          })
          .interpolate(y => (`translate3d(0, ${y}px, 0)`)),
      }}>Hello</animated.h1>
      <button onClick={() => setToggle(!isToggled)}>
        Toggle
      </button>
    </div>
  );
};

// const AnimatedComponent = animated(componentName);

export default Toggle;
