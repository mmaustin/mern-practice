import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Event from './Event';

const EventsContainer = () => {
  const {getJobs, events, totalEvents, page} = useAppContext();
  useEffect(() => {
    getJobs();
  }, [])
  
  if(events.length === 0){
    return (
      <h3>There are no events . . . </h3>
    )
  }

  return (
    <>
      <div>
        <h3>{totalEvents} event{events.length > 1 && 's'} found</h3>
      </div>
      <div>
        {events.map(event=>{
          return <Event key={event._id} {...event}/>
        })}
      </div>
    </>
  )
}
export default EventsContainer