import "../css/header.scss";
const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="img/Layer 1.png" alt="" />
      </div>
      <div className="search">
        <span>
          <img src="img/Search.png" alt="" />
        </span>
        <input type="text" placeholder="Tìm kiếm trên wisfedd" />
      </div>
      <div className="category">
        <a href="#" className="home">
          <img src="img/House.png" alt="" />
        </a>
        <a href="#" className="read-book">
          <img src="img/Read Book.png" alt="" />
        </a>
        <a href="#" className="users-share">
          <img src="img/UsersThree.png" alt="" />
        </a>
        <a href="#" className="grid-feed-cards">
          <img src="img/Grid Feed Cards.png" alt="" />
        </a>
        <a href="#" className="users">
          <img src="img/Users.png" alt="" />
        </a>
        <a href="#" className="notification">
          <img src="img/Group 638.png" alt="" />
        </a>
      </div>
      <div className="profile">
        <a href="#" className="avata-profile">
          <img src="img/image 17.png" alt="" />
        </a>
      </div>
    </div>
  );
};
export default Header;
