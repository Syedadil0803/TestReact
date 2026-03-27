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

    // console.log("Users Data From db.json", users)
    // console.log("User Names From db.json", users[0].name)

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default UsersData;