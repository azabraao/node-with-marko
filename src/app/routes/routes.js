module.exports = (app) => {
    app.get('/', (req, resp) => {
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

    app.get('/stocks', (req, resp) => {
        resp.marko(
            require('../views/portifolio/portifolio.marko'),
            {
                stocks: [
                    {
                        code: 'VVAR',
                        name:"asd",
                        amount: 600,
                        price: 6000,
                    },
                    {
                        code: 'VVAR',
                        name:"bbbbb",
                        amount: 600,
                        price: 6000,
                    }
                ]
            }
        )
    });
}