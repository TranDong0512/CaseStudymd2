export interface IManager<T>{
    add(t: T)
    findById(id: number): T | number;
    findByIndex(name: string): T;
    findAll(): void;
}