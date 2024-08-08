const userSchema = require('../models/Users')
const bcrypt = require('bcryptjs')

const createUser = async(req, res, next) => {
    try {
    
    const {username, password, fname, lname, gender, age, role } = req.body;
    let newUser = new userSchema({
        username: username,
        password: password,
        fname: fname,
        lname: lname,
        gender: gender,
        age: age,
        role: role,
        
    });
    await newUser.save()

    return res.status(200).send('create success')
} catch (error) {
    console.log(error);

}
}

const loginUser = async(req, res, next) => {

    try {
        const user = await userSchema.findOne({ username: req.body.username });
        // if (user && await bcrypt.compare(req.body.password, user.password)) {
        //    req.session.userId = user._id;
        //   res.send('Logged in successfully');
        // } else {
        //   res.status(401).send('Invalid credentials');
        // }
        if (user && (user.password == req.body.password) && (user.isApprove == true)) {
            res.send('Logged in successfully');
        } else {
            res.status(401).send('Invalid credentials');
        }

        console.log(user);
      } catch (error) {
        res.status(400).send('Error logging in');
      }
}

const approveUser = async(req, res, next) => {
    try {
        let user = await userSchema.findByIdAndUpdate(req.params.id,
            //  {isApproved: true }, { new: true }
            {$set: req.body},
            {new: true}
            );
        res.status(200).send({ message: 'User approved', user });
      } catch (err) {
        res.status(500).send({ message: 'Error approving user' });
      }
    
}




module.exports = { createUser, loginUser, approveUser }