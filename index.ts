import inquirer from "inquirer";

let todos: string [] = [];
let loop = true;

while(loop){
let answers = await inquirer.prompt([
    {
        name:"TODO",
        message: "what do you want to add in your todo?",
        type: "input"
    },
    {
        name:"addmore",
        message: "do you want add more in your todo?",
        type: "confirm",
        default: false
    }
])
let {TODO, addmore} = answers;
console.log(answers)
loop = addmore
if (TODO) {
    todos.push(TODO)
 }    else{
        console.log("kindly add valid input")
    }
};
// console.log(todos)

if (todos.length > 0){
console.log("your todo list: \n")
    todos.forEach(todo => {
    console.log (todo)
});
}else {
    console.log("no todos found")
}
