import React from 'react';
import '../style.css';

function FetchAPI () {
    const apiGet = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => alert(json.title))
    }
  return (
      <button className="submit-button" type="submit" onClick={apiGet}><img src={'/assets/submit-arrow.png'} className="submit-logo" alt="submit arrow"></img></button>
  )
}

export default FetchAPI