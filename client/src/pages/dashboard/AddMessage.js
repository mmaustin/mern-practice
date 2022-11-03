import { useAppContext } from "../../context/appContext";
import {FormRow, Alert} from '../../components';

const AddMessage = () => {
  const {isEditing, showAlert, displayAlert, organizer, description, eventType, eventTypeOptions} = useAppContext();

  return (
    <div>
      <form>
        {isEditing ? 'edit event' : 'add event'}
        {showAlert && <Alert/>}
        <div>
          <FormRow
            type="text"
            name="organizer"
            value={organizer}
            //handleChange
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
          ></textarea>
        </div>
      </form>
    </div>
  )
}

export default AddMessage