// Intersection Types in Type Narrowing

type Employee = {
    id: number;
    name: string;
}

type Manager = {
    dept: string;
    role: string;
}

// Create an intersection type
type ManagerWithEmploye = Employee & Manager;

// Example usage
const manager: ManagerWithEmploye = {
    id: 123,
    name: "John Doe",
    dept: "Engineering",
    role: "Team Lead",
};
  
console.log(manager.id); 
console.log(manager.name);
console.log(manager.dept);
console.log(manager.role); 