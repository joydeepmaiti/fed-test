import React, { useEffect, useState, useRef, useCallback } from "react";

import { fetchSuggestions } from "../../utils/api";

import "./Autocomplete.css";

import Suggestions from './Suggestions/Suggestions'
import Loader from '../Loader/Loader'

function Autocomplete({onSuggestionSelection}) {

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef()
  
  const getSuggestions = useCallback((value) => {
    setLoading(true)
    fetchSuggestions(value)
    .then((_suggestions) => {
      setLoading(false)
      setSuggestions(_suggestions.splice(0,10))
      setShowSuggestions(true)
    })
    .catch((err)=>{
      setLoading(false)
      alert("Oops!Something went wrong.")
      //handle this error to show Error Snackbar
    });
  },[])
  
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value)
  }
  
  const handleMouseHover = (index) => {
    setCurrentSuggestionIndex(index)
  }
  
  const handleSuggestionSelect = (suggestion) => {
    setShowSuggestions(false)
    setSearchTerm("")
    onSuggestionSelection (suggestion)
    setCurrentSuggestionIndex(-1)
  }
  
  const handleKeyDown = (e) => {
    console.log(e.key)
    switch(e.key) {
      case "ArrowDown": currentSuggestionIndex===suggestions.length-1 ? setCurrentSuggestionIndex(0) : setCurrentSuggestionIndex(currentSuggestionIndex+1)
      break;
      case "ArrowUp": currentSuggestionIndex===0?setCurrentSuggestionIndex(suggestions.length-1):setCurrentSuggestionIndex(currentSuggestionIndex-1)
      break;
      case "Enter": handleSuggestionSelect(suggestions[currentSuggestionIndex])
      break;
      default: break;
    }
    
  };
  
  useEffect(() => {
    if(!searchTerm || searchTerm.trim() === ""){
      setShowSuggestions(false)
      return
    }
    const timer = setTimeout(()=>{
      if(searchTerm === inputRef.current.value){
        console.log("inputRef.current.value",inputRef.current.value)
        getSuggestions(inputRef.current.value)
      }
    },700)
    return ()=> clearTimeout(timer)
  },[searchTerm, getSuggestions]);

  return (
    <div className="search-container">
      <Loader loading={loading}/>
      <input
        id="search"
        ref={inputRef}
        name="search"
        type="text"
        value={searchTerm}
        className="search-box"
        placeholder="Search for a product"
        onChange={handleSearchTermChange}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />

      <Suggestions 
        showSuggestions={showSuggestions}
        suggestions={suggestions}
        currentSuggestionIndex={currentSuggestionIndex}
        onSuggestionSelect={handleSuggestionSelect}
        onMouseHover={handleMouseHover}
      />
    </div>
  );
}

export default Autocomplete;
