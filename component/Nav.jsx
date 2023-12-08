const React = require("react");

function Header({ user, score }) {
    return (
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <div>Пользователь: {user}</div>
        <div>Очки: {score}</div>
      </div>
    );
  }
  module.exports = Header;