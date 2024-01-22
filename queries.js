const Pool = require('pg').Pool
const tokenmanager = require('./public/tokenmanager.js')

const pool = new Pool({
    user: 'rwebb14',
    host: 'localhost',
    database: 'capstone',
    password: 'password',
    port: 5432
})

async function newRegister(req, res) {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    await pool.query('INSERT INTO users (username, password, email) VALUES ($1, $2, $3)', [username, password, email], (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).send('User added to YOUth Unite Database. YOU can now access the login page!')
    })
}

async function login(req, res) {
    const email = req.body.email
    const password = req.body.password

    await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password], (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).json({"token": tokenmanager.generateAccessToken(0)})
    })
}

module.exports = {
    login,
    newRegister
}