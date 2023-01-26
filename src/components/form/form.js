import { useState } from "react";
import Field from "../field/field"
import "./form.css"

function Form({submit}) {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
        submit(title, time);
        setTime("");
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmit}>
          <Field name="title" type="text" placeholder="Task title" onChangeField={(e) => setTitle(e.target.value)} value={title || ""} required={true} label="What will you do?"/>
          <Field name="time" type="text" placeholder="Estimated time (in hours)" onChangeField={(e) => setTime(e.target.value)} value={time || ""} required={true} label="Time:"/>
          <input type="submit" value="Create task"/>
        </form>
    )
}

export default Form