import React, { useState } from "react";

const dictionaryData = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

const XDictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();
    const foundWord = dictionaryData.find(entry => entry.word.toLowerCase() === term);

    setSearchResult(foundWord ? foundWord.meaning : "Word not found in the dictionary.");
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a word..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <p>Definition:</p>
      {searchResult !== "" && <p>{searchResult}</p>}
    </div>
  );
};

export default XDictionary;
