import TryCatch from "../middleware/TryCatch.js";
import sanitize from 'mongo-sanitize'

const register = TryCatch(async(req,res,next)=>{
    const{name,email,password} = sanitize(req.body);
    res.json({name,email,password});
})

export default register;