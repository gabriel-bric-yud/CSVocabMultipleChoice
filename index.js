let points = 0;
let newPoint = false;

const playButton = document.querySelector('.playButton');
const bottomContainer = document.querySelector('.bottomContainer');
const topContainer = document.querySelector('.topContainer')
const possibleChoices = document.querySelectorAll('.multipleChoice');
const resultDisplay = document.querySelector('#result');
const pointsDisplay = document.querySelector('#points');
const guessWord = document.querySelector('#guessWord')
const guessDefinition = document.querySelector('#guessDefinition')
const csit111Midterm = document.querySelector('#csit111Midterm')
const csit111Final = document.querySelector('#csit111Final')
const csit240Chapter1 = document.querySelector('#csit240Chapter1')
const csit240Chapter2 = document.querySelector('#csit240Chapter2')
const csit240Chapter3 = document.querySelector('#csit240Chapter3')
const csit241Chapter1 = document.querySelector('#csit241Chapter1')
const csit241Chapter2 = document.querySelector('#csit241Chapter2')


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
    document.querySelectorAll('.message').forEach(message => {
      message.remove();
    })
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
function checkPoints() {
  if (newPoint == true) {
      console.log(points)
      pointsDisplay.innerText = points     
  }
}


let csit111MidtermVocab = [
  {
    vocab: 'Program',
    definition: 'A set of instructions that a computer follows to perform a task.'
  },
  {
    vocab: 'Programmer, or Software Developer',
    definition: 'A person with the training and skills necessary to design, create, and test computer programs.'
  },
  {
    vocab:  'Hardware',
    definition: 'Refers to all of the physical devices, or components, that a computer is made of. Typical computer system consists of the following major components the central processing unit (CPU), Main memory, Secondary storage devices, Input devices, Output devices.'
  },
  {
    vocab:  'Central Processing Unit, or CPU',
    definition: 'Part of a computer that actually runs programs. (major component)'
  },
  {
    vocab:  'Microprocessors',
    definition: 'Small modern CPU chips.'
  },
  {
    vocab:  'Main Memory',
    definition: 'Commonly known as random-access memory, or RAM. Used for stroage of data on a computer. (major component)'
  },
  {
    vocab:  'Random-Access Memory, or RAM',
    definition: 'A type of Main Memory. Usually a volatile type of memory that is used only for temporary storage while a program is running.'
  },
  {
    vocab:  'Read-only memory, or ROM',
    definition: 'A nonvolatile type of memory, even when the computer’s power is turned off. It is typically used to store programs that are important for the system’s operation. A computer can read the contents, but it cannot change its contents, or store additional data there.'
  },
  {
    vocab:  'Secondary Storage ',
    definition: 'A type of memory that can hold data for long periods of time, even when there is no power to the computer. (major component)'
  },
  {
    vocab:  'Disk Drive ',
    definition: 'Stores data by magnetically encoding it onto a circular disk. It is an example of secondary storage.'
  },
  {
    vocab:  'Solid State Drives, or SSD',
    definition: 'Stores data in solid-state memory, has no moving parts, and operates faster than a traditional disk drive. It is an example of secondary storage.'
  },
  {
    vocab:  'Universal Serial Bus drives, or USB drives',
    definition: 'Small devices that do not actually contain a disk. They store data in a special type of memory known as flash memory.'
  },
  {
    vocab:  'Input',
    definition: 'Any data the computer collects from people and from other devices.'
  },
  {
    vocab:  'Input Device',
    definition: 'A component that collects the data and sends it to the computer. Examples include keyboard, mouse, touchscreen, scanner, microphone, discs and digital cameras.(major component)'
  },
  {
    vocab:  'Output',
    definition: 'Any data the computer produces for people or for other devices.'
  },
  {
    vocab:  'Output Device',
    definition: 'Formats and presents data. Examples include are video displays, discs and printers. (major component)'
  },
  {
    vocab:  'Byte',
    definition: 'A unit of digital information consisting of a group of binary digits(usually eight) that operate as a tiny storage location in which a computer’s memory is divided.'
  },
  {
    vocab:  'Bit',
    definition: 'Stands for binary digit and is a tiny electrical component that can hold either a positive or a negative charge. (1 or 0)'
  },
  {
    vocab:  'Binary Numbering System',
    definition: 'A system where all numeric values are written as sequences of 0s and 1s.'
  },
  {
    vocab:  'American Standard Code for Information Interchange (ASCII)',
    definition: 'A set of 128 numeric codes that represent the English letters, various punctuation marks, and other characters. It is a standard data-encoding format for electronic communication between computers.'
  },
  {
    vocab:  'Unicode',
    definition: 'An extensive encoding scheme that is compatible with ASCII, and can also represent the characters of many of the world’s languages.'
  },
  {
    vocab:  'Hexadecimal',
    definition: 'A numbering system relating to or using a system of numerical notation that has 16 rather than 10 as its base'
  },
  {
    vocab:  'Two’s Complement',
    definition: 'A technique to encode negative numbers'
  },
  {
    vocab:  'Floating-Point Notation',
    definition: 'A technique to encode real numbers.'
  },
  {
    vocab:  'Digital',
    definition: 'Used to describe anything that uses binary numbers.'
  },
  {
    vocab:  'Digital Data',
    definition: 'Data that is stored in binary.'
  },
  {
    vocab:  'Digital Device ',
    definition: 'Any device that works with binary data.'
  },
  {
    vocab:  'Pixels',
    definition: 'Represents a picture element and are tiny dots of color'
  },
  {
    vocab:  'Samples',
    definition: 'Digital audio that is broken into small pieces.'
  },
  {
    vocab:  'Machine Language',
    definition: 'A programming language consisting of binary or hexadecimal instructions which a computer can respond to directly.'
  },
  {
    vocab:  'Instruction Set',
    definition: 'The entire set of instructions that a CPU or micro-processor can understand and execute.'
  },
  {
    vocab:  'fetch-decode-execute cycle',
    definition: 'Happens when a CPU executes the instructions in a program. The first step is to read the next instruction from memory into the CPU. Then the CPU decodes the instruction to determine which operation it should perform. The last step is to perform the operation.'
  },
  {
    vocab:  'Assembly Language',
    definition: 'An early alternative to machine language. Instead of using binary numbers for instructions, it uses short words that are known as mnemonics.'
  },
  {
    vocab:  'Mnemonics',
    definition: 'Short words used instead of using binary numbers for instructions in low level languages.'
  },
  {
    vocab:  'Assembler',
    definition: 'A special program used to translate an assembly language program to a machine language program.'
  },
  {
    vocab:  'Low-level Language',
    definition: "A language that provides little or no abstraction from a computer's instruction set."
  },
  {
    vocab:  'High-level Language ',
    definition: 'A programming language with strong abstraction from the details of the computer. It allows you to create powerful and complex programs without knowing how the CPU works'
  },
  {
    vocab:  'Key Words or Reserved Words ',
    definition: 'Set of words that have a specific meaning and purpose in a high-level language.'
  },
  {
    vocab:  'Operators',
    definition: 'Symbols that perform various operations on data such a + or -.'
  },
  {
    vocab:  'Syntax',
    definition: 'Rules that dictate how key words, operators, and various punctuation characters must be used in a programming language.'
  },
  {
    vocab:  'Statements',
    definition: 'Individual instructions that you use to write a program in a high-level programming language.'
  },
  {
    vocab:  'Compiler',
    definition: 'A program that translates a high-level language program into a separate machine language program.'
  },
  {
    vocab:  'Interpreter',
    definition: 'A program that both translates and executes the instructions in a high-level language program. This reads each individual instruction in the program, converts it to a machine language instruction and then immediately executes it.'
  },
  {
    vocab:  'Source Code or Code',
    definition: 'Statements that a programmer writes in a high-level language.'
  },
  {
    vocab:  'Syntax Error',
    definition: 'A mistake such as a misspelled key word, a missing punctuation character, or the incorrect use of an operator.'
  },
  {
    vocab:  'Integrated development environments (IDE)',
    definition: 'Specialized software packages for writing code. They include a text editor that has specialized features for writing statements in a high-level programming language, a compiler or interpreter, and useful tools for testing programs and locating errors.'
  },
  {
    vocab:  'System Software',
    definition: 'Set of programs that control, manage or enhance the operation of a computer. This includes operating systems, utility programs and software development tools.'
  },
  {
    vocab:  'Application Software',
    definition: 'Set of programs that make a computer useful for everyday tasks by operating with the user directly.'
  },
  {
    vocab:  'Operating System',
    definition: 'The is the most fundamental set of programs on a computer. It controls the internal operations of the computer’s hardware, manages all of the devices connected to the computer, allows data to be saved to and retrieved from storage devices, and allows other programs to run on the computer. (System Software)'
  },
  {
    vocab:  'Utility Program',
    definition: 'Performs a specialized task that enhances the computer’s operation or safeguards data. Examples are virus scanners, file compression programs, and data backup programs. (System Software)'
  },
  {
    vocab:  'Software Development Tools',
    definition: 'The programs that programmers use to create, modify, and test software. Software development tools are the programs that programmers use to create, modify, and test software. (System Software)'
  },
  {
    vocab:  'Logic Error',
    definition: 'A mistake that does not prevent the program from running, but causes it to produce incorrect results. (Mathematical mistakes are common causes)'
  },
  {
    vocab:  'Debug',
    definition: 'When a programmer finds and corrects code that is causing an error.'
  },
  {
    vocab:  'Program Development Cycle',
    definition: '5 step process of creating a program and is repeated until no errors can be found. The steps are Design the program, Write the code, Correct syntax errors, Test the executable code, Debug the code.'
  },
  {
    vocab:  'Designing a Program',
    definition: 'The first step of the Program Development Cycle and consists of two steps: Understand the task that the program is to perform and determine the steps that must be taken to perform the task.'
  },
  {
    vocab:  'Software Requirement',
    definition: 'A single function that the program must perform in order to satisfy the customer using the program.'
  },
  {
    vocab:  'Algorithm',
    definition: 'A set of well-defined logical steps in sequential order that must be taken to perform a task.'
  },
  {
    vocab:  'Pseudocode',
    definition: 'It is an informal language used to create models, or “mock-ups” of programs. It is a generic way to write the statements of an algorithm, without worrying about syntax rules. It is not meant to be compiled or executed. It is fake code.'
  },
  {
    vocab:  'Flowchart',
    definition: 'A diagram that graphically depicts the steps that take place in a program.'
  },
  {
    vocab:  'Terminal Symbols',
    definition: 'Ovals which appear at the top and bottom of the flowchart and identify the start and end of a program.'
  },
  {
    vocab:  'Input and Output Symbols',
    definition: 'Parallelograms in a flowchart which indicate the inputting or outputting external data.'
  },
  {
    vocab:  'Processing Symbols',
    definition: 'Rectangles in a flowchart that represents a process, action, or function. Also known as "Action Symbols"'
  },
  {
    vocab:  'Connector Symbol',
    definition: 'Used to break the flowchart into two or more smaller flowcharts and placing them side-by-side on the page.'
  },
  {
    vocab:  'Off-page Connector Symbol',
    definition: 'Used to connect the pieces of a flowchart on multiple pages. The symbol is the “home plate”'
  },
  {
    vocab:  'Sequence Structure',
    definition: 'A set of statements that execute in the order that they appear.'
  },
  {
    vocab:  'Control Structure or Structure',
    definition: 'A logical design that controls the order in which a set of statements executes.'
  },
  {
    vocab:  'String',
    definition: 'A sequence of characters that is used as data.'
  },
  {
    vocab:  'String Literal',
    definition: 'A string that appears in the actual code of a program, usually surrounded by quotes.'
  },
  {
    vocab:  'Variable',
    definition: 'A storage location in memory of a program that is represented by a name.'
  },
  {
    vocab:  'Prompt',
    definition: 'A message that tells (or asks) the user to enter a specific value.'
  },
  {
    vocab:  'User-Friendly',
    definition: 'Commonly used in the software business to describe programs that are easy to use.'
  },
  {
    vocab:  'Assignment Statement',
    definition: 'A statement that sets a variable to a specified value.'
  },
  {
    vocab:  'Expression',
    definition: 'A combination of one or more constants, variables, functions, and operators that the programming language interprets and computes to produce another value.'
  },
  {
    vocab:  'Math Operators',
    definition: 'Programmer’s tools for performing calculations.'
  },
  {
    vocab:  'Operands',
    definition: 'The values on the right and left of the math operator'
  },
  {
    vocab:  'Program',
    definition: 'A set of instructions that a computer follows to perform a task.'
  },
  {
    vocab:  'Math Expression',
    definition: 'Performs a calculation and gives a value.'
  },
  {
    vocab:  'Variable Declaration',
    definition: 'A statement that gives a variable a name and specifies the variable data type.'
  },
  {
    vocab:  'Data Type',
    definition: 'The type of data that the variable will hold such as string, integer or real.'
  },
  {
    vocab:  'Initialization',
    definition: 'When you declare a variable and assign a value to it in the declaration statement.'
  },
  {
    vocab:  'Uninitialized Variable',
    definition: 'A variable that has been declared, but has not been initialized or assigned a value.'
  },
  {
    vocab:  'Modulus',
    definition: 'A math operator that divides one number by another and gives the remainder'
  },
  {
    vocab:  'Numeric Literal',
    definition: 'A number that is written into a program’s code.'
  },
  {
    vocab:  'Real',
    definition: 'A numeric literal is written with a decimal point.'
  },
  {
    vocab:  'Named Constant or Constant ',
    definition: 'A name that represents a value that cannot be changed during the program’s execution.'
  },
  {
    vocab:  'Decision Structure',
    definition: 'Allows a program to perform actions only under certain conditions. Also called a selection structure.'
  },
  {
    vocab:  'Single Alternative Decision Structure',
    definition: 'A structure that provides only one alternative path of execution.'
  },
  {
    vocab:  'Condition',
    definition: 'Any expression that can be evaluated as either true or false'
  },
  {
    vocab:  'Boolean Expressions',
    definition: 'Expressions that can be evaluated as either true or false.'
  },
  {
    vocab:  'Relational Operator',
    definition: 'Determines whether a specific relationship exists between two values. Examples are >, < and =='
  },
  {
    vocab:  'Dual Alternative Decision Structure',
    definition: ' is a structure with two possible paths of execution: one path is taken if a condition is true, and the other path is taken if the condition is false.'
  },
  {
    vocab:  'Case Structure or Multiple Alternative Decision Structure',
    definition: 'Allows you to test the value of a variable or an expression (test Expression) and then use that value to determine which statement or set of statements to execute.'
  },
  {
    vocab:  'Logical Operators',
    definition: 'Operators which you can use to create complex Boolean expressions. Examples include AND, Or, and NOT'
  },
  {
    vocab:  'Short-Circuit Evaluation',
    definition: 'The method of check AND / OR compound expressions by checking the left side first.'
  },
  {
    vocab:  'Unary Operator',
    definition: 'An operation with only one operand such as the NOT operator.'
  },
  {
    vocab:  'Flag',
    definition: 'A variable that signals when some condition exists in the program.'
  },
  {
    vocab:  'Default',
    definition: 'Executed in a switch statement when the testExpression does not match any of the case values.'
  },
  {
    vocab:  'Repetition Structure',
    definition: 'Causes a statement or set of statements to execute repeatedly. Commonly known as a loop.'
  },
  {
    vocab:  'Condition-Controlled Loop',
    definition: 'Uses a true/false condition to control the number of times that something repeats. Examples are while, do-while, do-until'
  },
  {
    vocab:  'Count-Controlled loop ',
    definition: 'Repeats something a specific number of times. Typically performs the following three actions: initialization, test, and increment. Example is a For loops'
  },
  {
    vocab:  'Counter variable, or Counter',
    definition: 'Used by a count-controlled-loop to store the number of iterations that it has performed.'
  },
  {
    vocab:  'Increment',
    definition: 'To increase the value of a variable.'
  },
  {
    vocab:  'Decrement',
    definition: 'To decrease the value of a variable.'
  },
  {
    vocab:  'Iteration',
    definition: 'Is each execution of the entire body of a loop.'
  },
  {
    vocab: 'Procedure',
    definition: 'A module or function that performs a specific task such as gethering input, performing calculations, reading or writing files, displaying output, etc...'
  },
  {
    vocab: 'Object-Orientated Programming (OOP)',
    definition: 'A type of programming that is centered around creating objects.'
  },
  {
    vocab: 'Object',
    definition: 'A software entity that contains both data and procedures.'
  },
  {
    vocab: 'Fields',
    definition: 'The data contained in an object. Simply variables, arrays, or other data structures that are stored in an object.'
  },
  {
    vocab: 'Methods',
    definition: 'Another term for modules or functions.'
  },
  {
    vocab: 'Encapsulation',
    definition: 'Refers to the combining of data and code into a single object.'
  },
  {
    vocab: 'Data Hiding',
    definition: 'An objects ability to shield or hide its data from code that is outside the object.'
  },
  {
    vocab: 'Object Reusability',
    definition: 'The ability to use an object and its methods by many programs that need its service.'
  },
  {
    vocab: 'State',
    definition: 'TThe current values of data in an object.'
  },
  {
    vocab: 'Private Methods and Private Variables',
    definition: 'Procedures/functions and data that are a part of an objects internal workings. They are shielded from code outside the object.'
  },
  {
    vocab: 'Public Methods',
    definition: 'Procedures/functions that can be freely accessed by entities outside the object'
  },
  {
    vocab: 'Class',
    definition: 'The code that specifies the fields and methods of an object. A "blueprint" of an object.'
  },
  {
    vocab: 'Instance',
    definition: 'Refers to each seperate object created from a class.'
  },
  {
    vocab: 'Members',
    definition: 'The fields and methods that belong to a class. '
  },
  {
    vocab: 'Access Specifier',
    definition: 'Designates the scope of how a class field or method can be accessed. Such as "Public" or "Private".'
  },
  {
    vocab: 'Class Variable',
    definition: 'A special type of variable that can referance an object in the computers memory and work with object.'
  },
  {
    vocab: 'References',
    definition: 'When a class variable is assigned the address of an object.'
  },
  {
    vocab: 'Dot Notation',
    definition: 'A type of notaion to call a specific field or method of a class variable. (ClassVariable.method)'
  },
  {
    vocab: 'Accessor Method',
    definition: 'A method that gets a value from a class field but does not change it. Sometimes called "getters".'
  },
  {
    vocab: 'Mutator Method',
    definition: 'A method that stores a value in a field or changes the value of a field in some other way. Sometimes called "setters".'
  },
  {
    vocab: 'Constructor',
    definition: 'A method that is automatically called when an object is created. Usually it is used to initialize an objects fields with staring values.'
  },
  {
    vocab: 'Default Constructor',
    definition: 'An initialization method called utomatically on creation of an object if none is provided.'
  },
  {
    vocab: 'Problem Domain',
    definition: 'A set of real-world object, parties and major events related to the problem.'
  },
  {
    vocab: 'Stale Data',
    definition: 'When the value of an item is dependant on other data and therfore has the risk of becoming out of date or changed.'
  },
  {
    vocab: 'Class Responsibilities',
    definition: 'The things that the class is accountable for knowing and the actions that the class is accountable for doing.'
  },
  {
    vocab: 'Inhertitance',
    definition: 'When there is a relationship between objects which one is a more specialized version built to extend the general object.'
  },
  {
    vocab: 'Superclass',
    definition: 'The general object in an inheritance relationship. Also called "base classes".'
  },
  {
    vocab: 'Subclass',
    definition: 'The specialized object in an inheritance relationship. also called "derived classes".'
  },
  {
    vocab: 'Polymorphism',
    definition: 'An objects ability to take different forms. Allows you to create methods with the same name in different classes. '
  }
]

