class Student 
{
    constructor(name, email, community)
    {
        this.name = name;
        this.email = email;
        this. community = community;
    }
}

class Bootcamp 
{
    constructor(course, level, students= []) 
    {
        this.course = course;
        this.level = level;
        this.students = students;
    }
    registerStudent(student)
    {
        if (this.students.includes(student)){
            console.log(`${student} has already been registered`);
        }else{
            this.students.push(student);
            console.log(`Registering ${student} to the bootcamp Web Dev Fundamentals`);
        }
        return this.students;
    }    
}

const WebDevFundamentals = new Bootcamp('Web Development Fundamentals', 'Beginner');
WebDevFundamentals;
const fullStack = new Bootcamp('Full Stack Web and Mobile Development', 'Advanced');
fullStack;

const Neo = new Student("Neo", "neo@matrix.com", "Seattle");
const Morpheus = new Student("Morpheus", "morpheus@matrix.org", "Tacoma");
const Trinity = new Student("Trinity", "trinityo@matrix.org", "Bellingham");

Neo;
Morpheus;
Trinity;

WebDevFundamentals.registerStudent('Neo');
WebDevFundamentals.registerStudent('Morpheus');
WebDevFundamentals.registerStudent('Trinity');