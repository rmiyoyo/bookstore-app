import './Menu.css';
import user from './user.png';

function Menu() {
  return (
    <div className="items-menu">
      <div className="nav">
        <h3 className="dark_blue">Bookstore CMS</h3>
        <h4 className="gray_title">Books</h4>
        <h4 className="fade_title">Categories</h4>
      </div>
      <div className="profile"><img src={user} alt="user" /></div>
    </div>
  );
}

export default Menu;
