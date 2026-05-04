const part3 = [
    {
        id: 24,
        moduleId: 7,
        moduleName: "Module 7: RPG Project",
        title: "24. RPG Part 1: Player & Monster Classes",
        library: "System",
        objectives: ["ออกแบบระบบ (System Design) ของเกม", "สร้าง Class สำหรับตัวละครและมอนสเตอร์"],
        content: [
            { type: "text", text: "ถึงเวลาทำโปรเจกต์ใหญ่! เราจะประยุกต์ใช้ทุกอย่างตั้งแต่อาร์เรย์, ลูป, และ OOP มาสร้าง <strong>เกม RPG บน Console</strong> กันครับ! เริ่มจากการสร้าง Entity พื้นฐานกันก่อน" },
            { type: "heading", text: "การออกแบบ Class" },
            { type: "text", text: "เราจะสร้าง <code>Player</code> สำหรับผู้เล่น และ <code>Monster</code> สำหรับศัตรู ทั้งคู่มีคุณสมบัติคล้ายกัน คือ มีเลือด (HP), มีพลังโจมตี (AttackPower)" },
            { type: "code", code: `class Player\n{\n    public string Name { get; set; }\n    public int HP { get; set; }\n    public int AttackPower { get; set; }\n\n    public Player(string name)\n    {\n        Name = name;\n        HP = 100; // ค่าเริ่มต้น\n        AttackPower = 15;\n    }\n\n    public bool IsAlive() => HP > 0; // Arrow function คืนค่าแบบสั้น\n}\n\nclass Monster\n{\n    public string Name { get; set; }\n    public int HP { get; set; }\n    public int AttackPower { get; set; }\n\n    public Monster(string name, int hp, int attack)\n    {\n        Name = name;\n        HP = hp;\n        AttackPower = attack;\n    }\n\n    public bool IsAlive() => HP > 0;\n}` }
        ],
        conceptNote: "ถ้าคุณสังเกต <code>Player</code> กับ <code>Monster</code> มี Properties ที่ซ้ำกันเยอะมาก (Name, HP, AttackPower, IsAlive) ในอนาคตถ้าคุณอยากให้โค้ดสวยกว่านี้ (Refactor) คุณควรสร้าง Base Class เช่น <code>Character</code> แล้วให้ทั้งคู่ <code>Inherit (:)</code> ไปครับ!",
        exercises: [
            { level: "Easy", instruction: "สร้าง Object จาก class Monster จำนวน 1 ตัว ชื่อ 'Slime' มีเลือด 30 และพลังโจมตี 5", answer: `Monster slime = new Monster("Slime", 30, 5);` }
        ],
        quiz: [
            { question: "ทำไมเราถึงแยก Player และ Monster เป็น Class แทนที่จะเขียนตัวแปรลอยๆ ใน Main?", options: ["เพื่อให้รันได้เร็วขึ้น", "เพื่อให้อ่านยากขึ้น", "เพื่อให้สามารถจัดการ State และ Behavior ของแต่ละตัวแยกกันได้อย่างเป็นระบบ", "เพราะเป็นกฎของภาษา C#"], answerIndex: 2, explanation: "การใช้ Object ช่วยห่อหุ้ม (Encapsulate) ข้อมูลและพฤติกรรม ทำให้เราควบคุมมันได้ง่าย เช่น การเพิ่มมอนสเตอร์ 10 ตัวก็แค่ new Monster() 10 รอบ" }
        ],
        realUseCase: "นี่คือจุดเริ่มต้นของการทำเกมบน Unity เบื้องหลังตัวละครทุกตัวบนจอ จะต้องมีคลาสแบบนี้คอยเก็บสถานะเลือดหรือพลังของมันเอาไว้!"
    },
    {
        id: 25,
        moduleId: 7,
        moduleName: "Module 7: RPG Project",
        title: "25. RPG Part 2: Combat System",
        library: "System",
        objectives: ["การเขียน Game Loop พื้นฐานด้วย while", "ระบบต่อสู้แบบเทิร์นเบส", "การสุ่มค่าพลังด้วย System.Random"],
        content: [
            { type: "text", text: "เกมต้องการลูปหลัก (Game Loop) ที่จะวนทำงานไปเรื่อยๆ จนกว่าจะมีคนตาย" },
            { type: "heading", text: "🧱 Class: Random (System namespace)" },
            { type: "text", text: "<ul><li><strong>ใช้งานเพื่อ:</strong> สร้างตัวเลขสุ่ม (Random number generation)</li><li><strong>Method หลัก:</strong> <code>Next(min, max)</code> (สุ่มเลขตั้งแต่ min จนถึง max-1)</li></ul>" },
            { type: "code", code: `static void Main()\n{\n    Player hero = new Player("Arthur");\n    Monster goblin = new Monster("Goblin", 50, 0);\n    \n    // ใช้งานคลาส Random จาก System เพื่อสุ่มดาเมจก๊อบลิน\n    Random rand = new Random();\n\n    Console.WriteLine($"A wild {goblin.Name} appears!");\n\n    // Game Loop: วนตราบใดที่ทั้งคู่ยังรอด (ใช้ Logical AND)\n    while (hero.IsAlive() && goblin.IsAlive())\n    {\n        // โค้ดตัดทอน: Hero ตี Goblin (หัก HP 15)\n        goblin.HP -= hero.AttackPower;\n        if (!goblin.IsAlive()) break;\n\n        // Monster's Turn\n        int damage = rand.Next(5, 12); // สุ่มดาเมจ 5 ถึง 11\n        hero.HP -= damage;\n        Console.WriteLine($"{goblin.Name} attacks! You took {damage} damage.");\n    }\n}` }
        ],
        conceptNote: "หัวใจของ Combat Loop คือเงื่อนไขใน <code>while</code> การใช้ <code>&&</code> แปลว่าถ้ามีคนใดคนหนึ่งเลือดหมด (<code>IsAlive()</code> เป็น false) ลูปจะหยุดทันที นี่คือคอนเซปต์เดียวกับเกม RPG ระดับโลกทุกเกม!",
        exercises: [
            { level: "Medium", instruction: "ใช้ Class Random สุ่มเปอร์เซ็นต์ (1-100) โอกาสหลบหลีก ถ้าได้น้อยกว่า 30 ให้แสดงว่า 'Dodge Success!'", answer: `Random rnd = new Random();\nif(rnd.Next(1, 101) <= 30) {\n    Console.WriteLine("Dodge Success!");\n}` }
        ],
        quiz: [
            { question: "จากโค้ด `rand.Next(1, 5)` โอกาสที่จะได้เลข 5 คือเท่าไร?", options: ["20%", "25%", "0%", "100%"], answerIndex: 2, explanation: "Method Next(min, max) จะสุ่มตัวเลขไม่รวมค่า max เสมอ! (Exclusive upper bound) ดังนั้นค่าที่ได้คือ 1, 2, 3, 4" }
        ],
        realUseCase: "Turn-based combat loop และการสุ่มแบบ Random เป็นพื้นฐานของเกมอย่าง Final Fantasy ยุคคลาสสิค, Pokémon, และเกมแนว Gacha ทุกเกม (Rate 1% เกลือ 99%)"
    },
    {
        id: 26,
        moduleId: 7,
        moduleName: "Module 7: RPG Project",
        title: "26. RPG Part 3: Inventory System",
        library: "System.Collections.Generic",
        objectives: ["การประยุกต์ใช้ List<T> ทำระบบกระเป๋าเก็บของ", "การใช้ foreach ร่วมกับ Object"],
        content: [
            { type: "text", text: "ส่วนประกอบสุดท้ายของ RPG คือ <strong>ช่องเก็บของ (Inventory)</strong> เราจะใช้ <code>List&lt;Item&gt;</code> ในการจัดการ!" },
            { type: "heading", text: "การเชื่อมโยงไลบรารี" },
            { type: "text", text: "เราจะดึง <code>System.Collections.Generic</code> มาใช้ เพราะช่องเก็บของมีการเพิ่ม (Add) ลด (Remove) อยู่ตลอดเวลา Array ธรรมดาเอาไม่อยู่!" },
            { type: "code", code: `class Item\n{\n    public string Name { get; set; }\n    public int HealAmount { get; set; }\n}\n\nclass Player\n{\n    public int HP { get; set; }\n    // สร้างกระเป๋า (List ที่เก็บ Object ชนิด Item)\n    public List<Item> Inventory { get; set; }\n\n    public Player()\n    {\n        Inventory = new List<Item>(); // เตรียมกระเป๋าเปล่าๆ\n    }\n\n    public void UseItem(int index)\n    {\n        if(index >= 0 && index < Inventory.Count)\n        {\n            Item itemToUse = Inventory[index];\n            HP += itemToUse.HealAmount;\n            Inventory.RemoveAt(index); // ใช้แล้วของหายไปจาก List ทันที (Count จะลดลง)\n        }\n    }\n}` }
        ],
        conceptNote: "ทำไมเราถึงใช้ <code>List</code> ทำ Inventory แทนที่จะใช้ <code>Array</code>? เพราะในเกม ไอเทมมีการ 'เก็บเพิ่ม' และ 'ใช้งานแล้วหายไป' อยู่ตลอดเวลา ซึ่ง List ตอบโจทย์การยืดหดของขนาดได้อย่างสมบูรณ์แบบ!",
        exercises: [
            { level: "Medium", instruction: "เขียนโค้ดเพิ่ม 'Potion' (Heal=50) 2 ขวดลงใน Inventory ของ Player และสั่ง UseItem ขวดแรก", answer: `Player p = new Player();\np.Inventory.Add(new Item { Name = "Potion", HealAmount = 50 });\np.Inventory.Add(new Item { Name = "Potion", HealAmount = 50 });\np.UseItem(0);` }
        ],
        quiz: [
            { question: "ถ้ากระเป๋ามีของอยู่ 1 ชิ้น แล้วเรียก `UseItem(5)` โค้ดด้านบนจะพังไหม?", options: ["พัง (ArgumentOutOfRangeException)", "ไม่พัง"], answerIndex: 1, explanation: "ไม่พัง เพราะเรามีการเช็คป้องกันไว้แล้ว: if(index >= 0 && index < Inventory.Count)" }
        ],
        realUseCase: "ระบบตะกร้าสินค้าในเว็บไซต์ E-commerce (Shopping Cart) ก็ใช้หลักการเดียวกับ Inventory ระบบนี้เป๊ะๆ"
    },
    {
        id: 27,
        moduleId: 8,
        moduleName: "Module 8: GUI & WinForms",
        title: "27. Basic Controls (Button, TextBox, Label)",
        library: "System.Windows.Forms",
        objectives: ["การใช้งาน Control พื้นฐาน", "ความเข้าใจ Property, Method, Event ของแต่ละ Control"],
        content: [
            { type: "text", text: "ใน WinForms อุปกรณ์ต่างๆ ที่อยู่บนหน้าจอเราเรียกว่า <strong>Controls</strong> ทุก Control จะสืบทอดมาจากคลาส <code>System.Windows.Forms.Control</code>" },
            { type: "heading", text: "🧱 Class: Label" },
            { type: "text", text: "<ul><li><strong>การใช้งาน:</strong> ใช้แสดงข้อความแบบ static (ให้คนใช้อ่านแก้ไขไม่ได้) เช่น หัวข้อ หรือบอกสถานะ</li><li><strong>Properties:</strong> <code>Text</code> (ข้อความที่แสดง), <code>AutoSize</code> (ปรับขนาดกรอบอัตโนมัติตามตัวหนังสือ), <code>ForeColor</code> (สีตัวอักษร)</li><li><strong>Methods:</strong> <code>Hide()</code>, <code>Show()</code></li></ul>" },
            { type: "heading", text: "🧱 Class: TextBox" },
            { type: "text", text: "<ul><li><strong>การใช้งาน:</strong> กล่องให้ผู้ใช้พิมพ์ข้อความ (ได้ข้อมูลเป็น string เสมอ)</li><li><strong>Properties:</strong> <code>Text</code>, <code>ReadOnly</code> (ห้ามพิมพ์), <code>PasswordChar</code> (ทำเป็นดอกจันรหัสผ่าน)</li><li><strong>Events:</strong> <code>TextChanged</code> (ทำงานทุกครั้งที่มีการพิมพ์เปลี่ยนตัวหนังสือ)</li></ul>" },
            { type: "heading", text: "🧱 Class: Button" },
            { type: "text", text: "<ul><li><strong>การใช้งาน:</strong> ปุ่มกดให้ทำ Action</li><li><strong>Properties:</strong> <code>Enabled</code> (true=กดได้, false=ปุ่มเทากดไม่ได้)</li><li><strong>Events:</strong> <code>Click</code> (ทำงานเมื่อผู้ใช้คลิกเมาส์)</li></ul>" },
            { type: "code", code: `// เหตุการณ์ (Event) เมื่อปุ่มโดนคลิก\nprivate void btnSubmit_Click(object sender, EventArgs e)\n{\n    // 1. อ่านค่า Property Text จากกล่อง TextBox\n    string username = txtName.Text;\n\n    // 2. ถ้าผู้ใช้ไม่ได้พิมพ์อะไรมาเลย (ใช้ไลบรารี System.String)\n    if (string.IsNullOrWhiteSpace(username))\n    {\n        MessageBox.Show("Please enter your name!", "Error");\n        return;\n    }\n\n    // 3. เอาข้อความไปใส่ Property Text ของ Label เพื่อโชว์บนหน้าจอ\n    lblResult.Text = $"Welcome, {username}!";\n    \n    // 4. เคลียร์กล่องข้อความทิ้งโดยใช้ Method Clear()\n    txtName.Clear();\n}` }
        ],
        conceptNote: "ถ้าคุณให้ผู้ใช้กรอกตัวเลขลงใน TextBox แล้วจะเอาไปคำนวณ คุณ<strong>ต้องแปลงค่า (Parse)</strong> ก่อนเสมอ เพราะ <code>txtAge.Text</code> คืนค่าออกมาเป็น <code>string</code> ไม่ใช่ <code>int</code>!",
        exercises: [
            { level: "Medium", instruction: "เขียนโค้ดสำหรับปุ่มปิดโปรแกรม (btnExit_Click) ให้ทำการเรียก Method Application.Exit()", answer: `private void btnExit_Click(object sender, EventArgs e) {\n    Application.Exit();\n}` }
        ],
        quiz: [
            { question: "Property ใดของ Button ที่ใช้ปิดการทำงานให้ปุ่มเป็นสีเทา กดไม่ได้?", options: ["Disabled", "Clickable", "Enabled", "Visible"], answerIndex: 2, explanation: "Property Enabled หากตั้งค่าเป็น false จะเป็นการทำให้ปุ่มนั้นกดไม่ได้ชั่วคราว" }
        ],
        realUseCase: "หน้าจอ Login ของทุกโปรแกรม ใช้ TextBox 2 อัน (Username, PasswordChar) และ 1 Button (Login)"
    },
    {
        id: 28,
        moduleId: 8,
        moduleName: "Module 8: GUI & WinForms",
        title: "28. Advanced Controls (ListBox, DataGridView)",
        library: "System.Windows.Forms",
        objectives: ["จัดการข้อมูลแบบหลายรายการด้วย ListBox", "แสดงผลตารางพร้อม Data Binding ด้วย DataGridView"],
        content: [
            { type: "text", text: "เมื่อคุณมีข้อมูลเยอะๆ Label กับ TextBox จะไม่พอ คุณต้องใช้ <strong>List Controls</strong>" },
            { type: "heading", text: "🧱 Class: ListBox" },
            { type: "text", text: "<ul><li><strong>การใช้งาน:</strong> แสดงรายการข้อมูลให้ผู้ใช้เลือก (เป็นบรรทัดๆ)</li><li><strong>Properties:</strong> <code>Items</code> (เก็บข้อมูลข้างใน เป็น List), <code>SelectedItem</code> (ตัวที่ผู้ใช้กำลังคลิกเลือก)</li><li><strong>Methods:</strong> <code>Items.Add()</code>, <code>Items.Remove()</code></li></ul>" },
            { type: "code", code: `private void btnAdd_Click(object sender, EventArgs e)\n{\n    // เพิ่มข้อความลงใน ListBox\n    listBoxFruits.Items.Add(txtFruitName.Text);\n}` },
            { type: "heading", text: "🧱 Class: DataGridView" },
            { type: "text", text: "<ul><li><strong>การใช้งาน:</strong> เป็น Control ที่ทรงพลังที่สุดในการทำโปรแกรมฐานข้อมูล แสดงผลเป็นตาราง Excel!</li><li><strong>Properties:</strong> <code>DataSource</code> (พลังแห่งการ Data Binding)</li></ul>" },
            { type: "code", code: `// สมมติว่ามี Class Student { public string Name; public int Score; }\n\nprivate void Form_Load(object sender, EventArgs e)\n{\n    List<Student> studentList = new List<Student>();\n    studentList.Add(new Student { Name = "John", Score = 85 });\n    studentList.Add(new Student { Name = "Mary", Score = 92 });\n\n    // โยน List(System.Collections.Generic) ใส่ DataSource ของ WinForms ปุ๊บ!\n    // ระบบจะไป Reflection อ่าน Property ของ Class Student แล้ววาดตาราง 2 คอลัมน์ (Name, Score) ให้ทันที!\n    dataGridView1.DataSource = studentList;\n}` }
        ],
        conceptNote: "ระวังเรื่อง DataGridView DataSource! ถ้าคุณเปลี่ยนข้อมูลใน List เบื้องหลังไปแล้ว (เช่น Add ของเข้าไปเพิ่ม) ตารางบนหน้าจอจะ<strong>ไม่อัปเดตเองอัตโนมัติ</strong>! คุณต้องเซ็ต DataSource ให้เป็น <code>null</code> ก่อน แล้วค่อยโยน List กลับเข้าไปใหม่เพื่อให้มันวาดตารางซ้ำ (หรือใช้โครงสร้าง <code>BindingList&lt;T&gt;</code> แทน <code>List&lt;T&gt;</code> เบื้องหลังก็จะง่ายขึ้นเยอะ)",
        exercises: [
            { level: "Medium", instruction: "เขียนโค้ดอ่านค่าที่ผู้ใช้กำลัง 'เลือก (Select)' ใน ListBox ชื่อ lbTasks แล้วลบออก", answer: `if(lbTasks.SelectedItem != null) {\n    lbTasks.Items.Remove(lbTasks.SelectedItem);\n}` }
        ],
        quiz: [
            { question: "การนำ List ไปผูกเข้ากับตาราง DataGridView ให้แสดงผลอัตโนมัติเรียกว่าอะไร?", options: ["Data Wrapping", "Data Binding", "Data Flow", "Data Linking"], answerIndex: 1, explanation: "Data Binding (การผูกข้อมูล) เป็นคอนเซปต์สำคัญในการผูก UI กับ ข้อมูล (Model) เข้าด้วยกัน" }
        ],
        realUseCase: "DataGridView คือหัวใจหลักของโปรแกรมประเภท POS (จุดชำระเงิน/แคชเชียร์) หรือคลังสินค้า เพื่อแสดงรายการสินค้า ราคา และจำนวน"
    },
    {
        id: 29,
        moduleId: 9,
        moduleName: "Module 9: File Handling & Async",
        title: "29. File I/O (System.IO)",
        library: "System.IO",
        objectives: ["การบันทึกข้อมูลลงไฟล์ข้อความ", "การอ่านข้อมูลจากไฟล์มาใช้งาน (StreamReader/Writer)"],
        content: [
            { type: "text", text: "ถ้าเราต้องการเก็บข้อมูลไว้ (Persist) หลังปิดโปรแกรม วิธีที่ง่ายที่สุดคือเขียนลง <strong>ไฟล์</strong>" },
            { type: "heading", text: "🧱 Class: File (System.IO)" },
            { type: "text", text: "<ul><li><strong>การใช้งาน:</strong> จัดการไฟล์แบบ 'ม้วนเดียวจบ' โดยไม่ต้องห่วงเรื่องการจองแรม หรือลืมปิดไฟล์</li><li><strong>Methods:</strong> <code>ReadAllText()</code>, <code>WriteAllText()</code>, <code>AppendAllText()</code>, <code>Exists()</code></li></ul>" },
            { type: "code", code: `using System.IO; // ต้องนำเข้า Namespace นี้!\n\nclass Program\n{\n    static void Main()\n    {\n        string filePath = "savegame.txt";\n        \n        // --- การเขียนไฟล์ (Write) ---\n        // ถ้างไฟล์ไม่มี จะสร้างใหม่ ถ้ามีแล้ว จะทับของเดิมหายหมด!\n        File.WriteAllText(filePath, "Level=5\\nGold=1000");\n\n        // ถ้าไม่อยากทับ แต่จะต่อท้าย ให้ใช้ Append\n        File.AppendAllText(filePath, "\\nStatus=Alive");\n\n        // --- การอ่านไฟล์ (Read) ---\n        if (File.Exists(filePath)) // เช็คก่อนว่ามีอยู่จริงไหม ป้องกัน FileNotFoundException\n        {\n            string content = File.ReadAllText(filePath);\n            Console.WriteLine(content);\n        }\n    }\n}` }
        ],
        conceptNote: "ถ้าคุณต้องอ่านไฟล์ที่มีขนาด 10 GB ห้ามใช้ <code>File.ReadAllText()</code> เด็ดขาด! เพราะมันจะพยายามดึงข้อมูล 10 GB ขึ้นมายัดใส่ RAM ก้อนเดียว ทำให้โปรแกรม OutOfMemory แตกทันที คุณต้องเปลี่ยนไปใช้ <code>StreamReader</code> เพื่ออ่านทีละบรรทัด (Stream) ให้ RAM ย่อยทัน",
        exercises: [
            { level: "Medium", instruction: "ใช้ File Method อะไรเพื่อเขียนข้อความ 'Log Started' ต่อท้ายไฟล์ 'log.txt' โดยไม่ทับข้อมูลเก่า?", answer: `File.AppendAllText("log.txt", "Log Started");` }
        ],
        quiz: [
            { question: "Exception ใดจะเกิดขึ้นถ้าคุณพยายามใช้ File.ReadAllText() กับไฟล์ที่ไม่มีอยู่จริง?", options: ["NullReferenceException", "FileNotFoundException", "IOException", "PathTooLongException"], answerIndex: 1, explanation: "ถ้าหาไฟล์ไม่เจอ CLR จะเตะ FileNotFoundException ออกมาเตือน จึงควรดักด้วย File.Exists() เสมอ" }
        ],
        realUseCase: "เกมอินดี้มักเซฟตั้งค่าผู้เล่นลงไฟล์ .json หรือ .ini ระบบบันทึกล็อกของเซิร์ฟเวอร์ก็จะใช้ <code>AppendAllText</code> เพื่อจดว่าเวลาไหนเกิดอะไรขึ้น"
    },
    {
        id: 30,
        moduleId: 9,
        moduleName: "Module 9: File Handling & Async",
        title: "30. Async/Await (System.Threading.Tasks)",
        library: "System.Threading.Tasks",
        objectives: ["เข้าใจปัญหาหน้าจอค้าง", "การใช้งาน Task และ async/await"],
        content: [
            { type: "text", text: "<strong>Async/Await (การเขียนโปรแกรมแบบอะซิงโครนัส)</strong> คือฮีโร่ที่จะช่วยให้แอปพลิเคชันของคุณ 'ไม่ค้าง (Not Responding)' ขณะกำลังทำงานหนักๆ (เช่น โหลดไฟล์ข้ามเน็ตเวิร์ค)" },
            { type: "heading", text: "🧱 Class: Task" },
            { type: "text", text: "<ul><li><strong>Namespace:</strong> System.Threading.Tasks</li><li><strong>การใช้งาน:</strong> เปรียบเสมือน 'สัญญา (Promise)' ว่าเดี๋ยวฉันจะไปทำงานนี้ให้เบื้องหลังนะ แล้วค่อยเอาผลลัพธ์มาส่ง</li></ul>" },
            { type: "heading", text: "ตัวอย่างหน้าจอ GUI (WinForms)" },
            { type: "code", code: `// 1. ใส่คำว่า async เข้าไปที่ Event Handler\nprivate async void btnDownload_Click(object sender, EventArgs e)\n{\n    lblStatus.Text = "Downloading...";\n    btnDownload.Enabled = false;\n\n    // 2. ใช้ await นำหน้างานที่กินเวลา\n    // แปลว่า: "หยุดรันโค้ดบรรทัดล่างนี้ไว้ก่อน แล้วคืน Thread หลักกลับไปให้ Message Loop รับเมาส์ผู้ใช้ต่อ"\n    // พองานข้างหลังเสร็จ เดี๋ยวฉันจะกลับมาปลุก Thread หลักให้มาทำบรรทัดถัดไปเอง\n    await Task.Delay(3000); // จำลองการโหลด 3 วินาที (ไม่บล็อก UI! ขยับหน้าต่างได้)\n\n    // โค้ดตรงนี้จะทำเมื่อ 3 วินาทีผ่านไป\n    lblStatus.Text = "Download Complete!";\n    btnDownload.Enabled = true;\n}` }
        ],
        conceptNote: "กฎเหล็ก: ถ้าคุณใช้ <code>await</code> ไว้ข้างใน Method ของคุณ <strong>จะต้องใส่คำว่า <code>async</code> ไว้ที่ชื่อ Method เสมอ!</strong> และสำหรับ Method ที่ไม่ใช่ Event Handler (เช่น ปุ่มคลิก) ค่า Return type บังคับว่าต้องเป็น <code>Task</code> หรือ <code>Task&lt;T&gt;</code> เท่านั้น (ห้ามใช้ <code>async void</code> ยกเว้น Event เพราะมันไม่สามารถจับ Error try-catch ได้)",
        exercises: [
            { level: "Medium", instruction: "สร้าง Method เปล่าๆ ชื่อ GetDataAsync() มี Modifier เป็น public async Task และใช้ await Task.Delay(1000); ภายใน", answer: `public async Task GetDataAsync() {\n    await Task.Delay(1000);\n}` }
        ],
        quiz: [
            { question: "วัตถุประสงค์หลักของการใช้ Async/Await ใน WinForms คืออะไร?", options: ["เพื่อให้โปรแกรมทำงานเร็วขึ้นเป็น 2 เท่า", "เพื่อป้องกันไม่ให้หน้าจอ UI เกิดอาการค้าง (Not Responding) ตอนรันงานหนัก", "เพื่อให้ประหยัดพื้นที่ฮาร์ดดิสก์", "เพื่อให้เขียนโค้ดได้สั้นลง"], answerIndex: 1, explanation: "Async ไม่ได้ทำให้โหลดเร็วขึ้น แต่มันทำให้ Thread หลักว่างเพื่อไปรับการวาดหน้าจอหรือการคลิกอื่นๆ ต่อ ทำให้โปรแกรมดูไหลลื่น" }
        ],
        realUseCase: "การเรียก Web API, การเชื่อมต่อ Database (Entity Framework Core), หรือการอ่านเขียนไฟล์ขนาดใหญ่ ทุกอย่างใน C# ยุคปัจจุบันถูกออกแบบมาให้เป็น Async เกือบ 100% แล้ว!"
    },
    {
        id: 31,
        moduleId: 9,
        moduleName: "Module 9: File Handling & Async",
        title: "31. Integration: Save Game System",
        library: "System.IO, System.Threading.Tasks",
        objectives: ["รวมความรู้เพื่อสร้างระบบบันทึกเกมแบบ Async"],
        content: [
            { type: "text", text: "มาถึงจุดพีคสุดครับ เราจะรวมพลังของ <code>File (System.IO)</code> และ <code>Task (System.Threading.Tasks)</code> และ <code>String Interpolation (System)</code> มาทำระบบ Save เกมกัน!" },
            { type: "code", code: `// สร้าง Method สำหรับบันทึกเกม (ดึงจากโปรเจกต์ RPG)\npublic async Task SavePlayerAsync(Player hero)\n{\n    string filePath = "save.txt";\n    \n    // แปลงข้อมูล Object เป็น String\n    string saveData = $"Name:{hero.Name}\\nHP:{hero.HP}";\n    \n    Console.WriteLine("Saving game in background...");\n    \n    // สั่งเขียนไฟล์แบบ Async (ใช้ ThreadPool ไปเขียนไฟล์แทน ไม่บล็อกตัวเกมหลัก)\n    await File.WriteAllTextAsync(filePath, saveData);\n    \n    Console.WriteLine("Game Saved Successfully!");\n}` }
        ],
        conceptNote: "สังเกตไหมครับว่า Microsoft เตรียม Method ที่ลงท้ายด้วยคำว่า <code>...Async()</code> มาให้เราแทบทุกจุดแล้ว (เช่น <code>WriteAllTextAsync</code> แทนที่จะเป็น <code>WriteAllText</code> ธรรมดา) เราแค่ต้องเอามาประกอบร่างกัน",
        exercises: [
            { level: "Hard", instruction: "สร้าง Method LoadPlayerAsync() ที่ return Task<string> โดยการใช้ File.ReadAllTextAsync()", answer: `public async Task<string> LoadPlayerAsync() {\n    return await File.ReadAllTextAsync("save.txt");\n}` }
        ],
        quiz: [
            { question: "ทำไมเราถึงใช้ File.WriteAllTextAsync() แทน File.WriteAllText() ธรรมดาในการเขียนเซฟเกม?", options: ["ไฟล์เซฟจะมีขนาดเล็กลง", "ผู้เล่นจะไม่รู้สึกว่าเกมกระตุกตอนที่ฮาร์ดดิสก์กำลังเขียนข้อมูล", "เป็นข้อบังคับของ Windows 11", "ไฟล์จะถูกเข้ารหัสอัตโนมัติ"], answerIndex: 1, explanation: "การเขียนข้อมูลลง Harddisk ช้ากว่า RAM มาก (เป็นคอขวด) ถ้าเราใช้ Async จะทำให้ Thread หลักไปรันอนิเมชันเกมต่อได้โดยไม่สะดุดกึก" }
        ],
        realUseCase: "ระบบ Auto-save ในแอปพลิเคชันมือถือ หรือตัวเกมที่ขึ้นไอคอนหมุนๆ ตรงมุมขวาล่าง ล้วนใช้ Async I/O เพื่อบันทึกไฟล์ไปเงียบๆ ในขณะที่ผู้เล่นก็เล่นเกมต่อไป"
    }
];

window.lessonsData = window.lessonsData.filter(l => l.moduleId < 7 || l.moduleId > 9);
window.lessonsData.splice(23, 0, ...part3);
