function FunctionComponent({Listofusers}) {

    console.log("Users Data From users Component", Listofusers)
    return(
        <div>
            <h1>This is Function Component</h1>
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
                    {Listofusers.map((data) =>
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

export default FunctionComponent;