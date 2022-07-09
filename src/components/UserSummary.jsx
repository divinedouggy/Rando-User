

function UserSummary(props) {


    return (

        <div>
        {props.userData == null ? ("There is no user data") : (JSON.stringify(props.userData))}
        
        </div>
    )
}

export default UserSummary