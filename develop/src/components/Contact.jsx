import { useState } from "react";
import { validateEmail } from "../utils/helpers"

export default function Contact() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [emailDisplay, setEmailDisplay] = useState({display: "none"});
    const [nameDisplay, setNameDisplay] = useState({display: "none"});
    const [messageDisplay, setMessageDisplay] = useState({display: "none"});

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "name") {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage("Email is invalid");
            return;
        }
        if (!name || !message) {
            setErrorMessage("Please fill out all fields")
            return;
        }
        alert("Message sent");

        setName("");
        setMessage("");
        setEmail("");
    }

    const handleMouseLeave = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (!inputValue) {   
            if (inputType === "email") {
                setEmailDisplay({display: "block"});
            } else if (inputType === "name") {
                setNameDisplay({display: "block"});
            } else {
                setMessageDisplay({display: "block"});
            }
        }
    }

    return(
        <div className="container mt-2">
            <h1>Contact Me</h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <h5 className="text-warning" style={emailDisplay}>This field is required</h5>
                <input 
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    onMouseLeave={handleMouseLeave}
                />
                <h5 className="text-warning" style={nameDisplay}>This field is required</h5>
                <input 
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="name"
                    placeholder="Name"
                    onMouseLeave={handleMouseLeave}
                />
                <h5 className="text-warning" style={messageDisplay}>This field is required</h5>
                <textarea 
                    className="w-100 mt-1"
                    style={{height: 500 + "px"}}
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="message"
                    placeholder="Message"
                    onMouseLeave={handleMouseLeave}
                />
                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="text-warning">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}