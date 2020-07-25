import { add } from "../../component/db";
export default (req, res) => {
  add(req.body);
  res.statusCode = 200;
};
