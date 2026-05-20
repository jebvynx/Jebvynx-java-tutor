module.exports = [
  {
    id: "java_intro",
    topic: "1. Introduction to Java",
    subtopics: [
      {
        id: "intro_what_is_java",
        title: "What Java is",
        content:
          "📚 *What Java is*\n\nJava is a high-level, object-oriented programming language created by Sun Microsystems in 1995. It is designed with the philosophy 'Write Once, Run Anywhere' (WORA), meaning Java programs can run on any device that has a Java Virtual Machine (JVM).\n\nJava is widely used for:\n• Web applications\n• Mobile apps (Android)\n• Desktop software\n• Enterprise systems\n• Game development\n\nJava is known for being secure, powerful, and beginner-friendly.",

        quiz: {
          question: "What is the core philosophy of Java?",
          options: [
            "A) Write Once, Debug Everywhere",
            "B) Write Once, Run Anywhere",
            "C) Code Fast, Run Slow"
          ],
          correctAnswer: "B) Write Once, Run Anywhere",
          explanation:
            "💡 *Explanation:* Java programs are compiled into bytecode that can run on any device with a JVM."
        }
      },

      {
        id: "intro_jvm_jdk_jre",
        title: "JVM, JDK, JRE basics",
        content:
          "📚 *JVM, JDK, JRE Basics*\n\nJava uses three important components:\n\n• *JDK (Java Development Kit):* Contains tools needed to develop Java applications.\n\n• *JRE (Java Runtime Environment):* Provides libraries and environment needed to run Java programs.\n\n• *JVM (Java Virtual Machine):* Executes Java bytecode and allows Java programs to run on different operating systems.\n\nThink of it like this:\nJDK → Used to create Java programs.\nJRE → Used to run Java programs.\nJVM → The engine that executes the code.",

        quiz: {
          question: "Which component executes Java bytecode directly?",
          options: [
            "A) JDK",
            "B) JRE",
            "C) JVM"
          ],
          correctAnswer: "C) JVM",
          explanation:
            "💡 *Explanation:* The JVM is responsible for running Java bytecode on a machine."
        }
      },

      {
        id: "intro_first_java_program",
        title: "First Java Program",
        content:
          "📚 *First Java Program*\n\nA simple Java program looks like this:\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World\");\n    }\n}\n```\n\nExplanation:\n• `class` defines the program structure.\n• `main()` is the starting point of every Java application.\n• `System.out.println()` prints output to the screen.\n\nWhen this program runs, it displays:\nHello World",

        quiz: {
          question: "Which method is the entry point of a Java program?",
          options: [
            "A) start()",
            "B) run()",
            "C) main()"
          ],
          correctAnswer: "C) main()",
          explanation:
            "💡 *Explanation:* Every Java application starts execution from the `main()` method."
        }
      },

      {
        id: "intro_compilation_process",
        title: "Java Compilation Process",
        content:
          "📚 *Java Compilation Process*\n\nJava programs go through two major steps before running:\n\n1️⃣ *Compilation*\nThe Java source code (`.java` file) is converted into bytecode (`.class` file) using the Java compiler.\n\n2️⃣ *Execution*\nThe JVM reads and executes the bytecode.\n\nFlow:\n`.java file → Compiler → .class file → JVM → Program Runs`\n\nThis process allows Java to be platform-independent.",

        quiz: {
          question: "What file extension does compiled Java bytecode use?",
          options: [
            "A) .java",
            "B) .class",
            "C) .exe"
          ],
          correctAnswer: "B) .class",
          explanation:
            "💡 *Explanation:* Java source code is compiled into `.class` bytecode files before execution."
        }
      }
    ]
  },

  {
    id: "java_variables_data_types",
    topic: "2. Variables and Data Types",
    subtopics: [
      {
        id: "variables_intro",
        title: "Variables in Java",
        content:
          "📚 *Variables in Java*\n\nVariables are containers used to store data in a program.\n\nIn Java, every variable must have:\n• A data type\n• A variable name\n• A value (optional during declaration)\n\nExample:\n\n```java\nint age = 19;\nString name = \"Jesse\";\n```\n\nHere:\n• `int` and `String` are data types.\n• `age` and `name` are variable names.\n• `19` and `Jesse` are stored values.\n\nVariables help programs store and manipulate information.",

        quiz: {
          question: "What is the purpose of a variable in Java?",
          options: [
            "A) To repeat loops",
            "B) To store data",
            "C) To print output"
          ],
          correctAnswer: "B) To store data",
          explanation:
            "💡 *Explanation:* Variables are used to store values that can be used later in a program."
        }
      },

      {
        id: "primitive_data_types",
        title: "Primitive Data Types",
        content:
          "📚 *Primitive Data Types*\n\nJava has several built-in primitive data types:\n\n• `int` → Stores whole numbers\n• `double` → Stores decimal numbers\n• `char` → Stores a single character\n• `boolean` → Stores true or false values\n\nExamples:\n\n```java\nint age = 19;\ndouble price = 99.99;\nchar grade = 'A';\nboolean isJavaFun = true;\n```\n\nPrimitive data types are fast and efficient for storing simple values.",

        quiz: {
          question: "Which data type is used to store decimal numbers?",
          options: [
            "A) int",
            "B) boolean",
            "C) double"
          ],
          correctAnswer: "C) double",
          explanation:
            "💡 *Explanation:* `double` is used for numbers with decimal points."
        }
      },

      {
        id: "strings_in_java",
        title: "Strings in Java",
        content:
          "📚 *Strings in Java*\n\nStrings are used to store text.\n\nUnlike primitive data types, Strings are objects in Java.\n\nExample:\n\n```java\nString name = \"Jebvynx\";\n```\n\nImportant points:\n• Strings are written inside double quotes `\" \"`\n• They can store words, sentences, and symbols\n• Java provides many useful String methods\n\nExample:\n\n```java\nSystem.out.println(name.length());\n```\n\nThis prints the number of characters in the String.",

        quiz: {
          question: "How are Strings written in Java?",
          options: [
            "A) Inside single quotes",
            "B) Inside double quotes",
            "C) Inside brackets"
          ],
          correctAnswer: "B) Inside double quotes",
          explanation:
            "💡 *Explanation:* Java Strings must be written inside double quotation marks."
        }
      },

      {
        id: "type_casting",
        title: "Type Casting",
        content:
          "📚 *Type Casting in Java*\n\nType casting means converting one data type into another.\n\nThere are two types:\n\n1️⃣ *Implicit Casting*\nJava automatically converts smaller data types into larger ones.\n\nExample:\n\n```java\nint num = 10;\ndouble result = num;\n```\n\n2️⃣ *Explicit Casting*\nYou manually convert a larger type into a smaller type.\n\nExample:\n\n```java\ndouble price = 99.99;\nint value = (int) price;\n```\n\nAfter casting, `value` becomes `99` because the decimal part is removed.",

        quiz: {
          question: "What is type casting?",
          options: [
            "A) Repeating code",
            "B) Converting one data type to another",
            "C) Printing variables"
          ],
          correctAnswer: "B) Converting one data type to another",
          explanation:
            "💡 *Explanation:* Type casting changes a value from one data type into another."
        }
      }
    ]
  },

  {
  id: "java_operators",
  topic: "3. Operators in Java",
  subtopics: [
    {
      id: "arithmetic_operators",
      title: "Arithmetic Operators",
      content:
        "📚 *Arithmetic Operators*\n\nArithmetic operators are used to perform mathematical calculations in Java.\n\nCommon arithmetic operators:\n\n• `+` → Addition\n• `-` → Subtraction\n• `*` → Multiplication\n• `/` → Division\n• `%` → Modulus (remainder)\n\nExample:\n\n```java\nint a = 10;\nint b = 5;\n\nSystem.out.println(a + b);\nSystem.out.println(a - b);\nSystem.out.println(a * b);\nSystem.out.println(a / b);\nSystem.out.println(a % b);\n```\n\nThese operators are commonly used in calculations and problem-solving.",

      quiz: {
        question: "Which operator is used to get the remainder in Java?",
        options: [
          "A) /",
          "B) %",
          "C) *"
        ],
        correctAnswer: "B) %",
        explanation:
          "💡 *Explanation:* The `%` operator returns the remainder after division."
      }
    },

    {
      id: "comparison_operators",
      title: "Comparison Operators",
      content:
        "📚 *Comparison Operators*\n\nComparison operators are used to compare two values.\n\nThey return either `true` or `false`.\n\nCommon comparison operators:\n\n• `==` → Equal to\n• `!=` → Not equal to\n• `>` → Greater than\n• `<` → Less than\n• `>=` → Greater than or equal to\n• `<=` → Less than or equal to\n\nExample:\n\n```java\nint x = 10;\nint y = 5;\n\nSystem.out.println(x > y);\nSystem.out.println(x == y);\n```\n\nComparison operators are mostly used in conditions and decision-making.",

      quiz: {
        question: "What does the `==` operator do in Java?",
        options: [
          "A) Assigns value",
          "B) Compares two values",
          "C) Adds two numbers"
        ],
        correctAnswer: "B) Compares two values",
        explanation:
          "💡 *Explanation:* `==` checks whether two values are equal."
      }
    },

    {
      id: "logical_operators",
      title: "Logical Operators",
      content:
        "📚 *Logical Operators*\n\nLogical operators are used to combine multiple conditions.\n\nCommon logical operators:\n\n• `&&` → AND\n• `||` → OR\n• `!` → NOT\n\nExample:\n\n```java\nint age = 20;\nboolean hasID = true;\n\nSystem.out.println(age >= 18 && hasID);\n```\n\nExplanation:\n• `&&` returns true if both conditions are true.\n• `||` returns true if at least one condition is true.\n• `!` reverses a boolean value.",

      quiz: {
        question: "Which logical operator means AND in Java?",
        options: [
          "A) ||",
          "B) !",
          "C) &&"
        ],
        correctAnswer: "C) &&",
        explanation:
          "💡 *Explanation:* `&&` means AND and checks if both conditions are true."
      }
    },

    {
      id: "increment_decrement",
      title: "Increment and Decrement Operators",
      content:
        "📚 *Increment and Decrement Operators*\n\nJava provides special operators for increasing or decreasing values.\n\n• `++` → Increment operator\n• `--` → Decrement operator\n\nExample:\n\n```java\nint count = 5;\n\ncount++;\nSystem.out.println(count);\n\ncount--;\nSystem.out.println(count);\n```\n\nExplanation:\n• `count++` increases the value by 1.\n• `count--` decreases the value by 1.",

      quiz: {
        question: "What does `count++` do?",
        options: [
          "A) Decreases count by 1",
          "B) Increases count by 1",
          "C) Multiplies count by 1"
        ],
        correctAnswer: "B) Increases count by 1",
        explanation:
          "💡 *Explanation:* The `++` operator increases a variable value by 1."
      }
    }
  ]
},

{
  id: "java_user_input",
  topic: "4. User Input",
  subtopics: [
    {
      id: "scanner_class",
      title: "Scanner Class",
      content:
        "📚 *Scanner Class*\n\nThe Scanner class is used to take input from users in Java.\n\nBefore using Scanner, you must import it:\n\n```java\nimport java.util.Scanner;\n```\n\nThen create a Scanner object:\n\n```java\nScanner input = new Scanner(System.in);\n```\n\nThis allows the program to read user input from the keyboard.",

      quiz: {
        question: "Which package contains the Scanner class?",
        options: [
          "A) java.lang",
          "B) java.util",
          "C) java.io"
        ],
        correctAnswer: "B) java.util",
        explanation:
          "💡 *Explanation:* The Scanner class belongs to the `java.util` package."
      }
    },

    {
      id: "integer_input",
      title: "Taking Integer Input",
      content:
        "📚 *Taking Integer Input*\n\nYou can use `nextInt()` to receive integer input from users.\n\nExample:\n\n```java\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n\n        System.out.print(\"Enter your age: \");\n        int age = input.nextInt();\n\n        System.out.println(\"Your age is: \" + age);\n    }\n}\n```\n\nThe `nextInt()` method reads whole numbers entered by the user.",

      quiz: {
        question: "Which Scanner method is used to receive integer input?",
        options: [
          "A) nextLine()",
          "B) nextDouble()",
          "C) nextInt()"
        ],
        correctAnswer: "C) nextInt()",
        explanation:
          "💡 *Explanation:* `nextInt()` is used to read whole numbers from user input."
      }
    },

    {
      id: "string_input",
      title: "Taking String Input",
      content:
        "📚 *Taking String Input*\n\nYou can use `nextLine()` to receive text input from users.\n\nExample:\n\n```java\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n\n        System.out.print(\"Enter your name: \");\n        String name = input.nextLine();\n\n        System.out.println(\"Welcome \" + name);\n    }\n}\n```\n\nThe `nextLine()` method reads an entire line of text.",

      quiz: {
        question: "Which Scanner method is used to receive text input?",
        options: [
          "A) nextLine()",
          "B) nextInt()",
          "C) nextBoolean()"
        ],
        correctAnswer: "A) nextLine()",
        explanation:
          "💡 *Explanation:* `nextLine()` is used to read a full line of text."
      }
    },

    {
      id: "multiple_inputs",
      title: "Taking Multiple Inputs",
      content:
        "📚 *Taking Multiple Inputs*\n\nA Java program can receive multiple inputs from users.\n\nExample:\n\n```java\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n\n        System.out.print(\"Enter your name: \");\n        String name = input.nextLine();\n\n        System.out.print(\"Enter your age: \");\n        int age = input.nextInt();\n\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Age: \" + age);\n    }\n}\n```\n\nPrograms can combine different Scanner methods to collect different types of information.",

      quiz: {
        question: "Which object is used to collect user input in Java?",
        options: [
          "A) Printer",
          "B) Scanner",
          "C) ConsoleWriter"
        ],
        correctAnswer: "B) Scanner",
        explanation:
          "💡 *Explanation:* The Scanner object is responsible for collecting user input."
      }
    }
  ]
},

{
  id: "java_conditional_statements",
  topic: "5. Conditional Statements",
  subtopics: [
    {
      id: "if_statement",
      title: "The if Statement",
      content:
        "📚 *The if Statement*\n\nThe `if` statement is used to execute code only when a condition is true.\n\nExample:\n\n```java\nint age = 20;\n\nif(age >= 18) {\n    System.out.println(\"You are an adult\");\n}\n```\n\nExplanation:\n• The condition inside the parentheses is checked.\n• If the condition is true, the code inside the braces runs.\n• If false, the code is skipped.",

      quiz: {
        question: "When does an `if` statement execute its code block?",
        options: [
          "A) When the condition is true",
          "B) When the condition is false",
          "C) Always"
        ],
        correctAnswer: "A) When the condition is true",
        explanation:
          "💡 *Explanation:* The code inside an `if` statement runs only if the condition evaluates to true."
      }
    },

    {
      id: "if_else_statement",
      title: "The if-else Statement",
      content:
        "📚 *The if-else Statement*\n\nThe `if-else` statement allows a program to choose between two options.\n\nExample:\n\n```java\nint age = 15;\n\nif(age >= 18) {\n    System.out.println(\"Adult\");\n} else {\n    System.out.println(\"Minor\");\n}\n```\n\nExplanation:\n• If the condition is true, the `if` block runs.\n• If the condition is false, the `else` block runs.",

      quiz: {
        question: "What happens when an `if` condition is false and there is an `else` block?",
        options: [
          "A) The program stops",
          "B) The else block executes",
          "C) The if block still executes"
        ],
        correctAnswer: "B) The else block executes",
        explanation:
          "💡 *Explanation:* The `else` block runs whenever the `if` condition is false."
      }
    },

    {
      id: "else_if_ladder",
      title: "The else-if Ladder",
      content:
        "📚 *The else-if Ladder*\n\nThe `else-if` ladder is used when there are multiple conditions to check.\n\nExample:\n\n```java\nint score = 75;\n\nif(score >= 90) {\n    System.out.println(\"Grade A\");\n} else if(score >= 70) {\n    System.out.println(\"Grade B\");\n} else {\n    System.out.println(\"Grade C\");\n}\n```\n\nExplanation:\n• Java checks conditions from top to bottom.\n• The first true condition executes.\n• If none are true, the `else` block runs.",

      quiz: {
        question: "What does Java do in an else-if ladder?",
        options: [
          "A) Checks all conditions at once",
          "B) Checks conditions from top to bottom",
          "C) Ignores false conditions completely"
        ],
        correctAnswer: "B) Checks conditions from top to bottom",
        explanation:
          "💡 *Explanation:* Java evaluates conditions one after another until one becomes true."
      }
    },

    {
      id: "switch_statement",
      title: "The switch Statement",
      content:
        "📚 *The switch Statement*\n\nThe `switch` statement is used to select one option from multiple choices.\n\nExample:\n\n```java\nint day = 2;\n\nswitch(day) {\n    case 1:\n        System.out.println(\"Monday\");\n        break;\n\n    case 2:\n        System.out.println(\"Tuesday\");\n        break;\n\n    default:\n        System.out.println(\"Invalid Day\");\n}\n```\n\nExplanation:\n• `case` represents possible values.\n• `break` stops further execution.\n• `default` runs if no case matches.",

      quiz: {
        question: "What is the purpose of the `break` statement in a switch block?",
        options: [
          "A) To repeat the switch",
          "B) To stop execution of other cases",
          "C) To print output"
        ],
        correctAnswer: "B) To stop execution of other cases",
        explanation:
          "💡 *Explanation:* `break` prevents Java from executing the next cases after a match is found."
      }
    }
  ]
},

{
  id: "java_loops",
  topic: "6. Loops",
  subtopics: [
    {
      id: "for_loop",
      title: "The for Loop",
      content:
        "📚 *The for Loop*\n\nThe `for` loop is used when you know how many times you want to repeat a block of code.\n\nExample:\n\n```java\nfor(int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}\n```\n\nExplanation:\n• `int i = 1` → Starting point\n• `i <= 5` → Condition\n• `i++` → Increment after each loop\n\nThis loop prints numbers from 1 to 5.",

      quiz: {
        question: "Which part of a for loop increases the loop variable?",
        options: [
          "A) Condition",
          "B) Increment",
          "C) Initialization"
        ],
        correctAnswer: "B) Increment",
        explanation:
          "💡 *Explanation:* The increment section updates the loop variable after each iteration."
      }
    },

    {
      id: "while_loop",
      title: "The while Loop",
      content:
        "📚 *The while Loop*\n\nThe `while` loop repeats code as long as a condition remains true.\n\nExample:\n\n```java\nint i = 1;\n\nwhile(i <= 5) {\n    System.out.println(i);\n    i++;\n}\n```\n\nExplanation:\n• The condition is checked before each loop.\n• If the condition becomes false, the loop stops.\n\nThe while loop is useful when the number of repetitions is unknown.",

      quiz: {
        question: "When does a while loop stop running?",
        options: [
          "A) When the condition becomes false",
          "B) When the condition becomes true",
          "C) After one execution"
        ],
        correctAnswer: "A) When the condition becomes false",
        explanation:
          "💡 *Explanation:* A while loop continues only while its condition is true."
      }
    },

    {
      id: "do_while_loop",
      title: "The do-while Loop",
      content:
        "📚 *The do-while Loop*\n\nThe `do-while` loop is similar to the while loop, but it executes at least once before checking the condition.\n\nExample:\n\n```java\nint i = 1;\n\ndo {\n    System.out.println(i);\n    i++;\n} while(i <= 5);\n```\n\nExplanation:\n• The code inside `do` runs first.\n• The condition is checked afterward.\n• This guarantees at least one execution.",

      quiz: {
        question: "How many times will a do-while loop run at minimum?",
        options: [
          "A) Zero times",
          "B) One time",
          "C) Infinite times"
        ],
        correctAnswer: "B) One time",
        explanation:
          "💡 *Explanation:* A do-while loop always executes at least once before checking the condition."
      }
    },

    {
      id: "break_continue",
      title: "Break and Continue",
      content:
        "📚 *Break and Continue*\n\nJava provides special statements to control loops.\n\n• `break` → Stops the loop completely\n• `continue` → Skips the current iteration and moves to the next one\n\nExample using break:\n\n```java\nfor(int i = 1; i <= 5; i++) {\n    if(i == 3) {\n        break;\n    }\n\n    System.out.println(i);\n}\n```\n\nExample using continue:\n\n```java\nfor(int i = 1; i <= 5; i++) {\n    if(i == 3) {\n        continue;\n    }\n\n    System.out.println(i);\n}\n```\n\nThese statements help control loop behavior.",

      quiz: {
        question: "What does the `continue` statement do in a loop?",
        options: [
          "A) Stops the loop completely",
          "B) Skips the current iteration",
          "C) Restarts the program"
        ],
        correctAnswer: "B) Skips the current iteration",
        explanation:
          "💡 *Explanation:* `continue` skips the current loop cycle and moves to the next iteration."
      }
    }
  ]
},

{
  id: "java_arrays",
  topic: "7. Arrays",
  subtopics: [
    {
      id: "creating_arrays",
      title: "Creating Arrays",
      content:
        "📚 *Creating Arrays*\n\nArrays are used to store multiple values of the same data type in a single variable.\n\nExample:\n\n```java\nint[] numbers = {1, 2, 3, 4, 5};\n```\n\nExplanation:\n• `int[]` declares an integer array.\n• The values are stored inside curly braces `{}`.\n• Arrays make it easier to manage collections of data.\n\nAnother way to create an array:\n\n```java\nint[] numbers = new int[5];\n```\n\nThis creates an array that can hold 5 integers.",

      quiz: {
        question: "What is the main purpose of an array in Java?",
        options: [
          "A) To store multiple values",
          "B) To print text",
          "C) To stop loops"
        ],
        correctAnswer: "A) To store multiple values",
        explanation:
          "💡 *Explanation:* Arrays are used to store many values of the same type in one variable."
      }
    },

    {
      id: "accessing_array_elements",
      title: "Accessing Array Elements",
      content:
        "📚 *Accessing Array Elements*\n\nEach value in an array has an index number.\n\nJava array indexes start from `0`.\n\nExample:\n\n```java\nString[] names = {\"John\", \"Sarah\", \"Mike\"};\n\nSystem.out.println(names[0]);\n```\n\nOutput:\n\n```text\nJohn\n```\n\nExplanation:\n• `names[0]` accesses the first element.\n• `names[1]` accesses the second element.\n• `names[2]` accesses the third element.",

      quiz: {
        question: "What is the index of the first element in a Java array?",
        options: [
          "A) 1",
          "B) 0",
          "C) -1"
        ],
        correctAnswer: "B) 0",
        explanation:
          "💡 *Explanation:* Java arrays always start indexing from 0."
      }
    },

    {
      id: "looping_through_arrays",
      title: "Looping Through Arrays",
      content:
        "📚 *Looping Through Arrays*\n\nLoops are commonly used to access all elements in an array.\n\nExample:\n\n```java\nint[] numbers = {10, 20, 30, 40};\n\nfor(int i = 0; i < numbers.length; i++) {\n    System.out.println(numbers[i]);\n}\n```\n\nExplanation:\n• The loop starts from index 0.\n• `numbers.length` gives the total number of elements.\n• Each element is printed one after another.",

      quiz: {
        question: "Which property gives the total number of elements in an array?",
        options: [
          "A) size",
          "B) count",
          "C) length"
        ],
        correctAnswer: "C) length",
        explanation:
          "💡 *Explanation:* The `length` property returns the number of elements in an array."
      }
    },

    {
      id: "array_length",
      title: "Array Length",
      content:
        "📚 *Array Length*\n\nThe `length` property is used to find the size of an array.\n\nExample:\n\n```java\nint[] numbers = {1, 2, 3, 4, 5};\n\nSystem.out.println(numbers.length);\n```\n\nOutput:\n\n```text\n5\n```\n\nExplanation:\n• `length` tells how many elements are stored in the array.\n• It is very useful when working with loops.\n• Using `length` helps avoid index errors.",

      quiz: {
        question: "What does the `length` property return?",
        options: [
          "A) The last index",
          "B) The total number of elements",
          "C) The first value"
        ],
        correctAnswer: "B) The total number of elements",
        explanation:
          "💡 *Explanation:* The `length` property returns the total size of the array."
      }
    }
  ]
},

{
  id: "java_methods",
  topic: "8. Methods",
  subtopics: [
    {
      id: "creating_methods",
      title: "Creating Methods",
      content:
        "📚 *Creating Methods*\n\nMethods are blocks of code used to perform specific tasks.\n\nMethods help make programs organized, reusable, and easier to manage.\n\nExample:\n\n```java\npublic class Main {\n\n    static void greet() {\n        System.out.println(\"Hello World\");\n    }\n\n    public static void main(String[] args) {\n        greet();\n    }\n}\n```\n\nExplanation:\n• `greet()` is the method name.\n• `void` means the method does not return a value.\n• The method runs when it is called.",

      quiz: {
        question: "Why are methods useful in Java?",
        options: [
          "A) They repeat code automatically",
          "B) They organize and reuse code",
          "C) They stop programs"
        ],
        correctAnswer: "B) They organize and reuse code",
        explanation:
          "💡 *Explanation:* Methods help developers avoid repeating code and keep programs organized."
      }
    },

    {
      id: "parameters_arguments",
      title: "Parameters and Arguments",
      content:
        "📚 *Parameters and Arguments*\n\nMethods can receive data using parameters.\n\nExample:\n\n```java\npublic class Main {\n\n    static void greet(String name) {\n        System.out.println(\"Hello \" + name);\n    }\n\n    public static void main(String[] args) {\n        greet(\"Jesse\");\n    }\n}\n```\n\nExplanation:\n• `name` is a parameter.\n• `Jesse` is an argument.\n• Parameters allow methods to work with different values.",

      quiz: {
        question: "What is a parameter in Java?",
        options: [
          "A) A value passed into a method definition",
          "B) The output of a program",
          "C) A loop statement"
        ],
        correctAnswer: "A) A value passed into a method definition",
        explanation:
          "💡 *Explanation:* Parameters are variables defined inside a method to receive values."
      }
    },

    {
      id: "return_values",
      title: "Return Values",
      content:
        "📚 *Return Values*\n\nSome methods return values after performing operations.\n\nExample:\n\n```java\npublic class Main {\n\n    static int add(int a, int b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(add(5, 3));\n    }\n}\n```\n\nExplanation:\n• `return` sends a value back from the method.\n• `int` before the method name means the method returns an integer.\n• Returned values can be stored or printed.",

      quiz: {
        question: "What does the `return` keyword do in Java?",
        options: [
          "A) Repeats the method",
          "B) Sends a value back from the method",
          "C) Stops the computer"
        ],
        correctAnswer: "B) Sends a value back from the method",
        explanation:
          "💡 *Explanation:* The `return` keyword gives back a value from a method."
      }
    },

    {
      id: "method_overloading",
      title: "Method Overloading",
      content:
        "📚 *Method Overloading*\n\nMethod overloading happens when multiple methods have the same name but different parameters.\n\nExample:\n\n```java\npublic class Main {\n\n    static int add(int a, int b) {\n        return a + b;\n    }\n\n    static double add(double a, double b) {\n        return a + b;\n    }\n}\n```\n\nExplanation:\n• Both methods are named `add()`.\n• The parameters are different.\n• Java automatically chooses the correct method based on the arguments provided.",

      quiz: {
        question: "What is method overloading?",
        options: [
          "A) Using different method names",
          "B) Having multiple methods with the same name but different parameters",
          "C) Repeating methods inside loops"
        ],
        correctAnswer: "B) Having multiple methods with the same name but different parameters",
        explanation:
          "💡 *Explanation:* Method overloading allows methods with the same name to perform different tasks using different parameters."
      }
    }
  ]
},

{
  id: "java_oop_basics",
  topic: "9. Object-Oriented Programming Basics",
  subtopics: [
    {
      id: "classes_in_java",
      title: "Classes in Java",
      content:
        "📚 *Classes in Java*\n\nA class is a blueprint used to create objects.\n\nClasses contain:\n• Variables (fields)\n• Methods (functions)\n\nExample:\n\n```java\nclass Car {\n    String color = \"Red\";\n\n    void drive() {\n        System.out.println(\"The car is driving\");\n    }\n}\n```\n\nExplanation:\n• `Car` is the class name.\n• `color` is a field.\n• `drive()` is a method.\n\nClasses help organize related data and behavior together.",

      quiz: {
        question: "What is a class in Java?",
        options: [
          "A) A loop structure",
          "B) A blueprint for creating objects",
          "C) A type of variable"
        ],
        correctAnswer: "B) A blueprint for creating objects",
        explanation:
          "💡 *Explanation:* A class acts as a template used to create objects."
      }
    },

    {
      id: "objects_in_java",
      title: "Objects in Java",
      content:
        "📚 *Objects in Java*\n\nAn object is an instance of a class.\n\nObjects are created using the `new` keyword.\n\nExample:\n\n```java\nclass Car {\n    String color = \"Blue\";\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car();\n\n        System.out.println(myCar.color);\n    }\n}\n```\n\nExplanation:\n• `myCar` is an object.\n• The object is created from the `Car` class.\n• Objects can access fields and methods inside the class.",

      quiz: {
        question: "Which keyword is used to create objects in Java?",
        options: [
          "A) class",
          "B) create",
          "C) new"
        ],
        correctAnswer: "C) new",
        explanation:
          "💡 *Explanation:* The `new` keyword is used to create objects from classes."
      }
    },

    {
      id: "constructors_in_java",
      title: "Constructors in Java",
      content:
        "📚 *Constructors in Java*\n\nA constructor is a special method used to initialize objects.\n\nA constructor:\n• Has the same name as the class\n• Does not have a return type\n• Runs automatically when an object is created\n\nExample:\n\n```java\nclass Student {\n\n    Student() {\n        System.out.println(\"Object Created\");\n    }\n}\n```\n\nExplanation:\n• The constructor runs automatically when a new object is made.\n• Constructors are useful for setting initial values.",

      quiz: {
        question: "What is the main purpose of a constructor?",
        options: [
          "A) To create loops",
          "B) To initialize objects",
          "C) To print output"
        ],
        correctAnswer: "B) To initialize objects",
        explanation:
          "💡 *Explanation:* Constructors prepare objects with initial values when they are created."
      }
    },

    {
      id: "fields_and_methods",
      title: "Fields and Methods",
      content:
        "📚 *Fields and Methods*\n\nClasses contain fields and methods.\n\n• Fields store data.\n• Methods define behavior.\n\nExample:\n\n```java\nclass Phone {\n\n    String brand = \"Samsung\";\n\n    void call() {\n        System.out.println(\"Calling...\");\n    }\n}\n```\n\nExplanation:\n• `brand` is a field.\n• `call()` is a method.\n• Objects can use both fields and methods.",

      quiz: {
        question: "What is the purpose of a field in Java?",
        options: [
          "A) To store data",
          "B) To create conditions",
          "C) To repeat loops"
        ],
        correctAnswer: "A) To store data",
        explanation:
          "💡 *Explanation:* Fields are variables inside a class used to store object data."
      }
    }
  ]
},

{
  id: "java_exception_handling",
  topic: "10. Exception Handling & Mini Project",
  subtopics: [
    {
      id: "try_catch_blocks",
      title: "Try and Catch Blocks",
      content:
        "📚 *Try and Catch Blocks*\n\nExceptions are errors that happen while a program is running.\n\nJava uses `try` and `catch` blocks to handle errors safely.\n\nExample:\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n\n        try {\n            int result = 10 / 0;\n            System.out.println(result);\n        }\n        catch(Exception e) {\n            System.out.println(\"An error occurred\");\n        }\n    }\n}\n```\n\nExplanation:\n• `try` contains code that may cause an error.\n• `catch` handles the error.\n• This prevents the program from crashing.",

      quiz: {
        question: "What is the purpose of a catch block?",
        options: [
          "A) To create variables",
          "B) To handle errors",
          "C) To repeat loops"
        ],
        correctAnswer: "B) To handle errors",
        explanation:
          "💡 *Explanation:* The `catch` block handles exceptions that occur inside the `try` block."
      }
    },

    {
      id: "common_exceptions",
      title: "Common Exceptions",
      content:
        "📚 *Common Exceptions*\n\nJava has different types of exceptions.\n\nCommon examples:\n\n• `ArithmeticException` → Division by zero\n• `ArrayIndexOutOfBoundsException` → Invalid array index\n• `NullPointerException` → Using a null object\n• `InputMismatchException` → Wrong input type\n\nExample:\n\n```java\nint[] numbers = {1, 2, 3};\n\nSystem.out.println(numbers[5]);\n```\n\nThis causes an `ArrayIndexOutOfBoundsException` because index 5 does not exist.",

      quiz: {
        question: "Which exception happens when accessing an invalid array index?",
        options: [
          "A) ArithmeticException",
          "B) NullPointerException",
          "C) ArrayIndexOutOfBoundsException"
        ],
        correctAnswer: "C) ArrayIndexOutOfBoundsException",
        explanation:
          "💡 *Explanation:* This exception occurs when trying to access an array position that does not exist."
      }
    },

    {
      id: "debugging_basics",
      title: "Debugging Basics",
      content:
        "📚 *Debugging Basics*\n\nDebugging means finding and fixing errors in a program.\n\nCommon debugging tips:\n\n• Read error messages carefully\n• Check variable values\n• Use `System.out.println()` to trace code\n• Test small parts of the program\n\nExample:\n\n```java\nint number = 5;\n\nSystem.out.println(number);\n```\n\nPrinting values helps developers understand what the program is doing during execution.",

      quiz: {
        question: "What is debugging?",
        options: [
          "A) Creating loops",
          "B) Finding and fixing program errors",
          "C) Writing comments"
        ],
        correctAnswer: "B) Finding and fixing program errors",
        explanation:
          "💡 *Explanation:* Debugging is the process of identifying and correcting issues in a program."
      }
    },

    {
      id: "mini_project",
      title: "Mini Project",
      content:
        "📚 *Mini Project*\n\nNow it's time to apply what you have learned.\n\nProject Ideas:\n\n• Simple Calculator\n• Student Grade Checker\n• Number Guessing Game\n• ATM Simulation\n\nExample Calculator:\n\n```java\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner input = new Scanner(System.in);\n\n        System.out.print(\"Enter first number: \");\n        int a = input.nextInt();\n\n        System.out.print(\"Enter second number: \");\n        int b = input.nextInt();\n\n        System.out.println(\"Sum = \" + (a + b));\n    }\n}\n```\n\nMini projects help strengthen problem-solving and programming skills.",

      quiz: {
        question: "Why are mini projects important for beginners?",
        options: [
          "A) They help apply programming knowledge",
          "B) They replace learning",
          "C) They remove errors automatically"
        ],
        correctAnswer: "A) They help apply programming knowledge",
        explanation:
          "💡 *Explanation:* Mini projects allow beginners to practice and apply what they have learned."
      }
    }
  ]
}

];