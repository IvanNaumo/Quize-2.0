const React = require('react');

function Header({ user }) {
  console.log(user);
  return (
    <div className='header'>
      {user && (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div>Пользователь: {user.name}</div>
          <div>Очки: {user.score}</div>
        </div>
      )}
    </div>
  );
}
module.exports = Header;
