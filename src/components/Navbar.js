import { Link } from 'react-router-dom';
import leftArrow from '../assets/back-button.png';
import mic from '../assets/microphone-black-shape.png';
import setting from '../assets/setting.png';

const Navbar = () => (
  <nav>
    <Link to="/">
      <img src={leftArrow} alt="" />
    </Link>
    <span>most views</span>
    <ul>
      <li>
        <img src={mic} alt="" />
      </li>
      <li>
        <img src={setting} alt="" />
      </li>
    </ul>
  </nav>
);

export default Navbar;
