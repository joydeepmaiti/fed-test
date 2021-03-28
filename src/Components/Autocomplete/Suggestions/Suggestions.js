import React from "react";

import "./Suggestions.css";

function Suggestions({showSuggestions, suggestions, currentSuggestionIndex, onSuggestionSelect, onMouseHover}) {

    const handleClick = (suggestion) => {
        onSuggestionSelect(suggestion)
    };

    const handleMouseHover = (index) => {
        onMouseHover(index)
    };

    const renderSuggestions = (e) => {
        let suggestionsListComponent;
        if (showSuggestions && suggestions.length) {
            suggestionsListComponent = (
                <ul className="suggestions">
                    {suggestions.map((suggestion, index) => {
                        let className;
                        if (index === currentSuggestionIndex) {
                            className = "suggestion-active";
                        }
                        return (
                            <li className={className} key={suggestion.id} onClick={()=>handleClick(suggestion)} onMouseEnter={()=>handleMouseHover(index)}>
                                {suggestion.title}
                            </li>
                        );
                    })}
                </ul>
            );
        }
        return suggestionsListComponent;
    }

    return (
        <React.Fragment>
            {renderSuggestions()}
        </React.Fragment>
    );
}

export default Suggestions;