let csit111FinalVocab = [
  {
    vocab: 'Module',
    definition: 'A group of statements that exists within a program for the purpose of perfoming a specific task. Also known as "procedures", "subroutines", "subprograms", "methods" and "functions".'
  },
  {
    vocab: 'Divide and Conquer',
    definition: 'Large task is divided into several smaller tasks that are easily performed.'
  },
  {
    vocab: 'Module Definition, or Function Definition',
    definition: 'The code for a module or function, also known as the body.'
  },
  {
    vocab: 'Module Header, or Function Header',
    definition: 'The starting point of a module or function where it is named and parameters are placed.'
  },
  {
    vocab: 'Call',
    definition: 'To execute a module.'
  },
  {
    vocab: 'Return Point',
    definition: 'The memory address of the location that the program should return to after the module is executed.'
  },
  {
    vocab: 'Top-Down Design',
    definition: 'The process to break down an algorithm into modules. Begins by looking at the topmost level of tasks and breaking them down into lower level subtasks. This is repeated for each subtask until no more subtasks can be identified. Also called "step-wise refinement".'
  },
  {
    vocab: 'Code Reuse',
    definition: 'A benefit of using modules that helps to reduce the duplication of code within a program'
  },
  {
    vocab: 'Hierarchy Chart, or Structure Chart',
    definition: 'A visual representation of the relationships between modules in a program.'
  },
  {
    vocab: 'Local Variable',
    definition: 'A variable declared inside a module.'
  },
  {
    vocab: 'Local',
    definition: 'Data that can only be accessed within the scope it was created.'
  },
  {
    vocab: 'Scope',
    definition: 'Used to describe the part of a program in which a variable may be accessed. Such as local or global.'
  },
  {
    vocab: 'Arguments',
    definition: 'Pieces of data that are sent into a module'
  },
  {
    vocab: 'Parameter, or Parameter Variable',
    definition: 'A special placeholder variable that recieves an argument when a module is called.'
  },
  {
    vocab: 'Parameter List',
    definition: 'The group of parameters declared inside a module header.'
  },
  {
    vocab: 'Passing Arguments by Value',
    definition: 'When only a copy of an arguments value are passed into a parameter variable of a method, but the argument will not actually change outside the module.'
  },
  {
    vocab: 'Passing Arguments by Referance',
    definition: 'When a referance variable is passed to a parameter variable of a method, which will also change the variable being referanced.'
  },
  {
    vocab: 'Referance Variable',
    definition: 'A special variable that acts as a referance to another variable and will modify it when changed.'
  },
  {
    vocab: 'Refactoring',
    definition: 'Improving the design of an existing program without changing the behavior. Also know as "cleaning up" the design.'
  },
  {
    vocab: 'Global Variable',
    definition: 'A variable that is visible to every module in the program. Its scope is the entire program.'
  },
  {
    vocab: 'Global Constant',
    definition: 'A named constant that is available to every module in the program.'
  },
  {
    vocab: 'Function',
    definition: 'A module that returns(sends) a value back to the part of the program that called it.'
  },
  {
    vocab: 'Library Functions',
    definition: 'Built in functions in a languege that perform many common useful tasks like manipulating numbers, strings or arrays.'
  },
  {
    vocab: 'Black Box',
    definition: 'A mechanism that accepts input, performs some operation that cannot be seen, and produces output.'
  },
  {
    vocab: 'IPO chart',
    definition: 'Describes the input, processing, and output of a program.'
  },
  {
    vocab: 'Boolean Function',
    definition: 'A function that returns either true or false.'
  },
  {
    vocab: 'Return Statement',
    definition: 'The part of a function that sends data back to a program to be used.'
  },
  {
    vocab: 'Type Mismatch Error',
    definition: 'When a value is assigned to a variable of a different type.'
  },
  {
    vocab: 'Case-Sensitive',
    definition: 'When uppercase characters are distinguished from lower case characters.'
  },
  {
    vocab: 'Substring',
    definition: 'A string within a string. A portion of a string.'
  },
  {
    vocab: 'Garbage In, Garbage Out (GIGO)',
    definition: 'Describes the idea that if a program reads bad data as input, it will produce bad data as output.'
  },
  {
    vocab: 'Input Validation',
    definition: 'Process of checking whether input data is invalid, discarding it and prompting the user for correct data.'
  },
  {
    vocab: 'Priming Read',
    definition: 'The first input operation done before the loop and will be tested by the validation loop.'
  },
  {
    vocab: 'Pretest Loop',
    definition: 'A loop that test an expression before is starts looping.'
  },
  {
    vocab: 'Error Trap, or Error Handler',
    definition: 'Another name for an input validation loop.'
  },
  {
    vocab: 'Posttest loop',
    definition: 'A loop that test an expression starting after the first iteration.'
  },
  {
    vocab: 'Defensive Programming',
    definition: 'The practice of anticipating errors that can happen while running a program, and designing a program to avoid those errors.'
  },
  {
    vocab: 'Empty Input',
    definition: 'When an input operation attempts to read data but there is no data to read.'
  },
  {
    vocab: 'Arrays',
    definition: 'A named storage location in memory specifically designed for storing and processing lists of data.'
  },
  {
    vocab: 'Size Declarator',
    definition: 'Specifies the number of values an array can hold.'
  },
  {
    vocab: 'Elements',
    definition: 'The individual items in an array.'
  },
  {
    vocab: 'Subscript, or Indexes',
    definition: 'A number which corresponds to the numerical place an element is in an array.'
  },
  {
    vocab: 'Initialization List',
    definition: 'A series of values seperated by commas to be used as data in an array.'
  },
  {
    vocab: 'Array Bounds Checking',
    definition: 'The process a program uses to verify if an element is located at an index within the length of an array.'
  },
  {
    vocab: 'Off-By-One Error',
    definition: 'When a loop iterates one too many or too few times.'
  },
  {
    vocab: 'Search Algorithms',
    definition: 'An algorithm developed to locate a specific item in a larger collection of data.'
  },
  {
    vocab: 'Sequential Search Algorithm',
    definition: 'Using a loop is step through each item of an array, starting at the first element, and comparing each following element with the value being searched for.'
  },
  {
    vocab: 'Accumulator Variable, or Running Total',
    definition: 'A variable used in a loop to add up the total specified data during each iteration of the loop.'
  },
  {
    vocab: 'Parallel Arrays',
    definition: 'Two or more arrayys that hold related data, and the related element in each array are accessed by the same index.'
  },
  {
    vocab: 'One Dimensional Array',
    definition: 'An array that only holds one set of data.'
  },
  {
    vocab: 'Two Dimensional Array, or 2D Array',
    definition: 'An array that can hold multiple sets of data. An array of arrays or objects.'
  },
  {
    vocab: 'Output File',
    definition: 'Describes a file that data is written to. The program stores output in the file.'
  },
  {
    vocab: 'Input File',
    definition: 'Describes a file that data is read from. The program gets input from the file.'
  },
  {
    vocab: 'Write and Read Data Process',
    definition: 'Three steps taken by input/output files. Open the file, process the file and close the file.'
  },
  {
    vocab: 'Text File',
    definition: 'Contains data that has been encoded as text, using a scheme such as ASCII or Unicode.'
  },
  {
    vocab: 'Binary File',
    definition: 'Contains data that has not been converted to text.'
  },
  {
    vocab: 'Sequential Access File',
    definition: 'Getting data from the beginning of the file to the end of the file.'
  },
  {
    vocab: 'Direct Access File, or Random Access File',
    definition: 'Getting data by jumping directly to any piece of data in the file without reading the data that comes before it.'
  },
  {
    vocab: 'Filename Extensions',
    definition: 'Short sequences of character that appear at the end of a filename, preceded by a period. Describes what type of file it is.'
  },
  {
    vocab: 'Buffer',
    definition: 'A small “holding section” in memory.'
  },
  {
    vocab: 'Delimiter',
    definition: 'A predefined character or set of characters that marks the end of each piece of data. Its purpose is to separate the different items that are stored in a file.'
  },
  {
    vocab: 'End-Of-File Marker (EOF)',
    definition: 'A character used to indicate where the files contents end.'
  },
  {
    vocab: 'Read Position',
    definition: 'A special value that marks the location of the next item that will be read in a file.'
  },
  {
    vocab: 'Record',
    definition: 'A complete set of data about an item when data is written from a file.'
  },
  {
    vocab: 'Field',
    definition: 'A single piece of data within a record'
  },
  {
    vocab: 'File Specification Document',
    definition: 'Describes the fields that are stored in a particular file, including their data type.'
  },
  {
    vocab: 'Control Break Processing',
    definition: 'Interrupts a programs regular processing to perform a different action when a control variables value changes or the the variable acquires a specific value. After complete, the programs regular processing resumes.'
  },
  {
    vocab: 'Control Variable',
    definition: 'A special variable used in control break logic to start and end the processing.'
  },
  {
    vocab:  'Sequence Structure',
    definition: 'A set of statements that execute in the order that they appear.'
  },
  {
    vocab:  'Control Structure or Structure',
    definition: 'A logical design that controls the order in which a set of statements executes.'
  },
  {
    vocab:  'Program Development Cycle',
    definition: '5 step process of creating a program and is repeated until no errors can be found. The steps are Design the program, Write the code, Correct syntax errors, Test the executable code, Debug the code.'
  },
  {
    vocab:  'Designing a Program',
    definition: 'The first step of the Program Development Cycle and consists of two steps: Understand the task that the program is to perform and determine the steps that must be taken to perform the task.'
  },
  {
    vocab:  'Decision Structure',
    definition: 'Allows a program to perform actions only under certain conditions. Also called a selection structure.'
  },
  {
    vocab:  'Single Alternative Decision Structure',
    definition: 'A structure that provides only one alternative path of execution.'
  },
  {
    vocab:  'Dual Alternative Decision Structure',
    definition: ' is a structure with two possible paths of execution: one path is taken if a condition is true, and the other path is taken if the condition is false.'
  },
  {
    vocab:  'Case Structure or Multiple Alternative Decision Structure',
    definition: 'Allows you to test the value of a variable or an expression (test Expression) and then use that value to determine which statement or set of statements to execute.'
  },
  {
    vocab:  'Repetition Structure',
    definition: 'Causes a statement or set of statements to execute repeatedly. Commonly known as a loop.'
  },
  {
    vocab:  'Condition-Controlled Loop',
    definition: 'Uses a true/false condition to control the number of times that something repeats. Examples are while, do-while, do-until'
  },
  {
    vocab:  'Count-Controlled loop ',
    definition: 'Repeats something a specific number of times. Typically performs the following three actions: initialization, test, and increment. Example is a For loops'
  },
  {
    vocab: 'Program',
    definition: 'A set of instructions that a computer follows to perform a task.'
  },
  {
    vocab:  'American Standard Code for Information Interchange (ASCII)',
    definition: 'A set of 128 numeric codes that represent the English letters, various punctuation marks, and other characters. It is a standard data-encoding format for electronic communication between computers.'
  },
  {
    vocab:  'Byte',
    definition: 'A unit of digital information consisting of a group of binary digits(usually eight) that operate as a tiny storage location in which a computer’s memory is divided.'
  },
  {
    vocab:  'Bit',
    definition: 'Stands for binary digit and is a tiny electrical component that can hold either a positive or a negative charge. (1 or 0)'
  },
  {
    vocab:  'Machine Language',
    definition: 'A programming language consisting of binary or hexadecimal instructions which a computer can respond to directly.'
  },
  {
    vocab:  'Assembly Language',
    definition: 'An early alternative to machine language. Instead of using binary numbers for instructions, it uses short words that are known as mnemonics.'
  },
  {
    vocab:  'Compiler',
    definition: 'A program that translates a high-level language program into a separate machine language program.'
  },
  {
    vocab:  'Interpreter',
    definition: 'A program that both translates and executes the instructions in a high-level language program. This reads each individual instruction in the program, converts it to a machine language instruction and then immediately executes it.'
  },
  {
    vocab:  'Assembler',
    definition: 'A special program used to translate an assembly language program to a machine language program.'
  },
  {
    vocab:  'Low-level Language',
    definition: "A language that provides little or no abstraction from a computer's instruction set."
  },
  {
    vocab:  'High-level Language ',
    definition: 'A programming language with strong abstraction from the details of the computer. It allows you to create powerful and complex programs without knowing how the CPU works'
  },
  {
    vocab:  'Syntax Error',
    definition: 'A mistake such as a misspelled key word, a missing punctuation character, or the incorrect use of an operator.'
  },
  {
    vocab:  'Logic Error',
    definition: 'A mistake that does not prevent the program from running, but causes it to produce incorrect results. (Mathematical mistakes are common causes)'
  },
  {
    vocab:  'Boolean Expressions',
    definition: 'Expressions that can be evaluated as either true or false.'
  },
  {
    vocab:  'Relational Operator',
    definition: 'Determines whether a specific relationship exists between two values. Examples are >, < and =='
  },
  {
    vocab:  'Logical Operators',
    definition: 'Operators which you can use to create complex Boolean expressions. Examples include AND, Or, and NOT'
  },
  {
    vocab:  'Oval',
    definition: 'Flowchart symbol for start and end of a program. Called Terminal symbols.'
  },
  {
    vocab:  'Parallelogram',
    definition: 'Flowchart for displaying information or reading input. Called Input/Outou symbols.'
  },
  {
    vocab:  'Rectangle',
    definition: 'Flowchart symbol for doing calculations and tasks. Called Processing symbols.'
  },
  {
    vocab:  'Diamond',
    definition: 'Flowchart symbol for decision structure such as if/else, and some repetition structures such as while loop and conditioned control loops.'
  },
  {
    vocab:  'Hexagon',
    definition: 'Flowchart symbol for some repetition structures such as count-controlled loops and for loops.'
  }
]

