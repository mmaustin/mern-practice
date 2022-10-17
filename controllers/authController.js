import User from '../models/User.js'


const register = async (req, res) => {
    try {
        const user = User.create(req.body)
        res.status(201).json({user});
    } catch (error) {
        res.status(500).json({msg: 'there was an erro'})
    }
}

const login = async (req, res) => {
    res.status(200).json({msg: 'login user'});
}

export {register, login};