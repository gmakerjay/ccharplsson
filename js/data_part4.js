window.lessonsData = window.lessonsData || [];

const part4 = [
    {
        id: 32,
        moduleId: 10,
        moduleName: "Module 10: .NET Runtime (CLR) & Execution",
        title: "32. What is CLR & Compilation Flow",
        library: "System.Runtime",
        objectives: ["เข้าใจการทำงานเบื้องหลังของ .NET", "รู้จักกระบวนการ Compilation (C# -> IL -> Machine Code)"],
        content: [
            { type: "text", text: "คุณเคยสงสัยไหมว่า โค้ด C# ที่คุณพิมพ์ มันไปสั่งให้ CPU ทำงานได้ยังไง? หัวใจของเรื่องนี้คือ <strong>CLR (Common Language Runtime)</strong> ซึ่งเป็นเหมือน 'เครื่องยนต์' ที่คอยขับเคลื่อนโปรแกรม C# ทั้งหมด" },
            { type: "heading", text: "📦 Library: System.Runtime" },
            { type: "text", text: "<ul><li>เป็น Core Library ระดับล่างสุดของ .NET</li><li>ใช้สำหรับจัดการเรื่องระดับ Runtime เช่น Memory, Garbage Collection, การติดต่อกับ OS</li><li>ในฐานะ Developer ทั่วไปเราไม่ค่อยได้เรียกใช้มันตรงๆ แต่มันทำงานอยู่เบื้องหลังเสมอ</li></ul>" },
            { type: "heading", text: "Compilation Flow (เส้นทางของโค้ด)" },
            { type: "text", text: "1. <strong>เขียนโค้ด (Source Code):</strong> คุณเขียนไฟล์ <code>.cs</code><br>2. <strong>คอมไพล์รอบแรก (Roslyn Compiler):</strong> โค้ด C# จะถูกแปลงเป็นภาษาตัวกลางเรียกว่า <strong>IL (Intermediate Language)</strong> และถูกแพ็คใส่ไฟล์ <code>.dll</code> หรือ <code>.exe</code> (เรียกว่า Assembly)<br>3. <strong>คอมไพล์รอบสอง (JIT - Just-In-Time Compiler):</strong> เมื่อคุณกดรันโปรแกรม CLR จะเอา IL มาแปลเป็น <strong>Machine Code (010101)</strong> ที่ CPU ของเครื่องนั้นๆ เข้าใจ (เช่น แปลเป็น x86 หรือ ARM) แบบสดๆ (Just in time)" },
            { type: "heading", text: "Managed vs Unmanaged Code" },
            { type: "text", text: "โค้ด C# ของเราเรียกว่า <strong>Managed Code</strong> เพราะมี CLR คอยดูแลให้ (คอยเคลียร์แรมให้ คอยดัก Error ให้) ส่วนโค้ดภาษาอย่าง C/C++ ที่คุยกับ OS ตรงๆ เรียกว่า <strong>Unmanaged Code</strong> ซึ่งเร็วกว่าแต่ต้องจัดการแรมเองทั้งหมด!" }
        ],
        conceptNote: "เพราะว่ามันถูกแปลงเป็น IL ก่อนนี่แหละ ทำให้ C# สามารถเอาไปรันบน Windows, Mac, หรือ Linux ก็ได้! (Cross-platform) ขอแค่เครื่องนั้นมี CLR ติดตั้งอยู่ (ผ่าน .NET Runtime)",
        exercises: [
            { level: "Medium", instruction: "เรียงลำดับกระบวนการทำงานของ C#: [Machine Code, Source Code, JIT Compiler, IL, Roslyn Compiler]", answer: "Source Code -> Roslyn Compiler -> IL -> JIT Compiler -> Machine Code" },
            { level: "Hard", instruction: "วิเคราะห์: ทำไมโปรแกรม C# มักจะใช้เวลาโหลดเปิดโปรแกรมครั้งแรก (Cold Start) นานกว่าภาษา C++?", answer: "เพราะ C# ต้องเสียเวลาให้ JIT Compiler แปลง IL เป็น Machine Code ในตอนที่รันโปรแกรมครั้งแรก (ในขณะที่ C++ เป็น Machine Code มาตั้งแต่แรกแล้ว)" }
        ],
        quiz: [
            { question: "ส่วนประกอบใดของ .NET ที่ทำหน้าที่แปล IL ให้กลายเป็นภาษาเครื่อง (Machine Code) ในตอนรัน?", options: ["Roslyn", "JIT Compiler", "Garbage Collector", "MSBuild"], answerIndex: 1, explanation: "JIT (Just-In-Time) Compiler จะแปล IL เป็น Machine Code แบบสดๆ ณ วินาทีที่โค้ดส่วนนั้นกำลังจะถูกรัน" }
        ],
        realUseCase: "เมื่อคุณโหลดโปรแกรมจาก Steam (ที่เขียนด้วย Unity/C#) สิ่งที่คุณโหลดมาคือ IL (ไฟล์ .dll) ไม่ใช่ภาษาเครื่องของคอมคุณ! คอมของคุณจะต้องใช้ CLR ในการแปลง IL เป็นภาษาเครื่องของคุณเองตอนกดเข้าเกม"
    },
    {
        id: 33,
        moduleId: 11,
        moduleName: "Module 11: IL (Intermediate Language)",
        title: "33. Deep Dive into IL",
        library: "System.Reflection.Emit",
        objectives: ["อ่านโครงสร้างภาษา IL พื้นฐาน", "เข้าใจการทำงานแบบ Stack-based ของ .NET"],
        content: [
            { type: "text", text: "บทนี้อาจจะลึกสักหน่อย แต่ถ้าคุณเข้าใจ <strong>IL (Intermediate Language)</strong> คุณจะเข้าใจวิธีคิดของ C# อย่างแท้จริง IL เป็นภาษาแบบ <strong>Stack-based</strong> คือทำงานโดยการ โยนของลงกล่อง (Push) และ ดึงของออกจากกล่อง (Pop) มาคำนวณ" },
            { type: "heading", text: "📦 Library: System.Reflection.Emit" },
            { type: "text", text: "<ul><li>เป็นไลบรารีขั้นสูงใช้สำหรับ <strong>สร้างโค้ด IL สดๆ ในตอนที่โปรแกรมกำลังรัน</strong> (Dynamic Code Generation)</li><li>พวก Framework ใหญ่ๆ อย่าง Entity Framework หรือ Dapper ใช้สิ่งนี้เพื่อเสกโค้ดขึ้นมาให้ทำงานเร็วปรี๊ด!</li></ul>" },
            { type: "heading", text: "เปรียบเทียบ C# กับ IL" },
            { type: "text", text: "มาดูโค้ดง่ายๆ กันครับ สมมติ C# คือ <code>int a = 5 + 10;</code>" },
            { type: "code", code: `// --- C# Code ---\nint a = 5;\nint b = 10;\nint sum = a + b;\n\n// --- IL Code (สิ่งที่จะอยู่ในไฟล์ .dll) ---\nldc.i4.5     // Load Constant 4-byte int (ดันเลข 5 ลง Stack)\nldc.i4.10    // Load Constant 4-byte int (ดันเลข 10 ลง Stack)\nadd          // ดึง 10 กับ 5 ออกมาบวกกัน แล้วดันผลลัพธ์ (15) ลง Stack\nstloc.0      // Store to Local variable 0 (เก็บ 15 ใส่ตัวแปร sum)` },
            { type: "heading", text: "คำสั่ง IL ที่เจอบ่อย" },
            { type: "text", text: "<code>ldstr \"Hello\"</code> (Load String ลง Stack)<br><code>call System.Console::WriteLine</code> (เรียก Method และดึงค่าบนสุดของ Stack ไปเป็น Parameter)<br><code>ret</code> (Return/จบการทำงาน)" }
        ],
        conceptNote: "ถ้าคุณอยากแอบดูโค้ด IL ของโปรแกรมที่คอมไพล์เสร็จแล้ว คุณสามารถใช้โปรแกรมอย่าง <strong>ILSpy</strong> หรือ <strong>dotPeek</strong> ไปเปิดไฟล์ .dll ได้เลย! (การ Decompile) นี่เป็นเหตุผลว่าทำไมโค้ด C# ถึงโดนแฮกหรือโดนก๊อปได้ง่ายถ้าไม่ทำการป้องกัน (Obfuscation)",
        exercises: [
            { level: "Hard", instruction: "แปลโค้ด IL นี้กลับเป็นภาษา C#: \nldstr \"Error\"\ncall void [System.Console]System.Console::WriteLine(string)\nret", answer: `Console.WriteLine("Error");\nreturn;` }
        ],
        quiz: [
            { question: "คำสั่ง 'add' ในภาษา IL ทำงานอย่างไร?", options: ["เพิ่มตัวแปรใหม่", "ดึงค่า 2 ค่าบนสุดจาก Stack มาบวกกัน แล้วเก็บผลลัพธ์กลับลง Stack", "บวกเลข 1 เข้ากับตัวแปร (เหมือน i++)"], answerIndex: 1, explanation: "IL ทำงานบนระบบ Stack ดังนั้น add จะ Pop ค่าออกมา 2 ตัว คำนวณ แล้ว Push ผลลัพธ์กลับลงไป" }
        ],
        realUseCase: "การเขียนเกมด้วย Unity สมัยก่อนแฮกเกอร์มักจะใช้โปรแกรม dnSpy เพื่อแก้ไฟล์ Assembly-CSharp.dll โดยการแก้คำสั่ง IL (เช่น เปลี่ยน ldc.i4.10 เป็น ldc.i4.9999 เพื่อโกงเงิน) นี่คือการแฮกระดับ IL!"
    },
    {
        id: 34,
        moduleId: 12,
        moduleName: "Module 12: Memory Management & GC",
        title: "34. Stack vs Heap & Garbage Collector",
        library: "System.GC",
        objectives: ["เข้าใจกลไกการจองหน่วยความจำ", "การทำงานของ Garbage Collector", "วิธีป้องกัน Memory Leak"],
        content: [
            { type: "text", text: "ในภาษาอย่าง C++ คุณต้องสั่ง <code>malloc()</code> เพื่อขอแรม และ <code>free()</code> เพื่อคืนแรม ถ้าลืมคืนก็เกิดอาการ <strong>Memory Leak (แรมรั่ว/แรมกินไม่หยุด)</strong> แต่ใน C# เรามีฮีโร่ที่ชื่อว่า <strong>GC (Garbage Collector - คนเก็บขยะ)</strong> คอยทำให้!" },
            { type: "heading", text: "📦 Library: System" },
            { type: "text", text: "คลาส <code>GC</code> อยู่ใน System Namespace ใช้สำหรับสั่งการหรือสอบถามสถานะของ Garbage Collector" },
            { type: "heading", text: "Stack (กล่องซ้อน) vs Heap (ลานกว้าง)" },
            { type: "text", text: "<ul><li><strong>Stack:</strong> เร็วมาก แต่ขนาดเล็ก ใช้เก็บ Value Types (เช่น int, bool, struct) และตัวแปร Local ทันทีที่จบ Method ตัวแปรใน Stack จะโดนลบทิ้งทันที (ทำลายตัวเอง)</li><li><strong>Heap:</strong> พื้นที่ใหญ่ ใช้เก็บ Reference Types (คือ Object ทุกตัวที่คุณใช้คำว่า <code>new</code> เช่น new Class, new List) ของใน Heap จะอยู่ไปเรื่อยๆ จนกว่า <strong>GC จะมาเก็บกวาด</strong></li></ul>" },
            { type: "heading", text: "GC ทำงานตอนไหน? (Generations)" },
            { type: "text", text: "GC แบ่งขยะเป็น 3 รุ่น (Generations):<br><strong>Gen 0:</strong> ของที่เพิ่งสร้างใหม่ (เช่น ตัวแปรใน loop) GC จะมากวาดที่นี่บ่อยสุด เร็วสุด<br><strong>Gen 1:</strong> ของที่รอดจากการกวาด Gen 0 มาได้<br><strong>Gen 2:</strong> ของที่อยู่นานมาก (เช่น Static data, Caching) GC จะมากวาดที่นี่นานๆ ที และกิน CPU หนักมากเวลากวาด" },
            { type: "code", code: `void BadPerformance()\n{\n    // การต่อ string แบบ += ใน loop จะสร้าง Object (string) ใหม่บน Heap ทุกรอบ!\n    string result = "";\n    for(int i = 0; i < 10000; i++) \n    {\n        result += i.ToString(); // แรมทะลัก GC ทำงานหนัก (Gen 0 ขยะเต็ม)\n    }\n}` }
        ],
        conceptNote: "คุณไม่ควรเรียก <code>GC.Collect();</code> ด้วยตัวเองอย่างเด็ดขาด! เพราะมันจะหยุดการทำงานของโปรแกรมคุณชั่วคราว (Pause) เพื่อไล่ลบขยะ ปล่อยให้ CLR เป็นคนตัดสินใจเองว่าตอนไหนเหมาะสมที่จะลบ",
        exercises: [
            { level: "Hard", instruction: "วิเคราะห์โค้ด: `Player p = new Player();` โค้ดนี้ใช้ Memory ส่วนไหนบ้าง?", answer: "ตัวแปร Reference `p` ถูกสร้างบน Stack (ชี้ไปที่ที่อยู่ Memory) ส่วนเนื้อแท้ของ Object Player ถูกสร้างอยู่บน Heap ด้วยคำสั่ง new" },
            { level: "Medium", instruction: "จากโค้ด BadPerformance ข้างบน ควรใช้อะไรแทน string += เพื่อไม่ให้เกิดขยะใน Heap?", answer: "ใช้ System.Text.StringBuilder" }
        ],
        quiz: [
            { question: "ชนิดข้อมูลแบบ Value Type (เช่น int, struct) จะถูกเก็บไว้ที่หน่วยความจำส่วนใด?", options: ["Heap", "Stack", "Disk", "Cache"], answerIndex: 1, explanation: "Value Types จะถูกเก็บลง Stack ซึ่งมีความรวดเร็วสูงและลบตัวเองอัตโนมัติเมื่อหลุดจาก scope" }
        ],
        realUseCase: "ในเกมเซิร์ฟเวอร์ ถ้าคุณ <code>new</code> Object ทิ้งขว้างใน Update Loop (ทำงาน 60 รอบต่อวินาที) ขยะใน Gen 0 จะล้น GC จะต้องเข้ามาล้างขยะบ่อยๆ ผลคือเซิร์ฟเวอร์จะเกิดอาการ <strong>กระตุก (Lag Spikes)</strong> เป็นช่วงๆ นี่คือฝันร้ายของโปรแกรมเมอร์เกม!"
    },
    {
        id: 35,
        moduleId: 13,
        moduleName: "Module 13: Async / Multithreading",
        title: "35. Multithreading & Async Deep Dive",
        library: "System.Threading.Tasks",
        objectives: ["เข้าใจความต่างระหว่าง Thread และ Task", "การทำงานเบื้องหลังของ async/await (State Machine)"],
        content: [
            { type: "text", text: "<strong>Thread (เธรด)</strong> คือ 'เส้นทางการทำงานของ CPU' 1 Thread ทำงานได้ 1 อย่างต่อ 1 วินาที ถัาคุณมีงานหนักๆ แล้วรันบน Thread หลัก (Main Thread) โปรแกรมจะค้าง" },
            { type: "heading", text: "📦 Library: System.Threading และ System.Threading.Tasks" },
            { type: "text", text: "<ul><li><code>System.Threading.Thread</code>: เป็นการจัดการระดับล่าง (สร้างคนงานจริงๆ ขึ้นมาใหม่ ซึ่งกินแรมราวๆ 1MB ต่อ 1 Thread)</li><li><code>System.Threading.Tasks.Task</code>: เป็นการจัดการระดับสูง (ระบบจะไปหยิบคนงานที่ว่างอยู่จาก ThreadPool มาใช้งานแทนการจ้างคนใหม่ ประหยัดและเร็วกว่ามาก)</li></ul>" },
            { type: "heading", text: "เบื้องหลัง async / await (State Machine)" },
            { type: "text", text: "เวลาคุณใส่คำว่า <code>await</code> เบื้องหลัง Compiler ไม่ได้ไปสั่งหยุด Thread! แต่มันแปลง Method ของคุณให้กลายเป็น <strong>State Machine (เครื่องจักรสถานะ)</strong> มันจะหั่นโค้ดคุณเป็น 2 ท่อน: ท่อนก่อน await และท่อนหลัง await" },
            { type: "code", code: `public async Task DownloadDataAsync()\n{\n    Console.WriteLine("1. ก่อนโหลด"); // ทำบน Thread หลัก\n    \n    // พอเจอ await มันจะปล่อย Thread หลักกลับไปทำงานอื่นทันที! ไม่ได้บล็อก!\n    string result = await HttpClient.GetStringAsync("http://...");\n    \n    // เมื่อโหลดเสร็จ มันจะเอา Thread ที่ว่าง (อาจจะ Thread เดิมหรือตัวใหม่) กลับมาทำต่อ\n    Console.WriteLine("2. โหลดเสร็จแล้ว: " + result);\n}` },
            { type: "heading", text: "อันตราย: Deadlock (ปัญหาทางตัน)" },
            { type: "text", text: "ถ้าคุณฝืนเอาโค้ด Async ไปครอบด้วยคำสั่ง <code>.Result</code> หรือ <code>.Wait()</code> แบบ Sync จะทำให้เกิด <strong>Deadlock</strong> คือ Thread หลักรอ Task ให้เสร็จ แต่ Task โหลดเสร็จแล้วจะกลับมารันต่อก็รันไม่ได้ เพราะ Thread หลักโดนล็อกอยู่! (ค้างตลอดกาล)" }
        ],
        conceptNote: "กฎเหล็ก: <strong>Async All The Way!</strong> ถ้าคุณใช้ async ตรงไหนแล้ว โค้ดที่เรียกใช้งานมันตั้งแต่ต้นสายยันปลายสายต้องเป็น async/await ทั้งหมด ห้ามผสมกับ <code>.Result</code> เด็ดขาดถ้าไม่อยากให้โปรแกรมระเบิด!",
        exercises: [
            { level: "Hard", instruction: "Debug โค้ดที่ทำให้เกิด Deadlock ใน WinForms: \nvar task = GetDataAsync();\nstring text = task.Result; // บล็อก Main Thread", answer: "วิธีแก้: ต้องใช้ await แทนการเรียก .Result เช่น string text = await GetDataAsync();" }
        ],
        quiz: [
            { question: "ความแตกต่างหลักระหว่าง Thread และ Task ใน .NET คืออะไร?", options: ["ไม่มีความต่าง", "Task รันบน GPU ส่วน Thread รันบน CPU", "Task ใช้ระบบ ThreadPool ในการหมุนเวียนคนงาน ทำให้เบาและจัดการทรัพยากรดีกว่า", "Thread เร็วกว่า Task 10 เท่า"], answerIndex: 2, explanation: "Task คือ Abstraction ระดับสูงที่จัดการเรื่อง ThreadPool ให้เราอัตโนมัติ ทำให้เราไม่ต้องจ้าง (Allocate) Thread ใหม่ทุกครั้ง ซึ่งกินแรมและเวลา" }
        ],
        realUseCase: "ระบบ Web API (ASP.NET Core) รองรับคนได้หมื่นคนพร้อมกัน เพราะมันใช้ <code>async/await</code> เวลาคุยกับ Database มันจะปล่อย Thread กลับคืนสู่ Pool ไปรับ Request คนอื่นต่อ ทำให้ไม่ต้องเปิด 10,000 Threads (ซึ่งเซิร์ฟเวอร์จะแรมระเบิดตายก่อน)"
    }
];

window.lessonsData.push(...part4);
