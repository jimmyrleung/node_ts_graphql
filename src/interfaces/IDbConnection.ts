import * as Sequelize from "sequelize";
import { IModelInterface } from "./IModelInterface";

export interface IDbConnection extends IModelInterface {
    sequelize: Sequelize.Sequelize
}