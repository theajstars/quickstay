import { useState } from "react";
import LocationIcon from "../Assets/IMG/Icons/LocationMark.svg";
import PersonIcon from "../Assets/IMG/Icons/Person.svg";
import SearchIcon from "../Assets/IMG/Icons/Search.svg";
import CalendarIcon from "../Assets/IMG/Icons/Calendar.svg";

export default function PropertiesSearchBar() {
  return (
    <div className="properties-search-bar-container flex-column">
      <div className="properties-search-bar-tag">
        Find your perfect property
      </div>
      <div className="properties-search-bar flex-row">
        <div className="properties-search-bar-item flex-row">
          <img
            src={LocationIcon}
            alt=""
            className="properties-search-bar-icon"
          />

          <input
            type="text"
            className="properties-search-input"
            placeholder="Location"
            spellCheck="false"
          />
        </div>
        <hr className="properties-search-rule" />
        <div className="properties-search-bar-item flex-row">
          <img src={PersonIcon} alt="" className="properties-search-bar-icon" />

          <input
            type="text"
            className="properties-search-input"
            placeholder="Guests"
            spellCheck="false"
          />
        </div>
        <hr className="properties-search-rule" />
        <div className="properties-search-bar-item flex-row">
          <img
            src={CalendarIcon}
            alt=""
            className="properties-search-bar-icon"
          />

          <input
            type="text"
            className="properties-search-input"
            placeholder="Check-In"
            spellCheck="false"
          />
        </div>
        <hr className="properties-search-rule" />
        <div className="properties-search-bar-item flex-row">
          <img
            src={CalendarIcon}
            alt=""
            className="properties-search-bar-icon"
          />

          <input
            type="text"
            className="properties-search-input"
            placeholder="Check-Out"
            spellCheck="false"
          />
        </div>
        <hr className="properties-search-rule" />
        <button className="properties-search-button flex-row">
          <img src={SearchIcon} alt="" className="properties-search-icon" />
          Search
        </button>
      </div>
    </div>
  );
}
