import jwt from 'jsonwebtoken'

const auth = async(req,res,next) => {
  const token = req.headers.authorization;

  if(!token){
    return res.json({
      success:false,
      message:"no tken provided"
    })
  }

  const tok = token.split(" ")[1];

  try {
     jwt.verify(tok,process.env.JWT_TOKEN);
    next();
  } catch (error) {
    res.json({
      success:false,
      message:"invalid token"
    })
  }
}

export default auth