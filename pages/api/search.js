import { findAll } from "../../component/db";
export default async (req, res) => {
  const result = await findAll();
  res.statusCode = 200;
  res.json(result);
};
