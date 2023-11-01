import { Link } from "react-router-dom";

export default function Profile({ userList }){
    return (
        <div className="profile_area">
            <div className="user_profile" key={userList.id}>
                <Link to="/ProfileTab"><img src={userList[0].img} alt={userList.name} /></Link>
                <div>
                    <Link to="/ProfileTab">
                        <strong>{userList[0].nickname}</strong>
                        <p>{userList[0].name}</p>
                    </Link>
                    <button>전환</button>
                </div>
            </div>
        </div>
    )
}