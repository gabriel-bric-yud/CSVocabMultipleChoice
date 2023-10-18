let points = 0;
let newPoint = false;

const playButton = document.querySelector('.playButton');
const bottomContainer = document.querySelector('.bottomContainer');
const topContainer = document.querySelector('.topContainer')
const possibleChoices = document.querySelectorAll('.multipleChoice');
const resultDisplay = document.querySelector('#result');
const pointsDisplay = document.querySelector('#points');


let i;
let newQuestion;
let newAnswer;
let position;
let choice;
let userChoice;
let abcdArray = ['a','b','c','d']


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function clearColors() {
    possibleChoices.forEach (possibleChoice => {
        possibleChoice.style.backgroundColor = ""
        possibleChoice.style.fontWeight = 'normal';
        possibleChoice.classList.remove("animate");
        void possibleChoice.offsetWidth;
        void possibleChoice.offsetHeight;
        possibleChoice.setAttribute('class', 'multipleChoice'); 
    })
}

function clearResult() {
    resultDisplay.innerText = "Guess The Answer!"
    newPoint = false
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////




function notification(msg, parent, colorData, speed) {
    console.log('hello')
    const messageDiv = document.createElement('div')
    messageDiv.classList.add('message')
    messageDiv.style.opacity = 0
    messageDiv.style.borderColor = colorData
    const messageText = document.createElement('p')
    messageText.textContent = msg
    messageText.classList.add('messageText')
    messageDiv.appendChild(messageText)
    parent.appendChild(messageDiv)
  
    fadeIn(messageDiv, .05, 20)
    slideIn(messageDiv, 0, 5, 'bottom', 1)
    fadeOut(messageDiv, speed, 5, -10, true)
}

function slideIn(elem, startPosition, endPosition, direction, increment) {
    let position = startPosition
    let directionOption = direction.toString()
    let slideI = setInterval(() => {
    position += increment //1
    elem.style[directionOption] = `${position}px`
    if (position == endPosition) {
      clearInterval(slideI)
    }
  }, 20)
}
  
  
  
function fadeIn(elem, increment, interval) {
    let opacity = 0
    let fadeI = setInterval(() => {
        opacity += increment//.05
        elem.style.opacity = opacity
        if (elem.style.opacity >= 1) {
            clearInterval(fadeI)
        } 
    }, interval) //20
}

function fadeOut(elem, speed, startPosition, endPosition, bool) {
    setTimeout(() => {
      let opacity = 1
      let bottom = startPosition
      
      let fadeO = setInterval(() => {
        opacity -= .05
        elem.style.opacity = opacity
  
        if (bottom >= endPosition) {
          bottom -= 1
          elem.style.bottom = `${bottom}px`
        }
  
        if (elem.style.opacity <= 0) {
          if (bool === true) {
            elem.remove()
          }
          clearInterval(fadeO)
        } 
      }, 20)
    }, speed)
}
  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


let vocabArray = [
    {
        vocab: 'Program',
        definition: 'A set of instructions that a computer follows to perform a task.'
    },
    {
        vocab: 'Programmer, or Software Developer',
        definition: 'A person with the training and skills necessary to design, create, and test computer programs.'
    },
    {
        vocab: 'Hardware',
        definition: 'Refers to all of the physical devices, or components, that a computer is made of. Typical computer system consists of the following major components the central processing unit (CPU), Main memory, Secondary storage devices, Input devices, Output devices.'
    },
    {
        vocab: 'Central Processing Unit, or CPU',
        definition: 'Part of a computer that actually runs programs. (major component)'
    },
    {
        vocab: 'Microprocessors',
        definition: 'Small modern CPU chips.'
    },
    {
        vocab: 'Main Memory',
        definition: 'Commonly known as random-access memory, or RAM. Used for stroage of data on a computer. (major component)'
    },
    {
        vocab: 'Random-Access Memory, or RAM',
        definition: 'A type of Main Memory. Usually a volatile type of memory that is used only for temporary storage while a program is running.'
    },
    {
        vocab: 'Read-only memory, or ROM',
        definition: 'A nonvolatile type of memory, even when the computer’s power is turned off. It is typically used to store programs that are important for the system’s operation. A computer can read the contents, but it cannot change its contents, or store additional data there.'
    },
    {
        vocab: 'Secondary Storage ',
        definition: 'A type of memory that can hold data for long periods of time, even when there is no power to the computer. (major component)'
    },
    {
        vocab: 'Disk Drive ',
        definition: 'Stores data by magnetically encoding it onto a circular disk. It is an example of secondary storage.'
    },
    {
        vocab: 'Solid State Drives, or SSD',
        definition: 'Stores data in solid-state memory, has no moving parts, and operates faster than a traditional disk drive. It is an example of secondary storage.'
    },
    {
        vocab: 'Universal Serial Bus drives, or USB drives',
        definition: 'Small devices that do not actually contain a disk. They store data in a special type of memory known as flash memory.'
    },
    {
        vocab: 'Input',
        definition: 'Any data the computer collects from people and from other devices.'
    },
    {
        vocab: 'Input Device',
        definition: 'A component that collects the data and sends it to the computer. Examples include keyboard, mouse, touchscreen, scanner, microphone, discs and digital cameras.(major component)'
    },
    {
        vocab: 'Output',
        definition: 'Any data the computer produces for people or for other devices.'
    },
    {
        vocab: 'Output Device',
        definition: 'Formats and presents data. Examples include are video displays, discs and printers. (major component)'
    },
    {
        vocab: 'Byte',
        definition: 'A unit of digital information consisting of a group of binary digits(usually eight) that operate as a tiny storage location in which a computer’s memory is divided.'
    },
    {
        vocab: 'Bit',
        definition: 'Stands for binary digit and is a tiny electrical component that can hold either a positive or a negative charge. (1 or 0)'
    },
    {
        vocab: 'Binary Numbering System',
        definition: 'A system where all numeric values are written as sequences of 0s and 1s.'
    },
    {
        vocab: 'American Standard Code for Information Interchange (ASCII)',
        definition: 'A set of 128 numeric codes that represent the English letters, various punctuation marks, and other characters. It is a standard data-encoding format for electronic communication between computers.'
    },
    {
        vocab: 'Unicode',
        definition: 'An extensive encoding scheme that is compatible with ASCII, and can also represent the characters of many of the world’s languages.'
    },
    {
        vocab: 'Hexadecimal',
        definition: 'A numbering system relating to or using a system of numerical notation that has 16 rather than 10 as its base'
    },
    {
        vocab: 'Two’s Complement',
        definition: 'A technique to encode negative numbers'
    },
    {
        vocab: 'Floating-Point Notation',
        definition: 'A technique to encode real numbers.'
    },
    {
        vocab: 'Digital',
        definition: 'Used to describe anything that uses binary numbers.'
    },
    {
        vocab: 'Digital Data',
        definition: 'Data that is stored in binary.'
    },
    {
        vocab: 'Digital Device ',
        definition: 'Any device that works with binary data.'
    },
    {
        vocab: 'Pixels',
        definition: 'Represents a picture element and are tiny dots of color'
    },
    {
        vocab: 'Samples',
        definition: 'Digital audio that is broken into small pieces.'
    },
    {
        vocab: 'Machine Language',
        definition: 'A programming language consisting of binary or hexadecimal instructions which a computer can respond to directly.'
    },
    {
        vocab: 'Instruction Set',
        definition: 'The entire set of instructions that a CPU or micro-processor can understand and execute.'
    },
    {
        vocab: 'fetch-decode-execute cycle',
        definition: 'Happens when a CPU executes the instructions in a program. The first step is to read the next instruction from memory into the CPU. Then the CPU decodes the instruction to determine which operation it should perform. The last step is to perform the operation.'
    },
    {
        vocab: 'Assembly Language',
        definition: 'An early alternative to machine language. Instead of using binary numbers for instructions, it uses short words that are known as mnemonics.'
    },
    {
        vocab: 'Mnemonics',
        definition: 'Short words used instead of using binary numbers for instructions in low level languages.'
    },
    {
        vocab: 'Assembler',
        definition: 'A special program used to translate an assembly language program to a machine language program.'
    },
    {
        vocab: 'Low-level Language',
        definition: "A language that provides little or no abstraction from a computer's instruction set."
    },
    {
        vocab: 'High-level Language ',
        definition: 'A programming language with strong abstraction from the details of the computer. It allows you to create powerful and complex programs without knowing how the CPU works'
    },
    {
        vocab: 'Key Words or Reserved Words ',
        definition: 'Set of words that have a specific meaning and purpose in a high-level language.'
    },
    {
        vocab: 'Operators',
        definition: 'Symbols that perform various operations on data such a + or -.'
    },
    {
        vocab: 'Syntax',
        definition: 'Rules that dictate how key words, operators, and various punctuation characters must be used in a programming language.'
    },
    {
        vocab: 'Statements',
        definition: 'Individual instructions that you use to write a program in a high-level programming language.'
    },
    {
        vocab: 'Compiler',
        definition: 'A program that translates a high-level language program into a separate machine language program.'
    },
    {
        vocab: 'Interpreter',
        definition: 'A program that both translates and executes the instructions in a high-level language program. This reads each individual instruction in the program, converts it to a machine language instruction and then immediately executes it.'
    },
    {
        vocab: 'Source Code or Code',
        definition: 'Statements that a programmer writes in a high-level language.'
    },
    {
        vocab: 'Syntax Error',
        definition: 'A mistake such as a misspelled key word, a missing punctuation character, or the incorrect use of an operator.'
    },
    {
        vocab: 'Integrated development environments (IDE)',
        definition: 'Specialized software packages for writing code. They include a text editor that has specialized features for writing statements in a high-level programming language, a compiler or interpreter, and useful tools for testing programs and locating errors.'
    },
    {
        vocab: 'System Software',
        definition: 'Set of programs that control, manage or enhance the operation of a computer. This includes operating systems, utility programs and software development tools.'
    },
    {
        vocab: 'Application Software',
        definition: 'Set of programs that make a computer useful for everyday tasks by operating with the user directly.'
    },
    {
        vocab: 'Operating System',
        definition: 'The is the most fundamental set of programs on a computer. It controls the internal operations of the computer’s hardware, manages all of the devices connected to the computer, allows data to be saved to and retrieved from storage devices, and allows other programs to run on the computer. (System Software)'
    },
    {
        vocab: 'Utility Program',
        definition: 'Performs a specialized task that enhances the computer’s operation or safeguards data. Examples are virus scanners, file compression programs, and data backup programs. (System Software)'
    },
    {
        vocab: 'Software Development Tools',
        definition: 'The programs that programmers use to create, modify, and test software. Software development tools are the programs that programmers use to create, modify, and test software. (System Software)'
    },
    {
        vocab: 'Logic Error',
        definition: 'A mistake that does not prevent the program from running, but causes it to produce incorrect results. (Mathematical mistakes are common causes)'
    },
    {
        vocab: 'Debug',
        definition: 'When a programmer finds and corrects code that is causing an error.'
    },
    {
        vocab: 'Program Development Cycle',
        definition: '5 step process of creating a program and is repeated until no errors can be found. The steps are Design the program, Write the code, Correct syntax errors, Test the executable code, Debug the code.'
    },
    {
        vocab: 'Designing a Program',
        definition: 'The first step of the Program Development Cycle and consists of two steps: Understand the task that the program is to perform and determine the steps that must be taken to perform the task.'
    },
    {
        vocab: 'Software Requirement',
        definition: 'A single function that the program must perform in order to satisfy the customer using the program.'
    },
    {
        vocab: 'Algorithm',
        definition: 'A set of well-defined logical steps in sequential order that must be taken to perform a task.'
    },
    {
        vocab: 'Pseudocode',
        definition: 'It is an informal language used to create models, or “mock-ups” of programs. It is a generic way to write the statements of an algorithm, without worrying about syntax rules. It is not meant to be compiled or executed. It is fake code.'
    },
    {
        vocab: 'Flowchart',
        definition: 'A diagram that graphically depicts the steps that take place in a program.'
    },
    {
        vocab: 'Terminal Symbols',
        definition: 'Ovals which appear at the top and bottom of the flowchart and identify the start and end of a program.'
    },
    {
        vocab: 'Input and Output Symbols',
        definition: 'Parallelograms in a flowchart which indicate the inputting or outputting external data.'
    },
    {
        vocab: 'Processing Symbols',
        definition: 'Rectangles in a flowchart that represents a process, action, or function. Also known as "Action Symbols"'
    },
    {
        vocab: 'Connector Symbol',
        definition: 'Used to break the flowchart into two or more smaller flowcharts and placing them side-by-side on the page.'
    },
    {
        vocab: 'Off-page Connector Symbol',
        definition: 'Used to connect the pieces of a flowchart on multiple pages. The symbol is the “home plate”'
    },
    {
        vocab: 'Sequence Structure',
        definition: 'A set of statements that execute in the order that they appear.'
    },
    {
        vocab: 'Control Structure or Structure',
        definition: 'A logical design that controls the order in which a set of statements executes.'
    },
    {
        vocab: 'String',
        definition: 'A sequence of characters that is used as data.'
    },
    {
        vocab: 'String Literal',
        definition: 'A string that appears in the actual code of a program, usually surrounded by quotes.'
    },
    {
        vocab: 'Variable',
        definition: 'A storage location in memory of a program that is represented by a name.'
    },
    {
        vocab: 'Prompt',
        definition: 'A message that tells (or asks) the user to enter a specific value.'
    },
    {
        vocab: 'User-Friendly',
        definition: 'Commonly used in the software business to describe programs that are easy to use.'
    },
    {
        vocab: 'Assignment Statement',
        definition: 'A statement that sets a variable to a specified value.'
    },
    {
        vocab: 'Expression',
        definition: 'A combination of one or more constants, variables, functions, and operators that the programming language interprets and computes to produce another value.'
    },
    {
        vocab: 'Math Operators',
        definition: 'Programmer’s tools for performing calculations.'
    },
    {
        vocab: 'Operands',
        definition: 'The values on the right and left of the math operator'
    },
    {
        vocab: 'Program',
        definition: 'A set of instructions that a computer follows to perform a task.'
    },
    {
        vocab: 'Math Expression',
        definition: 'Performs a calculation and gives a value.'
    },
    {
        vocab: 'Variable Declaration',
        definition: 'A statement that gives a variable a name and specifies the variable data type.'
    },
    {
        vocab: 'Data Type',
        definition: 'The type of data that the variable will hold such as string, integer or real.'
    },
    {
        vocab: 'Initialization',
        definition: 'When you declare a variable and assign a value to it in the declaration statement.'
    },
    {
        vocab: 'Uninitialized Variable',
        definition: 'A variable that has been declared, but has not been initialized or assigned a value.'
    },
    {
        vocab: 'Modulus',
        definition: 'A math operator that divides one number by another and gives the remainder'
    },
    {
        vocab: 'Numeric Literal',
        definition: 'A number that is written into a program’s code.'
    },
    {
        vocab: 'Real',
        definition: 'A numeric literal is written with a decimal point.'
    },
    {
        vocab: 'Named Constant or Constant ',
        definition: 'A name that represents a value that cannot be changed during the program’s execution.'
    },
    {
        vocab: 'Decision Structure',
        definition: 'Allows a program to perform actions only under certain conditions. Also called a selection structure.'
    },
    {
        vocab: 'Single Alternative Decision Structure',
        definition: 'A structure that provides only one alternative path of execution.'
    },
    {
        vocab: 'Condition',
        definition: 'Any expression that can be evaluated as either true or false'
    },
    {
        vocab: 'Boolean Expressions',
        definition: 'Expressions that can be evaluated as either true or false.'
    },
    {
        vocab: 'Relational Operator',
        definition: 'Determines whether a specific relationship exists between two values. Examples are >, < and =='
    },
    {
        vocab: 'Dual Alternative Decision Structure',
        definition: ' is a structure with two possible paths of execution: one path is taken if a condition is true, and the other path is taken if the condition is false.'
    },
    {
        vocab: 'Case Structure or Multiple Alternative Decision Structure',
        definition: 'Allows you to test the value of a variable or an expression (test Expression) and then use that value to determine which statement or set of statements to execute.'
    },
    {
        vocab: 'Logical Operators',
        definition: 'Operators which you can use to create complex Boolean expressions. Examples include AND, Or, and NOT'
    },
    {
        vocab: 'Short-Circuit Evaluation',
        definition: 'The method of check AND / OR compound expressions by checking the left side first.'
    },
    {
        vocab: 'Unary Operator',
        definition: 'An operation with only one operand such as the NOT operator.'
    },
    {
        vocab: 'Flag',
        definition: 'A variable that signals when some condition exists in the program.'
    },
    {
        vocab: 'Default',
        definition: 'Executed in a switch statement when the testExpression does not match any of the case values.'
    },
    {
        vocab: 'Repetition Structure',
        definition: 'Causes a statement or set of statements to execute repeatedly. Commonly known as a loop.'
    },
    {
        vocab: 'Condition-Controlled Loop',
        definition: 'Uses a true/false condition to control the number of times that something repeats. Examples are while, do-while, do-until'
    },
    {
        vocab: 'Count-Controlled loop ',
        definition: 'Repeats something a specific number of times. Typically performs the following three actions: initialization, test, and increment. Example is a For loops'
    },
    {
        vocab: 'Counter variable, or Counter',
        definition: 'Used by a count-controlled-loop to store the number of iterations that it has performed.'
    },
    {
        vocab: 'Increment',
        definition: 'To increase the value of a variable.'
    },
    {
        vocab: 'Decrement',
        definition: 'To decrease the value of a variable.'
    },
    {
        vocab: 'Iteration',
        definition: 'Is each execution of the entire body of a loop.'
    },
]


function checkPoints() {
    if (newPoint == true) {
        console.log(points)
        pointsDisplay.innerText = points     
    }
}



function createQuestion() {
    i = Math.floor(Math.random() * vocabArray.length);
    console.log(i)
    newQuestion = vocabArray[i].definition
    newAnswer = vocabArray[i].vocab
    position = Math.floor(Math.random() * 4) + 1
    document.querySelector("#question").textContent = newQuestion
    console.log(position)
    addChoice(position, newAnswer)

    for (let x = 1; x <= 4; x++) {
        if (x != position) {
            let randomAnswer =  Math.floor(Math.random() * vocabArray.length)
            addChoice(x, vocabArray[randomAnswer].vocab)
        }
    }

}

function addChoice(position, choice) {
    switch(position) {
        case 1:
            document.querySelector("#choiceA").textContent = choice
            break;
        case 2:
            document.querySelector("#choiceB").textContent = choice
            break;
        case 3:
            document.querySelector("#choiceC").textContent = choice
            break;
        case 4:
            document.querySelector("#choiceD").textContent = choice
            
    }
}


function checkAnswer() {
    console.log(choice)
    if (userChoice == abcdArray[position - 1]) {
        resultDisplay.innerText = " Correct!";
        choice.style.backgroundColor = 'lightgreen';
        choice.classList.add('animate');
        choice.style.fontWeight = 'bold';
        if (newPoint == false) {
            points += 1;
            pointsDisplay.innerText = points 
            checkPoints();
        }
        newPoint = true;
        notification('CORRECT!', topContainer, 'green', 1500)
    }
    else {
        resultDisplay.innerText = " Wrong!";
        choice.style.backgroundColor = 'red';
        choice.classList.add('animate');
        console.log('you are wrong');
        newPoint = true;
        notification('WRONG!', topContainer, 'red', 750)
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////







const playGame = function playGame() {
    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        choice = e.target;
        console.log(userChoice);
        checkAnswer();
    }))
}

playGame();


playButton.addEventListener('click', (e) => {
    clearColors(); 
    clearResult();
    createQuestion()
})