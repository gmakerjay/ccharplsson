window.lessonsData = window.lessonsData || [];

const part5 = [
    {
        id: 36,
        moduleId: 14,
        moduleName: "Module 14: WinForms Deep Dive",
        title: "36. WinForms Lifecycle & Event Pump",
        library: "System.Windows.Forms",
        objectives: ["เข้าใจวงจรชีวิตของหน้าต่างโปรแกรม (Lifecycle)", "เข้าใจการทำงานของ Message Loop (Event Pump)"],
        content: [
            { type: "text", text: "คุณเคยกดปุ่มรัวๆ แล้วโปรแกรมแฮงก์ไหม? นั่นเป็นเพราะคุณทำ <strong>Message Loop</strong> มันติดขัด! มาเจาะลึกเบื้องหลังของ WinForms กันครับ" },
            { type: "heading", text: "📦 Library: System.Windows.Forms" },
            { type: "text", text: "<ul><li>เป็นไลบรารีที่หุ้ม (Wrapper) API ระดับล่างของระบบปฏิบัติการ Windows (Win32 API)</li><li>การวาดปุ่ม วาดหน้าจอ จริงๆ แล้วเป็นการส่งคำสั่งไปให้ Windows OS วาดให้</li></ul>" },
            { type: "heading", text: "Lifecycle ของ Form (วงจรชีวิต)" },
            { type: "text", text: "เมื่อคุณสั่งเปิดหน้าต่าง มันมีลำดับการเกิดดังนี้:<br>1. <code>Constructor (InitializeComponent)</code> - สร้าง Object ขึ้นใน Memory<br>2. <code>Form_Load</code> - จัดเตรียมข้อมูลก่อนหน้าต่างจะโผล่ (คนยังมองไม่เห็น)<br>3. <code>Form_Shown</code> - หน้าต่างโผล่ขึ้นมาบนจอครั้งแรก<br>4. <code>Form_FormClosing</code> - ผู้ใช้กดกากบาท (X) สามารถดัก Event นี้เพื่อถามยืนยัน (คุณต้องการออกใช่หรือไม่?) ได้<br>5. <code>Form_FormClosed</code> - หน้าต่างถูกทำลายทิ้ง" },
            { type: "heading", text: "The Message Loop (Event Pump)" },
            { type: "text", text: "เบื้องหลังสุดคือคำสั่ง <code>Application.Run(new MainForm());</code> คำสั่งนี้คือ <strong>Infinite Loop (while-true)</strong> ที่คอยดักฟังคำสั่งจาก OS ว่ามีการขยับเมาส์ไหม? มีการกดคีย์บอร์ดไหม? ถ้ารับ Message มาแล้ว มันจะไปปลุก <strong>Event Handler</strong> (เช่น <code>btn_Click</code>) ให้ทำงาน" },
            { type: "code", code: `// ถ้าคุณเผลอเขียนโค้ดบล็อก Thread ใน Event Handler\nprivate void btnProcess_Click(object sender, EventArgs e)\n{\n    // โค้ดนี้รันอยู่บน Main Thread (UI Thread)\n    Thread.Sleep(5000); // จำลองงานหนัก 5 วินาที\n    \n    // ผลลัพธ์: ระหว่าง 5 วินาทีนี้ Message Loop จะหยุดหมุน \n    // โปรแกรมจะไม่รับรู้การคลิกใดๆ หน้าต่างจะลากไม่ได้ (Not Responding)!\n}` }
        ],
        conceptNote: "การแก้ปัญหา Not Responding คือคุณต้องเตะงานหนักๆ ออกไปทำบน Thread อื่นโดยใช้ <code>Task.Run()</code> หรือทำเป็น <code>async/await</code> เพื่อปล่อยให้ Message Loop หลักได้หมุนต่อไปรับ Event จากผู้ใช้!",
        exercises: [
            { level: "Medium", instruction: "เรียงลำดับ Event Lifecycle ของ WinForms จากเกิดจนตาย: [Shown, FormClosed, Load, Constructor, FormClosing]", answer: "Constructor -> Load -> Shown -> FormClosing -> FormClosed" }
        ],
        quiz: [
            { question: "Event ใดเหมาะสมที่สุดสำหรับการแสดง MessageBox ถามผู้ใช้ว่า 'คุณต้องการบันทึกก่อนออกจากโปรแกรมหรือไม่?'", options: ["Form_Load", "Form_Shown", "Form_FormClosing", "Form_FormClosed"], answerIndex: 2, explanation: "FormClosing สามารถสั่ง e.Cancel = true; เพื่อยกเลิกการปิดโปรแกรมได้ ถ้าไปดักที่ FormClosed จะไม่ทันแล้วเพราะโปรแกรมปิดไปแล้ว" }
        ],
        realUseCase: "ทุกโปรแกรม GUI บนโลก ตั้งแต่แอปมือถือยันโปรแกรม Windows ทำงานด้วยระบบ Message Loop/Event Queue แบบเดียวกันนี้ทั้งหมด"
    },
    {
        id: 37,
        moduleId: 15,
        moduleName: "Module 15: WPF (Modern UI)",
        title: "37. WPF & MVVM Introduction",
        library: "System.Windows",
        objectives: ["เข้าใจข้อดีของ WPF เหนือ WinForms", "รู้จักภาษา XAML", "เข้าใจคอนเซปต์ MVVM (Model-View-ViewModel)"],
        content: [
            { type: "text", text: "แม้ WinForms จะง่าย แต่หน้าตามันเชยและแก้ไขยาก Microsoft จึงออก <strong>WPF (Windows Presentation Foundation)</strong> มาเพื่อทำ UI ที่สวยและรองรับ Hardware Acceleration (ใช้การ์ดจอช่วยวาด)" },
            { type: "heading", text: "📦 Library: System.Windows (WPF)" },
            { type: "text", text: "<ul><li>ใช้เทคโนโลยี DirectX ในการเรนเดอร์หน้าจอ (ไม่ได้ใช้ Win32 API แบบเก่า) ทำให้วาดกราฟิก, แอนิเมชัน, โปร่งแสง ได้เนียนและลื่นไหล</li></ul>" },
            { type: "heading", text: "การใช้ XAML (ภาษาออกแบบ UI)" },
            { type: "text", text: "ใน WPF หน้าจอไม่ได้ถูกสร้างจากโค้ด C# ล้วนๆ แต่ใช้ภาษา XAML (คล้ายๆ HTML) ทำให้แยกหน้าที่ฝั่งคนทำดีไซน์ (Design) กับคนเขียนโค้ดลอจิก (C#) ออกจากกันได้ชัดเจน" },
            { type: "code", code: `<!-- ไฟล์ MainWindow.xaml -->\n<Window x:Class="MyApp.MainWindow">\n    <StackPanel>\n        <TextBox Text="{Binding Username}" />\n        <Button Content="Login" Command="{Binding LoginCommand}" />\n    </StackPanel>\n</Window>` },
            { type: "heading", text: "คอนเซปต์ Data Binding & MVVM" },
            { type: "text", text: "ใน WinForms เวลาจะโชว์ข้อมูล เราต้องสั่ง <code>txtName.Text = user.Name;</code> ใช่มั้ยครับ? แต่ใน WPF เราจะใช้การ <strong>Binding (ผูกเชือก)</strong> ระหว่าง UI (View) กับข้อมูล (ViewModel) ถ้าข้อมูลเปลี่ยน หน้าจอจะอัปเดตเองอัตโนมัติ! โครงสร้างนี้เรียกว่า <strong>MVVM</strong>" }
        ],
        conceptNote: "MVVM (Model-View-ViewModel) เป็นสถาปัตยกรรมที่ช่วยแก้ปัญหา 'โค้ดพันกันยุ่งเหยิง (Spaghetti Code)' ในไฟล์เดียว (เช่น ใน WinForms ที่ทุกอย่างยัดรวมอยู่ใน MainForm.cs)",
        exercises: [
            { level: "Medium", instruction: "เปรียบเทียบ WinForms กับ WPF: ถ้าต้องการทำโปรแกรมที่มีแอนิเมชันปุ่มสวยๆ ลื่นไหล โปร่งแสงได้ ควรใช้อะไร?", answer: "WPF (เพราะใช้ DirectX ในการเรนเดอร์กราฟิกโดยตรง)" }
        ],
        quiz: [
            { question: "ตัวอักษรใดใน MVVM ที่เป็นตัวแทนของ 'โค้ดที่ทำหน้าที่รับข้อมูลมาแปลงเพื่อให้ View สามารถ Bind หรือผูกเอาไปโชว์ได้'?", options: ["Model", "View", "ViewModel", "Macro"], answerIndex: 2, explanation: "ViewModel คือตัวกลางที่คอยเตรียมข้อมูลจาก Model ให้พร้อมสำหรับการถูกผูก (Bind) เข้ากับ View (UI)" }
        ],
        realUseCase: "Visual Studio ที่คุณใช้เขียน C# ก็ถูกสร้างขึ้นมาจากเทคโนโลยี WPF ล้วนๆ นี่จึงเป็นเหตุผลว่าทำไมมันถึงปรับแต่งหน้าจอ วางหน้าต่างซ้อนกันได้เนียนขนาดนี้"
    },
    {
        id: 38,
        moduleId: 16,
        moduleName: "Module 16: .NET Core / Modern .NET",
        title: "38. .NET Core & CLI",
        library: "System",
        objectives: ["เข้าใจความแตกต่างของ .NET Framework กับ .NET Core", "การรันโปรแกรมข้ามแพลตฟอร์มด้วย CLI"],
        content: [
            { type: "text", text: "ในอดีต (ก่อนปี 2016) C# รันได้แค่บน Windows เท่านั้น (เราเรียกยุคนั้นว่า <strong>.NET Framework</strong>) แต่ปัจจุบัน Microsoft เขียนมันขึ้นมาใหม่ทั้งหมดให้เป็น Open-source และรันได้ทุก OS เราเรียกมันว่า <strong>.NET Core (ปัจจุบันเรียกแค่ .NET 6, 7, 8)</strong>" },
            { type: "heading", text: "Cross-Platform" },
            { type: "text", text: "โค้ด <code>Console.WriteLine</code> ที่คุณเขียน สามารถเอาไปรันบน Ubuntu (Linux) แบ็คเอนด์เซิร์ฟเวอร์ หรือบน MacBook (macOS) ได้ทันทีโดยไม่ต้องแก้โค้ดเลย! นี่คือพลังของ Modern .NET" },
            { type: "heading", text: "CLI (Command Line Interface)" },
            { type: "text", text: "ในยุคใหม่ คุณไม่จำเป็นต้องมีโปรแกรมหนักๆ อย่าง Visual Studio คุณแค่มี Text Editor ธรรมดา (เช่น VS Code) และใช้หน้าจอ Terminal พิมพ์คำสั่งสั่งคอมไพล์ได้เลย" },
            { type: "code", code: `// 1. สร้างโปรเจกต์ใหม่แบบ Console\ndotnet new console -n MyCoolApp\n\n// 2. เข้าไปในโฟลเดอร์\ncd MyCoolApp\n\n// 3. สั่งคอมไพล์ (Build) และรันโปรแกรมทันที!\ndotnet run\n\n// 4. แพ็คเป็นไฟล์ .dll หรือ .exe ไปให้คนอื่นใช้งาน (Production)\ndotnet publish -c Release` }
        ],
        conceptNote: "ถ้าคุณต้องทำโปรแกรม GUI แบบ <strong>WinForms หรือ WPF</strong> มันจะยังคงรันได้ <strong>เฉพาะบน Windows เท่านั้น</strong> นะครับ! (เพราะเบื้องหลังมันเรียกใช้ Win32 API) ถ้าอยากทำ UI ข้ามแพลตฟอร์ม ต้องใช้ <strong>.NET MAUI</strong> หรือ <strong>Blazor</strong> แทน",
        exercises: [
            { level: "Easy", instruction: "คำสั่งใดใน dotnet CLI ที่ใช้สำหรับรันโปรแกรมที่คุณเขียนไว้ในโฟลเดอร์ปัจจุบัน?", answer: "dotnet run" }
        ],
        quiz: [
            { question: "ข้อใดคือข้อจำกัดของ WinForms/WPF แม้จะถูกพัฒนาด้วย .NET 6/7/8 แล้วก็ตาม?", options: ["ช้ากว่าเดิม", "รันได้เฉพาะบนระบบปฏิบัติการ Windows เท่านั้น", "ไม่สามารถใช้คำสั่ง async/await ได้", "ต้องจ่ายเงินซื้อลิขสิทธิ์"], answerIndex: 1, explanation: "WinForms และ WPF ถูกผูกติดแน่นกับระบบกราฟิกของ Windows OS จึงไม่สามารถนำไปรันบน Linux หรือ Mac ได้" }
        ],
        realUseCase: "นักพัฒนาเว็บ (ASP.NET Core) ส่วนใหญ่รันเซิร์ฟเวอร์บน Linux Docker Containers เพื่อความประหยัดและเสถียร ซึ่งทั้งหมดจัดการผ่าน <code>dotnet publish</code> และ Command Line"
    }
];

