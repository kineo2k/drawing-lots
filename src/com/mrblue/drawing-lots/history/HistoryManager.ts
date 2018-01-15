import { IRepository } from "./IRepository";
import { RepositoryType } from "./RepositoryType";
import { FileRepository } from "./repositories/FileRepository";
import * as fs from "fs"

export class HistoryManager {
    _repository: IRepository;

    constructor(repositoryType: RepositoryType = RepositoryType.File) {
        this._repository = this._getRepository(repositoryType);
    }

    private _getRepository(repositoryType: RepositoryType): IRepository {
        switch (repositoryType) {
            case RepositoryType.File:
            return new FileRepository();
        }
    }

    read(fileName: string, done: Function) {
        fs.readFile("./repository/" + fileName, (err, data) => {
            if (err) throw err;
            
            done(data.toString());
        });
    }

    save(fileName: string, data: string, done: Function) {
        fs.writeFile("./repository/" + fileName, data, (err) => {
            if (err) throw err;
            
            done();
        });
    }
}