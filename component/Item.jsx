const React = require("react");
function Item({ theme }) {
  return (
    <div style={{width: "35rem"}}>
      <img src={theme.img}  alt="..." />
      <div>
        <h5>{theme.name}</h5>
        <a href={`/questions/0/themes/${theme.id}`}>
          Выбрать
        </a>
      </div>
    </div>
  );
}
module.exports = Item;
