Object.assign(exerciseExpansion, {
    // Lesson 4: Console I/O & String Interpolation
    4: [
        {
            type: "Concept", difficulty: "Easy",
            instruction: "อธิบายความแตกต่างระหว่าง Console.Write() กับ Console.WriteLine()",
            answer: "Write() จะพิมพ์ข้อความแล้วไม่ขึ้นบรรทัดใหม่ ทำให้เคอร์เซอร์กะพริบรออยู่ต่อท้ายข้อความเดิม ส่วน WriteLine() พิมพ์เสร็จแล้วจะกด Enter (\\n) ขึ้นบรรทัดใหม่ให้ทันที",
            explanation: "ในการทำ UI บน Console ถ้าต้องการให้ผู้ใช้กรอกข้อมูลต่อท้ายคำถาม (เช่น 'Name: ___') เราควรใช้ Write() แต่ถ้าเป็นข้อความแจ้งเตือนยาวๆ เราใช้ WriteLine()"
        },
        {
            type: "Library", difficulty: "Easy",
            instruction: "ถ้าต้องการใช้ Console ต้อง import Namespace ใด?",
            answer: "using System;",
            explanation: "Console class อยู่ใน System namespace ซึ่งเป็นไลบรารีพื้นฐานที่สุดของ .NET"
        },
        {
            type: "Code Writing", difficulty: "Medium",
            instruction: "เขียนโปรแกรมรับปีเกิด (พ.ศ.) แล้วนำมาแปลงเป็น ค.ศ. (ลบด้วย 543) จากนั้นโชว์ผลลัพธ์ด้วย String Interpolation",
            codeSnippet: "Console.Write(\"เกิดปี พ.ศ. อะไร: \");\n// เขียนต่อจากนี้...",
            answer: "int yearBE = int.Parse(Console.ReadLine());\nint yearAD = yearBE - 543;\nConsole.WriteLine($\"คุณเกิดปี ค.ศ. {yearAD}\");",
            explanation: "เราต้องรับค่าเป็น string ก่อนด้วย ReadLine() แล้วค่อย Parse เป็น int ถึงจะเอาไปคำนวณคณิตศาสตร์ได้"
        },
        {
            type: "Predict", difficulty: "Medium",
            instruction: "ถ้ารันโค้ดต่อไปนี้ ผลลัพธ์ที่พิมพ์ออกมาคือข้อใด?",
            codeSnippet: "int hp = 50;\nConsole.WriteLine(\"Player HP: {hp}\");",
            answer: "ข้อความ: Player HP: {hp}",
            explanation: "ลืมใส่เครื่องหมาย $ ไว้หน้า String! ทำให้วงเล็บปีกกา {hp} ไม่ทำงานและถูกตีความเป็นตัวอักษรธรรมดาทันที (String Interpolation ไม่ทำงาน)"
        },
        {
            type: "Debug", difficulty: "Hard",
            instruction: "โปรแกรมเมอร์ต้องการเคลียร์หน้าจอแล้วพิมพ์ข้อความ แต่โค้ดนี้กลับเกิด Error",
            codeSnippet: "Console.Clear;\nConsole.WriteLine(\"Done\");",
            answer: "ต้องใส่ () หลังคำว่า Clear เพราะมันเป็น Method (ฟังก์ชัน)",
            explanation: "การเรียกใช้พฤติกรรม (Method) ของ Class ถึงแม้จะไม่มี Parameter ก็ตาม ก็ต้องใส่ () ต่อท้ายเสมอเพื่อบอกว่า 'จงทำงานเดี๋ยวนี้' ถ้าไม่ใส่ C# จะคิดว่าเรากำลังพยายามเข้าถึงตัวแปร (Property) ซึ่งผิด",
            commonMistake: "Console.Clear() คือการล้างหน้าจอ ไม่ใช่ตัวแปร!"
        },
        {
            type: "FillBlank", difficulty: "Easy",
            instruction: "เติมโค้ดให้สมบูรณ์เพื่อให้ String Interpolation ทำงานได้ถูกต้อง",
            codeSnippet: "string item = \"Potion\";\nConsole.WriteLine(_____\"You obtained a {item}\");",
            answer: "$",
            explanation: "สัญลักษณ์ $ นำหน้า String จะเป็นการเปิดโหมด Interpolation ให้สามารถแทรกตัวแปรด้วย {} ได้"
        },
        {
            type: "Code Writing", difficulty: "Hard",
            instruction: "สร้างระบบ Login จำลอง: ให้ผู้ใช้กรอกรหัส ถ้าไม่ได้กรอกอะไรเลย (กด Enter ว่างๆ) ให้แสดงข้อความว่า 'Error: Empty input'",
            answer: "string input = Console.ReadLine();\nif(string.IsNullOrEmpty(input)) {\n    Console.WriteLine(\"Error: Empty input\");\n}",
            explanation: "ในระบบจริง คุณจะไว้ใจ Input ของ User ไม่ได้เลย ต้องมีการตรวจสอบค่าว่างเสมอด้วย string.IsNullOrEmpty() ก่อนเอาไปใช้งานต่อ"
        },
        {
            type: "Predict", difficulty: "Easy",
            instruction: "Console.ReadLine() คืนค่า (Return) ออกมาเป็นชนิดข้อมูลใดเสมอ?",
            answer: "string (ข้อความ)",
            explanation: "ต่อให้ผู้ใช้พิมพ์ตัวเลข 123 สิ่งที่ ReadLine ส่งกลับมาก็คือข้อความ \"123\" อยู่ดี เราจึงเอาไปคำนวณบวกลบคูณหารทันทีไม่ได้"
        },
        {
            type: "Concept", difficulty: "Medium",
            instruction: "String Interpolation ($) ดีกว่าการเอาตัวแปรมาต่อกันด้วยเครื่องหมายบวก (+) อย่างไร?",
            answer: "อ่านง่ายกว่า (Clean code) และช่วยลดข้อผิดพลาดในการเว้นวรรค (Spacing) ในประโยคยาวๆ",
            explanation: "เวลาประโยคซับซ้อน การใช้ + ต้องคอยเปิดปิดเครื่องหมายคำพูด (Quote) หลายรอบ ทำให้งงและมักลืมเคาะเว้นวรรค แต่ถ้าใช้ $ สามารถเขียนประโยคยาวๆ รวดเดียวจบได้เลย"
        },
        {
            type: "Challenge", difficulty: "Challenge",
            instruction: "เขียนหน้าจอแสดงสถานะ (Status Screen) โดยดึงข้อมูล 3 ตัวแปร (Name, Level, Gold) มาจัดรูปแบบให้สวยงาม (ขึ้นบรรทัดใหม่ด้วย \\n ใน String 1 ก้อน)",
            answer: "string name = \"Arthur\";\nint level = 10;\nint gold = 500;\nConsole.WriteLine($\"\\n=== STATUS ===\\nName: {name}\\nLevel: {level}\\nGold: {gold}\\n==============\");",
            explanation: "อักขระพิเศษ \\n ใช้สำหรับตัดขึ้นบรรทัดใหม่ (New Line) ทำให้เราจัดรูปแบบหน้าจอ Terminal ได้ในคำสั่ง WriteLine() แค่ครั้งเดียว ลดปริมาณโค้ดได้อย่างมาก"
        }
    ],

    // Lesson 5: Operators
    5: [
        {
            type: "Concept", difficulty: "Easy",
            instruction: "อธิบายหน้าที่ของเครื่องหมาย % (Modulo) ในการเขียนโปรแกรม",
            answer: "ใช้สำหรับ 'หารเอาเศษ'",
            explanation: "เช่น 10 % 3 ผลลัพธ์คือ 1 เพราะ 10 หาร 3 ได้ 3 เศษ 1 นิยมใช้ในการตรวจสอบว่าเลขนั้นเป็นเลขคู่หรือคี่ (หาเศษจากการหาร 2)"
        },
        {
            type: "Predict", difficulty: "Medium",
            instruction: "ถ้ารันโค้ดต่อไปนี้ จะได้ผลลัพธ์เป็นเท่าไร?",
            codeSnippet: "int a = 15;\nint b = 4;\nConsole.WriteLine(a / b);",
            answer: "3",
            explanation: "เพราะตัวแปร a และ b เป็นชนิด int ทั้งคู่ ใน C# การเอา int หาร int จะทำการตัดเศษทศนิยมทิ้งทั้งหมด (Truncate) แม้ว่าจริงๆ จะได้ 3.75 ก็จะถูกปัดลงเหลือ 3 เสมอ"
        },
        {
            type: "Code Writing", difficulty: "Medium",
            instruction: "จงแก้โค้ดในข้อก่อนหน้า ให้แสดงผลลัพธ์แบบทศนิยม (3.75) อย่างถูกต้อง",
            answer: "int a = 15;\nint b = 4;\nConsole.WriteLine((double)a / b);",
            explanation: "ต้องใช้การ Explicit Cast ไปที่ (double) ที่ตัวใดตัวหนึ่งก่อน พอมีตัวใดตัวหนึ่งเป็นทศนิยมแล้ว ผลลัพธ์สุดท้ายจะกลายเป็นทศนิยมอัตโนมัติ"
        },
        {
            type: "Debug", difficulty: "Hard",
            instruction: "ระบบตรวจสอบสิทธิ์: โค้ดนี้ต้องการเช็คว่าผู้ใช้เป็น Admin หรือเป็น User ที่ Level มากกว่า 10 แต่โค้ดนี้พัง (Syntax Error)",
            codeSnippet: "bool isAdmin = false;\nint level = 5;\nif (isAdmin OR level > 10) {\n    Console.WriteLine(\"Pass\");\n}",
            answer: "C# ไม่รู้จักคำว่า OR ต้องใช้สัญลักษณ์ || แทน",
            explanation: "ใน C# ตัวดำเนินการตรรกศาสตร์ (Logical Operators) จะใช้สัญลักษณ์ && (AND), || (OR), และ ! (NOT) ส่วนคำว่า AND/OR จะใช้ในภาษาอย่าง Python หรือ SQL",
            commonMistake: "สับสน Syntax ระหว่างภาษา Python กับ C#"
        },
        {
            type: "Predict", difficulty: "Medium",
            instruction: "ถ้ารันนิพจน์ (Expression) นี้ จะได้ค่าอะไร? (true || false) && (!true)",
            answer: "false",
            explanation: "ทำในวงเล็บก่อน: (true || false) ได้ true. จากนั้น (!true) แปลว่า ไม่ใช่ true = false. นำมา AND กัน: true && false = false"
        },
        {
            type: "Code Writing", difficulty: "Easy",
            instruction: "เขียนโค้ดเช็คว่าตัวแปรเลือดผู้เล่น hp มีค่าน้อยกว่าหรือเท่ากับ 0 หรือไม่ (ผลลัพธ์เป็น bool)",
            answer: "bool isDead = (hp <= 0);",
            explanation: "การใช้เครื่องหมายเปรียบเทียบ (Relational) จะคืนค่าออกมาเป็น boolean (true/false) เสมอ"
        },
        {
            type: "FillBlank", difficulty: "Easy",
            instruction: "เติมเครื่องหมายเพื่อตรวจสอบว่าตัวแปร password ❌ ไม่เท่ากับ ❌ คำว่า 'admin'",
            codeSnippet: "if (password ___ \"admin\")",
            answer: "!=",
            explanation: "เครื่องหมาย != หมายถึง ไม่เท่ากับ (Not equal) ส่วน == หมายถึง เท่ากับ (Equal)"
        },
        {
            type: "Concept", difficulty: "Hard",
            instruction: "ความแตกต่างระหว่าง = (ตัวเดียว) กับ == (สองตัว) คืออะไร?",
            answer: "= คือการกำหนดค่า (Assignment) ส่วน == คือการเปรียบเทียบ (Comparison)",
            explanation: "x = 5 คือการเอาเลข 5 ไปใส่ในกล่อง x แต่ x == 5 คือการตั้งคำถามว่า x เท่ากับ 5 ใช่หรือไม่? (คืนค่ากลับมาเป็น true/false)"
        },
        {
            type: "Debug", difficulty: "Medium",
            instruction: "ทำไมโค้ดนี้ถึง Error: Cannot implicitly convert type 'int' to 'bool'",
            codeSnippet: "int score = 100;\nif (score = 100) {\n    Console.WriteLine(\"Full Score!\");\n}",
            answer: "ในวงเล็บของ if ต้องใส่ == ไม่ใช่ =",
            explanation: "ในภาษา C/C++ การพิมพ์ if(score = 100) จะผ่าน (เป็นการ Assignment แล้วคืนค่ากลับมา) แต่ใน C# ป้องกันบั๊กนี้ไว้ โดยบังคับว่าในวงเล็บ if ต้องเป็น Expression ที่ได้ผลลัพธ์เป็น bool เท่านั้น!"
        },
        {
            type: "Challenge", difficulty: "Challenge",
            instruction: "ระบบดรอปไอเทม: ถ้าผู้เล่นโชคดี (luck >= 80) หรือ ผู้เล่นเติมเงิน VIP (isVip == true) ไอเทมถึงจะดรอป เขียน Logic ใน 1 บรรทัด",
            answer: "bool itemDrop = (luck >= 80) || isVip;",
            explanation: "เราสามารถนำนิพจน์ที่มีการประเมินผลเป็น Boolean หลายๆ ตัวมาต่อกันด้วย Logical Operators (&&, ||) เพื่อสร้างเงื่อนไขที่ซับซ้อนในเกมได้"
        }
    ],

    // Lesson 6: If-Else & Switch Statements
    6: [
        {
            type: "Concept", difficulty: "Easy",
            instruction: "เมื่อไหร่ควรใช้ Switch Statement แทนที่จะใช้ If-Else?",
            answer: "เมื่อต้องเปรียบเทียบตัวแปรเพียงตัวเดียว กับค่าเป้าหมาย (Exact value) หลายๆ ค่า",
            explanation: "เช่น ถ้าต้องเช็คว่า dayOfWeek เท่ากับ 1, 2, 3, 4 การเขียน if(day==1) else if(day==2) จะยาวและอ่านยาก ใช้ switch จะสะอาด (Clean) และทำงานได้เร็วกว่าในระดับ Compiler (Jump table)"
        },
        {
            type: "Predict", difficulty: "Medium",
            instruction: "จะเกิดอะไรขึ้นถ้ารันโค้ดนี้?",
            codeSnippet: "int hp = 10;\nif (hp > 0) Console.WriteLine(\"A\");\nelse Console.WriteLine(\"B\");",
            answer: "พิมพ์คำว่า A",
            explanation: "แม้ว่าจะไม่มีวงเล็บปีกกา { } ใน C# ก็สามารถละเว้นปีกกาได้ถ้าโค้ดในบล็อกนั้นมีเพียง 1 บรรทัด แต่ปกติแล้วไม่แนะนำเพราะจะทำให้เกิดบั๊กตอนกลับมาเพิ่มโค้ดในภายหลัง"
        },
        {
            type: "Debug", difficulty: "Hard",
            instruction: "โค้ด Switch Statement นี้คอมไพล์ไม่ผ่าน (Error: Control cannot fall through from one case label to another)",
            codeSnippet: "int state = 1;\nswitch(state) {\n    case 1:\n        Console.WriteLine(\"One\");\n    case 2:\n        Console.WriteLine(\"Two\");\n        break;\n}",
            answer: "ขาดคำสั่ง break; หลัง Console.WriteLine(\"One\"); ใน case 1",
            explanation: "ภาษา C# เข้มงวดมาก (Strict) ห้ามการทำงานไหลทะลัก (Fall-through) จาก case หนึ่งไปสู่อีก case หนึ่งเด็ดขาด ทุก case ที่มีโค้ดต้องจบด้วยการเบรกทิ้ง (break หรือ return) เสมอ!"
        },
        {
            type: "Code Writing", difficulty: "Easy",
            instruction: "เขียนโค้ดตรวจสอบเงินในกระเป๋า (gold) ถ้ามากกว่าหรือเท่ากับ 500 ให้พิมพ์ 'Can Buy' ถ้าไม่ถึงให้พิมพ์ 'Not enough gold'",
            answer: "if (gold >= 500) {\n    Console.WriteLine(\"Can Buy\");\n} else {\n    Console.WriteLine(\"Not enough gold\");\n}",
            explanation: "If-Else เป็นพื้นฐานที่สุดของการประเมินเงื่อนไขในระบบร้านค้า (Shop System)"
        },
        {
            type: "Library", difficulty: "Medium",
            instruction: "ตัวแปรที่เรามักใช้ในเงื่อนไข (เช่น string, int) มาจากไลบรารีใด?",
            answer: "System",
            explanation: "ประเภทตัวแปรพื้นฐานทั้งหมดถูกทำแผนที่ (Mapped) ไปยัง Struct/Class ใน System namespace"
        },
        {
            type: "FillBlank", difficulty: "Easy",
            instruction: "ใน Switch Statement ถ้าไม่มีเคสไหนตรงเลย เราจะใช้คำสั่งใดเป็นตัวดักสุดท้าย?",
            codeSnippet: "switch(color) {\n    case \"Red\": ...\n    ________:\n        Console.WriteLine(\"Unknown Color\");\n}",
            answer: "default",
            explanation: "default ทำหน้าที่เหมือน else ตัวสุดท้ายใน if-else statement"
        },
        {
            type: "Debug", difficulty: "Medium",
            instruction: "ทำไมระบบคิดเกรดนี้ถึงพิมพ์คำว่า 'Grade C' เสมอสำหรับคนที่ได้ 95 คะแนน?",
            codeSnippet: "int score = 95;\nif (score >= 50) Console.WriteLine(\"Grade C\");\nelse if (score >= 80) Console.WriteLine(\"Grade A\");",
            answer: "เพราะลำดับเงื่อนไข (Order) ผิด",
            explanation: "If-Else จะเช็คไล่จากบนลงล่าง พอ 95 >= 50 เป็นจริงปุ๊บ มันจะทำในบล็อกแรกทันทีแล้วกระโดดหนีเลย ไม่ลงไปเช็ค >= 80 การเช็คช่วงข้อมูลต้องเรียงจากค่ามากไปค่าน้อย (แคบไปกว้าง)"
        },
        {
            type: "Code Writing", difficulty: "Hard",
            instruction: "ย่อโค้ด If-Else ต่อไปนี้ให้เหลือเพียง 1 บรรทัด โดยใช้ Ternary Operator ( ? : )",
            codeSnippet: "string status;\nif (hp > 0) { status = \"Alive\"; } else { status = \"Dead\"; }",
            answer: "string status = (hp > 0) ? \"Alive\" : \"Dead\";",
            explanation: "Ternary Operator (เงื่อนไข ? ถ้าจริง : ถ้าเท็จ) ช่วยลดความยาวของโค้ดลงได้อย่างมาก เหมาะสำหรับการกำหนดค่าตัวแปรตามเงื่อนไข (Assignment)"
        },
        {
            type: "Predict", difficulty: "Medium",
            instruction: "ถ้ารันโค้ดนี้ จะพิมพ์ว่าอะไร?",
            codeSnippet: "bool isRainy = true;\nif (!isRainy) {\n    Console.WriteLine(\"Go outside\");\n} else {\n    Console.WriteLine(\"Stay home\");\n}",
            answer: "Stay home",
            explanation: "ตัวแปร isRainy คือ true เมื่อเจอเครื่องหมาย ! (NOT) จะกลับค่าเป็น false. ทำให้ข้ามไปทำในส่วน else ทันที"
        },
        {
            type: "Challenge", difficulty: "Challenge",
            instruction: "สร้างระบบเช็คโปรโมชั่น E-commerce โดยใช้ if-else ซ้อนกัน: ถ้ายอดซื้อ (amount) >= 1000 และเป็นสมาชิก (isMember) ให้หักลบ amount ลง 10% แต่ถ้าไม่ได้เป็นสมาชิกหักแค่ 5%",
            answer: "if (amount >= 1000) {\n    if (isMember) {\n        amount = amount - (amount * 0.10);\n    } else {\n        amount = amount - (amount * 0.05);\n    }\n}",
            explanation: "การใช้ Nested If (If ซ้อน If) เป็นวิธีมาตรฐานในการจัดการกับ Business Logic ที่มีความซับซ้อน"
        }
    ]
});
