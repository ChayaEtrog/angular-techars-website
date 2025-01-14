import { Class } from "./class";

export class Teacher{

    constructor(
        public id: string,
        public name: string,
        public classId?: Class[]
    ){}
}