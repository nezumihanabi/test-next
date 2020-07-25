import { findAll } from "../../component/db";
export default (req, res) => {
  const result = findAll();
  res.statusCode = 200;
  res.json(result);
};
