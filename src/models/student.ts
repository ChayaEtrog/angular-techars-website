import { Course } from "./course";

export class Student {

    constructor(
        public id: string,
        public firstName: string,
        public lastName: string,
        public address: string,
        public phonNumber: string,
        public selctedCourse: Course[]=[],
        public flagPayed: boolean = false,
        public isActive: boolean = true,
        public dateLefting?: Date,
        public flagEdit: boolean = false,

    ) { }
}