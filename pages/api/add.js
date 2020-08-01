import { add } from "../../component/db";
export default async (req, res) => {
  await add(req.body);
  res.statusCode = 200;
};
