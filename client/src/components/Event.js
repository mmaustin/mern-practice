import moment from 'moment';


const Event = ({description, createdAt}) => {
  let date = moment(createdAt);
  date = date.format('MMMM Do YYYY');

  return (
    <>
      <h3>{description}</h3>
      <h4>{date}</h4>
    </>
  )
}
export default Event