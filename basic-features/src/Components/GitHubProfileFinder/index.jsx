import { useEffect, useRef, useState } from "react"
import './styles.css'
import UserCard from "./card";

export default function GitHubProfileFinder() {

    const inputRef = useRef(null)

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    const [username, setUserName] = useState('Aswin-PK')
    const [input, setInput] = useState('')

    const [userData, setUserData] = useState({})

    const handleSubmit = () => {
        setUserName(input);
        setInput('');
    }

    async function fetchGithubUser() {
        setLoading(true)
        const data = await fetch(`https://api.github.com/users/${username}`).then(response => response.json());
        
        if(data) {
            setUserData(data);
            setLoading(false);
        }
    }

    useEffect(()=>{
        inputRef.current.focus();

        try {
            fetchGithubUser();
        }
        catch(e) {
            setError(true)
        }

    },[username])

    return <div className="github-container">
        <div className="heading">
            <span>GitHub User Finder</span>
        </div>
        
        <div className="github-profile-container">
        
            {/* Searching og Github user detail using the username */}
            
            <div className="input-read-container">
                <input ref={inputRef} type="text" placeholder="Search GitHub User" id="username" 
                    onChange={(e) => setInput(e.target.value)} 
                    value={input}
                />

                <button type="submit" className="search" 
                    onClick={handleSubmit} 
                    disabled={input && input.value !== '' ? false : true}
                >Search</button>
            </div>
            {
                error ? 'Something went wrong' : (loading ? 'Please wait a moment' : <UserCard userData={userData}/>)
            }
        </div>
    </div>
}