const React = require("react");

 function Layout({ title, children }) {
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
        {/* <script defer src="/js/script.js" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
};
module.exports = Layout