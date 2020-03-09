/*
  Viết hàm xây dựng các đối tượng student có các thuộc tính sau:
  - name: String,
  - level: String,
  - school: String

  Trong đó, thuộc tính school là thuộc tính dùng chung, có giá trị là "CodersX".
*/

function Student(name, level) {
	this.name = name;
	this.level = level;
	
}

Student.prototype.school = "CodersX";

/////////////////////////////////////////////////////////////
/*
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn. 
    average là thuộc tính dùng chung.

  Output: 
    student1.average() = 7
    student2.average() = 8
*/

function Student(diemToan, diemLy, diemHoa) {
  // Viết code ở đây
  this.diemToan = diemToan;
  this.diemHoa = diemHoa;
  this.diemLy = diemLy;
};

Student.prototype.average = function() {
  // Viết code ở đây
  return Math.round((this.diemToan + this.diemLy + this.diemHoa)/3);
};

var student1 = new Student(6, 7, 7);
var student2 = new Student(8, 9, 6);
// console.log(student1.average());
student1.average();