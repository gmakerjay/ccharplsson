const part2 = [
    {
        id: 12,
        moduleId: 4,
        moduleName: "Module 4: Arrays & Collections",
        title: "12. Arrays",
        library: "System.Array",
        objectives: ["การสร้างและใช้งาน Array", "ข้อจำกัดของ Array"],
        content: [
            { type: "text", text: "<strong>Array (อาเรย์)</strong> คือตัวแปรประเภทหนึ่งที่สามารถเก็บข้อมูลชนิดเดียวกันได้หลายๆ ค่าในตัวแปรเดียว เปรียบเสมือนกล่องที่มีหลายๆ ช่องเรียงต่อกัน" },
            { type: "heading", text: "📦 Library: System.Array" },
            { type: "text", text: "<ul><li>เบื้องหลังของ <code>[]</code> ทั้งหมดใน C# คือคลาส <code>System.Array</code></li><li><strong>Properties น่ารู้:</strong> <code>.Length</code> ใช้บอกขนาดของ Array ทั้งหมด</li><li><strong>Methods น่ารู้:</strong> <code>Array.Sort()</code> ใช้เรียงลำดับ, <code>Array.Reverse()</code> สลับหน้าหลัง</li></ul>" },
            { type: "code", code: `// สร้าง Array เปล่าๆ ขนาด 3 ช่อง (0, 1, 2)\nstring[] cars = new string[3];\ncars[0] = "Toyota";\ncars[1] = "Honda";\n\n// สร้างและกำหนดค่าทันที\nint[] myNumbers = { 40, 10, 30, 20 };\n\n// ใช้ Method พิเศษจากคลาส Array ของ System\nArray.Sort(myNumbers); // เรียงเป็น 10, 20, 30, 40 ทันที` }
        ],
        conceptNote: "จุดตายของมือใหม่คือ <code>IndexOutOfRangeException</code> (ซึ่งสืบทอดมาจาก System.Exception)! ถ้า Array คุณมี 3 ช่อง (0, 1, 2) แล้วคุณพยายามเข้าถึงช่องที่ 3 (<code>cars[3]</code>) โปรแกรมจะ Crash (หลุด) ทันที! และจำไว้ว่า Array สร้างแล้ว <strong>ไม่สามารถเพิ่มขนาดได้อีก (Fixed Size)</strong>",
        exercises: [
            { level: "Medium", instruction: "สร้าง Array เก็บเลข 5, 10, 15 แล้ววนลูป for หาผลรวม (Sum) ของเลขทั้งหมดมาแสดง", answer: `int[] arr = { 5, 10, 15 };\nint sum = 0;\nfor(int i=0; i<arr.Length; i++) {\n    sum += arr[i];\n}\nConsole.WriteLine(sum);` }
        ],
        quiz: [
            { question: "ถ้า int[] num = new int[5]; ข้อใดคือ Index สุดท้ายของ Array นี้?", options: ["5", "4", "6", "ไม่มีข้อถูก"], answerIndex: 1, explanation: "Array เริ่มที่ index 0 ดังนั้นขนาด 5 คือ 0,1,2,3,4" }
        ],
        realUseCase: "นักพัฒนาเกมมักใช้ Array แบบ 2 มิติ (2D Array) ในการสร้างแผนที่ (Tile Map) แบบ Grid <code>int[,] map = new int[10, 10];</code>"
    },
    {
        id: 13,
        moduleId: 4,
        moduleName: "Module 4: Arrays & Collections",
        title: "13. Lists (List<T>) & LINQ Basics",
        library: "System.Collections.Generic",
        objectives: ["การใช้งาน List<T>", "ทำไม List ถึงดีกว่า Array", "รู้จัก LINQ เบื้องต้น"],
        content: [
            { type: "text", text: "Array มีข้อจำกัดคือ <strong>ขนาดคงที่</strong> C# จึงสร้าง Collection แบบยืดหดได้ที่เรียกว่า <strong>List&lt;T&gt;</strong>" },
            { type: "heading", text: "📦 Library: System.Collections.Generic" },
            { type: "text", text: "<ul><li>เก็บคลาสที่ใช้จัดระเบียบข้อมูลหลายชิ้น (Collections)</li><li><code>&lt;T&gt;</code> ย่อมาจาก Generic Type คือบังคับให้เราระบุตอนสร้างเลยว่ากล่องนี้จะเก็บอะไร (เช่น เก็บ <code>&lt;string&gt;</code> หรือ <code>&lt;int&gt;</code>)</li></ul>" },
            { type: "heading", text: "🧱 Class: List<T>" },
            { type: "text", text: "<ul><li><strong>Properties:</strong> <code>Count</code> (ใช้นับจำนวน ต่างกับ Array ที่ใช้ Length)</li><li><strong>Methods:</strong> <code>Add()</code>, <code>Remove()</code>, <code>Clear()</code></li></ul>" },
            { type: "code", code: `using System.Collections.Generic;\nusing System.Linq; // นำเข้า LINQ เพื่อให้ใช้ Method พิเศษได้\n\nList<int> scores = new List<int> { 50, 80, 45, 95 };\nscores.Add(100); // ยืดขนาดอัตโนมัติ\n\n// พลังของ LINQ (System.Linq) - ค้นหาแบบเร่งด่วน\nvar passedScores = scores.Where(s => s >= 50).ToList(); // ได้ 50, 80, 95, 100\nint highest = scores.Max(); // ได้ 100` }
        ],
        conceptNote: "เบื้องหลังของ List คือ Array! เมื่อ List เต็ม (Capacity) มันจะแอบสร้าง Array อันใหม่ที่ใหญ่ขึ้น 2 เท่าแล้วก๊อปปี้ข้อมูลไปใส่ ถ้าข้อมูลคุณมีล้านชิ้น มันจะกิน CPU ตอนก๊อปปี้มาก ถ้าคุณรู้จำนวนชิ้นที่แน่นอนตั้งแต่แรก ควรใช้ Array ธรรมดาดีกว่าเพื่อประสิทธิภาพสูงสุด",
        exercises: [
            { level: "Hard", instruction: "สร้าง List<int> เพิ่มค่า 10, 20 เข้าไป ให้ลบ 10 ออกโดยใช้ System.Collections.Generic Method. จากนั้นใช้ System.Linq หาค่าสูงสุด", answer: `using System.Collections.Generic;\nusing System.Linq;\n\nList<int> num = new List<int>{10, 20};\nnum.Remove(10);\nint max = num.Max();` }
        ],
        quiz: [
            { question: "Namespace ใดที่เพิ่มพลังให้เราสามารถใช้คำสั่ง .Where(), .Max(), .OrderBy() กับ List ได้?", options: ["System.Collections", "System.Data", "System.Linq", "System.Math"], answerIndex: 2, explanation: "System.Linq (Language Integrated Query) คือไลบรารีที่เพิ่ม Extension Methods สำหรับสืบค้นและจัดการข้อมูลระดับสูง" }
        ],
        realUseCase: "การดึงข้อมูลจาก Database มาแสดงบนหน้าเว็บ (ASP.NET) ผลลัพธ์ 99% จะถูกส่งมาเป็น <code>List&lt;UserModel&gt;</code>"
    },
    {
        id: 14,
        moduleId: 4,
        moduleName: "Module 4: Arrays & Collections",
        title: "14. Dictionaries",
        library: "System.Collections.Generic",
        objectives: ["เข้าใจโครงสร้างข้อมูลแบบ Key-Value", "การค้นหาข้อมูลแบบ O(1)"],
        content: [
            { type: "text", text: "ถ้าคุณเก็บรายชื่อลูกค้า 1 ล้านคนใน List แล้วอยากหาคนชื่อ John คุณต้องวนลูปหาทีละคน (ช้ามาก) การแก้ปัญหานี้คือ <strong>Dictionary&lt;TKey, TValue&gt;</strong> (หรือที่ภาษาอื่นเรียกว่า Hash Map)" },
            { type: "heading", text: "🧱 Class: Dictionary<TKey, TValue>" },
            { type: "text", text: "<ul><li><strong>Namespace:</strong> System.Collections.Generic</li><li><strong>การทำงาน:</strong> ระบบค้นหาข้อมูลด้วยการเข้ากล่อง (Hash) ตรงจุด โดยไม่ต้องวนลูป</li><li><strong>Methods:</strong> <code>Add(key, value)</code>, <code>ContainsKey(key)</code></li></ul>" },
            { type: "code", code: `Dictionary<string, string> dnsCache = new Dictionary<string, string>();\n\n// Add ข้อมูล\ndnsCache.Add("google.com", "142.250.190.46");\ndnsCache.Add("localhost", "127.0.0.1");\n\n// ค้นหาข้อมูลแบบเร็วปานสายฟ้าแลบ (ไม่ต้องวนลูป!)\nif (dnsCache.ContainsKey("google.com"))\n{\n    Console.WriteLine(dnsCache["google.com"]);\n}` }
        ],
        conceptNote: "กฎเหล็กคือ <strong>Key ห้ามซ้ำเด็ดขาด!</strong> ถ้าคุณพยายามสั่ง <code>Add(\"localhost\", \"1.1.1.1\")</code> ซ้ำ มันจะ Throw <code>System.ArgumentException</code> ทันที! ถ้าแค่อยากอัปเดตข้อมูล ให้ใช้ <code>dnsCache[\"localhost\"] = \"1.1.1.1\";</code> แทน",
        exercises: [
            { level: "Medium", instruction: "สร้าง Dictionary<int, string> เพื่อเก็บ EmployeeID เป็น key และ Name เป็น value ทดลองสร้าง 2 คน และพิมพ์ชื่อคนรหัส 2 ออกมา", answer: `Dictionary<int, string> emp = new Dictionary<int, string>();\nemp.Add(1, "Alice");\nemp.Add(2, "Bob");\nConsole.WriteLine(emp[2]);` }
        ],
        quiz: [
            { question: "ถ้าเราพยายาม Add ข้อมูลเข้า Dictionary โดยที่ Key นั้นมีอยู่แล้วจะเกิดอะไรขึ้น?", options: ["แทนที่ค่าเดิม", "เพิ่มข้อมูลเป็น 2 ตัว", "เกิด Runtime Exception (System.ArgumentException)", "ไม่มีอะไรเกิดขึ้น"], answerIndex: 2, explanation: "Dictionary.Add() ถ้าเจอคีย์ซ้ำจะ throw Exception แตกทันที! ถ้าอยากจะทับของเดิมให้ใช้ syntax indexer: dic[key] = value" }
        ],
        realUseCase: "เซิร์ฟเวอร์เกม Ragnarok ใช้ Dictionary ในการทำระบบแผนที่ (Map Caching) โดยเอาพิกัดแกน (X,Y) มาต่อกันเป็น Key เพื่อให้เซิร์ฟเวอร์ค้นหาว่าเดินชนกำแพงไหมได้เร็วที่สุด โดยไม่ต้องวนลูปแผนที่"
    },
    {
        id: 15,
        moduleId: 5,
        moduleName: "Module 5: Object-Oriented Programming",
        title: "15. Classes & Objects",
        library: "Core C#",
        objectives: ["เข้าใจความหมายของ Class และ Object", "การเขียน OOP ขั้นพื้นฐานใน C#"],
        content: [
            { type: "text", text: "ยินดีต้อนรับเข้าสู่ <strong>OOP (Object-Oriented Programming)</strong>! หัวใจของภาษา C# การเขียนแบบ OOP คือการมองทุกอย่างในโปรแกรมเป็น 'วัตถุ' (Object)" },
            { type: "heading", text: "Class (พิมพ์เขียว)" },
            { type: "text", text: "Class คือแบบแปลน หรือพิมพ์เขียว ที่กำหนดว่าวัตถุนี้ต้องมี <strong>คุณลักษณะ (Fields/Properties)</strong> อะไรบ้าง และ <strong>ทำอะไรได้บ้าง (Methods/พฤติกรรม)</strong>" },
            { type: "heading", text: "Object (ของจริงที่สร้างจากแปลน)" },
            { type: "text", text: "Object (หรือ Instance) คือสิ่งของที่ถูกสร้างขึ้นมาจาก Class โดยใช้คีย์เวิร์ด <code>new</code> การ <code>new</code> คือการสั่งจองพื้นที่ใน Memory Heap ของ OS" },
            { type: "code", code: `class Car\n{\n    public string color; // Field\n    public void StartEngine() // Method\n    {\n        Console.WriteLine("Engine started!");\n    }\n}\n\nclass Program\n{\n    static void Main()\n    {\n        Car myCar = new Car(); // สร้าง Object จาก Class\n        myCar.color = "Red";\n        myCar.StartEngine();\n    }\n}` }
        ],
        conceptNote: "คำว่า <code>public</code> เรียกว่า <strong>Access Modifier</strong> เป็นการเปิดให้คนนอกใช้งานได้ ค่าเริ่มต้น (Default) ใน C# ถ้าคุณไม่ใส่อะไรเลย มันจะเป็น <code>private</code> อัตโนมัติ (ซ่อนไว้ให้ใช้ได้แค่ในวงเล็บของ Class ตัวเอง)",
        exercises: [
            { level: "Medium", instruction: "สร้าง Class ชื่อ Player มี public field 'name' (string) และ 'hp' (int) สร้าง Object ใน Main แล้วกำหนดค่าให้แสดงผลลัพธ์", answer: `class Player {\n    public string name;\n    public int hp;\n}\nclass Program {\n    static void Main() {\n        Player p1 = new Player();\n        p1.name = "Hero";\n        p1.hp = 100;\n        Console.WriteLine($"{p1.name} has {p1.hp} HP.");\n    }\n}` }
        ],
        quiz: [
            { question: "Keyword ใดทำหน้าที่ขอเนื้อที่ในหน่วยความจำ RAM เพื่อสร้าง Object ตัวใหม่ขึ้นมา?", options: ["create", "build", "new", "init"], answerIndex: 2, explanation: "คำสั่ง new เป็นการสั่งให้ CLR (Common Language Runtime) จองพื้นที่ใน Memory Heap" }
        ],
        realUseCase: "แทบทุกอย่างใน C# คือ Object! เวลาคุณเขียน <code>List&lt;string&gt; l = new List&lt;string&gt;();</code> คุณกำลังสร้าง Object จาก Class <code>List</code> ที่ Microsoft เขียนไว้ให้นั่นเอง"
    },
    {
        id: 16,
        moduleId: 5,
        moduleName: "Module 5: Object-Oriented Programming",
        title: "16. Constructors",
        library: "Core C#",
        objectives: ["การสร้าง Constructor", "การกำหนดค่าเริ่มต้นให้กับ Object ทันทีตอน new"],
        content: [
            { type: "text", text: "Constructor คือ Method พิเศษที่จะ <strong>ถูกเรียกใช้โดยอัตโนมัติทันทีที่ Object ถูกสร้างขึ้น (ตอน new)</strong> เอาไว้บังคับว่าตอนเกิดมาต้องมีข้อมูลพื้นฐานอะไรบ้าง" },
            { type: "heading", text: "กฎของ Constructor" },
            { type: "text", text: "1. ชื่อต้องเหมือน Class เป๊ะๆ<br>2. ห้ามมี Return Type (ไม่ต้องใส่ void ด้วย)" },
            { type: "code", code: `class Player\n{\n    public string name;\n    public int hp;\n\n    // นี่คือ Constructor!\n    public Player(string playerName, int startingHp)\n    {\n        name = playerName;\n        hp = startingHp;\n    }\n}\n\nclass Program\n{\n    static void Main()\n    {\n        // บังคับว่าตอน new ต้องส่ง Parameter ให้ด้วย\n        Player p1 = new Player("Arthur", 150);\n    }\n}` }
        ],
        conceptNote: "ถ้าคุณไม่ได้สร้าง Constructor ไว้เลย C# จะแอบสร้าง Default Constructor (แบบว่างเปล่า <code>public Player() {}</code>) ให้อัตโนมัติ แต่ถ้าคุณเขียน Constructor รับค่าขึ้นมาแม้แต่ตัวเดียว (เหมือนในตัวอย่าง) Default Constructor ตัวนั้นจะถูกทำลายทิ้งทันที คุณจะ <code>new Player();</code> แบบไม่ส่งค่าไม่ได้อีกต่อไป!",
        exercises: [
            { level: "Medium", instruction: "สร้าง Constructor ให้คลาส Book ที่รับ title และ author เป็น string แล้วนำมากำหนดลง public field ของคลาส", answer: `class Book {\n    public string title;\n    public string author;\n    public Book(string t, string a) {\n        title = t;\n        author = a;\n    }\n}` }
        ],
        quiz: [
            { question: "ข้อใดคือลักษณะบังคับของ Constructor?", options: ["ต้องเป็น private", "ต้องมี return type เป็น void", "ชื่อต้องเหมือนกับ Class เด๊ะๆ", "สามารถมีได้แค่ 1 ตัวต่อคลาสเท่านั้น"], answerIndex: 2, explanation: "Constructor ห้ามมี return type แม้แต่ void และชื่อต้องเหมือนคลาส 100% (Case-sensitive)" }
        ],
        realUseCase: "ไลบรารีพวก <code>System.IO.StreamReader</code> จะบังคับให้คุณส่งที่อยู่ไฟล์ (Path) เข้าไปใน Constructor ทันที <code>new StreamReader(\"data.txt\");</code> เพราะถ้าไม่ส่งมันก็ไม่รู้จะเปิดอ่านจากไฟล์ไหน"
    },
    {
        id: 17,
        moduleId: 5,
        moduleName: "Module 5: Object-Oriented Programming",
        title: "17. Properties & Encapsulation",
        library: "Core C#",
        objectives: ["เข้าใจคอนเซปต์ Encapsulation", "การใช้งาน Properties (get / set) ใน C#"],
        content: [
            { type: "text", text: "<strong>Encapsulation (การห่อหุ้ม)</strong> คือหลักการห้ามไม่ให้ใครมาแก้ข้อมูลสำคัญแบบมั่วซั่ว เราทำตัวแปรให้เป็น <code>private</code> และสร้าง <strong>Properties (get, set)</strong> ทำตัวเป็นประตูคอยตรวจคนเข้าออก" },
            { type: "heading", text: "Full Property vs Auto Property" },
            { type: "text", text: "ถ้าไม่อยากให้ HP ติดลบ เราสร้าง Full Property ดักได้ แต่ถ้าแค่ขี้เกียจเขียน เราใช้ Auto Property ได้เลย (Compiler จะไปแอบสร้าง private field ให้เบื้องหลัง)" },
            { type: "code", code: `class Player\n{\n    // Full Property (ดัก Logic ได้)\n    private int hp;\n    public int HP \n    {\n        get { return hp; }\n        set { hp = (value < 0) ? 0 : value; } // ห้ามเลือดติดลบ\n    }\n\n    // Auto Property (เขียนสั้น)\n    public string Name { get; set; }\n    \n    // Read-Only สั่งแก้จากนอก Class ไม่ได้\n    public int Score { get; private set; }\n}` }
        ],
        conceptNote: "มาตรฐาน (Coding Convention) ในองค์กรส่วนใหญ่ (เช่น Microsoft): Fields ที่เป็น <code>private</code> นิยมตั้งชื่อขึ้นต้นด้วยตัวเล็ก (camelCase) หรือมีขีดล่างนำหน้า (<code>_hp</code>) ส่วน Properties ที่เป็น <code>public</code> <strong>บังคับว่าต้องขึ้นต้นด้วยตัวใหญ่ (PascalCase) เสมอ</strong> (<code>HP</code>, <code>Name</code>)",
        exercises: [
            { level: "Hard", instruction: "สร้างคลาส BankAccount ที่มี private field '_balance' และสร้าง Property 'Balance' ที่ get ได้อย่างเดียว (ห้าม set จากภายนอก) และมี Method 'Deposit(int amt)' ไว้ฝากเงิน", answer: `class BankAccount {\n    private int _balance;\n    public int Balance { get { return _balance; } }\n    public void Deposit(int amount) {\n        if (amount > 0) _balance += amount;\n    }\n}` }
        ],
        quiz: [
            { question: "Keyword พิเศษใดใน setter ของ Property ที่ทำหน้าที่เก็บค่าที่คนนอกส่งเข้ามาในสมการ?", options: ["input", "value", "this", "arg"], answerIndex: 1, explanation: "value เป็น implicit parameter ที่อยู่ใน set block เอาไว้รับค่าจากขวามือของสมการ (เช่น obj.Age = 20; ตัว value จะเท่ากับ 20)" }
        ],
        realUseCase: "ไลบรารี ORM อย่าง <strong>Entity Framework</strong> บังคับเลยว่าโมเดลที่จะไปแมปกับ Column ใน Database ได้ ต้องเป็น Property <code>{ get; set; }</code> เท่านั้น Field ธรรมดา <code>public int Id;</code> จะไม่ทำงาน!"
    },
    {
        id: 18,
        moduleId: 5,
        moduleName: "Module 5: Object-Oriented Programming",
        title: "18. Inheritance (การสืบทอด)",
        library: "Core C#",
        objectives: ["เรียนรู้เรื่อง Base Class และ Derived Class", "การนำโค้ดเดิมกลับมาใช้ใหม่ผ่านการสืบทอด"],
        content: [
            { type: "text", text: "<strong>Inheritance (การสืบทอด)</strong> ช่วยลดโค้ดซ้ำซ้อน ด้วยการสร้าง Class แม่ (Base Class) และสร้าง Class ลูก (Derived Class) มาสืบทอดรับสมบัติ (Fields/Methods ที่เป็น public/protected) ไปใช้ต่อ" },
            { type: "heading", text: "สัญลักษณ์การสืบทอด" },
            { type: "text", text: "ใน C# เราใช้เครื่องหมาย <strong>โคลอน (:)</strong> เพื่อสืบทอด" },
            { type: "code", code: `class Animal\n{\n    public string Name { get; set; }\n    public void Eat() => Console.WriteLine($"{Name} eating...");\n}\n\n// Dog สืบทอดจาก Animal (ได้ Name และ Eat() มาฟรีๆ)\nclass Dog : Animal\n{\n    public void Bark() => Console.WriteLine("Woof!");\n}\n\nclass Program\n{\n    static void Main()\n    {\n        Dog myDog = new Dog();\n        myDog.Name = "Buddy"; // จากแม่\n        myDog.Eat();          // จากแม่\n    }\n}` }
        ],
        conceptNote: "C# ไม่รองรับ <strong>Multiple Inheritance (คลาสมีแม่หลายคน)</strong>! Class หนึ่งตัวสามารถ <code>:</code> ได้เพียง Class เดียวเท่านั้น ถ้าอยากสืบทอดความสามารถหลายๆ สาย ต้องไปใช้ Interface แทน (ซึ่งจะสอนในบทถัดๆ ไป)",
        exercises: [
            { level: "Medium", instruction: "สร้าง Base class 'Vehicle' มี method 'Drive()' และสร้าง class ลูก 'Car' สืบทอดจาก Vehicle มี method 'Honk()'", answer: `class Vehicle {\n    public void Drive() { Console.WriteLine("Driving"); }\n}\nclass Car : Vehicle {\n    public void Honk() { Console.WriteLine("Beep!"); }\n}` }
        ],
        quiz: [
            { question: "ใน C# เราสามารถสืบทอด (Inherit) Class แม่ได้พร้อมกันสูงสุดกี่ Class?", options: ["ไม่จำกัด", "2 Class", "1 Class", "สืบทอด Class ไม่ได้ ต้องใช้ Interface เท่านั้น"], answerIndex: 2, explanation: "C# อนุญาตให้มี Base Class ได้เพียง 1 Class ต่อ 1 Derived Class ป้องกันปัญหา Diamond Problem" }
        ],
        realUseCase: "คลาสของปุ่ม (<code>Button</code>) ใน WinForms ไม่ได้เขียนโค้ดวาดสี่เหลี่ยมเอง แต่มันสืบทอด <code>: Control</code> เพื่อเอาสมบัติเรื่องสีพื้นหลัง, พิกัด x y มาจากคลาสแม่ทั้งหมด"
    },
    {
        id: 19,
        moduleId: 5,
        moduleName: "Module 5: Object-Oriented Programming",
        title: "19. Polymorphism (Virtual & Override)",
        library: "Core C#",
        objectives: ["การแปลงร่าง (Polymorphism)", "การใช้ Keyword: virtual และ override"],
        content: [
            { type: "text", text: "<strong>Polymorphism (การพ้องรูป)</strong> คือความสามารถที่ Class ลูกเขียนทับพฤติกรรม (Method) ของ Class แม่ เพื่อให้ลูกแต่ละสายพันธุ์มีการทำงานเฉพาะตัว" },
            { type: "heading", text: "Virtual และ Override" },
            { type: "text", text: "คลาสแม่ต้องอนุญาตด้วยคำว่า <code>virtual</code> แล้วคลาสลูกถึงจะใช้ <code>override</code> เปลี่ยนไส้ในมันได้" },
            { type: "code", code: `class Animal\n{\n    // virtual = อนุญาตให้ลูกเอาไปเขียนทับได้\n    public virtual void MakeSound() => Console.WriteLine("Generic Sound");\n}\n\nclass Cat : Animal\n{\n    // override = เขียนทับของแม่\n    public override void MakeSound() => Console.WriteLine("Meow Meow!");\n}\n\nclass Program\n{\n    static void Main()\n    {\n        // โยนลูกเข้า List ของแม่\n        List<Animal> pets = new List<Animal> { new Animal(), new Cat() };\n        foreach(Animal pet in pets) \n        {\n            pet.MakeSound(); // ระบบจะเช็ค 'เนื้อแท้' ว่า Object ที่ชี้อยู่คืออะไร แล้วเรียกถูกตัว!\n        }\n    }\n}` }
        ],
        conceptNote: "ถ้าคุณไม่ได้ใส่ <code>virtual</code> ที่แม่ แต่ลูกไปเขียน Method ชื่อเหมือนแม่เฉยๆ เราจะเรียกว่า <strong>Method Hiding (การซ่อน)</strong> เวลาถูกเรียกผ่านตัวแปร List แม่ มันจะไปรัน Method ของแม่แทน (Polymorphism แตก!)",
        exercises: [
            { level: "Medium", instruction: "สร้าง Class แม่ 'Shape' มี virtual method 'GetArea()' และ class ลูก 'Circle' ที่ override GetArea()", answer: `class Shape {\n    public virtual double GetArea() { return 0; }\n}\nclass Circle : Shape {\n    public override double GetArea() { return 3.14; }\n}` }
        ],
        quiz: [
            { question: "ถ้าแม่ไม่เปิด virtual ไว้ ลูกสามารถบังคับเขียนทับด้วย override ได้หรือไม่?", options: ["ได้", "ไม่ได้ (Compiler Error)"], answerIndex: 1, explanation: "ต้องมี virtual หรือ abstract ที่ต้นทางเสมอ ถึงจะตามด้วย override ที่ปลายทางได้" }
        ],
        realUseCase: "Method <code>.ToString()</code> ที่เราใช้ปริ้นตัวแปร (เช่น <code>obj.ToString()</code>) เบื้องหลังถูกตั้งเป็น <code>virtual</code> มาจาก <code>System.Object</code> (แม่สูงสุดของทุกสรรพสิ่ง) ทำให้เราสามารถ override มันใน Class ของเราเองเพื่อให้โชว์ข้อความตามสั่งได้"
    },
    {
        id: 20,
        moduleId: 5,
        moduleName: "Module 5: Object-Oriented Programming",
        title: "20. Abstract Classes & Interfaces",
        library: "Core C#",
        objectives: ["การบังคับให้คลาสลูกต้องมี Method", "ความแตกต่างระหว่าง Abstract Class และ Interface"],
        content: [
            { type: "text", text: "<strong>Abstract Class (คลาสนามธรรม)</strong> คือคลาสที่ 'ห้ามถูก <code>new</code>' มีหน้าที่เป็น 'แม่พิมพ์หลัก' ให้คนอื่นไปสืบทอด และมี <code>abstract method</code> ที่บังคับให้ลูกต้องทำตาม" },
            { type: "text", text: "<strong>Interface (ข้อตกลง)</strong> เป็นแค่ใบสัญญาเปล่าๆ ไม่มีโค้ดอยู่ข้างในเลย คลาส 1 คลาสสามารถทำสัญญาได้หลายใบ! (Implement Multiple Interfaces)" },
            { type: "code", code: `// Interface ขึ้นต้นด้วยตัว I เสมอ\ninterface IDamageable\n{\n    void TakeDamage(int damage); // ไม่มี { } ห้ามใส่โค้ดในนี้\n}\n\n// คลาสสืบทอดแม่ได้คนเดียว (Character) แต่เอา Interface มาต่อท้ายได้เรื่อยๆ\nclass Player : Character, IDamageable\n{\n    // ถ้าไม่เขียน Method TakeDamage คอมไพเลอร์จะโวยวายทันที\n    public void TakeDamage(int damage) \n    {\n        HP -= damage;\n    }\n}` }
        ],
        conceptNote: "ถ้าจะอธิบายให้เด็กเข้าใจ: <strong>Abstract Class</strong> คือ DNA (A Dog IS AN Animal). <strong>Interface</strong> คือความสามารถที่ไปเรียนมา (A Dog CAN Walk [IWalkable]). หมาบินไม่ได้ เลยไม่มี IFlyable! แต่หมาดันมีแม่เป็น Animal",
        exercises: [
            { level: "Medium", instruction: "สร้าง Interface ชื่อ IMovable มี Method ชื่อ Move() (ไม่มี return type)", answer: `interface IMovable {\n    void Move();\n}` }
        ],
        quiz: [
            { question: "ข้อใดคือความจริงของ Abstract Class?", options: ["สร้าง Object ด้วย new ได้", "สืบทอดได้หลาย Class พร้อมกัน", "ไม่สามารถสร้าง Object (new) ได้ด้วยตัวเอง ต้องใช้สืบทอดเอา", "ห้ามมี Method ที่ทำงานจริง (มีแต่ abstract method ได้เท่านั้น)"], answerIndex: 2, explanation: "Abstract class ถูกสร้างมาเพื่อให้เป็น Base (ฐาน) เสมอ" }
        ],
        realUseCase: "Interface ถูกใช้หนักมากในระดับ Senior เช่น Dependency Injection ใน <code>ASP.NET Core</code> ตัวแปรที่เก็บ Database Context มักถูกสร้างเป็น <code>IDatabase</code> เพื่อให้เราถอดสลับ Database จริงกับ Database จำลอง (Mock) ตอนเขียนเทสต์ได้ง่ายๆ"
    },
    {
        id: 21,
        moduleId: 6,
        moduleName: "Module 6: Advanced C# Features",
        title: "21. Structs vs Classes",
        library: "System",
        objectives: ["เข้าใจความต่างระหว่าง Value Type และ Reference Type"],
        content: [
            { type: "text", text: "ใน C# <code>Class</code> ถือเป็น <strong>Reference Type (ชี้ที่อยู่แรม)</strong> แต่ <code>Struct</code> เป็น <strong>Value Type (เก็บค่าลงแรมตรงๆ ใน Stack)</strong>" },
            { type: "heading", text: "ทำไมถึงพังตอนส่งผ่านตัวแปร (Assignment)" },
            { type: "code", code: `class PClass { public int X; } // Reference\nstruct PStruct { public int X; } // Value\n\n// Class\nPClass c1 = new PClass { X = 10 };\nPClass c2 = c1; // ส่ง 'ที่อยู่' Memory ชิ้นเดียวกันให้ c2\nc2.X = 99;\nConsole.WriteLine(c1.X); // ผลลัพธ์: 99 (บรรลัยแล้ว c1 โดนแก้ไปด้วย!)\n\n// Struct\nPStruct s1 = new PStruct { X = 10 };\nPStruct s2 = s1; // Copy 'ค่า' ข้ามไปสร้างตัวใหม่ใน Memory เลย (Clone)\ns2.X = 99;\nConsole.WriteLine(s1.X); // ผลลัพธ์: 10 (s1 ไม่โดนกระทบ ปลอดภัยมาก)` }
        ],
        conceptNote: "ถ้า Struct ก๊อปปี้ตัวเองได้ ทำไมไม่ใช้ Struct แทน Class ไปเลย? คำตอบคือ: ถ้า Struct ของคุณใหญ่เกินไป (มีตัวแปรหลายสิบตัว) การก๊อปปี้ไปมาระหว่าง Method จะ <strong>กิน Performance อย่างมหาศาล</strong> (Memory Copy Overhead) ปกติ Struct จะใช้กับอะไรที่เล็กมากๆ (เช่น ค่าแกน x, y, z เท่านั้น)",
        exercises: [
            { level: "Medium", instruction: "ชนิดข้อมูลพื้นฐานอย่าง int (System.Int32) ถือว่าเป็น Class หรือ Struct ใน .NET?", answer: "เป็น Struct (Value Type)" }
        ],
        quiz: [
            { question: "ถ้าเราส่งตัวแปรที่เป็น Reference Type (เช่น Class) เข้าไปใน Method แล้วใน Method มีการแก้ไขข้อมูล ตัวแปรดั้งเดิมภายนอกจะเปลี่ยนตามหรือไม่?", options: ["เปลี่ยนตาม (กระทบของเดิม)", "ไม่เปลี่ยนตาม (เป็นก๊อปปี้)"], answerIndex: 0, explanation: "Reference Type ส่งแค่ 'ที่อยู่' (Pointer) ไปให้ Method ถ้าไปแก้ไขที่ปลายทาง มันก็แก้ที่ Memory ก้อนเดียวกัน" }
        ],
        realUseCase: "เอนจิ้น Unity ตั้งใจทำ <code>Vector3</code> (ตำแหน่ง x,y,z) ให้เป็น <code>Struct</code> แทนที่จะเป็น Class เพื่อลดขยะใน Heap และป้องกัน GC กระตุก"
    },
    {
        id: 22,
        moduleId: 6,
        moduleName: "Module 6: Advanced C# Features",
        title: "22. Enums (Enumerations)",
        library: "System",
        objectives: ["การสร้างกลุ่มค่าคงที่ด้วย Enum"],
        content: [
            { type: "text", text: "<strong>Enum (อี-นั่ม)</strong> คือประเภทข้อมูลที่เราสร้างขึ้นเอง เพื่อกำจัด 'Magic Numbers' หรือตัวเลขที่ไม่มีความหมายชัดเจน" },
            { type: "heading", text: "📦 Library: System.Enum" },
            { type: "text", text: "Enum ทุกตัวใน C# สืบทอดมาจาก <code>System.Enum</code> (ซึ่งเป็น Value Type) เบื้องหลังมันคือตัวเลข <code>int</code> ธรรมดา" },
            { type: "code", code: `enum PlayerState\n{\n    Idle,       // เบื้องหลังคือ 0\n    Walking,    // เบื้องหลังคือ 1\n    Dead = 99   // ตั้งค่าเองได้\n}\n\nclass Program\n{\n    static void Main()\n    {\n        PlayerState state = PlayerState.Walking;\n        Console.WriteLine((int)state); // Cast เป็นเลข จะได้ 1 ออกมา\n    }\n}` }
        ],
        conceptNote: "เวลาคุณเก็บลง Database คุณอาจจะเก็บสถานะใบสั่งซื้อเป็นตัวเลข (0, 1, 2) แต่ตอนดึงขึ้นมาเขียนโค้ด C# คุณจะใช้ <code>(OrderStatus)statusID</code> เพื่อแปลงเลขกลับเป็นคำพูดให้โปรแกรมเมอร์อ่านออกและไม่พลาด!",
        exercises: [
            { level: "Easy", instruction: "สร้าง enum ชื่อ DaysOfWeek เก็บค่าจันทร์-อาทิตย์", answer: `enum DaysOfWeek {\n    Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday\n}` }
        ],
        quiz: [
            { question: "ถ้าไม่ได้ระบุค่าตัวเลขใน Enum ค่าเริ่มต้นของสมาชิกตัวแรกสุดจะเป็นเท่าไร?", options: ["-1", "0", "1", "null"], answerIndex: 1, explanation: "Enum จะเริ่มรันเลขจาก 0 และบวก 1 ไปเรื่อยๆ อัตโนมัติ" }
        ],
        realUseCase: "ใน <code>System.IO</code> เวลาอ่านไฟล์จะมี Enum ชื่อ <code>FileMode</code> (เช่น FileMode.Create, FileMode.Append) ซึ่งออกแบบมาให้เรารู้ว่าจะเปิดไฟล์แบบไหน ดีกว่าส่งเลข 0 หรือ 1 เข้าไปมั่วๆ"
    },
    {
        id: 23,
        moduleId: 6,
        moduleName: "Module 6: Advanced C# Features",
        title: "23. Exception Handling",
        library: "System.Exception",
        objectives: ["การดักจับข้อผิดพลาด (Errors) ไม่ให้โปรแกรมพัง", "การใช้ try, catch, finally"],
        content: [
            { type: "text", text: "คุณควบคุมผู้ใช้งานไม่ได้! วันนึงเขาต้องกรอกอักษรลงช่องตัวเลข โปรแกรมจะแตก (Crash/Unhandled Exception) การป้องกันเรียกว่า <strong>Exception Handling</strong>" },
            { type: "heading", text: "🧱 Class: Exception" },
            { type: "text", text: "<ul><li><strong>Namespace:</strong> System</li><li>เป็นคลาสแม่ของ Error ทุกประเภทบนจักรวาล .NET (เช่น <code>DivideByZeroException</code>, <code>FormatException</code> ล้วนสืบทอดมาจากตัวนี้)</li><li><strong>Properties น่ารู้:</strong> <code>Message</code> (ข้อความเตือน), <code>StackTrace</code> (บอกบรรทัดที่พัง)</li></ul>" },
            { type: "code", code: `try\n{\n    // โค้ดที่เสี่ยงระเบิด\n    int num = int.Parse(Console.ReadLine());\n    Console.WriteLine(10 / num);\n}\ncatch (DivideByZeroException)\n{\n    Console.WriteLine("ห้ามหารด้วย 0!");\n}\ncatch (Exception ex) // ดัก Error ครอบจักรวาลที่หลุดจากข้างบน\n{\n    Console.WriteLine($"พังเพราะ: {ex.Message}");\n}\nfinally\n{\n    // โค้ดที่ต้องทำเสมอ ไม่ว่าจะพังหรือไม่\n    Console.WriteLine("ทำงานเสร็จสิ้น");\n}` }
        ],
        conceptNote: "บล็อก <code>finally</code> สำคัญสุดๆ เอาไว้ปิดทรัพยากร (เช่น File Streams หรือ Database Connections) สมมติว่าเปิดไฟล์แล้วเกิด Error ถ้าคุณไม่ไปสั่ง Close() ใน finally ไฟล์นั้นจะโดนล็อกตาย จนกว่าคอมพิวเตอร์จะรีสตาร์ท!",
        exercises: [
            { level: "Medium", instruction: "เขียนบล็อก try-catch โดยจงใจเอา string 'ABC' ไป parse เป็น int ให้ catch ทำการปริ้นว่า 'Invalid format'", answer: `try {\n    int a = int.Parse("ABC");\n} catch (FormatException) {\n    Console.WriteLine("Invalid format");\n}` }
        ],
        quiz: [
            { question: "บล็อกใดใน Exception Handling ที่รับประกันว่าโค้ดข้างในจะถูกทำงานเสมอไม่ว่าจะเกิด Error หรือไม่?", options: ["try", "catch", "finally", "throw"], answerIndex: 2, explanation: "finally ถูกออกแบบมาเพื่อล้างทรัพยากร (Clean up resources) มันจะถูกทำงานตอนจบเสมอ" }
        ],
        realUseCase: "การต่อ <code>SqlConnection</code> ใน ASP.NET ถ้าเน็ตล่มตอนเชื่อมต่อ จะ Throw SqlException โปรแกรมเมอร์ต้องเอา Catch ไปดักและ Redirect ผู้ใช้ไปที่หน้า 'ระบบปิดปรับปรุง' แทนที่จะปล่อยเว็บพังโชว์โค้ด SQL ทะลักออกหน้าจอ (เดี๋ยวโดน Hack)"
    }
];

// Re-assign correctly. We want part2 to replace the middle section of window.lessonsData.
// Wait, since we are doing script tags, data_part2.js will just append. We need to clear it out if we overwrite?
// Actually, data_part2.js runs on load. 
// We should replace the push.
window.lessonsData = window.lessonsData.filter(l => l.moduleId < 4 || l.moduleId > 6);
window.lessonsData.splice(11, 0, ...part2); // Insert after part1 (which has 11 items)
// The array sorting will be handled implicitly by ID rendering in app.js (they group by module id)
