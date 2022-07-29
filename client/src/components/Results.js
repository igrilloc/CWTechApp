import React from 'react';
import { useSelector } from 'react-redux';



const Results = () => {

  const stateInput = useSelector(state => state.copyText);
  // console.log(stateInput);


  return (

    <div className='container'>

      <h3 className='text-start px-3 py-3'>Results:</h3>

      {
        stateInput?.map(
          (i) => (
            <div key={i.id} className="card text-bg-dark mb-3">
              {i.text}
              <br/>
              {i.palindrome === true ? '- Is Palindrome' : '- Not Palindrome'}
            </div>
          )
        )
      }

    </div>

  );

}


export default Results