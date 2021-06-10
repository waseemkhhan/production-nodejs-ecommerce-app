import DataURIParser from "datauri/parser.js";

import path from "path"; // in Node JS
//File are Pic (all format)
export const getDataUri = (file) => {
  const parser = new DataURIParser();
  const extName = path.extname(file.originalname).toString(); //extension name
  return parser.format(extName, file.buffer);
};