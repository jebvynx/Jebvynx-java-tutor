const beginnerCurriculum = [
  {
    id: "java_01_history",
    topic: "1. Java History & Intro",
    content: "📜 *Java Lesson 1: History & Foundations*\n\nJava was created in *1995* by *James Gosling* at Sun Microsystems. Its core design philosophy is **WORA** (Write Once, Run Anywhere).\n\nUnlike traditional compilation languages, Java code compiles down to intermediate **Bytecode**. The **JVM (Java Virtual Machine)** on your machine reads this bytecode and executes it, meaning the exact same program runs seamlessly on Windows, Linux, Mac, or Android without changing code lines.",
    quiz: {
      question: "What is the name of the virtual runtime engine that reads and executes Java Bytecode?",
      options: ["JVM", "JDK", "JRE", "V8 Engine"],
      correctAnswer: "JVM",
      explanation: "💡 *Explanation:* The JVM (Java Virtual Machine) runs the bytecode. The JDK is the development toolkit you use to write it, and the JRE contains libraries to execute it!"
    }
  },
  {
    id: "java_02_structure",
    topic: "2. Anatomy of a Java Program",
    content: "🏗️ *Java Lesson 2: Basic Code Structure*\n\nBefore running any Java logic, your file must strictly follow this structure:\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Kaduna Poly!\");\n    }\n}\n\n*Key Component Rules to Remember:*\n\n1️⃣ **public class Main**: In Java, all code must live inside a Class. The class name *must* exactly match the physical filename (e.g., Main.java).\n2️⃣ **public static void main**: This is the **Main Function / Entry Point**. When you click 'Run', the engine searches specifically for this line to begin execution.\n3️⃣ **System.out.println()**: The standard command layout used to print text strings onto a user console output interface.",
    quiz: {
      question: "What happens if a Java file named 'App.java' does not have a class matching that name, or lacks a main method entry point?",
      options: ["It runs normally", "It throws a compilation/runtime error", "It runs silently", "It automatically renames itself"],
      correctAnswer: "It throws a compilation/runtime error",
      explanation: "💡 *Explanation:* Java is strictly class-based. Your root class name must match your filename, and execution cannot start without the public static void main method!"
    }
  },

{
    id: "java_03_vars",
    topic: "3. Variables & Data Types",
    content: "☕ *Java Lesson 3: Variables & Data Types*\n\nJava is a strongly-typed language. Every variable container must have a fixed runtime type declared explicitly upfront:\n\nint capacity = 50;\ndouble dynamicGpa = 3.82;\nchar initialGrade = 'A';\nboolean isClassActive = true;\nString projectLead = \"Jesse D Bless\";\n\n*Primitive vs Object Reference:*\n• Primitive types (int, double, boolean, char) are lightweight and store raw math data directly in memory.\n• String is an Object Reference type that stores chains of text characters, which is why it starts with a capital 'S'!",
    quiz: {
      question: "Which data type would you use if you needed to track whether a student has paid their registry fees (True or False)?",
      options: ["int", "String", "double", "boolean"],
      correctAnswer: "boolean",
      explanation: "💡 *Explanation:* Booleans are designed for flags and logic gates, storing strictly two possible state values: true or false."
    }
  },

 {
    id: "java_04_operators",
    topic: "4. Core Program Operators",
    content: "🧮 *Java Lesson 4: Basic Operators*\n\nOperators allow you to execute calculations and handle state evaluations:\n\nint calculation = 10 % 3; // Modulo: returns the remainder (1)\nint points = 5;\npoints++;                 // Increment: shifts value to 6\n\nboolean eligibility = (points > 4) && (calculation == 1);\n\n*Critical Groups to Know:\n• **Arithmetic**: +, -, *, /, % (Modulo gives the remainder of a division loop).\n• **Relational**: == (equal to), != (not equal to), >, <.\n• **Logical**: && (AND - both must be true), || (OR - at least one must be true).",
    quiz: {
      question: "What is the numeric value output result of the assignment evaluation: 15 % 4?",
      options: ["3", "1", "0", "4"],
      correctAnswer: "3",
      explanation: "💡 *Explanation:* 4 goes into 15 a total of 3 times evenly (which is 12). The leftover remainder value is 3!"
    }
  },

  {
    id: "java_05_logic",
    topic: "5. Conditional Control Flow",
    content: "🛣️ *Java Lesson 5: Conditional Logic Statements*\n\nConditionals shift execution routes based on comparison rules using if, else if, and else configurations:\n\nint gradeResult = 75;\n\nif (gradeResult >= 70) {\n    System.out.println(\"Distinction!\");\n} else if (gradeResult >= 40) {\n    System.out.println(\"Pass\");\n} else {\n    System.out.println(\"Fail\");\n}\n\nFor evaluating single variables against static criteria lists, Java also uses switch selection structures for faster read loops.",
    quiz: {
      question: "If a student's score is exactly 55, which block print action executes from the lesson logic layout sample above?",
      options: ["Distinction!", "Pass", "Fail", "Nothing prints"],
      correctAnswer: "Pass",
      explanation: "💡 *Explanation:* 55 is not greater than 70, so it skips the first block. It is greater than 40, matching the else if criteria rule perfectly!"
    }
  },

  {
    id: "java_06_loops",
    topic: "6. Loops & Iteration",
    content: "🔄 *Java Lesson 6: Loops & Iteration*\n\nLoops run a code block multiple times until a condition changes. This is essential for repeating tasks.\n\n// For Loop: Used when you know exactly how many times to repeat\nfor (int i = 1; i <= 3; i++) {\n    System.out.println(\"Count: \" + i);\n}\n\n// While Loop: Runs indefinitely until a condition turns false\nint energy = 100;\nwhile (energy > 0) {\n    energy -= 20;\n}",
    quiz: {
      question: "Which loop style is ideal when you already know the exact number of times you want a line of code to repeat?",
      options: ["while loop", "for loop", "do-while loop", "infinite statement"],
      correctAnswer: "for loop",
      explanation: "💡 *Explanation:* A for loop packages initialization, counter condition, and increment step into one line, making it perfect for fixed-count runs!"
    }
  }


];

module.exports = beginnerCurriculum;