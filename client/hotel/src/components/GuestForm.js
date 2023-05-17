import { postGuest } from "./GuestService";
import { useState } from "react";

const GuestForm = ({addGuest}) => {
    const [buttonChecked, setButtonChecked] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        email_address: "",
        checked_in: buttonChecked
})



    const onChange = (event) => {
        console.log("onChange", event.target.value);
        const newFormData = Object.assign({}, formData);
        newFormData[event.target.name] = event.target.value;
        setFormData(newFormData)
    }

    const onCheckboxClicked = (event) => {
        if(formData.checked_in === buttonChecked){
            let newState = {...formData}
            newState.checked_in = !buttonChecked
            setFormData(newState)
        }
        setButtonChecked(!buttonChecked)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postGuest(formData)
        .then((data) => {addGuest(data)})
    }

    return (
        <form onSubmit={onSubmit} id="guest-form">
            <h2>Add a Guest</h2>
            <div className="form">
                <label htmlFor="name">Name:</label>
                <input onChange={onChange} type="text" name="name" value={formData.name} required/>
            </div>
            <div className="form">
                <label htmlFor="email_address">Email Address:</label>
                <input onChange={onChange} type="text" name="email_address" value={formData.email_address} required/>
            </div>
            <div className="form">
                <label htmlFor="checked_in">Checked In:</label>
                <input onChange={onCheckboxClicked} type="checkbox" name="checked_in" value={formData.checked_in}/>
            </div>
            <input type="submit" value="Save" id="save"/>
        </form>
    )
}

export default GuestForm;