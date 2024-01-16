//Register a New User
app.post('/users', queries.registerUser)

//Login
app.post('/login', queries.login)