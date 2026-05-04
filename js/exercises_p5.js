Object.assign(exerciseExpansion, {
    // Adding 15 MORE exercises to Lesson 1 to hit the 25 target
    1: [
        ...(exerciseExpansion[1] || []), // keep previous 10
        {
            type: "Reverse Engineering", difficulty: "Hard",
            instruction: "ถ้าผลลัพธ์บนหน้าจอคือ:\nLoading...\n[==========] 100%\nDone!\nจงเขียนโค้ดที่สร้างผลลัพธ์นี้เป๊ะๆ",
            answer: "Console.WriteLine(\"Loading...\");\nConsole.WriteLine(\"[==========] 100%\");\nConsole.WriteLine(\"Done!\");",
            explanation: "การทำ Reverse Engineering ผลลัพธ์ UI ช่วยให้คุณเข้าใจการเรียงลำดับการสั่งพิมพ์ข้อความ"
        },
        {
            type: "Refactoring", difficulty: "Medium",
            instruction: "โค้ดนี้ทำงานได้ แต่มันอ่านยากมาก จง Refactor (จัดระเบียบ) ให้ถูกต้องตามมาตรฐาน C#",
            codeSnippet: "class App{static void Main(){Console.WriteLine(\"Start\");Console.WriteLine(\"End\");}}",
            answer: "class App\n{\n    static void Main()\n    {\n        Console.WriteLine(\"Start\");\n        Console.WriteLine(\"End\");\n    }\n}",
            explanation: "C# ไม่บังคับการขึ้นบรรทัดใหม่ แต่ในโลกการทำงานจริง โค้ดที่จัด Indent (ย่อหน้า) และขึ้นบรรทัดใหม่เท่านั้นที่จะผ่าน Code Review"
        },
        {
            type: "Performance Fix", difficulty: "Medium",
            instruction: "การเรียก Console.WriteLine() 100 ครั้งติดต่อกัน ทำให้โปรแกรมช้า เพราะหน้าจอทำงานหนัก จะปรับปรุงอย่างไร?",
            hint: "รวมเป็น String ก้อนเดียวก่อนปริ้น",
            answer: "string output = \"Line 1\\nLine 2\\n...Line 100\";\nConsole.WriteLine(output);",
            explanation: "การ I/O (Input/Output) กับหน้าจอเป็น Operation ที่ช้ามาก การวาดหน้าจอ 1 ครั้งด้วยข้อความยาวๆ ย่อมเร็วกว่าการสั่งวาด 100 ครั้ง"
        },
        {
            type: "Security Basics", difficulty: "Hard",
            instruction: "ระบบบันทึกรหัสผ่านนี้มีจุดอ่อนอะไร ถ้ารันบนเครื่องเซิร์ฟเวอร์สาธารณะ?",
            codeSnippet: "Console.Write(\"Enter password: \");\nstring pwd = Console.ReadLine();\nConsole.WriteLine(\"Password \" + pwd + \" saved!\");",
            answer: "การพิมพ์รหัสผ่านออกมาบนหน้าจอตรงๆ ทำให้คนที่เดินผ่านไปมา หรือระบบ Logging บันทึกรหัสผ่านลงในไฟล์ได้ (Plaintext leak)",
            explanation: "ไม่ควรนำข้อมูล Sensitive มาปริ้นออก Console เด็ดขาด เพราะมันอาจถูกดักจับหรือเก็บลง Log Server ได้"
        },
        {
            type: "Concurrency Bug", difficulty: "Challenge",
            instruction: "เกริ่นนำ: แม้คุณยังไม่ได้เรียนเรื่อง Thread แต่ให้ลองเดาว่า ถ้ามี 2 โปรแกรมย่อยพยายามสั่ง Console.WriteLine() พร้อมกันในเสี้ยววินาทีเดียวกัน จะเกิดอะไรขึ้น?",
            answer: "ข้อความอาจจะตีกันสลับตัวอักษรมั่วไปหมด หรือแย่งกันขึ้นบรรทัดใหม่",
            explanation: "Console ไม่ได้ทำงานแบบ Thread-safe 100% ในทุกกรณี การสั่งพิมพ์ข้อความพร้อมกันจากหลาย Thread อาจทำให้ Output บนหน้าจอเละเทะได้"
        },
        {
            type: "Predict", difficulty: "Easy",
            instruction: "Console.Write(\"\\n\"); กับ Console.WriteLine(); ให้ผลลัพธ์เหมือนหรือต่างกัน?",
            answer: "เหมือนกัน",
            explanation: "อักขระ \\n (Newline) คือการขึ้นบรรทัดใหม่ ซึ่ง WriteLine() ทำหน้าที่แทรก \\n ต่อท้ายให้อัตโนมัติอยู่แล้ว"
        },
        {
            type: "FillBlank", difficulty: "Medium",
            instruction: "เติมโค้ดเพื่อพิมพ์เครื่องหมายคำพูด (Double quote) ออกทางหน้าจอ (ผลลัพธ์ต้องพิมพ์คำว่า: He said \"Hello\")",
            codeSnippet: "Console.WriteLine(\"He said _______Hello_______\");",
            answer: "\\\"Hello\\\"",
            explanation: "เพื่อไม่ให้ C# สับสนกับเครื่องหมายเปิดปิด String ปกติ เราต้องใส่ \\ (Backslash) นำหน้าเพื่อ Escape character พิเศษเสมอ"
        },
        {
            type: "Debug", difficulty: "Medium",
            instruction: "แก้ Error: Expected class, delegate, enum, interface, or struct",
            codeSnippet: "using System;\nConsole.WriteLine(\"Test\");",
            hint: "ใน C# เวอร์ชันเก่า โค้ดลอยๆ ไม่ได้อยู่ใน Class ทำงานได้ไหม?",
            answer: "ใน C# เวอร์ชันเก่ากว่า 9.0 ทุกคำสั่งต้องถูกห่อหุ้มอยู่ภายใน class และ method Main() เสมอ",
            explanation: "หากไม่ใช่ C#9 Top-level statements การเขียนโค้ดลอยๆ นอกคลาสจะทำให้คอมไพเลอร์ไม่รู้ว่าจะจัดโครงสร้างโปรแกรมอย่างไร"
        },
        {
            type: "Code Writing", difficulty: "Medium",
            instruction: "วาดรูปสามเหลี่ยมมุมฉากด้วยดอกจัน (*) ความสูง 3 บรรทัด โดยใช้ WriteLine เพียง 3 บรรทัด",
            answer: "Console.WriteLine(\"*\");\nConsole.WriteLine(\"**\");\nConsole.WriteLine(\"***\");",
            explanation: "นี่คือจุดเริ่มต้นของการคิดแบบคอมพิวเตอร์กราฟิก ว่าหน้าจอเกิดจากการต่อจุด/ตัวอักษรทีละบรรทัด"
        },
        {
            type: "Concept", difficulty: "Hard",
            instruction: "ถ้าคุณเขียนโปรแกรม C# บน Windows โปรแกรมนั้นจะนำไปรันบน Mac ได้เลยหรือไม่?",
            answer: "ได้ ถ้าคุณรันผ่าน .NET Core หรือ .NET 5+ ขึ้นไป (Cross-Platform)",
            explanation: "สมัยก่อน .NET Framework ผูกติดกับ Windows เท่านั้น แต่ปัจจุบัน .NET ได้ถูกสร้างใหม่ให้รันได้ทุกระบบปฏิบัติการผ่าน CLR ประจำเครื่องนั้นๆ"
        },
        {
            type: "Reverse Engineering", difficulty: "Medium",
            instruction: "ให้โค้ด C++ นี้มา `cout << \"Hello\";` จงแปลงเป็นโค้ด C# ที่ทำงานเหมือนกัน",
            answer: "Console.Write(\"Hello\");",
            explanation: "การย้ายภาษา (Porting) อาศัยความเข้าใจไลบรารีพื้นฐาน ใน C++ ใช้ I/O stream (cout) ใน C# ใช้ System.Console"
        },
        {
            type: "Refactoring", difficulty: "Easy",
            instruction: "ลดรูปโค้ดให้สั้นลงโดยไม่เสียการทำงาน",
            codeSnippet: "System.Console.WriteLine(\"A\");\nSystem.Console.WriteLine(\"B\");",
            answer: "ใส่ using System; ไว้บรรทัดแรก แล้วลบคำว่า System. ออกให้หมด",
            explanation: "คำสั่ง using ช่วยลดความยาวของโค้ดลงได้อย่างมหาศาล"
        },
        {
            type: "Concept", difficulty: "Medium",
            instruction: "ทำไมถึงบอกว่าภาษา C# เป็น Strongly-Typed?",
            answer: "เพราะทุกอย่างต้องมีการประกาศชนิด (Type) ที่ชัดเจนล่วงหน้า",
            explanation: "คอมไพเลอร์จะตรวจจับบั๊กจากการใส่ข้อมูลผิดประเภทได้ตั้งแต่ก่อนรันโปรแกรม ทำให้เกิดระบบที่เสถียรกว่า (Stable)"
        },
        {
            type: "Debug", difficulty: "Hard",
            instruction: "ทำไมโค้ดนี้ถึงรันแล้วพัง (Runtime Error)?",
            codeSnippet: "class Program {\n    static void Main(string[] args) {\n        Console.WriteLine(args[0]);\n    }\n}",
            answer: "เพราะไม่ได้ส่ง Argument เข้ามาตอนรันโปรแกรม (Index Out Of Range)",
            explanation: "args คือข้อมูลที่ส่งเข้ามาพร้อมคำสั่งรันโปรแกรม ถ้าเราเข้าถึง args[0] โดยที่มันว่างเปล่า โปรแกรมจะพังทันที"
        },
        {
            type: "Challenge", difficulty: "Challenge",
            instruction: "เขียนหน้าจอแสดงเมนู 3 ตัวเลือก พร้อมเว้นกรอบสวยงาม",
            answer: "Console.WriteLine(\"=================\");\nConsole.WriteLine(\"| 1. Start Game |\");\nConsole.WriteLine(\"| 2. Load Game  |\");\nConsole.WriteLine(\"| 3. Exit       |\");\nConsole.WriteLine(\"=================\");",
            explanation: "Console UI (CUI) เป็นพื้นฐานที่ใช้ในการทำเครื่องมือ CLI (Command Line Interface) ของนักพัฒนาจริง"
        }
    ]
});
