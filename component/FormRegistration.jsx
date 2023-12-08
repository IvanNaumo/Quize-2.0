const React = require('react');
const Layout = require("./Layout");

function Registration (){
  return (
    <Layout>
    <form  action="/theme" method="POST" className='Registration' style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
      <input type='text' name='name' />
      <button type='submit'>Войти</button>
    </form>
    </Layout>
  );
}
module.exports = Registration;