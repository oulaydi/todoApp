// const User = require("../models/userModle");
// const bcrypt = require("bcrypt");

// const getUsers = async (req, res) => {
//     try {
//         const users = await User.find({});
//         res.send(users);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// };

// const getUser = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const user = await User.findById(id);
//         if (!user) {
//             return res.status(404).send("User not found");
//         }
//         res.send(user);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// };

// const createUser = async (req, res) => {
//     try {
//         const user = req.body;
//         const hashedPassword = await bcrypt.hash(user.password, 10);
//         user.password = hashedPassword;
//         const newUser = await User.create(user);
//         res.status(201).send(newUser);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// };

// const updateUser = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const user = req.body;
//         const updatedUser = await User.findByIdAndUpdate(id, user, {
//             new: true,
//         });
//         if (!updatedUser) {
//             return res.status(404).send("User not found");
//         }
//         res.send(updatedUser);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// };

// const deleteUser = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedUser = await User.findByIdAndDelete(id);
//         if (!deletedUser) {
//             return res.status(404).send("User not found");
//         }
//         res.send(deletedUser);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// };

// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).send("User not found");
//         }
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             return res.status(401).send("Invalid password");
//         }
//         // Here you might generate and send a JWT token for authentication
//         res.send("Login successful");
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// };

// module.exports = {
//     getUsers,
//     createUser,
//     getUser,
//     updateUser,
//     deleteUser,
//     login,
// };
