export default function UserCard({userData}) {

    const {avatar_url, html_url, name, bio, followers, following, location, public_repos} = userData

    return <div className="result-container">
    {/* This is the container that holds the github user account details */}
        <div className="profile-box">
            <img src={avatar_url} alt="" />
        </div>
        <ul className="user-details">
            <li className="user-name"><a href={html_url} rel="noreferrer noopener" target="_blank">{name}</a></li>
            <li className="user-bio">{bio}</li>
            <li className="connection-details">
                <span>Followers: {followers}</span>
                <span>Following: {following}</span>
            </li>
            <li><p>Location:</p> {location}</li>
            <li><p>Repositories:</p> {public_repos}</li>
        </ul>
    </div>
}