import React, { useState } from "react";
import "./NewPerson.css";

function NewPerson() {
  const [nameState, setNameState] = useState("");
  const [titleState, setTitleState] = useState("");
  const [imageState, setImageState] = useState("");

  const onChangeHandle = (e, setValue) => {
	console.log(e.target.value);
	setValue(e.target.value); // this represents any state updater (setName) that we passed in 
  }; // end of function

  return (
    <div className="newperson">
      <form>
        <input type="text" value={nameState} name="name" placeholder="name" />

        <input type="submit" value="Create a Person" />
      </form>
    </div>
  );
}

export default NewPerson;
