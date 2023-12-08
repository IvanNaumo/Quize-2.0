const React = require('react');
const Layout = require('../component/Layout');
const Item = require('./Item');

function Theme({ title, themes, user }) {
  // console.log(themes, user, 'cdsbcjsdcjnbsdkjcsdkcskdcknsdjcwkcjh');
  return (
    <Layout title={title} user={user}>
      <div className='card' style={{}}>
        {themes.map((theme) => (
          <Item key={theme.id} theme={theme} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = Theme;
