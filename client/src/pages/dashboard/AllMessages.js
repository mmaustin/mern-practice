import { useAppContext } from "../../context/appContext"

const AllMessages = () => {
  
  const {isPresent, numberIs} = useAppContext();

  return (
    <>
      <h3>all the messages</h3>
      {isPresent ? numberIs : 'this is bogus!'}
    </>
  )
}

export default AllMessages