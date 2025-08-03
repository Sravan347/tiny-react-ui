import React, { useEffect, useState } from "react";

const SearchFunctionality = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://json-placeholder.mock.beeceptor.com/users")
      .then((res) => res.json())
      .then((data) => {
         setUser(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  console.log(user);

  return (
    <div>
      <h1>search functionality ui</h1>
      <ul>
        {user.map((el) => {
          return <li>{el.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchFunctionality;
