import { useAppContext } from "../../context/appContext";
import {FormRow, Alert, FormRowSelect} from '../../components';
//import { useState } from "react";

const AddMessage = () => {
  const {isEditing, showAlert, displayAlert, organizer, description, eventType, eventTypeOptions, handleChange} = useAppContext();

  // const [organize, setOrganizer] = useState(organizer);
  // const [describe, setDescription] = useState(description);

  // const onSetOrganizer = e => setOrganizer(e.target.value);
  // const onSetDescription = e => setDescription(e.target.value);

  // const submitForm = e => {
  //   e.preventDefault()
  //   console.log(`${organize}: ${describe}`)
  // }
  const theDate = '';

  const handleEventInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`)
    //handleChange({name, value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(!organizer || !description){
      displayAlert();
      return
    }
    console.log('create event');
  }

  return (
    <div>
      <form >
        {isEditing ? 'edit event' : 'add event'}
        {showAlert && <Alert/>}
        <div>
          <FormRow
            type="text"
            name="organizer"
            value={organizer}
            handleChange={handleEventInput}
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleEventInput}
          ></textarea>
          <FormRowSelect
            labelText='Event'
            type='text'
            name='eventType'
            value={eventType}
            list={eventTypeOptions}
            handleChange={handleEventInput}
          />
          <label>
            Enter your birthday:
          <input type="date" name="theDate" value={theDate} onChange={handleEventInput}/>
        </label> 
          {/* <label htmlFor="eventType">Event</label>
          <select
            id="eventType"
            name="eventType"
            value={eventType}
            onChange={handleEventInput}>
              {eventTypeOptions.map((type, i)=>{
                return (
                  <option key={i} value={type}>
                    {type}
                  </option>
                )
              })}
          </select> */}
          <div>
            <button type="submit" onClick={handleSubmit}>submit form</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddMessage