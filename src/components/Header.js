const Header = () => {
    return (
        <div className="big-header">
            <div className="header">
                <div>
                    <img className="logo" src="https://t3.ftcdn.net/jpg/07/94/99/66/360_F_794996680_IysUcvg41W2dIxyf9JdwEQiQcO9eWEO3.jpg"></img>
                </div>
                <div className="nav-bar">
                    <div className="nav1"> View Packages </div>
                    <div className="nav2"> Book Flights </div>
                    <div className="nav3"> About Us </div>
                    <div className="nav4"> Contact Us </div>
                    <input type="text" placeholder="Search.."></input>
                </div>
            </div>
        </div>
    )
}

export default Header;