


const register = async (req, res) => {
    res.status(200).json({msg: 'register user'});
}

const login = async (req, res) => {
    res.status(200).json({msg: 'login user'});
}

export {register, login};