const bicycle = {
    color: 'blue',
    electric: false,
    start() {
        console.log('pedal away')
    }
}

console.log(bicycle)
console.log(bicycle.color)
console.log(bicycle['color'])
console.log(bicycle.start)
console.log(bicycle.start())

bicycle.color = 'green'

bicycle.start = function() {
    console.log('You start the engine on your bicycle.')
}




////////////////////////////////////////////////////////////
//const newFunction = () => 

function hello(name){
    return { studentName: name};
}

hello = (name) => {
    return {studentName: name};
}

const hello = name => ({studentName: name})

const helloWorld = () => {
    //do something here
    //do something here
    console.log('hi!');
    return 'helloWorld'
}



///////////////////////////////////////////////////////////
const book = {
    title: 'Moby Dick',
    author: 'Melville',
    read(){
        console.log('A bit dry innit?');
    },
};

class Book {
    constructor(title, author, year,
        isRead = false){
            this.title = title;
            this.author = author;
            this.year = year;
            this.isRead = isRead;
        }
        static sayHi(){
            console.log('hi!')
        }
}

classs Audiobook extends book{
    constructor(title, author, year){
        super(title, author, year)
    }
    payAudio() {
        console.log('the audio recording of ${this.title} is playing')
    }
}


const myBook = new Book('Steppenwolf', 'herman Hesse')
myBook.title == 'something new'
console.log(myBook);

const helloWorld = (message = 'HelloWord') => console.log(message)

helloWorld()

const classicBook = new Book('sometitle', 'someauthor', 1231)

///////////////////////////////////////////////////////////////////

const student = ['James', 'Jose','Katya', 'Kelsey', 'Sergey'];

const filterFunction = name => name[0] === 'K'

const newArray = students.filter(filterFunction);

//console.log(newArray)

const numbers= [1,2,3,4,5,6,7];
const addFive = num => num+5;
const numbersFiveHigher = numbers.map(num => num +5);

const sum = numbers.reduce((accumulator, currentValue)=> )

//////////////////////////////////////////////////////////////////


