import React from "react";

const NoteWithStorage = (Note) => {
  class HOC extends React.Component {
    load = (key) => {
      return localStorage.getItem(key);
    };

    save = (key, data) => {
      localStorage.setItem(key, data);
    };

    render() {
      return <Note load={this.load} save={this.save} />;
    }
  }

  return HOC;
};

export default NoteWithStorage;
