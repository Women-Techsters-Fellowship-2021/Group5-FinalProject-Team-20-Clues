import { useState } from "react"

const Dropdown = (props) => {
    const [dropdownOpen, setdropdownOpen] = useState(false);

    const handleDropdown = () => {
        setdropdownOpen(!dropdownOpen)
    }
    return (
        <div className='dropdown-wrapper'>
            <div 
                className="dropdown-header"
                type='button'
                onClick={handleDropdown}
            >
                <div className="dropdown-title">{props.headerTitle}</div>
            </div>
            {dropdownOpen && (
                   <> 
                        {props.dropdownContent}
                   </>
            )}
        </div>
    )
}

export default Dropdown
