import { useState } from 'react'
import '../style/Dropdown.css'

const Dropdown = () => {

    const menu = [
        'Select Month',
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    const CSS_CLASS_SHOW = 'dropdown-show'
    const CSS_CLASS_HIDE = 'dropdown-hide'

    const [ selected, setSelected ] = useState(menu[0])
    const [ cssDisplay, setCssDisplay ] = useState(CSS_CLASS_HIDE)

    const handleShowMenu = () => {
        setCssDisplay(CSS_CLASS_SHOW)
    }

    const handleSHideMenu = () => {
        setCssDisplay(CSS_CLASS_HIDE)
    }

    const handleClickItem = (item) => {
        setSelected(item)
        handleSHideMenu()
    }

    return (
        <div className='dropdown-container' onMouseEnter={handleShowMenu} onMouseLeave={handleSHideMenu}>
            <div className='dropdown-selected' >
                {selected}
            </div>
            <div className={`dropdown-menu ${cssDisplay}`}>
                {
                    menu.map((item, index) => (
                        <div key={index} className='dropdown-item' onClick={() => handleClickItem(item)}>
                            {item}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Dropdown