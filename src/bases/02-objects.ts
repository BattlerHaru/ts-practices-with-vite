export const usersIds: number[] = [1, 20, 30, 34, 66];

interface Student {
    id: number;
    name: string;
    age?: number;
}

export const studentC: Student = {
    id: 1,
    name: "Catherine"
}

export const studentK: Student = {
    id: 2,
    name: "Katherine",
    age: 22
}

export const students: Student[] = [];

students.push(
    studentC, studentK,
    {
        id: 3,
        name: "Quaterine",
        age: 19
    });

console.log(students)


