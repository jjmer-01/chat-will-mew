const bcrypt = require('bcryptjs')

module.exports = {
    // getUser: async(req, res) => {

    // }, do I even need this?
    
    register: async(req, res) => {
        //destructuring email & password from user input (req.body)
        const {user_email, password, first_name, last_name, user_title} = req.body
        const {session} = req
        const db = req.app.get('db').auth

        //check to see if user (email) exists already
        let user = await db.check_user({user_email})
        console.log(user)
        user = user[0]
        if(user) {
            return res.status(400).send('That email is registered already. Login or forever hold your peace.')
        }

        //if user doesn't exist salt the password and register_user
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        let newUser = await db.register_user({user_email, first_name, last_name, user_title, hash})
        newUser = newUser[0]
        session.user = newUser
        res.status(201).send(session.user)
    },

    login: async(req, res) => {
        //destructuring email & pw from user input (req.body)
        const {user_email, password} = req.body
        const {session} = req
        const db = req.app.get('db').auth
        
        //checks to see if user (email) exists already
        let user = await db.check_user({user_email})
        user = user[0]
        if(!user) {
            return res.status(400).send("Oops! Looks like that email isn't registered yet. Hit that register button to get started!")
        }

        //IF EMAIL IS AUTHENTICATED, TWO POSSIBLE OUTCOMES BELOW:
        const authenticated = bcrypt.compareSync(password, user.password)
        if(authenticated) {
            //PASSWORD AUTHENTICATED
            delete user.password
            session.user = user
            res.status
        }
    }
}