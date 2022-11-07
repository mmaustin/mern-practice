import { useAppContext } from "../../context/appContext";
import {FormRow, Alert, FormRowSelect} from '../../components';

const AddMessage = () => {
  const {isEditing, isLoading, showAlert, displayAlert, organizer, description, eventType, eventTypeOptions, handleChange, clearValues, createEvent} = useAppContext();

  const handleEventInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({name, value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    // if(!organizer || !description){
    //   displayAlert();
    //   return
    // }
    if(isEditing){
      //eventually editJob()
      return
    }
    createEvent();
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
          <div>
            <button type="submit" onClick={handleSubmit} disabled={isLoading}>submit form</button>
            <button onClick={(e)=> {
              e.preventDefault();
              clearValues();
            } }>clear values button</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddMessage