import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ViewListIcon from '@mui/icons-material/ViewList';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon />
            English
          </div>
          <div className="item">
            <DarkModeIcon />
          </div>
          <div className="item">
            <FullscreenIcon />
          </div>
          <div className="item">
            <NotificationsNoneIcon />
            <div className="counter">
              1
            </div>
          </div>
          <div className="item">
            <ChatBubbleIcon />
            <div className="counter">
              10
            </div>
          </div>
          <div className="item">
            <ViewListIcon />
          </div>
        </div>
        {/*<div className="test">TEST</div>*/}
      </div>
    </div>
  )
}

export default Navbar;