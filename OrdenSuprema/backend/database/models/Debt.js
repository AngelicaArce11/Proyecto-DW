import { DataTypes} from "sequelize";
import { sequelize } from "../sequelize.js";
import { User } from "./User.js";


export const Debt = sequelize.define(
    'Debt',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        is_completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        proof_image: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false
    }
);

//Associations
Debt.belongsTo(User, { foreignKey: {name: 'creditorId', allowNull: false}});
Debt.belongsTo(User, { foreignKey: {name: 'debtorId', allowNull: false}});
User.hasMany(Debt, { foreignKey: 'creditorId' });
User.hasMany(Debt, { foreignKey: 'debtorId' });