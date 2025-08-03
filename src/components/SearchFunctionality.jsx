import React, { useEffect, useState } from "react";

const SearchFunctionality = () => {
  const [allUsers, setAllUsers] = useState([]);      // original unfiltered
  const [filteredUsers, setFilteredUsers] = useState([]); // search result

  useEffect(() => {
    fetch("https://json-placeholder.mock.beeceptor.com/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
        setFilteredUsers(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleChange = (e) => {
    const searchData = e.target.value.toLowerCase();
    const results = allUsers.filter((el) =>
      el.name.toLowerCase().includes(searchData)
    );
    setFilteredUsers(results);
  };

  return (
    <div>
      <h1>Search Functionality UI</h1>
      <input
        type="text"
        placeholder="Search user by name..."
        onChange={handleChange}
      />
      <ul>
        {filteredUsers.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFunctionality;
