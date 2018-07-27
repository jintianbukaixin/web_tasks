// $(document).ready(function(){
//     $("p").hover(function(){
//         alert("!!!");
//     },
//     function(){
//         alert("???");
//     });
// });


// $("p").click(function(){
//     $(this).hide();
// });

function Student(name,sex,id,year,major){
    this.name = name;
    this.sex = sex;
    this.id = id;
    this.major = major;
    this.year = year;
}

var students = [
    new Student("张铁柱","男",0,"一年级","手机贴膜"),
    new Student("黄鸭蛋","女",1,"二年级","修电脑的")
];

students.id = "students_id";

function addStudent(name,sex,id,year,major){
    students.push(new Student(name,sex,id,year,major));

}

function printStudent(index){
    document.body.innerText = "搜索结果： 姓名："+students[index].name+" 性别： "+students[index].sex+
    " 学号："+students[index].id+" 年级："+ students[index].year+ " 专业："+students[index].major;
}

function findStudent(id){
    for (let index = 0; index < students.length; index++) {
        if (students[index].id==id) {
            printStudent(index);
        }
    }
}

function deleteStudent(id){
    for (let index = 0; index < students.length; index++) {
        if(id== students[index].id)
            students.splice(index,1);
        
    }
}

function setStudent(name,sex,id,year,major){
    for (let index = 0; index < students.length; index++) {
        if (students[index].id == id) {
            students[index].name = name;
            students[index].sex = sex;
            students[index].year = year;
            students[index].major = major;
        }
    }
}

function createTable(students){
    var table = document.createElement('table');
    var Header = document.createElement('tr');

        var headercell = document.createElement('th');
        headercell.textContent="姓名";
        Header.appendChild(headercell);
        var headercell = document.createElement('th');
        headercell.textContent="性别";
        Header.appendChild(headercell);
        var headercell = document.createElement('th');
        headercell.textContent="学号";
        Header.appendChild(headercell);
        var headercell = document.createElement('th');
        headercell.textContent="年级";
        Header.appendChild(headercell);
        var headercell = document.createElement('th');
        headercell.textContent="专业";
        Header.appendChild(headercell);

    table.appendChild(Header);

    for (let index = 0; index < students.length; ++index) {
        var row = document.createElement('tr');

        var cell = document.createElement('td');
        cell.textContent = students[index].name;
        row.appendChild(cell);
        var cell = document.createElement('td');
        cell.textContent = students[index].sex;
        row.appendChild(cell);
        var cell = document.createElement('td');
        cell.textContent = students[index].id;
        row.appendChild(cell);
        var cell = document.createElement('td');
        cell.textContent = students[index].year;
        row.appendChild(cell);
        var cell = document.createElement('td');
        cell.textContent = students[index].major;
        row.appendChild(cell);

        table.appendChild(row);
    }
    return table;
}


document.body.appendChild(createTable(students)); 

//document.getElementById("newTable").innerHTML = createTable(students);
//document.body.appendChild(createTable(localStorage.getItem("s_item"))); 



function getFormData(action){
    var tempName = document.getElementById("name").value;
    var tempSex = document.getElementById("sex").value;
    var tempID = document.getElementById("id").value;
    var tempValue = document.getElementById("year").value;
    var tempMajor = document.getElementById("major").value;

    if (action == "1") {
        addStudent(tempName,tempSex,tempID,tempValue,tempMajor);
    }
    if(action=="2"){
        deleteStudent(tempID);
    }
    if (action=="3") {
        setStudent(tempName,tempSex,tempID,tempValue,tempMajor);
    }
    if (action=="4") {
        findStudent(tempID);
    }
//    document.body.textContent = "操作完成后结果如下\n";
    document.body.appendChild(createTable(students)); 
}

localStorage.setItem("s_item",students);

//document.getElementById()
