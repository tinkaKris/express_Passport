// ! articles
const getArticlesHandler = (req, res) => {
  res.send('GET articles route')
}

const postArticlesHandler = (req, res) => {
  res.send('POST articles route')
}

// ! articles/:articleId
const getArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.send(`GET article by id route with id: ${articleId}`)
}

const deleteArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.send(`DELETE article by id route with id: ${articleId}`)
}

const putArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.send(`PUT article by id route with id: ${articleId}`)
}

export {
  getArticlesHandler,
  postArticlesHandler,
  getArticleByIdHandler,
  deleteArticleByIdHandler,
  putArticleByIdHandler
}
