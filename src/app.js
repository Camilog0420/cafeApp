//*express import
const express = require("express");

//*routes
const productRouter = require("./routes/products.routes");

const app = express();

//*middleware para que el servidor entienda formatos json
app.use(express.json());

const helloMiddleware = (req, res, next) => {
  console.log("Hello from the middleware")

  next()
}

app.use(helloMiddleware); 

app.use('/api/v1/products', productRouter)

app.listen(3000, () => {
  console.log("Server running on port 3000! 🙂");
})

