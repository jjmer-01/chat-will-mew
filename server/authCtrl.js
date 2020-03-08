const bcrypt = require('bcryptjs')

module.exports = {
    // getUser: async(req, res) => {

    // }, 
    
    register: async(req, res) => {
        //destructuring email & password from user input (req.body)
        const { user_email, password, first_name, last_name, user_title } = req.body
        // console.log(req.body)
        const db = req.app.get('db').auth

        //check to see if user (email) exists already
        let user = await db.check_user({user_email})
        // console.log(user)
        user = user[0]
        if(user) {
            return res.status(400).send('That email is registered already. Login or forever hold your peace.')
        }

        //if user doesn't exist salt & hash the password:
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt) //this is the moment password becomes a hash

        //then register user:
        try {
            let newUser = await db.register_user({user_email, first_name, last_name, user_title, hash}) //moved this above try to see the error
            newUser = newUser[0]
            // console.log('line 29' + newUser)
            session.user = newUser
            res.status(201).send(session.user)
        } catch (err) {
            return res.sendStatus(500)
        }
        
    },

    login: async(req, res) => {
        //destructuring email & pw from user input (req.body)
        const {user_email, password} = req.body
        // console.log(req.body)
        const {session} = req
        const db = req.app.get('db').auth
        
        //checks to see if user (email) exists already
        let user = await db.check_user({user_email})
        user = user[0]
        if(!user) {
            return res.status(400).send("Oops! Looks like that email isn't registered yet. Hit that register button to get started!")
        }

        //IF EMAIL IS AUTHENTICATED, TWO POSSIBLE OUTCOMES BELOW:
        const authenticated = bcrypt.compareSync(password, user.hash)

        if(authenticated) {
            //PASSWORD AUTHENTICATED
            delete user.password
            session.user = user
            res.status(202).send(session.user)
        } else {
            //PASSWORD INCORRECT
            res.status(401).send('Incorrect username or password.')
        }
    },

    logout: async(req, res) => {
        console.log('hit logout')
        if (req.session) req.session.destroy()
        return res.sendStatus(200)
    }
}