let csit240Ch1Vocab = [
  {
    vocab: 'Assembly Language',
    definition: 'A low-level language that replaced binary digits with mnemonics.'
  },
  {
    vocab: 'Bytecode',
    definition: 'A low-level representation of a Java program that is not tied to a specific type of CPU.'
  },
  {
    vocab: 'Case-sensitive',
    definition: 'Making a distinction between uppercase and lowercase letters. Java is case-sensitive'
  },
  {
    vocab: 'Class-definition',
    definition: 'An element in Java program. All java programs are defined using class definitions.'
  },
  {
    vocab: 'Class library',
    definition: 'A set of software classes that can be used when developing programs. (see Java API)'
  },
  {
    vocab: 'Comment',
    definition: 'Text included in a program to make the program easier to understand for humans.'
  },
  {
    vocab: 'Compiler',
    definition: 'A program that translates code in one language into equivalent code in another language.'
  },
  {
    vocab: 'Deprecated',
    definition: 'An element that is considered old-fashioned or outdated and should not be used'
  },
  {
    vocab: 'Editor',
    definition: 'A software tool that allows one to enter text such as a program.'
  },
  {
    vocab: 'Encapsulation',
    definition: 'The characteristic of an object that means it protects and manages its own information.'
  },
  {
    vocab: 'Graphical User Interface (GUI)',
    definition: 'An interface to a program that consists of graphical elements such as windows and buttons.'
  },
  {
    vocab: 'High-Level Language',
    definition: 'A programming language that is expressed in phrases that are easier than machine language for a programmer to understand.'
  },
  {
    vocab: 'Indentifier',
    definition: 'A word in a programming language'
  },
  {
    vocab: 'Inheritance',
    definition: 'Defining a class based on another that already exists.'
  },
  {
    vocab: 'Integrated Development Enviroment',
    definition: 'A set of software tools used to create, modify, and test a program.'
  },
  {
    vocab: 'Java 2 Platform',
    definition: 'The most recent Java technology'
  },
  {
    vocab: 'Java API',
    definition: 'A library of software that we can use when devoloping programs.'
  },
  {
    vocab: 'Logical Error',
    definition: 'An error in program that causes it to produce incorrect results.'
  },
  {
    vocab: 'Machine Language',
    definition: 'The language executed by a particular CPU.'
  },
  {
    vocab: 'Method',
    definition: 'A group of programming statements that is given a name.'
  },
  {
    vocab: 'Method Invocation',
    definition: 'Calling a method to execute its code.'
  },
  {
    vocab: 'Natural Language',
    definition: 'A language that humans use to communicate, such as English.'
  },
  {
    vocab: 'Object',
    definition: 'A fundamental entity in a Java program that represents something and provides services related to it.'
  },
  {
    vocab: 'Object-Oriented Programming Language',
    definition: 'A language such as Java that uses objects as the fundamental elements one at a time.'
  },
  {
    vocab: 'Program',
    definition: 'A series of instructions that a computer executes one at a time.'
  },
  {
    vocab: 'Programming Statement',
    definition: 'An individual instruction in a programming language.'
  },
  {
    vocab: 'Reserved Word',
    definition: 'An indentifier that has a special meaning in a program language and can be used only in predifined ways.'
  },
  {
    vocab: 'Runtime Error',
    definition: 'An error that occurs during program execution and causes the program to terminate abnormally.'
  },
  {
    vocab: 'Semantics',
    definition: 'Rules that define what a statment in a language means.'
  },
  {
    vocab: 'Java 2 Platform',
    definition: 'The most recent Java technology'
  },
  {
    vocab: 'Syntax',
    definition: 'The rules of a language that dictate how vocabulary elements of the language can be used.'
  },
  {
    vocab: 'Syntax Error',
    definition: 'A programming error that violates the syntax rules of the language'
  },
  {
    vocab: 'White Space',
    definition: 'The space, tab, and newline characters used to seperate words in a program.'
  },
]

