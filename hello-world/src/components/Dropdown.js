import React , {Component, useState} from 'react';

const Dropdown = () => {
    const [greeting, setGreeting] = useState("Greetings");

    const createText = (element) => {
        setGreeting(element.target.value)
    }

    return (
        <div>
            <p style={{display: "inline-block",color:"red",fontSize:"60px"}}> Greetings : {greeting}</p>
            <select onChange={createText.bind(this)}>
                <option value="Hi">Hi</option>
                <option value="Hello">Hello</option>
                <option value="Hey">Hey</option>
            </select>
        </div>
    );
}

export default Dropdown;
