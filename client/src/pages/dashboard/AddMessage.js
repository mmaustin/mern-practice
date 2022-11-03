import { useAppContext } from "../../context/appContext";
import {FormRow, Alert} from '../../components';
import { useState } from "react";


const AddMessage = () => {
  const {isEditing, showAlert, displayAlert, organizer, description, eventType, eventTypeOptions} = useAppContext();

  const [organize, setOrganizer] = useState(organizer);
  const [describe, setDescription] = useState(description);

  const onSetOrganizer = e => setOrganizer(e.target.value);
  const onSetDescription = e => setDescription(e.target.value);

  const submitForm = e => {
    e.preventDefault()
    console.log(`${organize}: ${describe}`)
  }


  return (
    <div>
      <form onSubmit={submitForm}>
        {isEditing ? 'edit event' : 'add event'}
        {showAlert && <Alert/>}
        <div>
          <FormRow
            type="text"
            name="organizer"
            value={organize}
            handleChange={onSetOrganizer}
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={describe}
            onChange={onSetDescription}
          ></textarea>
        </div>
        <button type="submit" >submit form</button>
      </form>
    </div>
  )
}

export default AddMessage