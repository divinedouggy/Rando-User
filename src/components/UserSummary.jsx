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
                
                <div className="person" key={key}>
                  <h2>   {data.name.title} {data.name.first} {data.name.last} </h2>
                  <h2>{data.email}</h2>
                  {showMore ? (<><h2>{data.location.street.number} {data.location.street.name}</h2> <h2>{data.location.city}, {data.location.state}</h2> <h2>Username: {data.login.username}</h2> <img src={data.picture.medium} alt="pic"/> <br></br><br></br> <button onClick={flipFalse}>Show Less</button> </>) : (<><button onClick={flipFalse}>Show More</button></>)}
                  
                  
                  {console.log(showMore)}
                </div>
                //  street, city, state, and username 
              )
        }))}
        
        </div>
    )
}

export default UserSummary