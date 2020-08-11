const StockDao = require("../infra/stock-dao.js");
console.log(StockDao);

module.exports = (app) => {
  const db = require("../../config/database");

  app.get("/", (req, resp) => {
    resp.send(`
            <html>
                <head>
                    <title>Stocks Motion</title>
                </head>
                <body>
                    <h1>Stocks Rocks!</h1>
                </body>
            </html>
        `);
  });

  app.get("/stocks", (req, resp) => {
    const dao = new StockDao(db);

    dao
      .list()
      .then((stocks) => {
        resp.marko(require("../views/portifolio/portifolio.marko"), {
          stocks,
        });
      })
      .catch(console.error);
  });
    
   
    app.get("/stocks/buy", (req, resp) =>
      resp.marko(require("../views/portifolio/new.marko"))
    );
};
