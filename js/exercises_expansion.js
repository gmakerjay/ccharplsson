const exerciseExpansion = {
    // Lesson 1: Welcome to C# & .NET
    1: [
        {
            type: "Concept", difficulty: "Easy",
            instruction: "อธิบายความแตกต่างระหว่าง Managed Code และ Unmanaged Code ใน 1 ประโยค?",
            hint: "คิดถึงคำว่า 'มีคนดูแล' กับ 'ต้องดูแลตัวเอง'",
            answer: "Managed code คือโค้ดที่รันภายใต้การดูแลของ CLR (.NET) ส่วน Unmanaged code รันโดยตรงกับ OS โดยไม่มี CLR คอยจัดการหน่วยความจำให้",
            explanation: "CLR (Common Language Runtime) จะคอยจัดการ Garbage Collection และตรวจสอบความปลอดภัยให้ Managed Code (C#) ทำให้โปรแกรมเมอร์ไม่ต้องสั่งจอง/คืนแรมด้วยตัวเองเหมือนภาษา C/C++ (Unmanaged)"
        },
        {
            type: "Concept", difficulty: "Medium",
            instruction: "ใน C# โค้ดของเราไม่ได้ถูกคอมไพล์เป็นภาษาเครื่อง (Machine Code) ทันที แต่มันจะถูกแปลงเป็นอะไรก่อน?",
            hint: "เป็นภาษากลางที่ขึ้นต้นด้วย I...",
            answer: "ถูกแปลงเป็น IL (Intermediate Language) หรือ MSIL",
            explanation: "เพื่อให้ C# สามารถ Cross-platform ได้ โค้ดจะถูกแปลงเป็น IL เก็บไว้ในไฟล์ .dll พอตอนกดรัน โปรแกรม JIT Compiler ค่อยทำหน้าที่แปล IL ให้เป็น Machine Code ตามสถาปัตยกรรมของเครื่องนั้นๆ"
        },
        {
            type: "Library", difficulty: "Easy",
            instruction: "คำสั่ง 'Console' มาจาก Namespace หรือ Library ใด?",
            answer: "System",
            explanation: "คลาส Console อาศัยอยู่ในไลบรารีระดับแกนกลาง (Core) คือ System ดังนั้นเราต้องมีบรรทัด using System; บนสุดของไฟล์เสมอ"
        },
        {
            type: "Code Writing", difficulty: "Easy",
            instruction: "เขียนโค้ดบรรทัดเดียวโดยใช้ System.Console เพื่อพิมพ์คำว่า 'Bootcamp Started!' และขึ้นบรรทัดใหม่",
            codeSnippet: "___(___);",
            answer: "System.Console.WriteLine(\"Bootcamp Started!\");",
            explanation: "WriteLine() เป็น Method พื้นฐานที่เอาไว้แสดงข้อความพร้อมกับใส่สัญลักษณ์ \\n (New line) ต่อท้ายให้อัตโนมัติ"
        },
        {
            type: "Debug", difficulty: "Medium",
            instruction: "โค้ดนี้เกิด Compile Error: 'The name console does not exist in the current context' จงหาว่าผิดที่ไหน?",
            codeSnippet: "using System;\nclass Program {\n    static void Main() {\n        console.WriteLine(\"Hello\");\n    }\n}",
            hint: "ภาษา C# ซีเรียสเรื่องตัวพิมพ์เล็ก/ใหญ่ไหม?",
            answer: "ต้องเปลี่ยน console.WriteLine เป็น Console.WriteLine",
            explanation: "C# เป็นภาษาแบบ Case-sensitive แปลว่าตัวพิมพ์เล็กกับตัวพิมพ์ใหญ่คือคนละตัวกัน Class มาตรฐานของ Microsoft บังคับให้ขึ้นต้นด้วยตัวใหญ่ (PascalCase)",
            commonMistake: "โปรแกรมเมอร์ที่ย้ายมาจากภาษาอื่น หรือลืมกด Shift มักจะเผลอพิมพ์ console เป็นตัวเล็ก"
        },
        {
            type: "Predict", difficulty: "Easy",
            instruction: "หากเรารันโค้ดต่อไปนี้ จะมีข้อความปรากฏบนหน้าจอกี่บรรทัด?",
            codeSnippet: "Console.Write(\"A\");\nConsole.Write(\"B\");\nConsole.WriteLine(\"C\");\nConsole.Write(\"D\");",
            answer: "2 บรรทัด (บรรทัดแรก: ABC, บรรทัดสอง: D)",
            explanation: "Console.Write() จะไม่ขึ้นบรรทัดใหม่ มันจะพิมพ์ต่อท้ายกันไปเรื่อยๆ จนกว่าจะเจอ WriteLine() ที่จะพิมพ์ C แล้วจึงตัดขึ้นบรรทัดใหม่"
        },
        {
            type: "Debug", difficulty: "Medium",
            instruction: "ทำไมโค้ดบรรทัดที่ 4 ถึงทำให้เกิด Syntax Error?",
            codeSnippet: "using System;\nclass App {\n    static void Main() {\n        Console.WriteLine(\"Hello World\")\n    }\n}",
            answer: "ขาดเครื่องหมาย Semicolon (;) ปิดท้ายคำสั่ง",
            explanation: "ทุกคำสั่ง (Statement) ในภาษาตระกูล C ต้องจบด้วย ; เสมอ เพื่อบอก Compiler ว่าจบประโยคแล้ว"
        },
        {
            type: "FillBlank", difficulty: "Medium",
            instruction: "เติมคำที่หายไป เพื่อให้โปรแกรมหยุดหน้าจอรอจนกว่าผู้ใช้จะกดปุ่ม Enter ถึงจะปิดโปรแกรม",
            codeSnippet: "Console.WriteLine(\"Press Enter to exit...\");\nConsole._________;",
            answer: "Console.ReadLine();",
            explanation: "ReadLine() ปกติใช้สำหรับรับข้อความ แต่เรามักประยุกต์ใช้มันดักรอให้ผู้ใช้กด Enter ในโปรแกรม Console แบบเก่าไม่ให้มันเด้งปิดทันทีหลังทำงานเสร็จ"
        },
        {
            type: "Concept", difficulty: "Hard",
            instruction: "ทำไม Method `Main` ถึงต้องใส่คำว่า `static` เสมอ?",
            hint: "ตอนโปรแกรมเริ่มรัน มีใครมานั่ง new Object ให้เราไหม?",
            answer: "เพราะ Method Main เป็น Entry point ที่ CLR จะเรียกใช้ตอนรันโปรแกรมทันที โดยที่ไม่ต้องสร้าง (new) Object ของคลาส Program ขึ้นมาก่อน",
            explanation: "คำว่า static หมายถึงสิ่งที่ติดอยู่กับ Class เลย ไม่ใช่ติดอยู่กับ Object ถ้าไม่มี static CLR ก็ไม่รู้จะเรียกใช้งานยังไงเพราะมันยังไม่ได้ new Object เลย"
        },
        {
            type: "Challenge", difficulty: "Challenge",
            instruction: "สร้างคลาส Program สมบูรณ์แบบตั้งแต่ using ยัน Main Method ภายใน Main ให้เคลียร์หน้าจอก่อน แล้วค่อยปริ้น 'Game Ready'",
            answer: `using System;\n\nnamespace GameApp \n{\n    class Program \n    {\n        static void Main()\n        {\n            Console.Clear();\n            Console.WriteLine("Game Ready");\n        }\n    }\n}`,
            explanation: "นี่คือโครงสร้างมาตรฐาน (Boilerplate) ที่ทุกโปรแกรม C# ต้องมี Console.Clear() จะทำความสะอาดหน้าจอ Terminal ทิ้งทั้งหมด"
        }
    ],

    // Lesson 2: Variables & Data Types
    2: [
        {
            type: "Concept", difficulty: "Easy",
            instruction: "ใน C# การเป็น Strongly Typed Language แปลว่าอะไร?",
            answer: "ตัวแปรทุกตัวต้องระบุชนิดข้อมูล (Data Type) ตั้งแต่ตอนสร้าง และไม่สามารถเปลี่ยนชนิดข้อมูลข้ามไปมาแบบมั่วซั่วได้",
            explanation: "หากเราประกาศ int x = 10; แล้วเราพยายามสั่ง x = \"Hello\"; คอมไพเลอร์จะโวยวายและไม่ยอมรันให้เด็ดขาด ป้องกันบั๊กจากการใส่ข้อมูลผิดประเภท"
        },
        {
            type: "Library", difficulty: "Medium",
            instruction: "ตัวแปรแบบ `int` แท้จริงแล้วเป็นตัวย่อ (Alias) ของโครงสร้างข้อมูลใดใน System?",
            answer: "System.Int32",
            explanation: "เวลาพิมพ์ int คอมไพเลอร์จะรู้ว่ามันคือโครงสร้างข้อมูล (Struct) ขนาด 32 bit ที่อยู่ใน System namespace"
        },
        {
            type: "Code Writing", difficulty: "Easy",
            instruction: "จงสร้างตัวแปรเก็บ 'ระดับเลือดผู้เล่น' ให้เป็นจำนวนเต็ม (100) และ 'พลังเวทมนตร์' แบบทศนิยม (50.5)",
            answer: "int playerHp = 100;\ndouble playerMp = 50.5;",
            explanation: "int สำหรับเลขจำนวนเต็ม และ double สำหรับเลขที่มีทศนิยม"
        },
        {
            type: "Debug", difficulty: "Medium",
            instruction: "หาสาเหตุที่โปรแกรมนี้คอมไพล์ไม่ผ่าน",
            codeSnippet: "string grade = 'A';\nchar prefix = \"Mr.\";",
            hint: "แยกความแตกต่างระหว่าง Single Quote กับ Double Quote",
            answer: "string ต้องใช้ \" \" (Double Quote) ส่วน char ต้องใช้ ' ' (Single Quote)",
            explanation: "ใน C# สัญลักษณ์ quote มีความหมายต่างกันอย่างสิ้นเชิง 'A' หมายถึงอักขระ 1 ตัว (System.Char) แต่ \"A\" หมายถึงข้อความ (System.String)",
            commonMistake: "ใน Python/JS จะใช้ Single หรือ Double quote แทน string ได้ แต่ C# แยกขาดจากกัน"
        },
        {
            type: "Predict", difficulty: "Hard",
            instruction: "ถ้ารันโค้ดนี้ จะเกิด Error อะไรขึ้น?",
            codeSnippet: "var myHero;\nmyHero = \"Batman\";",
            answer: "เกิด Compile Error: Implicitly-typed variables must be initialized",
            explanation: "การใช้ var คอมไพเลอร์จะเดา Type ให้ แต่ถ้าคุณไม่กำหนดค่าเริ่มต้นตั้งแต่บรรทัดแรก (var myHero = \"Batman\";) มันก็ไม่รู้ว่าจะเดาเป็นชนิดข้อมูลอะไร!"
        },
        {
            type: "FillBlank", difficulty: "Easy",
            instruction: "สร้างตัวแปรเพื่อเก็บว่าตัวละครตายหรือยัง (True/False)",
            codeSnippet: "________ isDead = true;",
            answer: "bool isDead = true;",
            explanation: "bool (ย่อมาจาก System.Boolean) เก็บค่าได้แค่ 2 แบบคือ true หรือ false"
        },
        {
            type: "Concept", difficulty: "Medium",
            instruction: "ทำไมเราถึงต้องมีชนิดข้อมูลทั้ง float, double, และ decimal ทั้งที่เก็บทศนิยมได้เหมือนกัน?",
            answer: "ต่างกันที่ขนาดหน่วยความจำและความแม่นยำ (Precision) ของตัวเลขหลังจุดทศนิยม",
            explanation: "float เร็วและเล็ก (ใช้ในเกม), double แม่นยำปานกลาง (ค่ามาตรฐาน), decimal ช้าและใหญ่ที่สุดแต่แม่นยำ 100% (บังคับใช้กับการคำนวณเงินเพื่อป้องกันทศนิยมเพี้ยน)"
        },
        {
            type: "Code Writing", difficulty: "Medium",
            instruction: "แปลงโค้ดเก่าที่ใช้การบวก String ให้น่าอ่านขึ้นโดยใช้ String Interpolation",
            codeSnippet: "string w = \"Sword\"; int d = 15;\nConsole.WriteLine(\"You equipped \" + w + \" with \" + d + \" damage.\");",
            answer: "Console.WriteLine($\"You equipped {w} with {d} damage.\");",
            explanation: "การใช้ $ หน้าเครื่องหมายคำพูด ช่วยให้เราแทรกตัวแปรลงในปีกกา {} ได้เลย ทำให้โค้ดสะอาดกว่าการใช้ + เชื่อมไปมา"
        },
        {
            type: "Debug", difficulty: "Hard",
            instruction: "โปรแกรมเมอร์ตั้งใจประกาศตัวแปรให้เป็น float แต่ทำไมเกิด Error 'Literal of type double cannot be implicitly converted to float'?",
            codeSnippet: "float speed = 5.5;",
            hint: "ใน C# เลขทศนิยมลอยๆ ถือเป็นอะไร?",
            answer: "ต้องใส่ f ต่อท้ายตัวเลข: float speed = 5.5f;",
            explanation: "โดย Default ค่า 5.5 จะถูกมองว่าเป็น double เสมอ ซึ่งใหญ่กว่า float (การเอาของใหญ่ยัดลงกล่องเล็กโดยไม่ยืนยันจะเกิด Error)"
        },
        {
            type: "Challenge", difficulty: "Challenge",
            instruction: "ลองจินตนาการเกม RPG: จงประกาศกลุ่มตัวแปรสำหรับเก็บข้อมูล Monster 1 ตัว (ชื่อมอนสเตอร์, พลังชีวิต, พลังโจมตี, ความเร็ว, และสถานะว่ากำลังบินอยู่หรือไม่) เลือก Data Type ให้เหมาะสมที่สุด",
            answer: `string monsterName = "Dragon";\nint hp = 5000;\nint attack = 150;\nfloat speed = 2.5f;\nbool isFlying = true;`,
            explanation: "นี่คือจุดเริ่มต้นของการรวบรวมตัวแปรเพื่อนำไปสร้างเป็น Class ในบทหลังๆ"
        }
    ],

    // Lesson 3: Type Casting & Conversion
    3: [
        {
            type: "Concept", difficulty: "Easy",
            instruction: "การทำ Implicit Casting (แปลงอัตโนมัติ) จะเกิดขึ้นได้ในเงื่อนไขใด?",
            answer: "แปลงจากชนิดข้อมูลที่มีขนาดเล็กกว่า (เช่น int) ไปยังชนิดข้อมูลที่มีขนาดใหญ่กว่า (เช่น double)",
            explanation: "การเอาของจากกล่องเล็กไปใส่กล่องใหญ่ ไม่ทำให้ข้อมูลตกหล่น คอมไพเลอร์จึงทำให้เราอัตโนมัติโดยไม่เกิด Error"
        },
        {
            type: "Library", difficulty: "Medium",
            instruction: "คลาส Convert เป็นเครื่องมือสำคัญในการ Casting ถามว่ามันมาจาก Namespace ใด?",
            answer: "System",
            explanation: "เราสามารถเรียกใช้ Convert.ToInt32() ได้เลยโดยไม่ต้องอิมพอร์ตอะไรเพิ่มหากมี using System; แล้ว"
        },
        {
            type: "Code Writing", difficulty: "Medium",
            instruction: "จงทำการ Explicit Cast (บังคับแปลง) ตัวแปร x ให้เป็น int",
            codeSnippet: "double x = 9.99;",
            answer: "int y = (int)x;",
            explanation: "โดยปกติการแปลงจาก double มาเป็น int ข้อมูลทศนิยมจะสูญหาย เราจึงต้องใส่ (int) คั่นไว้ข้างหน้าเพื่อยืนยันกับคอมไพเลอร์ว่าเรารับความเสี่ยงนี้"
        },
        {
            type: "Predict", difficulty: "Easy",
            instruction: "ถ้าเราทำแบบข้อด้านบน (แคสต์ 9.99 เป็น int) ค่าที่ได้จะเป็น 10 (ปัดขึ้น) หรือ 9 (ตัดทิ้ง)?",
            answer: "ได้ 9",
            explanation: "การทำ Explicit cast ไปเป็น int จะเป็นการ Truncate (ตัดทศนิยมทิ้งทั้งหมด) โดยไม่มีการปัดเศษ (Round) หากต้องการปัดเศษต้องใช้ Math.Round()"
        },
        {
            type: "Debug", difficulty: "Hard",
            instruction: "ระบบคราฟต์ของ: ถ้ารันโค้ดด้านล่าง ทำไมมันถึงระเบิด (Runtime Error: FormatException)?",
            codeSnippet: "string rawWood = \"5 pieces\";\nint woodCount = int.Parse(rawWood);",
            hint: "เครื่องจักร Parse เข้าใจตัวอักษรภาษาอังกฤษไหม?",
            answer: "เพราะใน string มีตัวอักษร ' pieces' ปนอยู่ ทำให้ int.Parse แปลงไม่ได้",
            explanation: "คำสั่ง Parse() ต้องการข้อความที่เป็นตัวเลขล้วนๆ (เช่น \"5\") ถ้ามีตัวอักษรผสม มันจะไม่ฉลาดพอจะดึงแค่เลขออกมา",
            commonMistake: "โปรแกรมเมอร์มักลืมเช็ค/ล้างข้อมูลที่ User กรอกเข้ามาก่อนนำไป Parse"
        },
        {
            type: "Concept", difficulty: "Hard",
            instruction: "ถ้าข้อความมีโอกาสเป็น null คุณควรเลือกใช้ int.Parse หรือ Convert.ToInt32 ? เพราะเหตุใด?",
            answer: "ควรใช้ Convert.ToInt32()",
            explanation: "Convert.ToInt32(null) จะคืนค่า Default คือ 0 ให้เราและโปรแกรมยังรันต่อได้ แต่ int.Parse(null) จะทำให้เกิด ArgumentNullException ทันที"
        },
        {
            type: "FillBlank", difficulty: "Medium",
            instruction: "วิธีแปลงค่าแบบที่ปลอดภัยที่สุด (ถ้าพังก็ไม่เด้งหลุด) คือการใช้ TryParse จงเติมโค้ดให้สมบูรณ์",
            codeSnippet: "string input = \"100\";\nif (int._________(input, out int result))\n{\n    Console.WriteLine(\"Success: \" + result);\n}",
            answer: "int.TryParse(input, out int result)",
            explanation: "TryParse จะพยายามแปลงค่า ถ้าทำสำเร็จจะโยนค่าไปที่ตัวแปร result (ผ่าน out parameter) และคืนค่า true ถ้าแปลงไม่สำเร็จจะคืนค่า false โดยไม่ทำให้โปรแกรม Crash"
        },
        {
            type: "Predict", difficulty: "Medium",
            instruction: "ถ้ารันโค้ด Convert.ToString(true) สิ่งที่จะได้ออกมาคืออะไร?",
            answer: "ข้อความ \"True\" (ได้ T ตัวใหญ่)",
            explanation: "การแปลง boolean ผ่าน Convert จะได้เป็น String คำว่า True หรือ False เสมอ"
        },
        {
            type: "Code Writing", difficulty: "Medium",
            instruction: "โจทย์ดักควาย: นำตัวอักษร '5' (เป็นตัวแปร char) ไปแปลงเป็น int ให้ได้ค่า 5",
            codeSnippet: "char c = '5';",
            hint: "ถ้าเรา cast (int)c ตรงๆ สิ่งที่ได้คือรหัส ASCII นะ!",
            answer: "int result = int.Parse(c.ToString());\n// หรือ int result = (int)char.GetNumericValue(c);",
            explanation: "ถ้าคุณเผลอเขียน (int)c ผลลัพธ์ที่ได้คือเลข 53 ซึ่งเป็นรหัส ASCII ของตัวอักษร '5'! ต้องแปลงเป็น String ก่อนแล้วค่อย Parse"
        },
        {
            type: "Challenge", difficulty: "Challenge",
            instruction: "เกมของคุณมีหลอดเลือดผู้เล่นปัจจุบันคือ 50 (int) และหลอดเลือดสูงสุด 100 (int) จงเขียนสมการคำนวณเปอร์เซ็นต์เลือด (ให้ออกมาเป็นค่า 0.5) (คำเตือน: int หาร int ได้ int!)",
            answer: "double percent = (double)50 / 100;\n// หรือ 50 / 100.0",
            explanation: "ใน C# ถ้าเอา int หาร int เศษจะถูกปัดทิ้งหมด (50/100 จะได้ 0 ทันที) คุณต้องบังคับแปลงตัวใดตัวหนึ่งเป็นทศนิยมก่อน (เช่น แคสต์ (double) หรือพิมพ์ 100.0) เพื่อให้ผลลัพธ์คงความเป็นทศนิยมไว้"
        }
    ]
};

// Inject these exercises into the already loaded window.lessonsData
window.lessonsData.forEach(lesson => {
    if (exerciseExpansion[lesson.id]) {
        lesson.exercises = exerciseExpansion[lesson.id];
    }
});
