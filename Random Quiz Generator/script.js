const scienceQuestions = [
    "What does HTML stand for?",
    "Which language is used for styling web pages?",
    "What does CSS stand for?",
    "Which of the following is a programming language?",
    "What is the correct syntax to print a message in JavaScript?",
    "Which of the following is used to declare a variable in JavaScript?",
    "What is a function in programming?",
    "Which of the following is a loop structure in JavaScript?",
    "Which symbol is used for comments in JavaScript?",
    "What is an array in programming?",
    "What does JavaScript use to declare a constant?",
    "Which of the following is NOT a programming language?",
    "What is a class in object-oriented programming?",
    "Which of the following is used for event handling in JavaScript?",
    "Which data structure uses LIFO (Last In, First Out)?",
    "Which loop will execute at least once in JavaScript?",
    "What is the purpose of a return statement in a function?",
    "Which of the following is used for concatenation in JavaScript?",
    "What is an object in programming?",
    "Which language is known as the 'mother of all programming languages'?",
    "Which of the following is an example of a conditional statement?",
    "Which of the following is a type of error in JavaScript?",
    "What does '&&' represent in JavaScript?",
    "What is a string in programming?",
    "Which of the following is the correct way to create an object in JavaScript?",
    "Which data structure allows accessing elements by index?",
    "What does a semicolon do in JavaScript?",
    "Which of the following is NOT a primitive data type in JavaScript?",
    "What is the correct way to declare a function in JavaScript?",
    "What is a constructor in object-oriented programming?",
    "Which of the following is a non-primitive data type?",
    "Which JavaScript method can be used to join two arrays?",
    "Which of the following can hold multiple values in one variable?",
    "What is a loop?",
    "What does the 'break' statement do in a loop?",
    "What is the purpose of the 'this' keyword in JavaScript?",
    "Which of the following is used to compare two values in JavaScript?",
    "What is the correct syntax for an if statement in JavaScript?",
    "What is the default value of a variable declared with 'let'?",
    "Which of the following is a function that calls itself?",
    "Which of the following is used to exit a function early?",
    "What is the correct syntax for creating an array in JavaScript?",
    "Which operator is used to assign a value in JavaScript?",
    "What is the correct syntax to define a variable in JavaScript?",
    "Which of the following is a method to remove an item from an array?",
    "What does 'null' mean in programming?",
    "What is an infinite loop?",
    "Which method is used to find the length of a string in JavaScript?",
    "Which of the following is the correct way to write a comment in JavaScript?",
    "What is recursion?"
];
const answers = [
    "HyperText Markup Language",
    "CSS",
    "Cascading Style Sheets",
    "Python",
    "console.log('Hello World');",
    "let",
    "A block of code that performs a specific task",
    "for",
    "//",
    "A collection of elements",
    "const",
    "HTML",
    "A blueprint for creating objects",
    "addEventListener",
    "Stack",
    "do-while",
    "To exit the function and return a value",
    "+",
    "A collection of properties and methods",
    "Assembly",
    "if-else",
    "Runtime error",
    "Logical AND",
    "A sequence of characters",
    "let obj = {}",
    "Array",
    "Marks the end of a statement",
    "Undefined",
    "function name() {}",
    "A function used to create objects",
    "Array",
    "concat()",
    "Array",
    "A block of code that repeats",
    "Exits the loop",
    "Refers to the current object",
    "==",
    "if(condition) { }",
    "undefined",
    "A function that calls itself",
    "return",
    "let arr = []",
    "=",
    "let x = 10;",
    "pop()",
    "A null value",
    "A loop that never stops",
    "length",
    "//",
    "A function that calls itself"
];
const scienceOptions = [
    ["HyperText Markup Language", "HyperText Markdown Language", "Home Tool Markup Language", "Hyper Tool Markup Language"],
    ["HTML", "CSS", "Java", "Python"],
    ["Cascading Style Sheets", "Color Styling Sheets", "Computer Style Sheets", "Coded Style Sheets"],
    ["Python", "JavaScript", "CSS", "HTML"],
    ["console.log('Hello World');", "echo 'Hello World';", "printf('Hello World');", "print('Hello World');"],
    ["let", "var", "const", "int"],
    ["A block of code that performs a specific task", "A variable in memory", "A type of loop", "A collection of data"],
    ["for", "while", "do-while", "all of the above"],
    ["//", "/* */", "#", "++"],
    ["A collection of elements", "A single variable", "A type of function", "An object with properties"],
    ["const", "var", "final", "let"],
    ["HTML", "CSS", "Python", "SQL"],
    ["A blueprint for creating objects", "A variable", "A function", "An array"],
    ["addEventListener", "onClick", "onLoad", "onclick"],
    ["Stack", "Queue", "List", "Hashmap"],
    ["for", "do-while", "while", "foreach"],
    ["To exit the function and return a value", "To create a new function", "To declare a variable", "To repeat code"],
    ["+", "-", "*", "/"],
    ["A collection of properties and methods", "A list of values", "A loop", "An array"],
    ["Assembly", "C", "Java", "Python"],
    ["if-else", "while", "for", "switch"],
    ["Runtime error", "Syntax error", "Compile-time error", "Logical error"],
    ["&&", "||", "!", "=="],
    ["A sequence of characters", "A single number", "An array of objects", "A set of key-value pairs"],
    ["let obj = {}", "let obj[] = {}", "obj = {}", "new obj()"],
    ["Array", "Object", "String", "Boolean"],
    ["Marks the end of a statement", "Marks a new function", "Marks the end of a block", "Marks a comment"],
    ["Undefined", "Null", "Zero", "NaN"],
    ["function name() {}", "function name[] {}", "function {name} {}", "function {} name"],
    ["A function used to create objects", "A type of loop", "A type of variable", "A data structure"],
    ["Array", "Object", "String", "Boolean"],
    ["concat()", "join()", "merge()", "combine()"],
    ["Array", "String", "Object", "Number"],
    ["A block of code that repeats", "A single block of code", "A data structure", "A type of variable"],
    ["Exits the loop", "Skips the current iteration", "Stops the program", "Repeats the loop"],
    ["Refers to the current object", "Refers to the current function", "Refers to the global scope", "Refers to the previous object"],
    ["==", "=", ">", "<"],
    ["if(condition) { }", "if { condition }", "if (condition) then {}", "if condition: {}"],
    ["undefined", "null", "zero", "NaN"],
    ["A function that calls itself", "A loop that never ends", "A type of variable", "A conditional statement"],
    ["return", "break", "continue", "exit"],
    ["let arr = []", "var arr = {}", "arr = new Array()", "let arr[] = {}"],
    ["=", "==", "===", "=>"],
    ["let x = 10;", "const x = 10;", "var x = 10;", "x = 10;"],
    ["pop()", "push()", "shift()", "unshift()"],
    ["A null value", "An undefined value", "An empty object", "An empty array"],
    ["A loop that never stops", "A loop that stops after a fixed number of iterations", "A loop that exits on a condition", "A loop that is infinite but exits after a while"],
    ["length", "size", "count", "getLength"],
    ["//", "/* */", "#", ";"],
    ["A function that calls itself", "A loop that repeats indefinitely", "A type of array", "A method for sorting data"]
];

