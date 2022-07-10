import { useState } from "react"

function UserSummary(props) {

const [showMore, setShowMore] = useState(false)
function flipFalse() {
    setShowMore(prevBoo => !prevBoo)
}

    return (

        <div>
        {props.userData == null ? ("There is no user data") : (props.userData.data.results.map((data,key) => {
            return (
                
                <div key={key}>
                  <h2>   {data.name.title} {data.name.first} {data.name.last} </h2>
                  <h2>{data.email}</h2>
                  
                  <button onClick={flipFalse}>Show/Hide</button>
                  {console.log(showMore)}
                </div>
              )
        }))}
        
        </div>
    )
}

export default UserSummary