import React, { useState } from "react";

import "./App.css";

import Autocomplete from "./Components/Autocomplete/Autocomplete";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

function App() {

  const [selectedSuggestion, setSelectedSuggestion] = useState({});

  const handleSuggestionSelect = (suggestion) => {
    setSelectedSuggestion(suggestion)
  }

  return (
    <div className="App">
      <Autocomplete onSuggestionSelection={handleSuggestionSelect} />
      <ProductDetail productId={selectedSuggestion.id} />
    </div>
  );
}

export default App;
