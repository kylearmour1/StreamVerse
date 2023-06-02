const User = require('../../models/User'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); 



// get JWT secret from environment variables
const SECRET = process.env.JWT_SECRET; 

const userResolvers = {
    Query: {
        user: async (parent, { id }) => {
            return await User.findById(id);
        },
        users: async () => {
            return await User.find();
        },
    },
    Mutation: {
        addUser: async (parent, { username, password }) => {
            // Password hashing
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = new User({ username, password: hashedPassword });
            await user.save();

            // generate JWT
            const token = jwt.sign({ id: user._id }, SECRET);
            
            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
            // User verification
            if (!user) {
                throw new Error('User not found');
            }
            // Password verification
            const valid = await bcrypt.compare(password, user.password);
            if (!valid) {
                throw new Error('Invalid password');
            }
        
            // generate JWT
            const token = jwt.sign({ id: user._id }, SECRET);
            return { token, user };
        },
        
    },
};

module.exports = userResolvers;
