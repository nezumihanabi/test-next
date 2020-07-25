import Sequelize from "sequelize";
const host = "localhost:3306";
const database = "testdb";
const username = "root";
const password = "";

const sequelize = new Sequelize(database, username, password, {
  dialect: "mysql",
});

sequelize.authenticate();

const KnowleadgeModel = sequelize.define("knowleadge", {
  id: {
    field: "id",
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  memo: {
    field: "memo",
    type: Sequelize.STRING(1000),
    allowNull: true,
  },
  file: { field: "file", type: Sequelize.BLOB, allowNull: true },
});

export async function findAll() {
  return await KnowleadgeModel.findAll();
}

export async function add(addData) {
  return await KnowleadgeModel.create(addData);
}
