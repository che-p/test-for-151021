import React from "react";
import ReactDOM from "react-dom";
import RandomWords from "random-words";
import Header from "./components/header/header";
import Main from "./components/main/main";

import NoteWithStorage from "./index-storage.jsx";
import "./index.css";

/*
Компоненты
  Header
    UserMenu
      NoteList
  Main
    MainForm

Данные
  Notes
    id
    Title
    isRead
    Date

    В LocalStorage или redux, или везде

События
  Кнопки
    Отправить - Записать в стейт
    Пометить прочитанными - У всех isRead - true
    Удалить все - Все удалить
    Скрыть / показать popup - Скрыть / показать NoteList
  Клик на колокольчике -  Скрыть / показать NoteList
  Клик на Посмотреть все - Скрыть NoteList
  Каждые 20 сек - Новый Note с рандомным текстом
  .....
*/

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      notes: [],
    };
  }

  addNote = (note) => {
    const prevNotes = this.state.notes;
    const newNote = {
      id: prevNotes.length + 1,
      title: note,
      isRead: false,
      date: new Date(),
    };
    prevNotes.push(newNote);
    this.setState({ notes: prevNotes });
    //    this.props.save("notes", JSON.stringify(prevNotes));
  };

  readNote = () => {
    const tempArr = this.state.notes;
    tempArr.map((note) => {
      return (note.isRead = true);
    });
    this.setState({ notes: tempArr });
  };

  handleClick = () => {
    this.setState({ showList: !this.state.showList });
  };

  deleteNote = () => {
    this.setState({ notes: [] });
  };

  intervalId = setInterval(() => {
    this.addNote(RandomWords());
  }, 20000);

  /*
  componentDidMount() {
    const isLogged = JSON.parse(this.props.load("isLogged"));

    const data = JSON.parse(this.props.load("data"));
    if (data !== null) {
      this.setState({ data });
    }
  }

*/
  render() {
    return (
      <section className="app">
        <Header
          notes={this.state.notes}
          showList={this.state.showList}
          handleClick={this.handleClick}
        />
        <Main
          notes={this.state.notes}
          addNote={this.addNote}
          readNote={this.readNote}
          handleClick={this.handleClick}
          deleteNote={this.deleteNote}
        />
      </section>
    );
  }
}

const StoragedNote = NoteWithStorage(Note);

ReactDOM.render(
  <React.StrictMode>
    <Note />
  </React.StrictMode>,
  document.getElementById("root")
);
