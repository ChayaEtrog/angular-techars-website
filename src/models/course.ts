
export enum Subject {
    ComputerProgramming,
    Accounting,
    Graphic,
    Gym
}

export class Course {
    constructor(
        public courseId: string,
        public courseName: string,
        public subject?: Subject
    ) { }
}