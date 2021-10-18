import bellImg from "./bell.png";
import "./UserMenu.css";
import moment from "moment";
moment().format();

const UserMenu = (props) => {
  const { notes, handleClick, showList } = props;

  const countUnread = () => {
    return notes.filter((note) => note.isRead === false).length;
  };

  return (
    <div className="user-menu" onClick={handleClick} onBlur={handleClick}>
      <img className="user-menu__bell" src={bellImg} alt="" />
      {countUnread() > 0 ? (
        <div className="user-menu__square">{countUnread()}</div>
      ) : null}

      {showList && notes.length ? (
        <>
          <div className="user-menu__dropdown-little-arrow" />

          <ul className="user-menu__dropdown">
            {notes
              .sort((a, b) => b.date - a.date)
              .map((note) => (
                <li
                  className={
                    note.isRead
                      ? "user-menu__dropdown_item"
                      : "user-menu__dropdown_item bold"
                  }
                >
                  {note.title}
                  <p>{moment(note.date).fromNow()}</p>
                </li>
              ))}
            <li
              className="user-menu__dropdown_item user-menu__dropdown_all"
              onClick={handleClick}
            >
              посмотреть все...
            </li>
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default UserMenu;
