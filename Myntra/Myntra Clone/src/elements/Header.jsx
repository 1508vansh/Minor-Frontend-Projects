import logo from "../assets/2249158.webp";
import search from "../assets/search.png";
function Header(){
    return (
      <div className="header">
        <div className="logo-container">
        <img id="m-logo" src={logo} alt="Myntra Logo"/>
        </div>
        <div className="but-container">
        <button className="but">Men</button>
        <button className="but">Women</button>
        <button className="but">Kids</button>
        <button className="but">Home & Living</button>
        <button className="but">Beauty</button>
        <button className="but">Studio</button>
        </div>
        <div className="input-search-container">
          <div>
          <img id="search" src={search}/>
          <input id="input" type="search" placeholder="Search for products,brands and more" />
          </div>
        </div>
        <div className="head-right-div">
        <button className="but">Profile</button>
        <button className="but">WishList</button>
        <button className="but">Bag</button>
        </div>
      </div>
    );
}
export default Header;