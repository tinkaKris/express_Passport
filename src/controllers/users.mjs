// ! users
const getUsersHandler = (req, res) => {
  const users = [
    { name: "Olga", age: 29 },
    { name: "Anastasia", age: 31 },
    { name: "Jack", age: 22 },
    { name: "Anton", age: 36 },
    { name: "Zakhar", age: 41 },
    { name: "Denys", age: 22 },
    { name: "Pavlo", age: 37 },
  ]
  const title = "Users:"
  res.render("index", { users, title })
}

const postUsersHandler = (req, res) => {
  res.send("POST users route")
}

// ! users/:userId
const getUserByIdHandler = (req, res) => {
  const { userId } = req.params

  if (userId === 1) {
    const users = [{ name: "Olga", age: 29 }]
    const title = "User 1"
    res.render("index", { users, title })
  }
  if (userId === 2) {
    const users = [{ name: "Anastasia", age: 31 }]
    const title = "User 2"
    res.render("index", { users, title })
  }
  if (userId === 3) {
    const users = [{ name: "Jack", age: 22 }]
    const title = "User 3"
    res.render("index", { users, title })
  }
  if (userId === 4) {
    const users = [{ name: "Anton", age: 36 }]
    const title = "User 4"
    res.render("index", { users, title })
  }
  if (userId === 5) {
    const users = [{ name: "Zakhar", age: 41 }]
    const title = "User 5"
    res.render("index", { users, title })
  }
  if (userId === 6) {
    const users = [{ name: "Denys", age: 22 }]
    const title = "User 6"
    res.render("index", { users, title })
  }
  if (userId === 7) {
    const users = [{ name: "Pavlo", age: 37 }]
    const title = "User 7"
    res.render("index", { users, title })
  }

  res.send(`GET user by id route with id: ${userId}`)
}

const deleteUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.send(`DELETE user by id route with id: ${userId}`)
}

const putUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.send(`PUT user by id route with id: ${userId}`)
}

export {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  deleteUserByIdHandler,
  putUserByIdHandler,
}
