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
}

];