window.lessonsData.push(...part5);

// Library Reference Hub Data
window.libraryHubData = [
    {
        namespace: "System",
        purpose: "เป็นไลบรารีแกนหลัก (Core) ของ .NET เก็บ Class พื้นฐานที่สุดที่ทุกโปรแกรมต้องใช้งาน",
        classes: [
            {
                name: "Console",
                desc: "ใช้สำหรับควบคุมหน้าต่าง Terminal / Command Prompt",
                properties: [
                    { name: "ForegroundColor", desc: "สีของตัวอักษร" },
                    { name: "Title", desc: "หัวข้อหน้าต่าง Console" }
                ],
                methods: [
                    { name: "WriteLine()", desc: "พิมพ์ข้อความแล้วขึ้นบรรทัดใหม่" },
                    { name: "ReadLine()", desc: "รอรับข้อความจากผู้ใช้" },
                    { name: "Clear()", desc: "ล้างหน้าจอทั้งหมด" }
                ],
                example: "Console.ForegroundColor = ConsoleColor.Green;\nConsole.WriteLine(\"Hack complete!\");"
            },
            {
                name: "Convert",
                desc: "ใช้แปลงชนิดข้อมูล (Data Type) ข้ามสายพันธุ์",
                properties: [],
                methods: [
                    { name: "ToInt32()", desc: "แปลงเป็น int" },
                    { name: "ToDouble()", desc: "แปลงเป็น double" },
                    { name: "ToString()", desc: "แปลงเป็นข้อความ" }
                ],
                example: "int age = Convert.ToInt32(\"25\");"
            },
            {
                name: "Math",
                desc: "ใช้คำนวณคณิตศาสตร์ขั้นสูง",
                properties: [
                    { name: "PI", desc: "ค่าพาย (3.14159...)" }
                ],
                methods: [
                    { name: "Abs()", desc: "ค่าสัมบูรณ์" },
                    { name: "Round()", desc: "ปัดทศนิยม" },
                    { name: "Pow()", desc: "ยกกำลัง" }
                ],
                example: "double area = Math.PI * Math.Pow(radius, 2);"
            }
        ]
    },
    {
        namespace: "System.Collections.Generic",
        purpose: "จัดการโครงสร้างข้อมูลขั้นสูง (Data Structures) ที่สามารถระบุ Type (T) ได้",
        classes: [
            {
                name: "List<T>",
                desc: "อาร์เรย์แบบยืดหดได้ (Dynamic Array)",
                properties: [
                    { name: "Count", desc: "จำนวนสมาชิกปัจจุบันใน List" },
                    { name: "Capacity", desc: "ความจุทั้งหมดที่ Memory จองเผื่อไว้" }
                ],
                methods: [
                    { name: "Add()", desc: "เพิ่มต่อท้าย" },
                    { name: "RemoveAt()", desc: "ลบตาม Index" },
                    { name: "Clear()", desc: "ล้างไส้ในทิ้งทั้งหมด" }
                ],
                example: "List<int> scores = new List<int>();\nscores.Add(100);"
            },
            {
                name: "Dictionary<TKey, TValue>",
                desc: "พจนานุกรมเก็บข้อมูลเป็นคู่ Key-Value (ค้นหาไวมาก O(1))",
                properties: [
                    { name: "Keys", desc: "ดึงรายชื่อ Key ทั้งหมด" },
                    { name: "Values", desc: "ดึง Value ทั้งหมด" }
                ],
                methods: [
                    { name: "Add(key, value)", desc: "เพิ่มข้อมูล (Key ห้ามซ้ำ)" },
                    { name: "ContainsKey(key)", desc: "ตรวจสอบว่ามี Key นี้ไหม" }
                ],
                example: "Dictionary<string, string> dic = new Dictionary<string, string>();\ndic.Add(\"TH\", \"Thailand\");"
            }
        ]
    },
    {
        namespace: "System.Linq",
        purpose: "Language Integrated Query - ใช้เขียนคำสั่งคล้าย SQL ดึงข้อมูล กรองข้อมูล จาก Collection ในหน่วยความจำได้สั้นมากๆ",
        classes: [
            {
                name: "Enumerable (Extension Methods)",
                desc: "คลาสนี้จะไปแปะ Method พิเศษให้กับ Array, List ทุกตัวใน C#",
                properties: [],
                methods: [
                    { name: "Where(เงื่อนไข)", desc: "กรองเอาเฉพาะที่ตรงเงื่อนไข" },
                    { name: "Select(รูปแบบ)", desc: "ดึงเฉพาะบางฟิลด์ หรือแปลงรูปร่าง (Map)" },
                    { name: "OrderBy(ฟิลด์)", desc: "เรียงลำดับจากน้อยไปมาก" },
                    { name: "FirstOrDefault()", desc: "ดึงตัวแรกที่เจอ ถ้าไม่เจอคืนค่า null (ไม่พัง)" }
                ],
                example: "using System.Linq;\n// หาคนสอบผ่าน (คะแนน >= 50)\nvar passed = students.Where(s => s.Score >= 50).ToList();"
            }
        ]
    },
    {
        namespace: "System.IO",
        purpose: "การจัดการ Input/Output ไฟล์ โฟลเดอร์ (Directory) บนฮาร์ดดิสก์",
        classes: [
            {
                name: "File",
                desc: "จัดการไฟล์แบบม้วนเดียวจบ (ไม่ต้องเปิด-ปิด File Stream เอง)",
                properties: [],
                methods: [
                    { name: "Exists(path)", desc: "เช็คว่าไฟล์มีอยู่จริงไหม" },
                    { name: "ReadAllText(path)", desc: "อ่านไฟล์ทั้งก้อนเป็น string" },
                    { name: "WriteAllText(path, text)", desc: "เขียนทับไฟล์ใหม่ทั้งหมด" },
                    { name: "AppendAllText(path, text)", desc: "เขียนต่อท้ายไฟล์เก่า" }
                ],
                example: "string txt = File.ReadAllText(\"save.txt\");"
            }
        ]
    },
    {
        namespace: "System.Threading.Tasks",
        purpose: "จัดการเรื่อง Multithreading และการรันแบบ Asynchronous ให้หน้าจอไม่ค้าง",
        classes: [
            {
                name: "Task",
                desc: "ตัวแทนของการทำงาน 1 งาน (Promise) ที่จะทำงานเสร็จในอนาคต",
                properties: [
                    { name: "IsCompleted", desc: "งานนี้เสร็จหรือยัง" },
                    { name: "Result", desc: "ผลลัพธ์ของงาน (คำเตือน: ห้ามเรียกตรงๆ ถ้าไม่ใช่ async เพราะจะเกิด Deadlock)" }
                ],
                methods: [
                    { name: "Delay()", desc: "หน่วงเวลาโดยไม่บล็อก Thread หลัก" },
                    { name: "Run()", desc: "โยนงานไปให้ ThreadPool จัดการ (ทำงานเบื้องหลัง)" }
                ],
                example: "await Task.Delay(2000); // หน่วง 2 วินาที\nawait Task.Run(() => DoHeavyWork());"
            }
        ]
    },
    {
        namespace: "System.Windows.Forms",
        purpose: "ไลบรารีสร้าง Graphic User Interface (GUI) แบบหน้าต่างบน Windows",
        classes: [
            {
                name: "Button",
                desc: "ปุ่มสำหรับให้ผู้ใช้คลิกเริ่มคำสั่ง",
                properties: [
                    { name: "Text", desc: "ข้อความบนปุ่ม" },
                    { name: "Enabled", desc: "เปิด/ปิด การกด (true/false)" },
                    { name: "BackColor", desc: "สีพื้นหลังของปุ่ม" }
                ],
                methods: [
                    { name: "PerformClick()", desc: "จำลองการคลิกด้วยโค้ด (เหมือนคนกดเป๊ะ)" }
                ],
                events: [
                    { name: "Click", desc: "เมื่อถูกคลิก" },
                    { name: "MouseEnter", desc: "เมื่อเมาส์ชี้เข้ามาในปุ่ม" }
                ],
                example: "btnSave.Text = \"บันทึก\";\nbtnSave.Enabled = false; // ปิดปุ่มไว้ก่อน"
            },
            {
                name: "TextBox",
                desc: "กล่องรับข้อมูลจากคีย์บอร์ด (ข้อมูลดิบเป็น string เสมอ)",
                properties: [
                    { name: "Text", desc: "ข้อความข้างในกล่อง" },
                    { name: "ReadOnly", desc: "ให้คนใช้อ่านได้อย่างเดียว (พิมพ์เพิ่มไม่ได้)" },
                    { name: "PasswordChar", desc: "อักขระปิดบังรหัสผ่าน (เช่น พิมพ์ '*' แทนตัวหนังสือ)" }
                ],
                methods: [
                    { name: "Clear()", desc: "ล้างข้อความทั้งหมด" },
                    { name: "Focus()", desc: "เอาเคอร์เซอร์กะพริบไปวางไว้" }
                ],
                events: [
                    { name: "TextChanged", desc: "พิมพ์ตัวอักษรเปลี่ยนไป 1 ตัว Event นี้ก็จะทำงานทันที" }
                ],
                example: "txtPassword.PasswordChar = '*';\nstring input = txtSearch.Text;"
            },
            {
                name: "DataGridView",
                desc: "ตารางแสดงข้อมูลระดับเทพ คู่บุญการต่อ Database",
                properties: [
                    { name: "DataSource", desc: "รับ List<T> หรือ DataTable มาปูกลายเป็นตาราง 2 มิติอัตโนมัติ" },
                    { name: "SelectedRows", desc: "ดึงรายการแถวทั้งหมดที่ผู้ใช้กำลังลากดำ/คลิกเลือก" }
                ],
                methods: [
                    { name: "Refresh()", desc: "วาดตารางใหม่" }
                ],
                events: [
                    { name: "CellClick", desc: "เมื่อผู้ใช้คลิกที่ช่องใดๆ" }
                ],
                example: "dataGridView1.DataSource = userList;"
            }
        ]
    }
];
