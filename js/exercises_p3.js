Object.assign(exerciseExpansion, {
    // Lesson 7: Loops: for, while, do-while
    7: [
        {
            type: "Concept", difficulty: "Easy",
            instruction: "ถ้าเรารู้ล่วงหน้าอย่างแน่นอนว่าจะต้องวนกี่รอบ (เช่น วน 10 รอบ) ควรเลือกใช้ Loop แบบใดเหมาะสมที่สุด?",
            answer: "for loop",
            explanation: "for loop ถูกออกแบบมาให้จัดการกับจำนวนรอบที่ชัดเจน เพราะมีการรวมส่วนกำหนดค่าเริ่มต้น, เงื่อนไข, และการเพิ่มค่า (i++) ไว้ในบรรทัดเดียว ทำให้โค้ดกระชับที่สุด"
        },
        {
            type: "Predict", difficulty: "Medium",
            instruction: "จะเกิดอะไรขึ้นถ้ารันโค้ดนี้?",
            codeSnippet: "int x = 5;\nwhile(x < 3) {\n    Console.WriteLine(\"Hello\");\n}",
            answer: "ไม่มีอะไรเกิดขึ้นเลย โปรแกรมจะข้ามไปบรรทัดต่อไป",
            explanation: "while loop จะทำการ 'ตรวจสอบเงื่อนไขก่อนรันเสมอ' ในเคสนี้ 5 < 3 เป็น false ตั้งแต่ต้น มันจึงไม่เข้าไปทำงานในวงเล็บปีกกาเลยแม้แต่รอบเดียว"
        },
        {
            type: "Debug", difficulty: "Hard",
            instruction: "เกมเกิดอาการค้าง (Freezes) ปิดไม่ได้ CPU วิ่ง 100% ทันทีที่ผู้เล่นเข้าเขตต่อสู้",
            codeSnippet: "int monsterHp = 10;\nwhile (monsterHp > 0) {\n    Console.WriteLine(\"Attacking!\");\n}",
            answer: "ลืมหักเลือดมอนสเตอร์ (Infinite Loop)",
            explanation: "เพราะค่า monsterHp ยังคงเป็น 10 เสมอ (10 > 0 ตลอดกาล) ลูปจึงไม่มีทางออก วิธีแก้คือต้องใส่คำสั่งหักเลือดเช่น monsterHp -= 5; เข้าไปในลูปด้วย",
            commonMistake: "ลืมอัปเดตตัวแปรที่เป็นเงื่อนไขหลุดจากลูป"
        },
        {
            type: "Code Writing", difficulty: "Easy",
            instruction: "เขียน do-while ลูปเพื่อปริ้นตัวเลข 1 ถึง 5",
            answer: "int i = 1;\ndo {\n    Console.WriteLine(i);\n    i++;\n} while (i <= 5);",
            explanation: "do-while จะทำงานก่อน 1 รอบ แล้วค่อยเช็ค i <= 5 ด้านล่าง"
        },
        {
            type: "Concept", difficulty: "Medium",
            instruction: "ความแตกต่างเพียงอย่างเดียวระหว่าง while กับ do-while คืออะไร?",
            answer: "do-while รับประกันว่าจะต้องทำงานในลูป 'อย่างน้อยที่สุด 1 รอบแน่นอน' ไม่ว่าเงื่อนไขใน while จะเป็นเท็จตั้งแต่แรกหรือไม่ก็ตาม",
            explanation: "เหมาะกับการทำหน้าจอให้ผู้ใช้กรอกรหัสผ่าน เพราะผู้ใช้อย่างน้อยต้องเห็นช่องกรอกรหัสผ่าน 1 ครั้งก่อน ถึงจะตรวจสอบว่าพิมพ์ถูกไหม"
        },
        {
            type: "Library", difficulty: "Medium",
            instruction: "ถ้าเราต้องการหยุดพักลูปแต่ละรอบ (Pause) เป็นเวลา 1 วินาทีเพื่อทำอนิเมชัน เราควรใช้ Method อะไร จาก Library ใด?",
            answer: "ใช้ Thread.Sleep(1000) จาก System.Threading",
            explanation: "เป็นวิธีคลาสสิก (แต่บล็อก Thread หลัก) ในการหน่วงเวลา หรือถ้าเขียนแบบ Async ก็ใช้ await Task.Delay(1000) จาก System.Threading.Tasks"
        },
        {
            type: "FillBlank", difficulty: "Medium",
            instruction: "เติมค่าใน for loop เพื่อให้นับถอยหลังจาก 10 ถึง 1",
            codeSnippet: "for(int i = 10; _______; _______) {\n    Console.WriteLine(i);\n}",
            answer: "i >= 1; i--",
            explanation: "ใช้ i >= 1 เป็นเงื่อนไขในการหลุด และใช้ i-- (ลดค่าลงทีละ 1) หลังจบรอบ"
        },
        {
            type: "Debug", difficulty: "Medium",
            instruction: "ทำไม for loop นี้ถึงรันแล้วเกิดตัวเลขกระโดด 1, 3, 5?",
            codeSnippet: "for(int i=0; i<5; i+=2) {\n    Console.WriteLine(i+1);\n}",
            answer: "เพราะส่วนเพิ่มค่าถูกตั้งเป็น i += 2",
            explanation: "ลูปไม่ได้บังคับว่าต้องบวก 1 (i++) เสมอไป ในกรณีนี้เราสั่งบวกทีละ 2 ทำให้ค่า i เป็น 0, 2, 4 เมื่อนำไป +1 ก่อนพิมพ์ จึงออกมาเป็น 1, 3, 5"
        },
        {
            type: "Code Writing", difficulty: "Hard",
            instruction: "เขียน for loop ธรรมดาซ้อนกัน 2 ชั้น (Nested Loops) เพื่อวาดตารางขนาด 3x3 ออกทาง Console (ใช้ Console.Write(\"*\");)",
            answer: "for(int row = 0; row < 3; row++) {\n    for(int col = 0; col < 3; col++) {\n        Console.Write(\"*\");\n    }\n    Console.WriteLine(); // ตัดขึ้นบรรทัดใหม่เมื่อจบ 1 แถว\n}",
            explanation: "Nested loops คือหัวใจหลักของการประมวลผลหน้าจอภาพ 2 มิติ (แกน X และ แกน Y)"
        },
        {
            type: "Challenge", difficulty: "Challenge",
            instruction: "ระบบ Login: สร้างลูปแบบ while(true) ที่ให้ผู้ใช้กรอกรหัส ถ้ากรอก '1234' ให้พิมพ์ 'Success' แล้วสั่ง break (ออกจากลูป) ถ้าผิดให้พิมพ์ 'Wrong!' แล้ววนถามใหม่ไปเรื่อยๆ",
            answer: "while(true) {\n    Console.Write(\"Password: \");\n    string p = Console.ReadLine();\n    if(p == \"1234\") {\n        Console.WriteLine(\"Success\");\n        break;\n    }\n    Console.WriteLine(\"Wrong!\");\n}",
            explanation: "ลูปอมตะ (while true) เป็นแพทเทิร์นยอดฮิตในงาน Console App และ Game Engine โดยเราใช้เงื่อนไข if + break ควบคุมทางออกเองจากข้างใน"
        }
    ],

    // Lesson 8: Jump Statements
    8: [
        {
            type: "Concept", difficulty: "Easy",
            instruction: "อธิบายความแตกต่างระหว่าง break และ continue",
            answer: "break ใช้ทำลายลูปทิ้งทันทีและกระโดดออกไปทำงานนอกลูป ส่วน continue ใช้ข้ามการทำงานใน 'รอบนี้' เฉยๆ แล้วกระโดดไปเริ่มลูปรอบถัดไปทันที",
            explanation: "จำง่ายๆ: break = ออกเลย (Exit), continue = ข้ามรอบนี้ (Skip)"
        },
        {
            type: "Predict", difficulty: "Medium",
            instruction: "ผลลัพธ์ของโค้ดนี้คือเลขอะไรบ้าง?",
            codeSnippet: "for(int i=1; i<=3; i++) {\n    if (i == 2) continue;\n    Console.Write(i);\n}",
            answer: "13",
            explanation: "เมื่อ i เป็น 2 โค้ดจะเจอ continue มันจึงข้ามบรรทัด Console.Write(i) ไปเลย และกระโดดไปเริ่มรอบ i=3 ทันที"
        },
        {
            type: "Debug", difficulty: "Medium",
            instruction: "โค้ดนี้ตั้งใจจะหยุดทำงานถ้าเจอเลข 5 แต่ทำไมโปรแกรมพิมพ์ 5 ออกมาด้วย?",
            codeSnippet: "for(int i=1; i<=10; i++) {\n    Console.WriteLine(i);\n    if (i == 5) break;\n}",
            answer: "เพราะ Console.WriteLine(i) ดันไปอยู่ก่อนบรรทัด if (i == 5)",
            explanation: "คอมพิวเตอร์รันจากบนลงล่าง มันพิมพ์เลข 5 เสร็จไปแล้ว ค่อยมาเช็คเจอว่า i==5 ถึงสั่งเบรค ถ้าไม่ต้องการพิมพ์เลข 5 ต้องสลับเอา if ขึ้นก่อน WriteLine"
        },
        {
            type: "Code Writing", difficulty: "Easy",
            instruction: "ใน while loop ที่กำลังวนลูปอยู่ จงเขียนคำสั่งข้ามการประมวลผลบรรทัดล่างๆ ทั้งหมดแล้วไปเริ่มรอบใหม่",
            answer: "continue;",
            explanation: "การใช้ continue ช่วยลดระดับความลึก (Nesting) ของ if-else ในลูปได้ ทำให้โค้ดอ่านง่ายขึ้น"
        },
        {
            type: "Concept", difficulty: "Hard",
            instruction: "ถ้ามีลูปซ้อนกัน 2 ชั้น (Nested Loops) การสั่ง break ในลูปชั้นใน จะหยุดลูปชั้นนอกด้วยหรือไม่?",
            answer: "ไม่หยุด",
            explanation: "คำสั่ง break จะทำลาย (Exit) เฉพาะลูปชั้นที่ตัวมันสถิตอยู่เท่านั้น (Inner loop) ส่วนลูปชั้นนอกสุดจะยังคงทำงานต่อไปตามปกติ"
        },
        {
            type: "FillBlank", difficulty: "Medium",
            instruction: "เติมโค้ดเพื่อให้พิมพ์เฉพาะ 'เลขคี่' เท่านั้น (1 ถึง 10) โดยใช้ continue",
            codeSnippet: "for(int i=1; i<=10; i++) {\n    if(i % 2 == 0) _______;\n    Console.WriteLine(i);\n}",
            answer: "continue",
            explanation: "ถ้า i เป็นเลขคู่ (หาร 2 ลงตัว) สั่งข้ามเลย ไม่ต้องลงไปถึง WriteLine"
        },
        {
            type: "Library", difficulty: "Easy",
            instruction: "หากเราไม่ต้องการใช้ break เพื่อออกจากลูป แต่ต้องการหยุดการทำงานของทั้งโปรแกรมเลยทันที จะต้องเรียกคำสั่ง Exit จาก Library System ชิ้นใด?",
            answer: "Environment.Exit(0);",
            explanation: "Environment (อยู่ใน System) มี Method สำหรับการ Kill Process ของโปรแกรมทิ้งทันที"
        },
        {
            type: "Predict", difficulty: "Hard",
            instruction: "ถ้าเกิดมี switch statement อยู่ใน while loop แล้วเราสั่ง break ในเคสของ switch มันจะเบรคอะไร?",
            codeSnippet: "while(true) {\n    switch(x) {\n        case 1: break; \n    }\n}",
            answer: "เบรคเฉพาะ switch เท่านั้น",
            explanation: "ใน C# คำสั่ง break ทำงานกับ Loop และ Switch ถ้าเจอทั้งคู่ซ้อนกัน มันจะเบรคแค่บล็อกที่เล็กที่สุดที่คลุมมันอยู่ นั่นก็คือ Switch ไม่ใช่ While Loop! ถ้าจะออกจาก While ด้วย ต้องประกาศตัวแปร Flag เพิ่ม หรือใช้ return ถ้าอยู่ใน Method"
        },
        {
            type: "Debug", difficulty: "Hard",
            instruction: "ทำไมลูปนี้ถึงค้างตลอดกาล (Infinite Loop) หลังจากที่พิมพ์เลข 2 ?",
            codeSnippet: "int x = 1;\nwhile (x < 5) {\n    if (x == 3) continue;\n    Console.WriteLine(x);\n    x++;\n}",
            answer: "เมื่อ x เป็น 3 ลูปข้ามการทำงานบรรทัดข้างล่าง (x++) ไปเลย ทำให้ x ไม่เคยขยับไปเป็น 4",
            explanation: "นี่คือหายนะที่พบบ่อยมากเวลาใช้ continue ใน while loop! พอสั่ง continue มันเด้งกลับไปเช็ค x < 5 ใหม่ โดยที่ x ก็ยังเป็น 3 อยู่... วนไปจนคอมค้าง ต้องย้าย x++ ไปไว้ก่อน หรือเปลี่ยนไปใช้ for loop แทน"
        },
        {
            type: "Challenge", difficulty: "Challenge",
            instruction: "เกมค้นหาสมบัติ: สมมติว่าลูปทำงาน 1 ถึง 1,000 รอบ ถ้ารอบนั้นหาร 100 ลงตัวให้พิมพ์ 'Save Checkpoint' แต่ถ้ารอบนั้นตรงกับเลข 777 ให้บอก 'Jackpot!' แล้วหยุดค้นหาทันที",
            answer: "for(int i=1; i<=1000; i++) {\n    if(i == 777) {\n        Console.WriteLine(\"Jackpot!\");\n        break;\n    }\n    if(i % 100 == 0) {\n        Console.WriteLine(\"Save Checkpoint\");\n    }\n}",
            explanation: "นี่คือการผสมผสาน if-else และ Jump Statements เข้าด้วยกันเพื่อทำ Event System ภายใน Game Loop ของคุณ"
        }
    ]
});
