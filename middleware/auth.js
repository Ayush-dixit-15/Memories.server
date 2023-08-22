import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
        // means it is the custom token that was created usjg the bcryptjs
        let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }    
        // this means that if the previous thing is done only then the next would be done else not
        next();
    } catch (error) {
      console.log(error);
    }
  };
  
  export default auth;