//Initial value setting inefficient way..............
let AnsMarking = new Array();
let Htmloptions = Array.from(document.querySelectorAll('.op'));
for(let i = 0;i<4;i++){
   Htmloptions[i].previousElementSibling.setAttribute('value',scienceOptions[0][i]);
}
for(let i = 4;i<8;i++){
    Htmloptions[i].previousElementSibling.setAttribute('value',scienceOptions[1][i-4]);
 }
 for(let i = 8;i<12;i++){
    Htmloptions[i].previousElementSibling.setAttribute('value',scienceOptions[2][i-8]);
 }
 for(let i = 12;i<16;i++){
    Htmloptions[i].previousElementSibling.setAttribute('value',scienceOptions[13][i-12]);
 }
 for(let i = 16;i<20;i++){
    Htmloptions[i].previousElementSibling.setAttribute('value',scienceOptions[49][i-16]);
 }
 AnsMarking.push(answers[0]);
 AnsMarking.push(answers[1]);
 AnsMarking.push(answers[2]);
 AnsMarking.push(answers[13]);
 AnsMarking.push(answers[49]);
const reset = document.querySelector('#reset');
const form = document.querySelector('form');
reset.addEventListener('click',(event)=>{
    let tempAnsArray = new Array();
    const set = new Set();
    while(set.size!=5){
        let randNumIdx = Math.floor(Math.random()*51);
        if(!set.has(randNumIdx)){
            set.add(randNumIdx);
            tempAnsArray.push(answers[randNumIdx]);
        }
    }
    AnsMarking = tempAnsArray;
    let Htmlquestions = document.querySelectorAll('.q'); 
    let setArray = Array.from(set);
    let nodeArray = Array.from(Htmlquestions);
    let Htmloptions = Array.from(document.querySelectorAll('.op'));
    let countOption = 0;
    for(let i = 0;i<5;i++){
        let HtmlQues = nodeArray[i];
        let idx = setArray[i];
        let question = scienceQuestions[idx];
        let options = scienceOptions[idx];
        let op1 = Htmloptions[countOption++];
        let op2 = Htmloptions[countOption++];
        let op3 = Htmloptions[countOption++];
        let op4 = Htmloptions[countOption++];
        HtmlQues.textContent = `${i+1}. ${question}`;
        op1.textContent = options[0];
        op2.textContent = options[1];
        op3.textContent = options[2];
        op4.textContent = options[3];

        //adding values
        op1.previousElementSibling.setAttribute('value', options[0]);
        op2.previousElementSibling.setAttribute('value', options[1]);
        op3.previousElementSibling.setAttribute('value', options[2]);
        op4.previousElementSibling.setAttribute('value', options[3]);
    }
    document.querySelector('#result').textContent = "";
})
form.addEventListener('submit',(e)=>{
   let count = 0;
   e.preventDefault();
   let data = new FormData(form);
   let i = 0;
   for(let value of data.values()){
     if(AnsMarking.at(i++)===value)count++;
   }
   document.querySelector('#result').textContent = `Your Score is ${count} out of 5`;
})