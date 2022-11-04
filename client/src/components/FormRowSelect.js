const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
    return (
      <div >
        <label htmlFor={name} >
          {labelText || name}
        </label>
        <select
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
        >
          {list.map((itemValue, index) => {
            return (
              <option key={index} value={itemValue}>
                {itemValue}
              </option>
            )
          })}
        </select>
      </div>
    )
  }
  
  export default FormRowSelect