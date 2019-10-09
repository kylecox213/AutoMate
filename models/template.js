const sequelize = "Insert Sequelize ref";
const Schema = "Insert Sequelize ref";

const templateSchema = new Schema({
  property1: { type: String, required: true },
  property2: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Template = "Sequelize reference to templateSchema"

module.exports = Template;
