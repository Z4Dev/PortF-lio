import './style.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo"> <span className='purple'>Z4</span> Developer</div>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Projects
                </li>
                <li>
                    Blog
                </li>
                <li>
                    Contact me
                </li>
            </ul>
        </div>
    )
}

export default Navbar;