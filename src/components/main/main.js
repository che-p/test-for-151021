import { useRef, useState } from "react";
import "./main.css";

function Main(props) {
  const { notes, addNote, readNote, handleClick, deleteNote } = props;
  const [inpValue, setValue] = useState(null);
  const inputRef = useRef(null);

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const onButtonClick = () => {
    if (inpValue !== null) {
      addNote(inpValue);
    }
    inputRef.current.value = "";
    setValue(null);
  };

  return (
    <main className="main container">
      <>
        <div className="input__wrap">
          <input
            ref={inputRef}
            className="input__wrap_input"
            type="text"
            placeholder="Введите название события..."
            onChange={onInputChange}
          />
          <button className="btn input__wrap_btn" onClick={onButtonClick}>
            Отправить
          </button>
        </div>
        <button className="btn" onClick={readNote}>
          Пометить все события прочитанными
        </button>
        <button className="btn" onClick={deleteNote}>
          Удалить все события
        </button>
        <button className="btn" onClick={handleClick}>
          Скрыть / показать попап нотификаций (toggle bin)
        </button>
      </>
    </main>
  );
}

export default Main;
