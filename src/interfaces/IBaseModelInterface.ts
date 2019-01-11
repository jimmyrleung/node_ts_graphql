import { IModelInterface } from "./IModelInterface";

export interface IBaseModelInterface {
    prototype?;
    associate(models: IModelInterface): void;
}