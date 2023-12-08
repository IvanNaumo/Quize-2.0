const React = require('react');
const Layout = require("./Layout");

function Registration (){
  return (
    <Layout title={'Регистрация'}>
    <form className='Registration'>
      <input type='text' name='name' />
      <button type='submit'>Войти</button>
    </form>
    </Layout>
  );
}
module.exports = Registration;