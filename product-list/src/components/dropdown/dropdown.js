import React, {useState} from "react";
import './dropdown.css';

const DropDown = ({ddlOptions, onSelect}) =>{

 const [selectedOption, setSelectedOption] = useState(null);
 const [isOpen, setIsOpen] = useState(false);

 const handleToggle = () =>{
    setIsOpen(!isOpen);
 }

 const handleOnClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
 }

return (
    <div className="dropdown">
        <button onClick={handleToggle} className="dropdownButton">
            {selectedOption ? selectedOption.label : "Select Currency"}
        </button>
        {isOpen && (
            <ul className="dropdownMenu">
                {ddlOptions.map((option, index) =>(
                    <li onClick={() =>{handleOnClick(option)}} key={index} 
                        className="dropdownItem">{option.label}
                    </li>
                ))}
            </ul>
        )}
    </div>
);
}

export default DropDown;
