import { useEffect, useState } from "react"
import './styles.css'

export default function SearchAutoComplete() {

    const [users, setUsers] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchParam, setSearchParam] = useState('');


    // console.log('input', input)

    async function fetchUserData() {
        const getuserData = await fetch('https://dummyjson.com/users').then(response => response.json());

        getuserData && getuserData.users.length > 0 ?
            setUsers(getuserData.users.map((item) => item.firstName))
        : null

    }

    // Manage the change in the input field while entering names
    const handleSearch = (e) => {
        setSearchParam(e.target.value);
        let enteringValue = e.target.value.toLowerCase();

        if(enteringValue.length > 0){
            const filteredName = users && users.length > 0 ?
                users.filter(name => name.toLowerCase().indexOf(enteringValue) > -1)
            : []

            setFilteredData(filteredName);
        } 
        else{
            setFilteredData([])
        }
        
    }

    function handleClick(e) {
        setSearchParam(e.target.innerText);
        setFilteredData([e.target.innerText]);
    }


    useEffect(()=> {
        fetchUserData()
    }, [])

    return <div className="search-auto-complete-container">
        <div className="heading" style={{marginTop: '2rem'}}>
            <h4>Search filter</h4>
        </div>
        <div className="input-container">
            <input type="text" className="search" 
                value={searchParam}
                onChange={handleSearch}
                placeholder="Search a user..."
            />
        </div>
        <ul className="filtered-users">
            {
                users && users.length > 0 ?
                    filteredData.map((item, index) => <li key={index} onClick={handleClick}>{item}</li>)
                : null
            }
        </ul>
    </div>
}