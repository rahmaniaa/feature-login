import { CardEvent, Dropdown, Pagination, Search } from '../components';

function EventList() {
    return (
      <div>
        <Search />
        <Dropdown />
        <CardEvent />
        <Pagination />
      </div>
    );
  }
  
  export default EventList;