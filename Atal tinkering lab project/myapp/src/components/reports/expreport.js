import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import db from "./firebase";

const Report = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "experimentdata"));
    const results = querySnapshot.docs.map((doc) => doc.data());
    setSearchResults(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = async () => {
    if (searchQuery === "") {
      alert("Please enter something to search.");
      return;
    }

    const querySnapshot = await getDocs(collection(db, "experimentdata"));

    const results = querySnapshot.docs
      .map((doc) => doc.data())
      .filter((result) =>
        Object.values(result)
          .map((value) => value.toString().toLowerCase())
          .some((value) => value.includes(searchQuery.toLowerCase()))
      );

    if (results.length === 0) {
      alert("No results found.");
    }

    setSearchResults(results);
  };

  return (
    <>
      <div className="form-report-container">
        <input
          className="search-input"
          placeholder="Enter your search query"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="search-results">
        {searchResults.map((result, index) => (
          <div className="result-item" key={index}>
            {Object.entries(result).map(([key, value]) => (
              <p key={key}>
                <b>{key}</b>: {value.toString()}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Report;
