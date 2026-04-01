import React from "react";

class ClassComponent extends React.Component {

    constructor() {
        super()
        this.state = { users: [], refresh: false }
    }


    componentDidMount() {
        // this.interval = setInterval(() => {
        //     console.log("component mounted")
        //     this.fetchusers()
        // }, 3000) // polling - 3 seconds
        this.fetchusers()

    }
    componentDidUpdate(_, prevState) {
        if (prevState.refresh !== this.state.refresh) {
            this.fetchusers()
        }

        console.log("component updated")
        //  this.fetchusers()
    }
    componentWillUnmount() {
        console.log("component will unmount")
        // clearInterval(this.interval)
    }


    fetchusers = () => {
        fetch("http://localhost:3000/users")
            .then((res) => res.json())
            .then((data) => {
                console.log("Users Data", data)
                this.setState({ users: data })
            })
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <div>
                <h1>This is Class Component</h1>
                <button
                    onClick={() => this.setState({ refresh: !this.state.refresh })}
                >Refresh Data</button>
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
                            {this.state.users.map((data) =>
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
            </div>

        )
    }
}

export default ClassComponent;