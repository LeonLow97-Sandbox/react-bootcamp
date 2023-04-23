import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    // Remove any lowercase letters
    setTerm(event.target.value.replace(/[a-z]/, ""));
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        Confirm your search: {term}
        <input value={term} onChange={handleChange} />
        {term.length < 3 && "Term must be longer"}
      </form>
    </div>
  );
}

export default SearchBar;
