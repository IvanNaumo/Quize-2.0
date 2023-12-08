const React = require("react");
const Header = require('./Nav');

 function Layout({ title, children , user }) {
  return (
    <html lang="ru">
      <head>
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        {/* <link rel="stylesheet" href="/style/style.css" /> */}
        <script defer src="/scripts/addUsers.js" />
        <script defer src="/scripts/next.js" />

      </head>
      <Header user={user} />
      <body>{children}</body>
    </html>
  );
};
module.exports = Layout