import moment from 'moment';
import {Link} from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import EventInfo from './EventInfo';


const Event = ({description, createdAt, _id, organizer, eventType}) => {
  let date = moment(createdAt);
  date = date.format('MMMM Do, YYYY');

  const {setEditEvent, deleteEvent} = useAppContext();

  return (
    <div>
      <header>
        <div>
          <h3>
            <p>{organizer}</p>
            <p>{description}</p>
          </h3>
        </div>
      </header>
      <footer>
        <div>
          <EventInfo text={date}/>
          <EventInfo text={eventType}/>
        </div>
        <div>
          <Link to='/add-message' onClick={()=> setEditEvent(_id)}>Edit Event</Link>
          <button type='button' onClick={()=> deleteEvent(_id)}>Delete Event</button>
        </div>
      </footer>
    </div>
  )
}
export default Event