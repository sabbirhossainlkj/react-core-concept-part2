export default function Friend({friend}){
    console.log(friend)
    const { name, email, website, address } = friend;
    return(
        <div className="card">
            <h2>name : {name}</h2>
            <p>email : {email}</p>
            <p>website : {website}</p>
            <p>address : {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
            <p> additional info : {address.geo.lat}, {address.geo.lng}</p>
            
        </div>
    )
}