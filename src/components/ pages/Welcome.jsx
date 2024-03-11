import User from "../User";

export default function Welcome (props){

const {users} = props;
    
    return (
    
        <div className = "user-section"> 
            <h1>Who's watching?</h1>
            <div className = "user-list">
                {users.map((user,index) => {
                    return <User user={user} key={index} /> })}


</div>

    <button className="btn btn-lg profile-button">Manage Profiles</button>

    </div>);
}