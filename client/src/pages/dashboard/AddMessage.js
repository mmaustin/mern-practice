import { useAppContext } from "../../context/appContext"

const AddMessage = () => {
  const {numberIs, addNumber} = useAppContext();
  return (
    <>
      <h3>add a message</h3>
      {numberIs}
      <button type="button" onClick={addNumber}>click me</button>
    </>
  )
}

export default AddMessage