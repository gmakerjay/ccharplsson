window.lessonsData = window.lessonsData || [];

const part1 = [
    {
        id: 1,
        moduleId: 1,
        moduleName: "Module 1: C# Fundamentals",
        title: "1. Welcome to C# & .NET",
        library: "System",
        objectives: ["เข้าใจว่า C# และ .NET คืออะไร", "โครงสร้างของโปรแกรม C# พื้นฐาน", "เขียนโปรแกรม Hello World"],
        content: [
            { type: "text", text: "ยินดีต้อนรับสู่โลกของ <strong>C# (C-Sharp)</strong> ครับ! C# เป็นภาษาโปรแกรมมิ่งแบบ Object-Oriented (เชิงวัตถุ) ที่พัฒนาโดย Microsoft" },
            { type: "heading", text: "📦 Library: System" },
            { type: "text", text: "<ul><li>เป็นไลบรารีหลักของ .NET เปรียบเสมือนกล่องเครื่องมือช่างที่ต้องพกติดตัวเสมอ</li><li>ใช้สำหรับฟังก์ชันพื้นฐานของคอมพิวเตอร์ เช่น การพิมพ์ข้อความลงหน้าจอ (Console), การคิดเลข (Math), หรือดูข้อมูลระบบ (Environment)</li><li>คุณจะเห็นคำว่า <code>using System;</code> อยู่บนสุดของไฟล์ C# เสมอเพื่อขอเบิกกล่องเครื่องมือนี้มาใช้</li></ul>" },
            { type: "heading", text: "โครงสร้างโปรแกรม (Program Structure)" },
            { type: "text", text: "โปรแกรม C# จะต้องมีโครงสร้างพื้นฐานเสมอ เริ่มจาก <code>using</code> เพื่อดึงไลบรารีที่จำเป็นมาใช้, <code>namespace</code> เพื่อจัดกลุ่มคลาส, <code>class</code> เป็นพิมพ์เขียวของโปรแกรม, และ <code>Main()</code> method ซึ่งเป็นจุดเริ่มต้นการทำงาน (Entry Point)" },
            { type: "code", code: `using System;\n\nnamespace HelloWorldApp\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            // Console.WriteLine() มาจาก System namespace ใช้แสดงข้อความออกทางหน้าจอดำ (Terminal)\n            Console.WriteLine("Hello, World!");\n        }\n    }\n}` }
        ],
        conceptNote: "มือใหม่มักลืมใส่ <code>;</code> (Semicolon) ที่ท้ายบรรทัด ซึ่งใน C# ทุกคำสั่ง (Statement) จะต้องจบด้วยเครื่องหมาย <code>;</code> เสมอ และ C# เป็นภาษาแบบ Case-Sensitive แปลว่า <code>console</code> กับ <code>Console</code> คือคนละตัวกัน! (ถ้าพิมพ์ผิด Compiler จะด่าว่า 'The name console does not exist in the current context')",
        exercises: [
            { level: "Easy", instruction: "จงเขียนโปรแกรมเพื่อแสดงชื่อของตัวเองออกทางหน้าจอ (Console)", answer: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("My name is John Doe");\n    }\n}` },
            { level: "Medium", instruction: "Debug โค้ด: ทำไมโค้ด `System.out.println(\"Hello\");` ถึงรันไม่ผ่านใน C#?", answer: "เพราะนั่นคือคำสั่งของภาษา Java! ใน C# ต้องใช้ `System.Console.WriteLine(\"Hello\");` หรือ `Console.WriteLine()` ถ้าระบุ `using System;` ไว้แล้ว" }
        ],
        quiz: [
            { question: "Method ใดใน System.Console ที่ใช้แสดงผลแบบพิมพ์แล้วขึ้นบรรทัดใหม่ทันที?", options: ["Console.Write()", "Console.Print()", "Console.WriteLine()", "Console.Show()"], answerIndex: 2, explanation: "WriteLine จะเพิ่มอักขระขึ้นบรรทัดใหม่ (\\n) ต่อท้ายข้อความให้อัตโนมัติ" }
        ],
        realUseCase: "ในโปรเจกต์จริง โครงสร้าง <code>namespace</code> จะช่วยแยกแยะว่าคลาสนี้อยู่ในส่วนไหนของโปรแกรม เช่น <code>MyApp.Models</code> หรือ <code>MyApp.Controllers</code> ช่วยให้โค้ดเป็นระเบียบเมื่อแอปมีขนาดใหญ่ขึ้น (ป้องกันการตั้งชื่อคลาสซ้ำกัน)"
    },
    {
        id: 2,
        moduleId: 1,
        moduleName: "Module 1: C# Fundamentals",
        title: "2. Variables & Data Types",
        library: "System",
        objectives: ["รู้จักชนิดข้อมูล (Data Types) พื้นฐาน", "การประกาศตัวแปร (Variables Declaration)", "การใช้คำสงวน var"],
        content: [
            { type: "text", text: "<strong>ตัวแปร (Variable)</strong> คือกล่องที่เราเอาไว้เก็บข้อมูลในหน่วยความจำ ใน C# เป็นภาษาแบบ <em>Strongly Typed</em> ซึ่งแปลว่าเราต้องระบุชนิดข้อมูล (Data Type) ของตัวแปรเสมอ" },
            { type: "heading", text: "ชนิดข้อมูลพื้นฐาน (Primitive Types)" },
            { type: "text", text: "เบื้องหลัง Type พื้นฐานพวกนี้ ถูกแมป (Mapped) เข้ากับ <strong>Struct และ Class ใน <code>System</code> namespace</strong> โดยตรง:<br><ul><li><code>int</code> -> <code>System.Int32</code> (เก็บจำนวนเต็ม 4 bytes)</li><li><code>double</code> -> <code>System.Double</code> (เก็บจำนวนทศนิยม 8 bytes)</li><li><code>bool</code> -> <code>System.Boolean</code> (เก็บค่าความจริง true/false)</li><li><code>string</code> -> <code>System.String</code> (เก็บข้อความ)</li></ul>" },
            { type: "code", code: `int age = 25;\ndouble height = 1.75;\nbool isStudent = true;\nstring name = "Alice";\n\nConsole.WriteLine($"Name: {name}, Age: {age}");` },
            { type: "heading", text: "การใช้ var (Implicit Typing)" },
            { type: "text", text: "เราสามารถใช้ <code>var</code> เพื่อให้ Compiler เดา Data Type เองจากค่าที่เรากำหนดให้ (Assign) ได้ แต่เราต้องให้ค่าเริ่มต้นทันทีที่ประกาศ" }
        ],
        conceptNote: "การใช้ <code>var</code> ไม่ได้แปลว่าตัวแปรนั้นเปลี่ยน Type ได้! เมื่อตัวแปร <code>var score = 100;</code> กลายเป็น <code>int</code> แล้ว คุณไม่สามารถเอา <code>score = \"A\";</code> ใส่ทีหลังได้ (จะเกิด Compile Error) ซึ่งต่างจากภาษา Script อย่าง JavaScript หรือ Python (Dynamic Typing)",
        exercises: [
            { level: "Easy", instruction: "สร้างตัวแปรเก็บชื่อ (string) และตัวแปรเก็บอายุ (int) แล้วแสดงผลลัพธ์", answer: `string myName = "Bob";\nint myAge = 30;\nConsole.WriteLine(myName + " is " + myAge + " years old.");` }
        ],
        quiz: [
            { question: "คีย์เวิร์ด 'int' ในภาษา C# เป็นตัวย่อของโครงสร้างข้อมูล (Struct) ใดใน System namespace?", options: ["System.Integer", "System.Int16", "System.Int32", "System.Number"], answerIndex: 2, explanation: "int ใน C# จะหมายถึงเลขจำนวนเต็มขนาด 32 bit เสมอ (System.Int32)" }
        ],
        realUseCase: "ในเกม RPG คุณจะใช้ <code>int hp = 100;</code> เพื่อเก็บเลือดของตัวละคร, <code>string playerName = \"Hero\";</code> เพื่อเก็บชื่อผู้เล่น ซึ่งเบื้องหลังตัวแปรพวกนี้จะถูกจองพื้นที่ (Allocate) ลงใน Memory แบบ Stack (สำหรับ int) หรือ Heap (สำหรับ string)"
    },
    {
        id: 3,
        moduleId: 1,
        moduleName: "Module 1: C# Fundamentals",
        title: "3. Type Casting & Conversion",
        library: "System",
        objectives: ["เข้าใจการแปลงชนิดข้อมูล", "ความแตกต่างระหว่าง Implicit และ Explicit Casting", "การใช้ Convert class และ Parse method"],
        content: [
            { type: "text", text: "ใน C# บางครั้งเราต้องแปลงข้อมูลจากชนิดหนึ่งไปเป็นอีกชนิดหนึ่ง เช่น แปลงข้อความที่รับมาจากผู้ใช้ ไปเป็นตัวเลขเพื่อคำนวณ" },
            { type: "heading", text: "🧱 Class: Convert" },
            { type: "text", text: "<ul><li><strong>Namespace:</strong> System</li><li><strong>ใช้งานเพื่อ:</strong> แปลง Base Data Types ไปเป็น Data Types อื่นๆ อย่างปลอดภัย</li></ul>" },
            { type: "heading", text: "การใช้ Parse vs Convert" },
            { type: "code", code: `string numberString = "123";\n\n// วิธีที่ 1: ใช้ Parse() ของ Struct Int32\nint num1 = int.Parse(numberString);\n\n// วิธีที่ 2: ใช้ Convert Class ของ System\nint num2 = Convert.ToInt32(numberString);\n\nConsole.WriteLine(num1 + num2); // Output: 246` }
        ],
        conceptNote: "ความแตกต่างระหว่าง <code>int.Parse()</code> กับ <code>Convert.ToInt32()</code> คือ ถ้าค่าใน string เป็น <code>null</code>, Convert จะคืนค่า 0 ส่วน Parse จะเกิด Error แตกทันที! (ArgumentNullException) แต่ถ้าเจอตัวอักษร <code>\"ABC\"</code> ทั้งคู่จะพังด้วย FormatException เหมือนกัน!",
        exercises: [
            { level: "Medium", instruction: "รับค่าตัวเลขที่เป็น string 2 ตัว \"5\" และ \"10\" นำมาแปลงเป็น int แล้วบวกกัน", answer: `string a = "5";\nstring b = "10";\nint result = Convert.ToInt32(a) + Convert.ToInt32(b);\nConsole.WriteLine(result);` },
            { level: "Hard", instruction: "วิเคราะห์โค้ด: ถ้ารันโค้ด `int.Parse(\"10.5\");` จะเกิดอะไรขึ้น?", answer: "เกิด FormatException เพราะ int ไม่สามารถรับทศนิยมได้ ต้องใช้ double.Parse() แทน" }
        ],
        quiz: [
            { question: "ถ้ารันโค้ด `Convert.ToInt32(null);` ค่าที่ได้จะเป็นเท่าไร?", options: ["null", "เกิด Error ทันที", "0", "-1"], answerIndex: 2, explanation: "Convert.ToInt32 ออกแบบมาให้ Handle ค่า null โดยจะคืนค่าเริ่มต้น (Default value) ของ int คือ 0 ให้แทนการเตะ Error" }
        ],
        realUseCase: "ในการรับ Input จากหน้าต่าง GUI (WinForms TextBox) หรือเว็บฟอร์ม ค่าที่ได้มาจะเป็น string (ข้อความ) เสมอ เราต้องใช้แปลงมันก่อนนำไปบันทึกลง Database หรือคำนวณราคา"
    },
    {
        id: 4,
        moduleId: 1,
        moduleName: "Module 1: C# Fundamentals",
        title: "4. Console I/O & String Interpolation",
        library: "System",
        objectives: ["การรับข้อมูลจากผู้ใช้", "การจัดรูปแบบข้อความด้วย String Interpolation"],
        content: [
            { type: "text", text: "เราสามารถรับข้อมูลจากผู้ใช้ผ่าน <strong>System.Console</strong> ได้ด้วยคำสั่ง <code>Console.ReadLine()</code>" },
            { type: "heading", text: "🧱 Class: Console" },
            { type: "text", text: "<ul><li><strong>Namespace:</strong> System</li><li><strong>ใช้งานเพื่อ:</strong> สื่อสาร (รับเข้า-ส่งออก) ผ่าน Command Prompt (Terminal)</li></ul>" },
            { type: "heading", text: "🔹 Methods ที่เจอบ่อย:" },
            { type: "text", text: "<ul><li><code>ReadLine()</code> -> รอให้ผู้ใช้พิมพ์แล้วกด Enter (คืนค่าเป็น string)</li><li><code>Clear()</code> -> ล้างหน้าจอดำทั้งหมด</li></ul>" },
            { type: "code", code: `Console.Write("Enter your name: ");\nstring userName = Console.ReadLine();\n\n// String Interpolation ($)\nConsole.WriteLine($"Welcome, {userName}! System cleared in 3 seconds...");\nSystem.Threading.Thread.Sleep(3000); // จำลองการหยุดรอ 3 วินาที (มาจาก System.Threading)\nConsole.Clear();` }
        ],
        conceptNote: "ระวังเรื่อง <code>Console.ReadLine()</code>! ถ้านำไปใส่ใน <code>int.Parse()</code> ทันที แล้วผู้ใช้เผลอพิมพ์ตัวอักษร โปรแกรมจะ Crash (หลุด) ทันที ในระบบจริงเราควรใช้ <code>int.TryParse()</code> เพื่อเช็คก่อนว่าแปลงได้หรือไม่!",
        exercises: [
            { level: "Easy", instruction: "เขียนโปรแกรมถามชื่อและเมืองเกิดของผู้ใช้ แล้วแสดงข้อความ 'You are [name] from [city]' ด้วย String Interpolation", answer: `Console.Write("Name: ");\nstring name = Console.ReadLine();\nConsole.Write("City: ");\nstring city = Console.ReadLine();\nConsole.WriteLine($"You are {name} from {city}");` }
        ],
        quiz: [
            { question: "Method ใดใน System.Console ที่ใช้สำหรับล้างหน้าจอทั้งหมด?", options: ["Console.Wipe()", "Console.Clean()", "Console.Clear()", "Console.Reset()"], answerIndex: 2, explanation: "Console.Clear() เป็นคำสั่งมาตรฐานสำหรับเคลียร์เนื้อหาบน Terminal ทิ้งทั้งหมด" }
        ],
        realUseCase: "โปรแกรมติดตั้ง (Installer) ยุคเก่าที่เป็นจอดำๆ หรือระบบคอนฟิกของ Server (Linux Bash) จะใช้ Console I/O ในการรับค่าและพิมพ์ Logs เพื่อบอกว่าระบบทำงานถึงไหนแล้ว"
    },
    {
        id: 5,
        moduleId: 1,
        moduleName: "Module 1: C# Fundamentals",
        title: "5. Operators",
        library: "System",
        objectives: ["ตัวดำเนินการทางคณิตศาสตร์", "ตัวดำเนินการเปรียบเทียบ", "ตัวดำเนินการตรรกศาสตร์"],
        content: [
            { type: "text", text: "Operators หรือ ตัวดำเนินการ คือเครื่องหมายที่ CPU ของเราใช้คำนวณและเปรียบเทียบค่า" },
            { type: "heading", text: "Arithmetic & Logic" },
            { type: "code", code: `int a = 10;\nint b = 3;\n\nConsole.WriteLine(a / b); // หาร (3) *เพราะเป็น int หาร int ได้ int (โดนตัดทศนิยมทิ้ง)\nConsole.WriteLine(a % b); // Modulo หารเอาเศษ (1)\n\n// Logical\nbool hasSword = true;\nbool hasShield = false;\nConsole.WriteLine(hasSword && hasShield); // && (AND) = false\nConsole.WriteLine(hasSword || hasShield); // || (OR) = true` }
        ],
        conceptNote: "การหารตัวเลขที่เป็น <code>int</code> กับ <code>int</code> (เช่น <code>10 / 3</code>) ใน C# ผลลัพธ์จะถูกปัดเศษทิ้งเสมอ (ได้ <code>3</code>) ถ้าคุณต้องการทศนิยม คุณต้องให้ตัวใดตัวหนึ่งเป็น <code>double</code> เช่น <code>10.0 / 3</code> หรือแคสต์ <code>(double)10 / 3</code>",
        exercises: [
            { level: "Medium", instruction: "เขียนโปรแกรมตรวจสอบว่าตัวเลข 15 เป็นเลขคู่หรือเลขคี่ (ใช้ Operator %)", answer: `int num = 15;\nbool isEven = (num % 2) == 0;\nConsole.WriteLine($"Is Even: {isEven}");` }
        ],
        quiz: [
            { question: "10 % 4 จะได้ผลลัพธ์เป็นเท่าไร?", options: ["2", "2.5", "0", "40"], answerIndex: 0, explanation: "เครื่องหมาย % (Modulo) คือการหารเอาเศษ 10 หาร 4 ได้ 2 เศษ 2" }
        ],
        realUseCase: "Logical Operators ใช้สร้างเงื่อนไขในเกม เช่น ผู้เล่นจะเข้าดันเจี้ยนได้ก็ต่อเมื่อ <code>level >= 50 && hasKey == true</code>"
    },
    {
        id: 6,
        moduleId: 2,
        moduleName: "Module 2: Control Flow",
        title: "6. If-Else & Switch Statements",
        library: "System",
        objectives: ["การสร้างเงื่อนไขตัดสินใจด้วย If-Else", "การใช้ Switch statement ในกรณีที่มีเงื่อนไขหลายอย่าง"],
        content: [
            { type: "text", text: "โปรแกรมจะไม่มีทางฉลาดเลย ถ้ามันไม่รู้จักวิธี 'ตัดสินใจ' <strong>Control Flow</strong> เป็นตัวกำหนดทิศทางว่า CPU จะวิ่งไปรันโค้ดบรรทัดไหนต่อไป" },
            { type: "code", code: `int dayOfWeek = 3;\n\n// การใช้ Switch จะอ่านง่ายกว่า If-Else กรณีเช็คตัวแปรเดียว\nswitch (dayOfWeek)\n{\n    case 1:\n        Console.WriteLine("Monday");\n        break;\n    case 2:\n        Console.WriteLine("Tuesday");\n        break;\n    default:\n        Console.WriteLine("Unknown Day");\n        break;\n}` }
        ],
        conceptNote: "ใน <code>switch</code> ของภาษา C# คุณบังคับต้องใส่คำสั่ง <code>break;</code> เสมอเมื่อจบแต่ละ <code>case</code> หากลืมใส่ โปรแกรมจะ Compile ไม่ผ่าน! (ป้องกันข้อผิดพลาดที่รันไหลทะลักหรือ Fall-through ไปรันเคสอื่นต่อ)",
        exercises: [
            { level: "Medium", instruction: "ใช้ if-else ตรวจสอบตัวแปร hp (พลังชีวิต) ถ้า hp > 0 ให้แสดง 'Alive' แต่ถ้า hp <= 0 ให้แสดง 'Dead'", answer: `int hp = 0;\nif (hp > 0) {\n    Console.WriteLine("Alive");\n} else {\n    Console.WriteLine("Dead");\n}` }
        ],
        quiz: [
            { question: "ในคำสั่ง switch ข้อใดที่ใช้สำหรับดักจับกรณีที่ไม่ตรงกับ case ใดๆ เลย?", options: ["else", "catch", "default", "finally"], answerIndex: 2, explanation: "default ใช้ทำหน้าที่เหมือน else สุดท้ายใน if-else statement" }
        ],
        realUseCase: "ในการพัฒนา API ของ E-commerce เราใช้ if-else เพื่อตรวจสอบสิทธิ์ <code>if(user.Role == \"Admin\") { //อนุญาตให้ลบสินค้า }</code>"
    },
    {
        id: 7,
        moduleId: 2,
        moduleName: "Module 2: Control Flow",
        title: "7. Loops: for, while, do-while",
        library: "System",
        objectives: ["เข้าใจหลักการวนซ้ำ (Loop)", "ความต่างระหว่าง for, while, do-while"],
        content: [
            { type: "text", text: "<strong>Loop</strong> (การวนซ้ำ) ช่วยให้คอมพิวเตอร์ทำคำสั่งเดิมเป็นล้านๆ รอบได้ในเสี้ยววินาที" },
            { type: "heading", text: "While vs Do-While" },
            { type: "text", text: "<code>while</code> เช็คเงื่อนไขก่อนทำ (อาจจะไม่ทำเลยสักรอบถ้าเงื่อนไขเป็นเท็จแต่แรก)<br><code>do-while</code> ทำก่อน 1 รอบเสมอ ค่อยเช็คเงื่อนไข" },
            { type: "code", code: `string password;\ndo\n{\n    Console.Write("Enter password: ");\n    password = Console.ReadLine();\n} while (password != "secret123");\nConsole.WriteLine("Access Granted!");` }
        ],
        conceptNote: "ระวัง <strong>Infinite Loop</strong>! ถ้าคุณเขียนเงื่อนไข <code>while(true)</code> แล้วไม่มีคำสั่ง <code>break</code> หรือทางออกให้มันเลย โปรแกรมจะกิน CPU 100% (บน Thread นั้น) และค้างตายในที่สุด!",
        exercises: [
            { level: "Easy", instruction: "ใช้ for loop เพื่อปริ้นสูตรคูณแม่ 2 (ตั้งแต่ 2x1 ถึง 2x12)", answer: `for(int i = 1; i <= 12; i++) {\n    Console.WriteLine($"2 x {i} = {2 * i}");\n}` }
        ],
        quiz: [
            { question: "Loop ประเภทใดที่จะทำงานโค้ดข้างในอย่างน้อยที่สุด 1 รอบแน่นอน?", options: ["for loop", "while loop", "do-while loop", "foreach loop"], answerIndex: 2, explanation: "do-while จะ execute บล็อกของ do ก่อน แล้วค่อยไปเช็คเงื่อนไขที่ while ด้านล่างสุด" }
        ],
        realUseCase: "Game Loop พื้นฐานใช้ <code>while(isGameRunning) { // render, update physics }</code> เพื่อให้เกมเรนเดอร์ภาพ 60 ครั้งต่อวินาทีไปเรื่อยๆ จนกว่าผู้เล่นจะกดปิดเกม"
    },
    {
        id: 8,
        moduleId: 2,
        moduleName: "Module 2: Control Flow",
        title: "8. Jump Statements (break, continue)",
        library: "System",
        objectives: ["การควบคุมลูปอย่างละเอียดด้วย break และ continue"],
        content: [
            { type: "text", text: "เราสามารถขัดจังหวะการทำงานของลูปกลางคันได้ด้วย <strong>Jump Statements</strong>" },
            { type: "text", text: "<ul><li><code>break;</code> - ทำลายทิ้ง! กระโดดออกนอกลูปไปเลย</li><li><code>continue;</code> - ข้ามทิ้ง! ไม่ทำโค้ดบรรทัดล่างสุดในรอบนี้ แล้วกระโดดไปเริ่มรอบใหม่ทันที</li></ul>" },
            { type: "code", code: `for (int i = 1; i <= 5; i++)\n{\n    if (i == 3)\n    {\n        continue; // ถ้าเป็น 3 ให้ข้ามการปริ้นไปรอบที่ 4 เลย\n    }\n    Console.WriteLine(i);\n}\n// ผลลัพธ์: 1, 2, 4, 5 (เลข 3 หายไป)` }
        ],
        conceptNote: "การใช้ <code>break</code> ซ้อนกันหลายลูป (Nested Loops) มันจะเบรคแค่ลูปชั้นในสุด (Inner Loop) ที่มันอยู่เท่านั้น ไม่ได้หยุดทุกระดับ! (ถ้าอยากทะลวงออกทีเดียวต้องใช้ return ไปเลย หรือใช้ตัวแปร flag มาช่วยเช็ค)",
        exercises: [
            { level: "Medium", instruction: "เขียน for loop 1 ถึง 10 แต่ใช้ continue เพื่อข้ามการปริ้นตัวเลขที่เป็นเลขคู่", answer: `for(int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) continue;\n    Console.WriteLine(i);\n}` }
        ],
        quiz: [
            { question: "ถ้าเราต้องการหยุดการทำงานของลูปทั้งหมดและออกไปทำงานบรรทัดถัดไปนอกลูป ต้องใช้คำสั่งใด?", options: ["stop", "break", "continue", "exit"], answerIndex: 1, explanation: "break จะทำลายลูปทันที ส่วน continue แค่ข้ามรอบนั้นเฉยๆ" }
        ],
        realUseCase: "ในการค้นหาข้อมูล (Search) ถ้าเราวนลูปหาข้อมูล 1 ล้านชิ้น แล้วเจอของที่ต้องการในชิ้นที่ 5 เราสามารถใช้ <code>break</code> เพื่อออกจากลูปเลย ไม่ต้องเสียเวลาหาชิ้นที่ 6 ถึงล้าน (Performance Optimization ระดับพื้นฐาน)"
    },
    {
        id: 9,
        moduleId: 3,
        moduleName: "Module 3: Methods & Functions",
        title: "9. Introduction to Methods",
        library: "System",
        objectives: ["การสร้าง Method (ฟังก์ชัน)", "แยกโค้ดเป็นส่วนย่อยให้จัดการง่ายขึ้น (Modular)"],
        content: [
            { type: "text", text: "ใน C# เราเรียกฟังก์ชันว่า <strong>Method (เมธอด)</strong> มันคือบล็อกของโค้ดที่รันก็ต่อเมื่อถูก 'เรียกใช้งาน' (Call) เท่านั้น ช่วยลดความซ้ำซ้อนของโค้ด (DRY - Don't Repeat Yourself)" },
            { type: "heading", text: "การประกาศ Method" },
            { type: "code", code: `class Program\n{\n    // การสร้าง Method แบบไม่มี Return Value (void)\n    static void SayHello()\n    {\n        Console.WriteLine("Hello from Method!");\n    }\n\n    static void Main()\n    {\n        SayHello();\n        SayHello(); // เรียกกี่รอบก็ได้\n    }\n}` }
        ],
        conceptNote: "ที่ต้องใส่ <code>static</code> เพราะว่า <code>Main()</code> ของเราเป็น <code>static</code> (ทำงานได้โดยไม่ต้อง new Object) Method อื่นที่จะถูก Main เรียกใช้ตรงๆ ในคลาสเดียวกันก็เลยบังคับว่าต้องเป็น <code>static</code> ไปด้วย",
        exercises: [
            { level: "Easy", instruction: "สร้าง Method ชื่อ PrintWarning() ที่ปริ้นคำว่า 'WARNING: System Error' และเรียกใช้ 1 ครั้งใน Main()", answer: `static void PrintWarning() {\n    Console.WriteLine("WARNING: System Error");\n}\n\nstatic void Main() {\n    PrintWarning();\n}` }
        ],
        quiz: [
            { question: "คำสำคัญใดที่บอกว่า Method นี้จะไม่มีการคืนค่ากลับไป?", options: ["null", "static", "void", "empty"], answerIndex: 2, explanation: "void ใช้ระบุว่า method นี้ทำการ execute คำสั่งภายในเฉยๆ ไม่มี return type" }
        ],
        realUseCase: "เมื่อโค้ดในการสร้างและวาดหน้าจอ GUI มีขนาดยาวกว่า 200 บรรทัด โปรแกรมเมอร์จะจับหั่นแบ่งเป็น Method ย่อยๆ เช่น <code>InitButtons()</code>, <code>LoadData()</code> เพื่อให้อ่านง่ายและซ่อมบำรุงง่ายในอนาคต"
    },
    {
        id: 10,
        moduleId: 3,
        moduleName: "Module 3: Methods & Functions",
        title: "10. Parameters & Return Values",
        library: "System",
        objectives: ["การรับข้อมูลเข้า (Parameters)", "การส่งข้อมูลออก (Return)"],
        content: [
            { type: "text", text: "Method จะมีประโยชน์สุดๆ เมื่อมันสามารถ 'รับค่า' (Input) ไปคำนวณ และ 'ส่งค่า' (Output) กลับมาได้" },
            { type: "heading", text: "Parameters และ Return" },
            { type: "text", text: "ถ้ามี Output คุณต้องเปลี่ยนจาก <code>void</code> เป็น Data Type (เช่น <code>int</code>, <code>string</code>) ที่จะส่งกลับ และใช้คำสั่ง <code>return</code>" },
            { type: "code", code: `class Program\n{\n    // Method รับ int 2 ตัว และคืนค่า int กลับไป\n    static int AddNumbers(int x, int y)\n    {\n        int sum = x + y;\n        return sum;\n    }\n\n    static void Main()\n    {\n        // นำค่าที่ return กลับมา ไปใส่ในตัวแปร result\n        int result = AddNumbers(10, 5);\n        Console.WriteLine($"Result is {result}"); // Result is 15\n    }\n}` }
        ],
        conceptNote: "ทันทีที่ CPU อ่านเจอคำสั่ง <code>return</code> ใน Method มันจะ <strong>กระโดดเด้งออกทันที!</strong> โค้ดใดๆ ก็ตามที่อยู่ข้างล่างคำสั่ง <code>return</code> จะไม่มีวันถูกรัน (เป็น Unreachable Code)",
        exercises: [
            { level: "Medium", instruction: "สร้าง Method ชื่อ Multiply ที่รับ int 2 ตัว คูณกัน และ return ค่ากลับไป", answer: `static int Multiply(int a, int b) {\n    return a * b;\n}` }
        ],
        quiz: [
            { question: "ถ้า Method ประกาศไว้ว่า `static string GetName()` ข้อใดกล่าวถูกต้อง?", options: ["Method นี้จะไม่คืนค่าใดๆ", "Method นี้ต้องมีคำสั่ง return ที่ส่งค่าชนิดข้อความ (string) กลับ", "Method นี้รับ Parameter เป็น string", "Method นี้เป็น constructor"], answerIndex: 1, explanation: "Return type ที่ระบุหน้าชื่อ method คือชนิดข้อมูลที่บังคับต้อง return ออกไป ในข้อนี้คือ string" }
        ],
        realUseCase: "ระบบ API คืนค่าต่างๆ (Response): <code>User GetUserInfo(int id) { return db.Find(id); }</code>"
    },
    {
        id: 11,
        moduleId: 3,
        moduleName: "Module 3: Methods & Functions",
        title: "11. Method Overloading",
        library: "System",
        objectives: ["การสร้าง Method ชื่อเดียวกันแต่รับค่าไม่เหมือนกัน (Overloading)"],
        content: [
            { type: "text", text: "<strong>Method Overloading</strong> ช่วยให้เรา <strong>ใช้ชื่อ Method เดียวกันได้</strong> ตราบใดที่ Parameters ไม่เหมือนกัน (จำนวนไม่เท่ากัน หรือชนิดข้อมูลต่างกัน)" },
            { type: "heading", text: "ทำไมต้อง Overload?" },
            { type: "text", text: "ถ้าไม่มีมัน เราต้องสร้าง <code>AddInts(int a, int b)</code>, <code>AddDoubles(double a, double b)</code> ทำให้คนเรียกใช้จำชื่อยาก แต่พอมี Overload เราตั้งชื่อว่า <code>Add()</code> ทั้งคู่ได้เลย! Compiler จะใช้ความฉลาดเลือกตัวที่ถูกต้องให้เอง" },
            { type: "code", code: `class Program\n{\n    static int Add(int a, int b) { return a + b; }\n    static double Add(double a, double b) { return a + b; }\n\n    static void Main()\n    {\n        int sum1 = Add(5, 10);          // เรียกแบบที่ 1 (int)\n        double sum2 = Add(5.5, 2.3);    // เรียกแบบที่ 2 (double)\n    }\n}` }
        ],
        conceptNote: "การเปลี่ยนแค่ Return Type อย่างเดียว <strong>ไม่นับ</strong> เป็นการ Overloading นะครับ! (เช่น <code>int Add(int a)</code> กับ <code>double Add(int a)</code>) แบบนี้ Compiler จะสับสนและขึ้น Error แน่นอน",
        exercises: [
            { level: "Hard", instruction: "สร้าง Overload ของ Method 'PrintArea' 2 ตัว: 1. รับ int 1 ตัว (พื้นที่สี่เหลี่ยมจัตุรัส=x*x)  2. รับ int 2 ตัว (กว้างxยาว)", answer: `static void PrintArea(int side) {\n    Console.WriteLine(side * side);\n}\nstatic void PrintArea(int w, int h) {\n    Console.WriteLine(w * h);\n}` }
        ],
        quiz: [
            { question: "ข้อใดคือความหมายของ Method Overloading?", options: ["การสร้าง Method ที่ใช้ชื่อเดียวกัน แต่ Parameter ต่างกัน", "การเรียกใช้ Method ซ้อนกัน", "การกำหนดค่าให้ Parameter แบบ Default", "การสืบทอด Method จาก Class อื่น"], answerIndex: 0, explanation: "Overloading คือการทำ Method ชื่อเหมือนกัน (Signature Name) แต่รับ Argument คนละแบบ เพื่อความสะดวกในการเรียกใช้" }
        ],
        realUseCase: "ไลบรารี <code>System.Console</code> ออกแบบ <code>WriteLine()</code> แบบ Overloading ไว้ถึง 18 รูปแบบ! เพื่อให้มันรองรับการปริ้นค่า bool, int, double, string หรืออะไรก็ได้โดยเราไม่ต้องเปลี่ยนชื่อเมธอดเลย"
    }
];

window.lessonsData = window.lessonsData.filter(l => l.moduleId > 3);
window.lessonsData.unshift(...part1);
