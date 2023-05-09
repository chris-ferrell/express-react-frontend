import React, { useState } from "react";
import "./NewPerson.css";

function NewPerson() {
  const [nameState, setNameState] = useState("");
  const [titleState, setTitleState] = useState("");
  const [imageState, setImageState] = useState("");

  //Here we are making a dynamic onChangeHandler that'll accept a state updater
  const onChangeHandler = (e, setValue) => {
    console.log(e.target.value);
    setValue(e.target.value); //this represents any state updater (setName) that we passed in
  }; //end of func

  return (
    <div className="newperson">
      <form>
        <input
          type="text"
          value={nameState}
          name="name"
          placeholder="name"
          onChange={(e) => onChangeHandler(e, setNameState)}
        />
        <input
          type="text"
          value={imageState}
          name="image"
          placeholder="image URL"
          onChange={(e) => onChangeHandler(e, setImageState)}
        />
        <input
          type="text"
          value={titleState}
          name="title"
          placeholder="title"
          onChange={(e) => onChangeHandler(e, setTitleState)}
        />

        <input type="submit" value="Create a Person" />
      </form>
    </div>
  );
}

export default NewPerson;
