export interface IRepository {
    read(path: string, done: Function);
    save(path: string, data: string, done: Function);
}