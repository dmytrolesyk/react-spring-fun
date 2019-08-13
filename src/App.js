import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import Checkout from './Checkout';
import Accordion from './Accordion';
import Boxes from './Boxes-useChain';
// import Boxes from './Boxes-useSprings';
// import Boxes from './Boxes-useTrail';
// import Gesture from './Gesture';
// import Waypoints from './Waypoints';
// import Nav from './Nav';
// import Routes from './Routes';
// import Toggle from './Toggle';

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });
  // const navAnimation = useSpring({
  //   transform: isNavOpen ? 'translate3d(0, 0, 0) scale(1)' :  'translate3d(100%, 0, 0) scale(0.6)'
  // });
    return (
      <animated.div style={fade} className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
          <button
            className="menu-button"
            onClick={() => setNavOpen(!isNavOpen)}
          >
            Menu
          </button>
            {/* <Nav style={navAnimation} /> */}
        </header>
        <main>
          {/* <Routes /> */}
          <Modal />
          <Accordion />
          {/* <Waypoints /> */}
          {/* <Gesture /> */}
          <Boxes />
          <Checkout isOpen={isNavOpen} />
        </main>
      </animated.div>
    );
}

export default App;
