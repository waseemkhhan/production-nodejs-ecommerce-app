import multer from "multer";
const storage = multer.memoryStorage(); //temporary store then send to cloudnary

export const singleUpload = multer({ storage }).single("file"); //recieving file

//where file is store