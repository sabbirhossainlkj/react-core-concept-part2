import { use } from "react"

export default function Users({fetchUsers}){
    const output = use(fetchUsers)
    console.log(output)
    return(
        <div className="card">
            <h2>Users : {output.length}</h2>
        </div>
    )
}
