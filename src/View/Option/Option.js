


function Options  (props)  {
  
        const { options, selectedOption, } = props;
    return (
      <div>
        {options.map((item) => (
         <div >
            <label>
                <button className="option-button">
              <input
                type="radio"
                name="option"
                value={item}
                onChange={event => selectedOption(event.target.value)}
                             
              />

              {item}
              </button>
            </label>
          </div>
        ))}
      </div>
    );
  };
  
  export default Options;