import axios from 'axios'
import React, { useEffect , useState } from 'react'

function Users() {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setUserData(response.data)
        }).catch((error) => {
            console.log("Error" , error)
        })
    }, [])
    console.log(userData)
  return (
    <div>
        {userData.map((data , i) => {
            return(
                <div key={i} style={{padding: 10, background: 'black', margin: 10, color: 'white'}}>
                    <h5>ID</h5>
                    <span key={i}>{data.id}</span>
                    <h5>Name</h5>
                    <p>{data.name}</p>
                    <h5>Phone</h5>
                    <p>{data.phone}</p>
                    <h5>Username</h5>
                    <p>{data.username}</p>
                    <h5>Website</h5>
                    <a href="#">{data.website}</a>
                    <h5>City</h5>
                    <p>{data.address.city}</p>
                    <h5>Street</h5>
                    <p>{data.address.street}</p>
                    <h5>Suite</h5>
                    <p>{data.address.suite}</p>
                    <h5>Zipcode</h5>
                    <p>{data.address.zipcode}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Users