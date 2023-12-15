import { useState } from "react";
import "./App.css";
import Table from "./Components/Table";

const set = new Set();
function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userList, setUserList] = useState([
        { firstName: "abc", lastName: "def", email: "ahdskl", count: 1 },
    ]);

    function handleSubmit(e) {
        e.preventDefault();
        if (set.has(email)) {
            setUserList((userList) =>
                userList.map((user) => {
                    if (user.email === email) {
                        user.count++;
                    }
                    return user;
                })
            );
        } else {
            const userObj = {
                firstName,
                lastName,
                email,
                count: 1,
            };
            setUserList((userList) => [...userList, userObj]);
            set.add(email)
        }
    }

    return (
        <>
            <form method="post">
                <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            <Table data={userList} />
        </>
    );
}

export default App;
