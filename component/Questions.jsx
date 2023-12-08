const React = require("react");
const Layout = require("./Layout");

function Questions({ question, index, user }) {
    return (
      <Layout user={user}>
        <div
          className="card text-bg-dark mb-3"
          data-id={question.themeId}
          style={{ width: "50rem" }}
        >
          <img src={question.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{question.name}</h5>
          </div>
        </div>
        <form action="" method="POST" className="form-answer" data-id={question.id}>
          <div className="mb-3 parent">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: "#ffc107" }}>
              Введите ответ
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="answer"
            />
            <button type="submit" className="btn buttonAuth btn-outline-warning">
              Ответить
            </button>
          </div>
        </form>
        <div className="answer"></div>
        <a
          href={`/questions/${index}/theme/${question.themeId}`}
          className="btn btn-next btn-outline-warning"
        >
          Следующий вопрос
        </a>
      </Layout>
    );
  }

module.exports = Questions;