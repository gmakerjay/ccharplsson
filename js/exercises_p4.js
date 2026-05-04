Object.assign(exerciseExpansion, {
    // Lesson 9: Introduction to Methods
    9: [
        {
            type: "Concept", difficulty: "Easy",
            instruction: "คอนเซปต์ 'DRY' (Don't Repeat Yourself) เกี่ยวข้องกับการสร้าง Method อย่างไร?",
            answer: "Method ช่วยให้เราสามารถรวบรวมชุดคำสั่งที่ต้องใช้บ่อยๆ ไว้ที่เดียว (ลดโค้ดซ้ำ) เมื่อต้องการใช้งานก็แค่ 'เรียกชื่อ' Method นั้น",
            explanation: "ถ้าพบว่ามีการก็อปปี้โค้ดชุดเดียวกันไปวางไว้มากกว่า 1 ที่ในโปรเจกต์ แสดงว่าถึงเวลาต้องสร้าง Method เพื่อครอบมันไว้แล้ว!"
        },
        {
            type: "Predict", difficulty: "Medium",
            instruction: "ถ้าเรารันโปรแกรมนี้ สิ่งที่จะพิมพ์ออกมาคืออะไร?",
            codeSnippet: "static void SayHello() {\n    Console.WriteLine(\"A\");\n}\nstatic void Main() {\n    Console.WriteLine(\"B\");\n    SayHello();\n    Console.WriteLine(\"C\");\n}",
            answer: "B A C",
            explanation: "โปรแกรม C# จะเริ่มรันที่ Main เสมอ มันจะพิมพ์ B ก่อน จากนั้นค่อยกระโดดเข้าไปทำงานใน SayHello เพื่อพิมพ์ A เมื่อทำเสร็จก็กลับออกมาพิมพ์ C"
        },
        {
            type: "Debug", difficulty: "Medium",
            instruction: "ทำไมโปรแกรมนี้คอมไพล์ไม่ผ่าน? (Error: An object reference is required for the non-static field, method, or property)",
            codeSnippet: "class Program {\n    void PrintStatus() {\n        Console.WriteLine(\"Active\");\n    }\n    static void Main() {\n        PrintStatus();\n    }\n}",
            hint: "คำว่า static หมายถึงอะไร?",
            answer: "PrintStatus ไม่ได้ถูกประกาศเป็น static",
            explanation: "Main() เป็น static (ทำงานได้โดยไม่ต้อง new) ดังนั้นมันจึงไม่สามารถมองเห็นหรือเรียกใช้ Method ธรรมดาที่ไม่ได้เป็น static ในคลาสเดียวกันได้ (เว้นแต่จะมีการ new Program() ก่อน)"
        },
        {
            type: "Library", difficulty: "Easy",
            instruction: "สมมติว่าคุณสร้าง Method ชื่อ PlaySound() ถ้าคุณต้องการให้ Method นี้สามารถเรียกไฟล์เสียงจาก Harddisk ได้ คุณต้องใช้ Library ใดในการเปิดไฟล์?",
            answer: "System.IO",
            explanation: "System.IO (Input/Output) ใช้จัดการการเปิดไฟล์ อ่าน เขียน ทั้งหมด"
        },
        {
            type: "FillBlank", difficulty: "Easy",
            instruction: "เติมคำสงวน (Keyword) ที่บ่งบอกว่า Method นี้จะไม่มีการโยนผลลัพธ์ใดๆ กลับออกมาให้คนเรียก",
            codeSnippet: "static _______ ShowMenu() {\n    Console.WriteLine(\"1. Start\");\n    Console.WriteLine(\"2. Exit\");\n}",
            answer: "void",
            explanation: "void แปลว่า ความว่างเปล่า Method ที่เป็น void จะทำหน้าที่แค่ 'รันคำสั่ง' แล้วจบไป"
        },
        {
            type: "Code Writing", difficulty: "Medium",
            instruction: "จงสร้าง Method ชื่อ 'ClearScreen' ให้เป็นแบบ static void และภายใน Method ให้ทำการล้างหน้าจอและพิมพ์ข้อความ 'Screen Cleared'",
            answer: "static void ClearScreen() {\n    Console.Clear();\n    Console.WriteLine(\"Screen Cleared\");\n}",
            explanation: "การห่อหุ้มคำสั่งพื้นฐาน (Wrapper) เป็นเทคนิคหนึ่งในการสร้าง Framework ของตัวเอง"
        },
        {
            type: "Concept", difficulty: "Hard",
            instruction: "เราสามารถสร้าง Method ซ้อนอยู่ข้างใน Method ได้หรือไม่? (เช่น สร้าง Method อยู่ใน Main())",
            answer: "ได้ (เรียกว่า Local Functions)",
            explanation: "ใน C# เวอร์ชัน 7.0 ขึ้นไป อนุญาตให้สร้าง Local Function ซ้อนไว้ข้างในได้ ซึ่งมีประโยชน์ในการแยก Logic เล็กๆ ที่ไม่อยากให้ Method อื่นเห็น"
        },
        {
            type: "Predict", difficulty: "Medium",
            instruction: "ถ้ารันโค้ดต่อไปนี้ โปรแกรมจะจบการทำงานตอนไหน?",
            codeSnippet: "static void RunForever() {\n    RunForever();\n}\nstatic void Main() {\n    RunForever();\n}",
            answer: "เมื่อเกิด StackOverflowException (RAM เต็มในส่วน Stack)",
            explanation: "นี่คือการทำ Recursive (เรียกตัวเองซ้ำ) ที่ไม่มีทางออก (Base case) การเรียกแต่ละครั้งจะใช้ RAM ไปเรื่อยๆ จนเต็มและระเบิดทันที"
        },
        {
            type: "Debug", difficulty: "Medium",
            instruction: "โปรแกรมเมอร์ต้องการพิมพ์คำว่า 'Welcome' 5 ครั้ง แต่ไม่มีอะไรแสดงบนหน้าจอเลย ทำไม?",
            codeSnippet: "static void Main() {\n    // โปรแกรมจบแล้ว\n}\nstatic void SayWelcome() {\n    for(int i=0; i<5; i++) Console.WriteLine(\"Welcome\");\n}",
            answer: "เพราะไม่ได้สั่ง 'เรียกใช้งาน (Call)' Method SayWelcome() ใน Main()",
            explanation: "Method จะไม่ทำงานด้วยตัวเองจนกว่าจะถูกเรียก! โค้ดจะถูกโหลดไว้ใน Memory รอเฉยๆ",
            commonMistake: "เขียน Method เสร็จแล้วลืมเรียกใช้ใน Main หรือ Game Loop"
        },
        {
            type: "Challenge", difficulty: "Challenge",
            instruction: "RPG System: สร้าง Method `ShowPlayerStats()` ที่ข้างในทำการพิมพ์ระดับเลือด (hp = 100) และมานา (mp = 50) และให้คุณเรียกใช้ Method นี้ 2 ครั้งใน Main() โดยคั่นกลางด้วย Console.WriteLine(\"Level Up!\");",
            answer: "static void ShowPlayerStats() {\n    int hp = 100; int mp = 50;\n    Console.WriteLine($\"HP: {hp}, MP: {mp}\");\n}\nstatic void Main() {\n    ShowPlayerStats();\n    Console.WriteLine(\"Level Up!\");\n    ShowPlayerStats();\n}",
            explanation: "นี่คือจุดแข็งของ Method คุณสามารถ Reuse โค้ดเดิมได้ซ้ำๆ อย่างเป็นระเบียบ"
        }
    ],

    // Lesson 10: Parameters & Return Values
    10: [
        {
            type: "Concept", difficulty: "Easy",
            instruction: "ความแตกต่างระหว่าง Parameters และ Arguments คืออะไร?",
            answer: "Parameters คือตัวแปรที่รับค่าตอน 'สร้าง' Method ส่วน Arguments คือค่าที่ส่งเข้าไปตอน 'เรียก' Method",
            explanation: "ตอนสร้าง: void Heal(int amount) (amount คือ Parameter). ตอนเรียก: Heal(50) (50 คือ Argument)"
        },
        {
            type: "Code Writing", difficulty: "Medium",
            instruction: "สร้าง Method ชื่อ 'CalculateDamage' รับค่า (int baseDamage, int level) ให้ Return ค่าผลคูณของสองตัวนี้กลับไป",
            answer: "static int CalculateDamage(int baseDamage, int level) {\n    return baseDamage * level;\n}",
            explanation: "ต้องระบุ Return Type (int) ให้ตรงกับชนิดข้อมูลที่คุณจะ return เสมอ"
        },
        {
            type: "Debug", difficulty: "Hard",
            instruction: "ทำไมโค้ดนี้ถึงขึ้น Error 'Not all code paths return a value' ?",
            codeSnippet: "static int GetScore(bool isWin) {\n    if (isWin) {\n        return 100;\n    }\n}",
            hint: "ถ้า isWin เป็น false จะเกิดอะไรขึ้น?",
            answer: "ในกรณีที่ isWin เป็น false จะไม่มีคำสั่ง return ทำให้ C# ไม่ยอมให้ผ่าน",
            explanation: "Method ที่มี Return type ถูกบังคับให้ 'ต้องคืนค่าเสมอไม่ว่าจะเข้าเงื่อนไขใดก็ตาม' ต้องแก้โดยเพิ่ม return 0; ด้านนอก if ด้วย",
            commonMistake: "ลืมใส่ค่า Return สำรอง (Fallback return) ไว้ด้านล่างสุดของเงื่อนไข"
        },
        {
            type: "Predict", difficulty: "Medium",
            instruction: "ถ้า Method โดนเรียก จะพิมพ์เลข 2 หรือไม่?",
            codeSnippet: "static void TestReturn() {\n    Console.WriteLine(1);\n    return;\n    Console.WriteLine(2);\n}",
            answer: "ไม่พิมพ์เลข 2",
            explanation: "คำสั่ง return ทำหน้าที่ 'เตะ' ออกจาก Method ทันที (Exit prematurely) โค้ดใดๆ ก็ตามที่อยู่ข้างใต้จะไม่มีวันทำงาน (Unreachable code)"
        },
        {
            type: "FillBlank", difficulty: "Easy",
            instruction: "เติม Type ให้ถูกต้องเพื่อให้ Method นี้คำนวณและส่งข้อความกลับ",
            codeSnippet: "static _______ GetGreeting(string name) {\n    return \"Hello \" + name;\n}",
            answer: "string",
            explanation: "ผลลัพธ์ที่ได้จาก \"Hello \" + name เป็นข้อความ (String) ดังนั้นต้องระบุ Return Type เป็น string"
        },
        {
            type: "Library", difficulty: "Medium",
            instruction: "ถ้าคุณเขียน Method ที่รับค่าเป็น 'รายชื่อคนทั้งหมด' (List<string>) คุณต้อง Import Namespace ใดก่อน?",
            answer: "System.Collections.Generic",
            explanation: "โครงสร้างข้อมูลแบบยืดหดได้อย่าง List จะต้องใช้ Namespace นี้เสมอ"
        },
        {
            type: "Predict", difficulty: "Hard",
            instruction: "ถ้ารันโค้ดนี้ ค่าของ hp ใน Main จะเปลี่ยนเป็น 150 ไหม?",
            codeSnippet: "static void Heal(int hp) { hp = hp + 50; }\nstatic void Main() {\n    int hp = 100;\n    Heal(hp);\n    Console.WriteLine(hp);\n}",
            answer: "ไม่เปลี่ยน (ปริ้น 100)",
            explanation: "ตัวแปรประเภท struct พื้นฐานอย่าง int จะถูกส่งผ่านค่า (Pass by Value) การเปลี่ยนค่าของ parameter ใน Method จะไม่กระทบตัวแปรต้นฉบับ ถ้าอยากให้เปลี่ยนต้องใช้คำว่า 'ref int hp' หรือให้ Method Return ค่ากลับมา"
        },
        {
            type: "Concept", difficulty: "Hard",
            instruction: "คีย์เวิร์ด 'out' ใน Parameter ใช้ทำอะไร?",
            answer: "ใช้บังคับให้ Method ต้องโยนค่ากลับออกมาทาง Parameter ด้วย ทำให้ Method สามารถ 'Return ค่าได้หลายตัว' พร้อมกัน",
            explanation: "คล้ายกับการส่งกล่องเปล่าเข้าไปใน Method เพื่อให้ Method ใส่ของกลับออกมา (เช่น int.TryParse(..., out int result))"
        },
        {
            type: "Debug", difficulty: "Medium",
            instruction: "โปรแกรมนี้ Error ตอนเรียกใช้: 'Argument 1: cannot convert from string to int'",
            codeSnippet: "static void CheckAge(int age) { ... }\nstatic void Main() {\n    CheckAge(\"25\");\n}",
            answer: "ต้องส่งตัวเลข 25 เข้าไป ไม่ใช่ String \"25\"",
            explanation: "C# เป็น Strongly Typed ถ้า Parameter รอรับ int เราห้ามส่ง string เข้าไปเด็ดขาด (เว้นแต่จะ int.Parse() ก่อน)"
        },
        {
            type: "Challenge", difficulty: "Challenge",
            instruction: "RPG System: จงเขียน Method `bool TryFlee(int speed, int monsterSpeed)` คืนค่าเป็น true ถ้าสปีดของคุณมากกว่ามอนสเตอร์ แต่ถ้าเท่ากันหรือน้อยกว่าให้คืนค่า false",
            answer: "static bool TryFlee(int speed, int monsterSpeed) {\n    return speed > monsterSpeed;\n}",
            explanation: "ไม่ต้องเขียน if-else ยาวๆ เพราะสมการ speed > monsterSpeed จะได้ผลลัพธ์ประเมินออกมาเป็น bool ให้ทันที (Clean Code)"
        }
    ]
});
