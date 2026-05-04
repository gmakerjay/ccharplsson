window.lessonsData = window.lessonsData || [];

const projectsModule = [
    {
        id: 39,
        moduleId: 6,
        moduleName: "Module 6: Job-Ready Projects",
        title: "🟢 Project 1 (Easy): EXP & Level System",
        library: "System",
        objectives: [
            "สร้างระบบคำนวณ EXP และเลื่อน Level (Console App)",
            "ประยุกต์ใช้ Variables, If-Else, และ Loops",
            "การสร้าง Logic เบื้องต้นในระบบเกม"
        ],
        content: [
            { type: "heading", text: "1. 🧾 Requirement (ใบสั่งงาน)" },
            { type: "text", text: "<strong>เป้าหมาย:</strong> สร้างระบบจำลองการฟาร์มมอนสเตอร์ เมื่อผู้เล่นได้รับ EXP (ประสบการณ์) ครบกำหนด จะต้องมีการเลื่อน Level อัตโนมัติ" },
            { type: "text", text: "<strong>เงื่อนไข:</strong> เริ่มต้นที่ Level 1, EXP 0. หาก EXP ถึง 100 จะเลื่อนเป็น Level 2 และ EXP ส่วนเกินจะต้องถูกยกยอดไป Level ถัดไป (เช่น มี 90 ได้มาอีก 30 รวมเป็น 120 -> ต้องกลายเป็น Level 2 และเหลือ EXP 20)" },
            
            { type: "heading", text: "2. 🧠 Design (ออกแบบ Logic)" },
            { type: "dev_think", text: "ทำไมเราไม่รีเซ็ต EXP เป็น 0 ทันทีที่ Level Up? <br>เพราะผู้เล่นจะเสียเปรียบ! ถ้าเขาใช้ท่าไม้ตายโจมตีได้ EXP 500 แต่ขาดอีกแค่ 10 ถึงจะอัปเวล ถ้าเราตั้งค่าเป็น 0 เขาจะเสีย 490 EXP ไปฟรีๆ (เหมือนในเกม RPG ยุคเก่าที่เขียนโค้ดมาไม่ดี) ดังนั้นเราต้องใช้สูตร <code>exp = exp - 100</code> เพื่อเก็บเศษส่วนเกินไว้เสมอ!" },
            { type: "library_use", text: "<strong>Namespace System:</strong> เราจะใช้ <code>Console.ReadLine()</code> สำหรับรับคำสั่งโจมตีจากผู้เล่น, <code>Console.WriteLine()</code> สำหรับแสดงสถานะหน้าจอ และใช้การคำนวณคณิตศาสตร์พื้นฐาน" },
            
            { type: "heading", text: "3. 💻 Implementation (ลงมือเขียนโค้ดทีละขั้น)" },
            { type: "text", text: "<strong>Step 1: ประกาศตัวแปรและวาดลูปหลัก (Game Loop)</strong>" },
            { type: "code", code: `using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int level = 1;\n        int exp = 0;\n        int maxExp = 100;\n\n        while (true)\n        {\n            Console.Clear();\n            Console.WriteLine($"=== PLAYER STATUS ===");\n            Console.WriteLine($"Level: {level} | EXP: {exp}/{maxExp}");\n            Console.WriteLine("=====================");\n            Console.Write("Press Enter to hunt monster (or type 'exit'): ");\n            \n            string input = Console.ReadLine();\n            if (input == "exit") break;\n\n            // จำลองการได้ EXP\n            int gainedExp = 45; // สมมติว่าได้รอบละ 45\n            exp += gainedExp;\n            Console.WriteLine($"You gained {gainedExp} EXP!");\n            \n            System.Threading.Thread.Sleep(1000); // หยุดจอ 1 วินาที\n        }\n    }\n}` },
            
            { type: "text", text: "<strong>Step 2: แทรก Logic การ Level Up</strong><br>เราต้องเช็คว่า <code>exp >= maxExp</code> หรือไม่ หากใช่ก็เลื่อนเลเวลและหักลบ exp" },
            { type: "code", code: `            // นำโค้ดนี้ไปแทรกไว้ใต้ exp += gainedExp;\n            if (exp >= maxExp)\n            {\n                level++; // เพิ่มเลเวล\n                exp -= maxExp; // หัก exp ส่วนที่ใช้ไป\n                maxExp += 50; // ทำให้เลเวลถัดไปเก็บยากขึ้น\n                Console.WriteLine("🎉 LEVEL UP! 🎉");\n            }` },
            
            { type: "dev_think", text: "ใน Step 2 เราใช้ <code>if</code> ธรรมดา ซึ่งมีปัญหาซ่อนอยู่! ลองคิดดูว่าถ้าผู้เล่นบังเอิญได้ EXP มาทีเดียว 1,000 (จากการฆ่าบอส) แต่ maxExp คือ 100 การใช้ <code>if</code> ธรรมดาจะทำให้มันเลเวลอัปแค่ครั้งเดียว (เป็นเวล 2) และเหลือ EXP กองไว้ 900! <br><strong>วิธีแก้:</strong> ต้องเปลี่ยน <code>if</code> เป็น <code>while(exp >= maxExp)</code> เพื่อให้มันวนอัปเลเวลไปเรื่อยๆ จนกว่า EXP จะหมด!" }
        ],
        conceptNote: "การสร้าง Game Loop เป็นหัวใจสำคัญของโปรแกรมแบบ Interactive (โต้ตอบได้) โดยเรามักใช้ while(true) และควบคุมการออกจากลูปด้วย break",
        exercises: [
            { type: "Refactoring", difficulty: "Medium", instruction: "นำ Logic การเพิ่ม EXP ไปแยกเขียนเป็น Method ชื่อ `void AddExp(int amount)` แยกออกมาจาก Main", answer: `static void AddExp(int amount)\n{\n    exp += amount;\n    while (exp >= maxExp) {\n        level++;\n        exp -= maxExp;\n        maxExp += 50;\n        Console.WriteLine("LEVEL UP!");\n    }\n}` },
            { type: "Code Writing", difficulty: "Easy", instruction: "เพิ่มฟีเจอร์: ให้กด 'H' เพื่อเติมเลือด (Heal) ซึ่งจะใช้ EXP ไป 10 หน่วยเพื่อแลกกับเลือด (เช็คด้วยว่า EXP พอไหม)", answer: `if (input == "H") {\n    if (exp >= 10) {\n        exp -= 10;\n        Console.WriteLine("Healed!");\n    } else {\n        Console.WriteLine("Not enough EXP");\n    }\n}` }
        ],
        debugLab: [
            {
                scenario: "ผู้เล่นตีมอนสเตอร์แล้ว EXP ขึ้นเป็น 100/100 แต่เลเวลไม่ยอมอัป (ติดบั๊ก)",
                errorLog: "ไม่มี Error แจ้งเตือน แต่หน้าจอค้างที่ EXP 100/100",
                code: "int gained = 50;\nexp += gained;\nif (exp > maxExp) {\n    level++;\n}",
                task: "หาบั๊กในเงื่อนไขการเช็ค Level Up",
                solutionCode: "if (exp >= maxExp) {\n    level++;\n}",
                explanation: "บ่อยครั้งโปรแกรมเมอร์เผลอใช้เครื่องหมาย > (มากกว่า) แทนที่จะเป็น >= (มากกว่าหรือเท่ากับ) ทำให้พอผู้เล่นได้ EXP 100 พอดีเป๊ะ มันจึงไม่เข้าเงื่อนไข Level up!"
            }
        ],
        jobTask: {
            title: "🚀 Final Challenge: Random Encounters",
            description: "ปรับปรุงโค้ดทั้งหมด เพื่อให้เวลาผู้เล่นกด Enter จะมีโอกาสเจอ Monster 3 ระดับ (Slime ให้ 10 EXP, Goblin ให้ 30 EXP, Dragon ให้ 200 EXP) โดยใช้ System.Random ในการสุ่ม",
            requirements: [
                "สร้าง Instance ของ Random",
                "สุ่มตัวเลข 1-100",
                "ถ้าน้อยกว่า 60 เจอ Slime, 60-90 เจอ Goblin, >90 เจอ Dragon",
                "แสดงชื่อมอนสเตอร์ที่เจอและ EXP ที่ได้รับ"
            ]
        },
        realUseCase: "ระบบคำนวณสะสมแต้ม (Loyalty Points) ในแอปร้านกาแฟ ก็ใช้ Logic เดียวกันนี้เป๊ะๆ (เช่น สะสมแต้มถึง 100 แต้ม เลื่อนขั้นเป็นสมาชิกระดับ Gold)"
    },
    {
        id: 40,
        moduleId: 6,
        moduleName: "Module 6: Job-Ready Projects",
        title: "🟡 Project 2 (Medium): RPG Inventory & Shop",
        library: "System.Collections.Generic",
        objectives: [
            "ประยุกต์ใช้ OOP (Classes, Objects)",
            "ใช้งาน List<T> สำหรับจัดการรายการ",
            "สร้างระบบร้านค้าและกระเป๋าเก็บของ"
        ],
        content: [
            { type: "heading", text: "1. 🧾 Requirement (ใบสั่งงาน)" },
            { type: "text", text: "<strong>เป้าหมาย:</strong> สร้างระบบ Shop ที่แสดงรายการไอเทม และให้ผู้เล่นใช้ Gold ซื้อของเข้า Inventory (กระเป๋า) ของตัวเองได้" },
            { type: "text", text: "<strong>เงื่อนไข:</strong> สินค้าแต่ละชิ้นต้องเป็น Object (มี Name, Price) กระเป๋าของผู้เล่นสามารถเก็บไอเทมได้ไม่จำกัด (ใช้ List) และหักเงินเมื่อซื้อสำเร็จ" },
            
            { type: "heading", text: "2. 🧠 Design (ออกแบบ Class)" },
            { type: "dev_think", text: "ทำไมต้องใช้ Class ข้อมูลแทนการใช้ Array พื้นฐาน? <br>ถ้าใช้ Array แบบเก่า คุณต้องสร้าง <code>string[] names</code> คู่กับ <code>int[] prices</code> ซึ่งจัดการยากมาก หากของชิ้นนึงหายไป Index จะพังทั้งหมด! การสร้าง <code>class Item { string Name; int Price; }</code> ทำให้ข้อมูลผูกติดกันเป็นก้อนเดียว (Encapsulation) และโยนไปมาระหว่างเมธอดได้ง่าย" },
            { type: "library_use", text: "<strong>System.Collections.Generic:</strong> เราจำเป็นต้องใช้ <code>List&lt;Item&gt;</code> เพราะจำนวนไอเทมในกระเป๋าผู้เล่นสามารถ 'ยืดหดได้' (Dynamic size) ตลอดเวลา ซึ่ง Array ธรรมดาทำไม่ได้" },
            
            { type: "heading", text: "3. 💻 Implementation (ลงมือเขียนโค้ด)" },
            { type: "text", text: "<strong>Step 1: โครงสร้าง Class</strong>" },
            { type: "code", code: `using System;\nusing System.Collections.Generic;\n\nclass Item\n{\n    public string Name;\n    public int Price;\n\n    public Item(string name, int price)\n    {\n        Name = name;\n        Price = price;\n    }\n}\n\nclass Player\n{\n    public int Gold = 500;\n    public List<Item> Inventory = new List<Item>();\n}` },
            
            { type: "text", text: "<strong>Step 2: ระบบร้านค้า</strong>" },
            { type: "code", code: `class Program\n{\n    static void Main()\n    {\n        Player p1 = new Player();\n        List<Item> shopItems = new List<Item>\n        {\n            new Item("Potion", 50),\n            new Item("Iron Sword", 150),\n            new Item("Shield", 200)\n        };\n\n        Console.WriteLine($"Your Gold: {p1.Gold}");\n        for (int i = 0; i < shopItems.Count; i++)\n        {\n            Console.WriteLine($"{i + 1}. {shopItems[i].Name} ({shopItems[i].Price}G)");\n        }\n\n        Console.Write("Select item to buy (1-3): ");\n        int choice = int.Parse(Console.ReadLine()) - 1;\n\n        Item selectedItem = shopItems[choice];\n\n        // เช็คเงิน\n        if (p1.Gold >= selectedItem.Price)\n        {\n            p1.Gold -= selectedItem.Price;\n            p1.Inventory.Add(selectedItem);\n            Console.WriteLine($"Purchased {selectedItem.Name}!");\n        }\n        else\n        {\n            Console.WriteLine("Not enough gold!");\n        }\n    }\n}` }
        ],
        conceptNote: "การสร้าง <code>new Item(\"Potion\", 50)</code> คือการจองพื้นที่ใน Heap Memory และการเรียก <code>Inventory.Add(selectedItem)</code> ไม่ได้แปลว่าก็อปปี้ของไปใส่กระเป๋า แต่มันคือการก็อปปี้ 'รีโมท (Reference)' ที่ชี้ไปยังของชิ้นนั้นลงกระเป๋า!",
        exercises: [
            { type: "Feature Expansion", difficulty: "Hard", instruction: "เขียนโค้ดให้ผู้เล่นสามารถ 'ขาย' (Sell) ไอเทมชิ้นแรกในกระเป๋ากลับคืนให้ร้านค้า โดยจะได้เงินคืนครึ่งราคา (Price / 2)", answer: `if (p1.Inventory.Count > 0) {\n    Item itemToSell = p1.Inventory[0];\n    p1.Gold += (itemToSell.Price / 2);\n    p1.Inventory.RemoveAt(0);\n    Console.WriteLine($"Sold {itemToSell.Name}");\n}` },
            { type: "Security Basics", difficulty: "Medium", instruction: "ถ้าผู้ใช้พิมพ์ตัวอักษร 'A' แทนตัวเลข (1-3) โปรแกรมจะ Crash! จงใช้ TryParse เพื่อป้องกันการพัง", answer: `if (int.TryParse(Console.ReadLine(), out int choice)) {\n    choice--;\n    // ...ทำ logic ซื้อของต่อ\n} else {\n    Console.WriteLine("Invalid input!");\n}` }
        ],
        debugLab: [
            {
                scenario: "ผู้เล่นกรอกเลข 9 เพื่อจะซื้อของ โปรแกรมพังทันที",
                errorLog: "System.ArgumentOutOfRangeException: Index was out of range. Must be non-negative and less than the size of the collection.",
                code: "int choice = int.Parse(Console.ReadLine()) - 1;\nItem selectedItem = shopItems[choice];",
                task: "ป้องกันบั๊กการเข้าถึง Array/List เกินขนาด",
                solutionCode: "int choice = int.Parse(Console.ReadLine()) - 1;\nif (choice >= 0 && choice < shopItems.Count) {\n    Item selectedItem = shopItems[choice];\n} else {\n    Console.WriteLine(\"Item not found.\");\n}",
                explanation: "บ่อยครั้งที่ผู้ใช้กรอกข้อมูลเกินขอบเขตของ Array เราต้องตรวจสอบเสมอว่า Index ที่จะเรียกใช้ อยู่ในช่วง 0 ถึง (Count - 1) หรือไม่"
            }
        ],
        jobTask: {
            title: "🚀 Final Challenge: Save / Load System",
            description: "ผู้เล่นบ่นว่าปิดเกมแล้วของในกระเป๋าหาย! จงใช้ System.IO เพื่อบันทึกรายชื่อไอเทมลงไฟล์ Text",
            requirements: [
                "ใช้ using System.IO;",
                "สร้าง Method SaveGame() เพื่อดึง Name ของไอเทมทั้งหมดใน List",
                "บันทึกลงไฟล์ 'save.txt' ด้วย File.WriteAllLines()",
                "สร้าง Method LoadGame() เพื่อโหลดบรรทัดกลับมาเป็นไอเทม"
            ]
        },
        realUseCase: "ระบบรถเข็น (Shopping Cart) ในเว็บ Shopee/Lazada หรือระบบสต็อกสินค้าในคลัง ใช้ List<Object> แบบเดียวกันนี้ในการตรวจสอบสินค้าคงคลังและหักเครดิต"
    },
    {
        id: 41,
        moduleId: 6,
        moduleName: "Module 6: Job-Ready Projects",
        title: "🔴 Project 3 (Hard): WinForms POS System",
        library: "System.Windows.Forms",
        objectives: [
            "สร้าง GUI Application ระดับ Desktop (WinForms)",
            "ใช้งาน Event-Driven Programming",
            "เชื่อมต่อ Logic กับหน้าจอ UI แบบ Data Binding พื้นฐาน"
        ],
        content: [
            { type: "heading", text: "1. 🧾 Requirement (ใบสั่งงาน)" },
            { type: "text", text: "<strong>เป้าหมาย:</strong> สร้างแอปพลิเคชันระบบขายหน้าร้าน (Point of Sale - POS) มีหน้าจอให้คลิกเลือกสินค้า และมีหน้าต่างสรุปยอดรวม (Total Price)" },
            { type: "text", text: "<strong>เงื่อนไข:</strong> ต้องมีปุ่ม (Button) สินค้าอย่างน้อย 2 ปุ่ม, มี ListBox สำหรับแสดงรายการที่คลิกซื้อ, และ Label แสดงยอดเงินรวม เมื่อกดปุ่ม 'ชำระเงิน' ให้เคลียร์หน้าจอ" },
            
            { type: "heading", text: "2. 🧠 Design (ออกแบบหน้าจอ UI)" },
            { type: "dev_think", text: "ทำไมเราถึงไม่วาดหน้าจอด้วยโค้ดเพียวๆ? <br>ใน C# เรามี Visual Studio (หรือ Designer) สำหรับลากวาง UI Controls (เช่น ลาก Button มาวางบน Form) เมื่อคุณลากวาง เบื้องหลัง Visual Studio จะเขียนโค้ด <code>this.Controls.Add(button1)</code> ให้คุณอัตโนมัติในไฟล์ <code>Form1.Designer.cs</code> ดังนั้นเราจะโฟกัสแค่ไฟล์ <code>Form1.cs</code> ซึ่งเอาไว้เขียน Logic ว่า 'ถ้ากดปุ่มนี้ จะให้ทำอะไร' (Event Handler)" },
            { type: "library_use", text: "<strong>System.Windows.Forms:</strong> ไลบรารีสำหรับสร้างหน้าต่าง Windows แบบคลาสสิก ทุก Controls (ปุ่ม, ช่องพิมพ์, ลิสต์) สืบทอดมาจากคลาส <code>Control</code>" },
            
            { type: "heading", text: "3. 💻 Implementation (ลงมือประกอบร่าง)" },
            { type: "text", text: "<strong>Step 1: โครงสร้างของ Form และตัวแปร Global</strong><br>เราต้องประกาศตัวแปร <code>totalPrice</code> ไว้ระดับ Class เพื่อให้จำค่าได้ตลอดเวลา" },
            { type: "code", code: `using System;\nusing System.Windows.Forms;\n\nnamespace PosSystem\n{\n    public partial class Form1 : Form\n    {\n        // ตัวแปรระดับคลาส (Field)\n        private int totalPrice = 0;\n\n        public Form1()\n        {\n            InitializeComponent(); // เมธอดที่ไปดึง UI จาก Designer มาวาด\n        }\n    }\n}` },
            
            { type: "text", text: "<strong>Step 2: ผูก Event (เหตุการณ์) ให้ปุ่ม</strong><br>สมมติเรามีปุ่มชื่อ <code>btnCoffee</code> และ <code>btnTea</code> ดับเบิลคลิกที่ปุ่มเพื่อสร้าง Event Handler" },
            { type: "code", code: `        private void btnCoffee_Click(object sender, EventArgs e)\n        {\n            // เพิ่มรายการลงใน ListBox (สมมติชื่อ lstCart)\n            lstCart.Items.Add("Coffee - 50 ฿");\n            \n            // คำนวณราคา\n            totalPrice += 50;\n            \n            // อัปเดต Label (สมมติชื่อ lblTotal)\n            lblTotal.Text = $"Total: {totalPrice} ฿";\n        }\n\n        private void btnTea_Click(object sender, EventArgs e)\n        {\n            lstCart.Items.Add("Green Tea - 45 ฿");\n            totalPrice += 45;\n            lblTotal.Text = $"Total: {totalPrice} ฿";\n        }` },
            
            { type: "text", text: "<strong>Step 3: ปุ่มชำระเงิน (Clear Data)</strong>" },
            { type: "code", code: `        private void btnPay_Click(object sender, EventArgs e)\n        {\n            MessageBox.Show($"Paid {totalPrice} ฿. Thank you!", "Success");\n            \n            // Reset ระบบ\n            lstCart.Items.Clear();\n            totalPrice = 0;\n            lblTotal.Text = "Total: 0 ฿";\n        }` },
            
            { type: "dev_think", text: "สังเกตไหมว่าเรามีการเขียน <code>lblTotal.Text = $\"Total: {totalPrice} ฿\";</code> ซ้ำๆ กันทุกปุ่ม! ในโลกความเป็นจริง โปรแกรมเมอร์จะสร้าง Method ชื่อ <code>UpdateUI()</code> เพื่อจับโค้ดพวกนี้ไปรวมกันที่เดียว (Refactoring) เวลาต้องการแก้อักษร ฿ เป็น THB จะได้แก้แค่บรรทัดเดียว!" }
        ],
        conceptNote: "Parameter <code>object sender</code> ที่อยู่ในทุกๆ Event ของ WinForms คือ 'ตัวแปรที่ชี้ไปยังปุ่มที่ถูกกด' คุณสามารถแปลงมันกลับเป็นปุ่มได้ด้วยการแคสต์ <code>Button b = (Button)sender;</code>",
        exercises: [
            { type: "Refactoring", difficulty: "Medium", instruction: "สร้าง Method `void AddItemToCart(string name, int price)` เพื่อรวบรวม Logic การเพิ่มของและอัปเดตราคาไว้ที่เดียว ไม่ต้องก๊อปปี้วางทุกปุ่ม", answer: `private void AddItemToCart(string name, int price) {\n    lstCart.Items.Add($"{name} - {price} ฿");\n    totalPrice += price;\n    lblTotal.Text = $"Total: {totalPrice} ฿";\n}\n\n// วิธีเรียกใช้: AddItemToCart("Coffee", 50);` },
            { type: "Feature Expansion", difficulty: "Hard", instruction: "สร้างระบบ 'ลบสินค้า' (Void) เมื่อผู้ใช้เลือกไอเทมใน ListBox แล้วกดปุ่มลบ (เช็ค SelectedIndex)", answer: `private void btnRemove_Click(object sender, EventArgs e) {\n    if (lstCart.SelectedIndex != -1) {\n        // ตัวอย่างแบบง่ายๆ (ไม่ได้หักเงินในโค้ดนี้ เพราะต้องแกะ text)\n        lstCart.Items.RemoveAt(lstCart.SelectedIndex);\n    }\n}` }
        ],
        debugLab: [
            {
                scenario: "พนักงานกดปุ่ม 'จ่ายเงิน' แต่ไม่มีข้อความ MessageBox เด้งขึ้นมาเลย",
                errorLog: "ไม่มี Error รันได้ปกติ",
                code: "private void btnPay_Click(object sender, EventArgs e) {\n    MessageBox.Show(\"Paid\");\n}",
                task: "หาสาเหตุที่คลิกแล้วไม่เกิดอะไรขึ้น (ในแง่ของ WinForms)",
                solutionCode: "// ใน Form1.Designer.cs หรือใน Constructor:\nthis.btnPay.Click += new System.EventHandler(this.btnPay_Click);",
                explanation: "มี Method อยู่จริง แต่มันไม่ได้ถูก 'ผูก (Bind)' หรือโยงสายไฟเข้ากับตัวปุ่ม (Event wiring) ทำให้เมื่อกดปุ่ม มันจึงไม่ได้เรียก Method นี้มาทำงาน (ต้องไปดับเบิลคลิกปุ่มใน Designer เพื่อให้ VS ผูกสายไฟให้)"
            },
            {
                scenario: "โปรแกรมค้าง! (Not Responding) เมื่อพนักงานกดดึงข้อมูลลูกค้าจากฐานข้อมูล",
                errorLog: "UI Freeze (โปรแกรมหมุนค้าง)",
                code: "private void btnLoad_Click(object sender, EventArgs e) {\n    // สมมติจำลองการดึงข้อมูลนาน 5 วินาที\n    System.Threading.Thread.Sleep(5000);\n    lblStatus.Text = \"Loaded!\";\n}",
                task: "แก้ปัญหาหน้าจอค้าง โดยไม่บล็อก UI Thread",
                solutionCode: "private async void btnLoad_Click(object sender, EventArgs e) {\n    await System.Threading.Tasks.Task.Delay(5000);\n    lblStatus.Text = \"Loaded!\";\n}",
                explanation: "กฎเหล็กของ GUI: ห้ามสั่งงานที่กินเวลานานบน UI Thread (ด้ายหลัก) เด็ดขาด เพราะมันจะทำให้หน้าจอค้าง ต้องใช้ Async/Await เพื่อให้งานไปรันอยู่บน Thread อื่นหลังบ้าน (Background) แล้วค่อยเอาผลลัพธ์กลับมาแสดง"
            }
        ],
        jobTask: {
            title: "🚀 Final Challenge: Data Binding",
            description: "การดึงข้อมูลจากข้อความ string ใน ListBox นั้นโบราณและเสี่ยงต่อการผิดพลาด จงเปลี่ยนระบบจากการเก็บค่าใน ListBox ธรรมดา ไปใช้ BindingList<Item> และผูกเข้ากับ DataGridView",
            requirements: [
                "สร้างคลาส Item เหมือนในบทที่แล้ว",
                "ประกาศ BindingList<Item> cart = new BindingList<Item>();",
                "กำหนด dgvCart.DataSource = cart;",
                "เมื่อกดซื้อ ให้เอา cart.Add(new Item(...)) และหน้าจอจะอัปเดตเองอัตโนมัติ!"
            ]
        },
        realUseCase: "นี่คือจุดเริ่มต้นของการสร้างระบบ POS ที่ใช้งานจริงตามร้านสะดวกซื้อ 7-11 ระบบที่ซับซ้อนขึ้นจะใช้ WPF (Windows Presentation Foundation) ซึ่งรองรับกราฟิกและความละเอียดสูงกว่า WinForms"
    }
];

// Add logic to index.html to inject projects module