let csit240Ch2Vocab = [
  {
    vocab: 'ASCII character set',
    definition: 'An early character set for representing English characters and symbols.'
  },
  {
    vocab: 'Assignment Operator',
    definition: 'An operator in Java that combines a basic operation such as addition with assignment.'
  },
  {
    vocab: 'Assignment Statement',
    definition: 'A programming statement that assigns a value to a variable.'
  },
  {
    vocab: 'Casting',
    definition: 'A data conversion in which the type to which a value is converted is explicitly specified in parentheses.'
  },
  {
    vocab: 'Character Set',
    definition: 'A list of characters in a particular order.'
  },
  {
    vocab: 'Delimiter',
    definition: 'Characters used to sperate one input token from another.'
  },
  {
    vocab: 'Escape Sequence',
    definition: 'A series of characters that begin with a backlash (\\), used to represent a character.'
  },
  {
    vocab: 'Expression',
    definition: 'A combination of one or more operators and operands.'
  },
  {
    vocab: 'Interger Division',
    definition: 'Division in which the fractional portion of the result is discarded, used when both operands are intergers.'
  },
  {
    vocab: 'Literal',
    definition: 'An explicit data value used in a program.'
  },
  {
    vocab: 'Narrowing Conversion',
    definition: 'A conversion between one data type and another in which operators are evaluated.'
  },
  {
    vocab: 'Parameters',
    definition: 'A piece of data that is sent to a method when it is invoked.'
  },
  {
    vocab: 'Primitive Data Type',
    definition: 'A basic type of data, such as a number, character or boolean.'
  },
  {
    vocab: 'Standard Input Stream',
    definition: 'A source of input, usually the keyboard.'
  },
  {
    vocab: 'String Concatenation',
    definition: 'Appending one character string to the end of another.'
  },
  {
    vocab: 'String Literal',
    definition: 'Text enclosed by double quotation marks that represent a character string.'
  },
  {
    vocab: 'Strongly Typed',
    definition: 'A programming language characteristic that prevents a variable from being assigned a value inconsistent with its type.'
  },
  {
    vocab: 'Token',
    definition: 'An element in an input stream.'
  },
  {
    vocab: 'Unicode character set',
    definition: 'A character set used to represent characters and symbols from most of the worlds written languages.'
  },
  {
    vocab: 'Variable',
    definition: 'A name for a location in memory used to hold a data value.'
  },
  {
    vocab: 'Widening Conversion',
    definition: 'A conversion between one data type and another in which information is not lost.'
  }
]
let csit240Ch3Vocab = [
  {
    vocab: 'Application Programming Inteface (API)',
    definition: 'A set of related classes that supports a particular aspect of programming.'
  },
  {
    vocab: 'Autoboxing',
    definition: 'The automatic conversion of a primitive type to an object of its corresponding wrapper class.'
  },
  {
    vocab: 'Class Library',
    definition: 'A set of classes that supports the development of programs.'
  },
  {
    vocab: 'Constructor',
    definition: 'A special method that has the same name as the class and is called when an object is created to set up the object initially.'
  },
  {
    vocab: 'Enumerated Type',
    definition: 'A Java data type in which all values of the type are explicitly listed.'
  },
  {
    vocab: 'Garbage Collection',
    definition: 'The process of reclaiming memory space that can no longer benused by a program.'
  },
  {
    vocab: 'Immutable',
    definition: 'An object whose data (state) cannot be modified once it is created.'
  },
  {
    vocab: 'Import declaration',
    definition: 'A programming statement used to specify which external classes (from which packages) are used in a program.'
  },
  {
    vocab: 'Instance',
    definition: 'An object. An object is an instance of a class.'
  },
  {
    vocab: 'New Operator',
    definition: 'Returns a reference to a newly created object.'
  },
  {
    vocab: 'Package',
    definition: 'A language-level organization mechanism for classes. Each class in the Java API belongs to a particular package.'
  },
  {
    vocab: 'Pseudorandom Number Generator',
    definition: 'A program element that performs calculations to produce a series of numbers in seemingly random order.'
  },
  {
    vocab: 'Wrapper Class',
    definition: 'A class that corresponds to a particulat primitive data type.'
  }
]

