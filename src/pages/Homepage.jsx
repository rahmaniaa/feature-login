import { SingleRowCardList } from '../components';

function Homepage() {
  return (
    <div className='container homepage'>
      <div className='list'>
        <h2 className='mb-4'>Attend an event starting soon</h2>
        <SingleRowCardList />
      </div>
      <div className='list'>
        <h2 className='mb-4'>Design Events</h2>
        <SingleRowCardList />
      </div>
    </div>
  );
}

export default Homepage;
