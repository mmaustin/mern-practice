

const addFour = (req, res, next) => {
    req.addFour = 4;
    next();
}

export default addFour;