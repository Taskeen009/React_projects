import { useEffect, useState } from "react";

const Autoapi = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [searchParam, setSearchParam] = useState("");
    const [showDropDown, setShowDropDown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);

        if (query.length > 1) {
            const filterData =
                users.filter((item) =>
                    item.toLowerCase().includes(query)
                );
            setFilteredUsers(filterData);
            setShowDropDown(true);
        } else {
            setShowDropDown(false);
        }
    };

    async function fetchlist() {
        setLoading(true);
        try {
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();
            if (data && data.users && data.users.length) {
                setUsers(data.users.map((item) => item.firstName));
                setLoading(false);
                setError("");
            }
        } catch (e) {
            console.error(e);
            setError("Failed to fetch users. Please try again later.");
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchlist();
    }, []);

    return (
        <div className="search-a">
            <input
                name="search-users"
                type="text"
                value={searchParam}
                onChange={handleChange}
                placeholder="Search Users here..."
            />
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {showDropDown && filteredUsers.length > 0 && (
                <div className="dropdown">
                    {filteredUsers.map((user, index) => (
                        <p key={index}>{user}</p>
                    ))}
                </div>
            )}
            {showDropDown && filteredUsers.length === 0 && (
                <p>No matching users found.</p>
            )}
        </div>
    );
};

export default Autoapi;