let csit241Ch1Vocab = [
  {
    vocab: 'Agile Methods',
    definition: 'Systems development method that attempt to develop a system incrementally by building a series of prototypes and constantly adjusting them to user requirements. Also called adaptive methods.'
  },
  {
    vocab: 'App',
    definition: 'A software application that runs on a mobile device, such as a smartphone or tablet.'
  },
  {
    vocab: 'Application Lifecycle Management (ALM)',
    definition: "Activities that cover the entire SDLC, including requirements, design, development, testing, and deployment and management of software applications."
  },
  {
    vocab: 'Application Software',
    definition: 'Software programs, such as email, word processors, spreadsheets, and graphics packages, used by employees in typical office scenarios.'
  },
  {
    vocab: 'Artificial Intelligence',
    definition: 'The attempt to recreate natural intelligence through software in machines.'
  },
  {
    vocab: 'B2B (business-to-business)',
    definition: 'A commercial exchange (e.g., products or services) between businesses, typically enabled by the Internet or electronic means.'
  },
  {
    vocab: 'B2C (business-to-consumer)',
    definition: 'A commercial exchange (e.g., products or services) between businesses and consumers conducted over the Internet.'
  },
  {
    vocab: 'bring your own device (BYOD)',
    definition: 'An equipment management model where employees are in charge of their devices'
  },  {
    vocab: 'Business Model',
    definition: 'A graphical representation of business functions that consist of business processes, such as sales, accounting, and purchasing.'
  },  {
    vocab: 'Business Process',
    definition: 'A description of specific events, tasks, and desired results.'
  },  {
    vocab: 'Business Process Model (BPM)',
    definition: 'A graphical representation of one or more business processes.'
  },  {
    vocab: 'Business Profile',
    definition: 'A definition of a companys overall functions, processes, organization, products, services, customers, suppliers, competitors, constraints, and future direction.'
  },  {
    vocab: 'Business Rules',
    definition: 'How a system handles data and produces useful information. Also called business logic, reflect the operational requirements of the business.'
  },  {
    vocab: 'Business Support Systems',
    definition: 'Provide job-related information support to users at all levels of a company.'
  },  {
    vocab: 'CASE tools',
    definition: 'Powerful software used in computer-aided systems engineering (CASE) to help systems analysts develop and maintain information systems.'
  },  {
    vocab: 'Certification',
    definition: 'A credential an individual earns by demonstrating a certain level of knowledge and skill on a standardized test.'
  },  {
    vocab: 'Class',
    definition: 'A term used in object-oriented modeling to indicate a collection of similar objects.'
  },  {
    vocab: 'Computer-aided Software Engineering',
    definition: 'A technique that uses powerful programs called CASE tools to provide an overall framework for systems development.'
  },  {
    vocab: 'Corporate Culture',
    definition: 'A set of beliefs, rules, traditions, values, and attitudes that define a company and influence its way of doing business.'
  },  {
    vocab: 'Critical Thinking Skills',
    definition: 'The ability to compare, classify, evaluate, recognize patterns, analyze cause and effect, and apply logic.'
  },  {
    vocab: 'Data',
    definition: 'The raw material or basic facts used by information systems.'
  },  {
    vocab: 'Data Center',
    definition: 'A large concentration of networked computers working together.'
  },  {
    vocab: 'Data Flow Diagram (DFD)',
    definition: 'Graphical representation of the system, showing it stores, processes, and transforms data into useful information.'
  },  {
    vocab: 'Data Science',
    definition: 'Interdisciplinary field that blends computer science, math and statistics, and business methods to analyze large datasets. Involves artificial intelligence, machine learning and predictive analytics, and visualization techniques.'
  },  {
    vocab: 'Deliverable',
    definition: 'A polished, final product, suitable for its intended use.'
  },  {
    vocab: 'E-Commerce (Electronic Commerce)',
    definition: 'Transactions that occur on the Internet.'
  },  {
    vocab: 'Electronic Data Interchange (EDI)',
    definition: 'The exchange of business documents between computers using a standard electronic format.'
  },  {
    vocab: 'Empowerment',
    definition: 'A business practice that places more responsibility and accountability throughout all levels of an organization.'
  },  {
    vocab: 'Enterprise Applications',
    definition: 'Company-wide applications, such as order processing systems, payroll systems, and company communications networks.'
  },  {
    vocab: 'Enterprise Computing',
    definition: 'Information systems that support company-wide data management requirements, such as airline reservations or credit card billing systems.'
  },  {
    vocab: 'Enterprise Resource Planning (ERP)',
    definition: 'A process that establishes an enterprise-wide strategy for IT resources including standards for data, processing, network, and user interface design.'
  },  {
    vocab: 'Feasibility Study',
    definition: 'An initial investigation to clearly identify the nature and scope of the business opportunity or problem. Also called preliminary investigation.'
  },  {
    vocab: 'Groupware',
    definition: 'Programs that run on a network that enable users to share data, collaborate on projects, and work in teams. Also called workgroup software.'
  },  {
    vocab: 'Hardware',
    definition: 'The physical layer of the information system, to include computers, networks, communications equipment, and other technology-based infrastructure.'
  },  
  {
    vocab: 'Help Desk',
    definition: 'A centralized resource staffed by IT professionals that provides users with the support they need to do their jobs. '
  },
  {
    vocab: 'Horizontal System',
    definition: 'A basic system, such as an inventory or payroll package, that is commonly used by a variety of companies.'
  },
  {
    vocab: 'Inference Rules',
    definition: 'Instructions that direct a knowledge management system to identify data patterns and relationships.'
  },
  {
    vocab: 'Information',
    definition: 'Data that has been changed into a useful form of output.'
  },
  {
    vocab: 'knowledge base',
    definition: 'A centralized repository for storing, organizing, and managing information, including data, documentation, and user guides, to support the systems development, maintenance, and use.'
  },
  {
    vocab: "legacy systems",
    definition: "An older system that is typically less technologically advanced than currently available systems."
  },
  {
    vocab: "machine learning",
    definition: "An application of computer science that uses automated approaches to pattern recognition and predictive analytics based on large datasets."
  },
  {
    vocab: "management information systems (MIS)",
    definition: "A computer-based information system used in business planning, control, decision making, and problem solving."
  },
  {
    vocab: "mission-critical system",
    definition: "An information system that is vital to a companys operations."
  },
  {
    vocab: "modeling",
    definition: "A process that produces a graphical representation of a concept or process that systems developers can analyze, test, and modify."
  },
  {
    vocab: "Moores law",
    definition: "A prediction that computing power would double every 18 to 24 months due to increased miniaturization of electronic components."
  },
  {
    vocab: "NoSQL databases",
    definition: "Database systems that use a flat, nontabular (nonrelational) structure to store and process large-scale datasets."
  },
  {
    vocab: "object-oriented (O-O) analysis",
    definition: "The act of understanding an information system by identifying things called objects. A popular approach that sees a system from the viewpoint of the objects themselves as they function and interact with the system."
  },
  {
    vocab: "personal digital assistant",
    definition: "A program that responds to user requests through a natural interface, such as regular speech."
  },
  {
    vocab: "preliminary investigation",
    definition: "An initial analysis to clearly identify the nature and scope of the business opportunity or problem. Also called a feasibility study."
  },
  {
    vocab: "product-oriented",
    definition: "Companies that manufacture computers, routers, or microchips."
  },
  {
    vocab: "properties",
    definition: "In object-oriented (O-O) analysis, characteristics that objects inherit from their class or possess on their own."
  },
  {
    vocab: "prototype",
    definition: "An early, rapidly constructed working version of the proposed information system."
  },
  {
    vocab: "radio frequency identification (RFID)",
    definition: "Technology that uses high-frequency radio waves to track physical objects."
  },
  {
    vocab: "requirements engineering",
    definition: "Used in the systems planning phase of the SDLC. It involves using various fact-finding techniques, such as interviews, surveys, observation, and sampling, to describe the current system and identify the requirements for the new system."
  },
  {
    vocab: "scalable",
    definition: "The ability of a system to expand to meet new business requirements and volumes."
  },
  {
    vocab: "service-oriented",
    definition: "A company that primarily offers information or services or sells goods produced by others"
  },
  {
    vocab: "software",
    definition: "A program run by computers for a specific function or task."
  },
  {
    vocab: "spiral model",
    definition: "A development model with a series of iterations, or revisions, based on user feedback."
  },
  {
    vocab: "stakeholders",
    definition: "Anyone who is affected by the companys performance, such as customers, employees, suppliers, stockholders, and members of the community."
  },
  {
    vocab: "strategic plans",
    definition: "The long-range plans that define the corporate mission and goals. Typically defined by top management, with input from all levels."
  },
  {
    vocab: "structured analysis",
    definition: "A traditional systems development technique that uses phases to plan, analyze, design, implement, and support an information system. Processes and data are treated as separate components."
  },
  {
    vocab: "supply chain management",
    definition: "The coordination, integration, and management of materials, information, and finances as they move from suppliers to customers, both within and between companies."
  },
  {
    vocab: "system",
    definition: "A set of related components that produces specific results."
  },
  {
    vocab: "system design specification",
    definition: "A document that presents the complete design for the new information system, along with detailed costs, staffing, and scheduling. Also called the technical design specification or the detailed design specification."
  },
  {
    vocab: "system requirements document",
    definition: "A document that contains the requirements for the new system, describes the alternatives that were considered, and makes a specific recommendation to management."
  },
  {
    vocab: "system software",
    definition: "Programs that control the computer, including the operating system, device drivers that communicate with hardware, and low-level utilities."
  },
  {
    vocab: "systems analysis and design",
    definition: "The process of developing information systems that effectively use hardware, software, data, processes, and people to support the companys business objectives."
  },
  {
    vocab: "systems analysis phase",
    definition: "The second SDLC phase. The purpose of this phase is to build a logical model of the new system."
  },
  {
    vocab: "systems design phase",
    definition: "To create a blueprint for the new system that will satisfy all documented requirements, whether the system is being developed in-house or purchased as a package."
  },
  {
    vocab: "Systems Development Life Cycle (SDLC)",
    definition: "Activities and functions that systems developers typically perform, regardless of how those activities and functions fit into a particular methodology. model includes five phases: (1) systems planning, (2) systems analysis, (3) systems design, (4) systems implementation, and (5) systems support and security. "
  },
  {
    vocab: "systems implementation phase",
    definition: "The fourth phase of the SDLC. During this phase, the new system is constructed—programs are written, tested, and documented, and the system is installed."
  },
  {
    vocab: "systems planning phase",
    definition: "The first phase of the SDLC. During this phase, the systems project gets started. The project proposal is evaluated to determine its feasibility. The project management plan is formulated."
  },
  {
    vocab: "systems request",
    definition: "A formal appeal to the IT department that describes problems or desired changes in an information system or business process."
  },
  {
    vocab: "technical support",
    definition: "Necessary to support the wide variety of IT systems and users. It includes six main functions: application development, systems support, user support, database administration, network administration, and web support."
  },
  {
    vocab: "transaction processing (TP) systems",
    definition: "Operational systems used to process day-to-day recurring business transactions, such as customer billing."
  },
  {
    vocab: "user productivity systems",
    definition: "Applications that provide employees of all levels a wide array of tools to improve job performance. Examples include email, word processing, graphics, and company intranets."
  },
  {
    vocab: "users",
    definition: "Stakeholders inside and outside the company who will interact with the system."
  },
  {
    vocab: "vertical system",
    definition: "A system designed to meet the unique requirements of a specific business or industry, such as a web-based retailer or auto-supply store."
  },
  {
    vocab: "waterfall model",
    definition: "The traditional model of software development. A graph that depicts the result of each SDLC phase flowing down into the next phase."
  }
]

