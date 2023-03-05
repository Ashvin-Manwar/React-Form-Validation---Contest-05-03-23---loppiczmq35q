import React, { useState, useRef } from 'react';

function App() {
 const fnameRef=useRef();
 const emailRef=useRef();
 const [error,setError]=useState(undefined);
 const [data,setData]=useSate({fname:undefined,lname:undefined})
 const change=()=>{
  console.log(emailRef.current.value);
  if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailRef.current.value)){
  setError(undefined);
   document.getElementById("submit").disabled=false;
  }
  else{
  setError("Email is invalid");
    document.getElementById("submit").disabled=true;   
  }
 }

 return(
    <div className="App">
      <h1>How About Them Apples</h1>
      <form onSubmit={(e)=>{
        e.preventDefault();
          setData({
          fname:fnameRef.current.value,
          lname:emailRef.current.value
          });
 }}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input id='fname' name="name"  ref={fnameRef}/>
            <br></br>
            <p>Email</p>
            <input id='lname' name="name" onChange={change} onBlur={handleBlur}  ref={emailRef}/>
            {error && <h2 style={{color: 'red'}}>{error}</h2>}
            {emailError && <p>Email is invalid</p>}
          </label>
        </fieldset>

        <button id='submit' type="submit">Submit</button>
      </form>
      {
        data.fname != undefined && (
          <div>
          <h1>{data.fname}</h1>
          <h2>{data.lname}</h2>
          </div>
        )
      }
    </div>
  )
}

export default App;
