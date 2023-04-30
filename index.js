import express from 'express'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
const app = express();

/*mongoose.connect("mongodb://localhost/auth");
const db = mongoose.connection;
db.once("open", () => {
    console.log("database is connected");
})
*/

app.get("/", (req, res) => {
  const app = createSSRApp({
    data: () => ({ count: 'amirreza' }),
    template: '<h1  >{{ count }}</h1>',
    methods:
    {
      test()
      {
        alert(this.count)
      }
    }
  })

  renderToString(app).then((html) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
      </head>
      <body>
        <div id="app">
          <h1>${html}</h1>
        </div>
      </body>
    </html>
    `)
  })
});


//app.use("/user", user);

app.listen(4000);