let csit241Ch2Vocab = [
  {
    vocab: 'Biometric Devices',
    definition: 'A mechanism used to uniquely identify a person by a retina scan or by mapping a facial pattern.'
  },
  {
    vocab: 'Blockchain',
    definition: 'A distributed ledger system. The technology underlying Bitcoin.'
  },
  {
    vocab: 'Business Case',
    definition: 'Refers to the reasons, or justification, for a proposal.'
  },
  {
    vocab: 'Case for Action',
    definition: 'A part of the preliminary investigation report to management that summarizes project requests and makes specific recommendations.'
  },
  {
    vocab: 'Computer Resources Committee',
    definition: 'A group of key managers and users responsible for evaluating systems requests. The term "systems reciew committe" is also used.'
  },
  {
    vocab: 'Constraint',
    definition: 'A requirement or a condition that the system must satisfy or an outcome that the system must achieve.'
  },
  {
    vocab: 'Critical Success Factor',
    definition: 'Vital objectives that must be achieved for the enterprise to fulfill its mission.'
  },
  {
    vocab: 'Customer Relationship Management (CRM)',
    definition: 'Many companies implement systems to integrate all customer- related events and transactions including marketing, sales, and customer service activities.'
  },
  {
    vocab: 'Discretionary Projects',
    definition: 'Where management has a choice in implementing a project.'
  },
  {
    vocab: 'Economic Feasibility',
    definition: 'Achieved if the projected benefits of a proposed system outweigh the estimated costs involved in acquiring, installing and operating it.'
  },
  {
    vocab: 'Electronic Product Code (EPC)',
    definition: 'Technology that uses RFID tags to monitor their movement from factory to sales floor.'
  },
  {
    vocab: 'Electronic Proof of Delivery (EPOD)',
    definition: 'A supplier uses RFID tags on each shipping unit to creating a digital shipping list to verify receipt of goods.'
  },
  {
    vocab: 'Encryption',
    definition: 'A process where data is coded(converted into unreadable characters) so that only those with authorization can access it.'
  },
  {
    vocab: 'Fishbone Diagram',
    definition: 'An analysis tool that represents the possible causes of a problem as a graphical outline with arrows.'
  },
  {
    vocab: 'Intangible Benefits',
    definition: 'Positive outcomes that are difficult to measure in dollars.'
  },
  {
    vocab: 'Intangible Costs',
    definition: 'Items that are difficult to measure in dollar terms.'
  },
  {
    vocab: 'Internet-of-Things (IOT)',
    definition: 'Devices connected over a computer network.'
  },
  {
    vocab: 'Just-in-time (JIT)',
    definition: 'The exchange or deliver of information when and where it is needed.'
  },
  {
    vocab: 'Mission Statement',
    definition: 'Describes the company for its stakeholders and briefly states the companies overall purpose, products, services and values.'
  },
  {
    vocab: 'Nondiscretionary Projects',
    definition: 'Where management has no choice in implementing a project.'
  },
  {
    vocab: 'Operational Feasibility',
    definition: 'A system that will be used effectively after it has been developed.'
  },
  {
    vocab: 'Pareto Chart',
    definition: 'A vertical bar graph. The bars, which represents causes of a problem, are arranged in decending order, so the team can focus on the most important causes.'
  },
  {
    vocab: 'Project Creep',
    definition: 'The process by which projects with very general scope definitions expand gradually, without specific authorization.'
  },
  {
    vocab: 'Project Scope',
    definition: 'A specific determination of a projects boundaries or extent.'
  },
  {
    vocab: 'Scatter Diagram',
    definition: 'A tool used by systems analysts to graphically show the correlation between two variables. Also called an XY chart.'
  },
  {
    vocab: 'Schedule Feasibility',
    definition: 'If a project can be implemented in an acceptable time frame.'
  },
  {
    vocab: 'Strategic Planning',
    definition: 'The process of identifying long-term goals, strategies and resources.'
  },
  {
    vocab: 'SWOT Analysis',
    definition: 'An examination of four main factors: Strengths, Weaknesses, Opportunities, and Threats.'
  },
  {
    vocab: 'Systems Review Committee',
    definition: 'A group of key managers and users responsible for evaluating systems requests.'
  },
  {
    vocab: 'Tangible Benefits',
    definition: 'Positive outcomes that can be measured in dollars. They can result from a decrease in expenses, an increase in revenues, or both.'
  },
  {
    vocab: 'Tangible Costs',
    definition: 'Expenses that have a specific dollar value.'
  },
  {
    vocab: 'Technical Feasibility',
    definition: 'When an organization has the resources to develop or purchase, install and operate the system.'
  },
  {
    vocab: 'Total cost of ownership (TCO)',
    definition: 'A number used in assessing costs, which includes ongoing support and maintenance costs, as well as acquisition costs.'
  },
  {
    vocab: 'XY Charts',
    definition: 'A tool used by system analysts to graphically show the correlation between two variables. Also called a scatter diagram.'
  }
]

