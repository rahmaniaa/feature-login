import { Search } from '..';

function Hero() {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='title'>
          <h1>
            <span>Create</span> or <span>Find</span> interesting{' '}
            <span>Events</span> around The world
          </h1>
        </div>
        <div className='input-search'>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Hero;
