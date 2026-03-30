import { useState, useEffect } from "react";




function UsersData() {


    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then((response) => response.json())
            .then((users) => setUsers(users))
            .catch((error) => console.log(error));

    }, []);


    // users = [{},{},{}]

    console.log("Users Data From db.json", users)
    //console.log("User Names From db.json", users[0].name)
    console.log("User Names From db.json", users.map((user) => user.phone))

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((data) =>
                        <tr key={data.id}> 
                            <th scope="row">{data.id}</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default UsersData;