csit240Chapter1.checked = true
let currentVocabArray = csit240Ch1Vocab


function getArray() {
  if (csit111Final.checked) {
    currentVocabArray = csit111FinalVocab
  }
  else if (csit111Midterm.checked) {
    currentVocabArray = csit111MidtermVocab
  }
  else if (csit240Chapter1.checked) {
    currentVocabArray = csit240Ch1Vocab
  }
  else if (csit240Chapter2.checked) {
    currentVocabArray = csit240Ch2Vocab
  }
  else if (csit240Chapter3.checked) {
    currentVocabArray = csit240Ch3Vocab
  }
  else if (csit241Chapter1.checked) {
    currentVocabArray = csit241Ch1Vocab
  }
  else if (csit241Chapter2.checked) {
    currentVocabArray = csit241Ch2Vocab
  }
}



function createQuestion() {
  document.querySelectorAll('.message').forEach(message => {
    message.remove();
  })
  console.log(currentVocabArray)
  getArray()
  document.querySelector("#choiceA").textContent = document.querySelector("#choiceB").textContent = document.querySelector("#choiceC").textContent = "";
  i = Math.floor(Math.random() * currentVocabArray.length);
  console.log(i)
  if (guessWord.checked) {
    newQuestion = currentVocabArray[i].definition
    newAnswer = currentVocabArray[i].vocab
  }
  else {
    newQuestion = currentVocabArray[i].vocab
    newAnswer = currentVocabArray[i].definition
  }
  position = Math.floor(Math.random() * 4) + 1
  document.querySelector("#question").textContent = newQuestion
  console.log(document.querySelector("#question").textContent)
  addChoice(position, newAnswer)
  for (let x = 1; x <= 4; x++) {
    if (x != position) {
      if (guessWord.checked) {
        let randomAnswer =  Math.floor(Math.random() * currentVocabArray.length)
        while (currentVocabArray[randomAnswer].vocab == newAnswer || currentVocabArray[randomAnswer].vocab == document.querySelector("#choiceA").textContent || currentVocabArray[randomAnswer].vocab == document.querySelector("#choiceB").textContent || currentVocabArray[randomAnswer].vocab == document.querySelector("#choiceC").textContent || currentVocabArray[randomAnswer].vocab == document.querySelector("#choiceD").textContent) {
          randomAnswer =  Math.floor(Math.random() * currentVocabArray.length)
        }
        console.log(currentVocabArray[randomAnswer].vocab)
        addChoice(x, currentVocabArray[randomAnswer].vocab)
      }
      else {
        let randomAnswer =  Math.floor(Math.random() * currentVocabArray.length)
        while (currentVocabArray[randomAnswer].definition == newAnswer || currentVocabArray[randomAnswer].definition == document.querySelector("#choiceA").textContent || currentVocabArray[randomAnswer].definition == document.querySelector("#choiceB").textContent || currentVocabArray[randomAnswer].definition == document.querySelector("#choiceC").textContent || currentVocabArray[randomAnswer].definition == document.querySelector("#choiceD").textContent) {
          randomAnswer =  Math.floor(Math.random() * currentVocabArray.length)
        }
        console.log(currentVocabArray[randomAnswer].definition)
        addChoice(x, currentVocabArray[randomAnswer].definition)
      }
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
