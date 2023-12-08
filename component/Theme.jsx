const React = require("react");
const Layout = require("../component/Layout");
const Item = require("./Item");
const Header = require("./Nav");


function Theme({title, themes, user, score}) {
    return (
      <Layout title={title} user={user}>
        <Header user={user} score={score}/>
        <div className="card" style={{}}>
          {themes.map((theme) => (
            <Item key={theme.id} theme={theme} />
          ))}
        </div>
      </Layout>
    )
}

module.exports = Theme