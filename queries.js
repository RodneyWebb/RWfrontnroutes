async function registerUser(req, res) {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    await pool.query('INSERT INTO users (username, password, email) VALUES ($1, $2, $3)', [username, password, email], (error, results) => {
        if(error) {
            throw error
        }
        res.status(201).send('User added to Database.')
    })
}

async function login(req, res) {
    const email = req.body.email
    const password = req.body.password

    await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password], (error, results) => {
        if(error) {
            throw error
        }
    })
}

module.exports = {
    registerUser,
    login
}