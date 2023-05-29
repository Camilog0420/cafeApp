const express = require("express");

const router = express.Router();


//?response to get
const getProducts =  (req, res) => {
  res.json({
    message: "hello from the get products"
  })
}

//?response to post
const postProducts = (req, res) => {
  
  res.json({
    message: "hello from the post products"
  })
}

//?response to get by id
const getOneProduct = (req, res) => {
  
  const id = req.params.id
  
  res.json({
    message: "hello from get one product",
    id,
  })
}

//?response to patch
const updateProduct = (req, res) => {
  
  const id = req.params.id
  
  res.json({
    message: "hello from patch one product",
    id,
  })
}

//?response to delete
const deleteProduct = (req, res) => {
  
  const id = req.params.id
  
  res.json({
    message: "hello from delete one product",
    id,
  })
}

router.use("/", getProducts)
router.post ("/", postProducts)
router.get ("/:id", getOneProduct)
router.patch ("/:id", updateProduct)
router.delete ("/:id", deleteProduct)

module.exports = router;