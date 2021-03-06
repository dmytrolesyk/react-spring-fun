import React, { useState, useRef } from 'react';
import {
  animated,
  useTrail,
  useTransition,
  useSpring,
  useChain,
  } from 'react-spring';

const items = [0, 1, 2, 3, 4]

const Boxes = () => {
  const [on, toggle] = useState(false);
  
  const springRef = useRef();
  const transitionRef = useRef(); 

  const { size } = useSpring({
    ref: springRef,
    from: { size: '20%' },
    to: { size: on ? '100%' : '20%' },
  });

  // const trail = useTrail(items.length, {
  //   ref: transitionRef,
  //   from: {
  //     opacity: 0,
  //     transform: 'scale(0)',
  //   },
  //   to: { opacity: on ? 1 : 0,
  //   transform: on ? 'scale(1)' : 'scale(0)'},
  // });

  const transition = useTransition(on ? items : [], item => item, {
    ref: transitionRef,
    trail: 100,
    from: {
      opacity: 0,
      transform: 'scale(0)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
    },
    leave: {
      opacity: 0,
      transform: 'scale(0)',
    }
  });

  useChain(on ? [springRef, transitionRef] : [transitionRef, springRef]);

  return (
    <div className="full-height">
      <animated.div
        style={{ width: size, height: size }}
        onClick={() => toggle(!on)}
        className="boxes-grid-two"
      >
        {/* {trail.map(animation => (<animated.div style={animation} className="box-two" />))} */}
        {transition.map(({ item, key, props }) => (<animated.div style={props}  key={key} className="box-two">{item}</animated.div>))}
      </animated.div>
    </div>
  );
};

export default Boxes;
