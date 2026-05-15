import React, { createContext, useState } from "react";
export const UserContext = createContext();

function Context(props) {

    const [user, setUser] = useState([
        {id : 1, name : "Abhijit", city: "Hazaribagh"},
        {id : 2, name : "Aman", city: "Ranchi"},
        {id : 3, name : "Ankit", city: "Bokaro"},
        {id : 4, name : "Anshul", city: "Dhanbad"},
    ]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default Context;
