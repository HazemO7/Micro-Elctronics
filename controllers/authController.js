const Products = require("../models/Products");
const User = require("../models/User");

const bcrypt = require("bcrypt");

const register = async (req,res)=>{
        try {
            // get data
            const {username, email, password, role} = req.body;
            // validatd data if user send missing Ddata
            if(!username || !email || !password) return res.status(400).json({msg: "missing Data"});
            // if 
            const existUser = await User.findOne({email});
            if (existUser) return res.status(400).json({msg: "Account Already exist "})
            // hashing password using 
            const hashPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                username,
                email,
                password: hashPassword,
                role,
            });
            //response// 
            res.status(201).json({
                msg:"done Created User",
                data: user
            })
                // handel error ///
        } catch (error) {
            console.log("error in created new user")
        }
    }
const login = async (req,res)=>{
        try {// just email and password to login 
              const { email, password} = req.body;
            // cheack if there minssing data or not
            if(!email || !password) 
            return res.status(400).json({msg: "missing Data"});
            // if user exist or not
            const user = await User.findOne({email});
            if (!user) 
                return res
               .status(400)
               .json({msg: "Account Not Found Please Create Account"});
            
            const matchPassword = await bcrypt.compare(password, user.password);
            if (!matchPassword) return res.status(400).json({msg: "invalid email or password"});
            // token that can encrypt the objectId
           // const authCode = Buffer.from(user.id.toString()).toString("base64");

            //response// 
            res.status(200).json({
                msg:"login successfully",
            })
               ////////// handel error ///////////////
        } catch (error) {
            console.log("error")
        }
    }

module.exports = {
    register,
    login,
    
}
