import { Footer, Hero, Navbar } from '../components';
import { Homepage } from '../pages';
import { useState } from 'react';

function Dashboard() {
  const [backgroundNav, setBackgroundNav] = useState(false);

  window.addEventListener('scroll', function (e) {
    const lastPosition = window.scrollY;
    if (lastPosition > 50) {
      setBackgroundNav(true);
    } else if (backgroundNav === true) {
      setBackgroundNav(false);
    } else {
      setBackgroundNav(false);
    }
  });

  return (
    <>
      <Navbar background={backgroundNav} />
      <Hero />
      <Homepage />
      <Footer />
    </>
  );
}

export default Dashboard;
