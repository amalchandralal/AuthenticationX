// const TryCatch = (Handler) => {
//   return async (req, res, next) => {
//     try {
//       await Handler(req, res, next);
//     } catch (error) {
//       res.status(500).json({ Message: error.Message });
//     }
//   };
// };
// export default TryCatch;

const tryCatch = (handler)=>{
  return async(req,res,next)=>{
    try {
      await handler(req,res,next)
    } catch (error) {
      res.status(500).json({message: error.message})
      
    }
  }
}
export default tryCatch;