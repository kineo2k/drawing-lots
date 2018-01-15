import { IRepository } from "../IRepository";

export class FileRepository implements IRepository {
    read(path: string, done: Function) {
        throw new Error("Method not implemented.");
    }
    
    save(path: string, data: string, done: Function) {
        throw new Error("Method not implemented.");
    }
}