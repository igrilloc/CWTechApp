import React from 'react';
import { useDispatch } from 'react-redux';
import { getText } from '../redux/actions';


const InputForm = () => {


  const [input, setInput] = React.useState(
    {
      text: ''
    }
  );

  const dispatch = useDispatch();


  const handleChange = (event) => {

    setInput(
      {
        ...input,
        [event.target.name]: event.target.value
      }
    );

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(input.text === '') {
      alert('Complete input')
    
    } else {
      dispatch(getText(input.text));

    };

  };


  return (

    <nav className="navbar bg-dark">

      <div className="container-fluid justify-content-center">
        <form 
          onSubmit={handleSubmit}
          className="d-flex"
        >
          
          <input
            name='text'  
            type='text' 
            placeholder='Insert Text'
            className="form-control me-2"
            onChange={handleChange}
          />
          
          <button type='submit' className="btn btn-primary">Send</button>
        </form>
      </div>
      
    </nav>
  );

}



export default InputForm