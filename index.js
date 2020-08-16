//Khai báo biến
//var hỗ trợ hosting
var number = 1;


console.log(number);

//let không hỗ trợ hoisting
// title = 'cybersoft';

let title = 'frontend49';

//phạm vi hoạt động của biến var
//var phạm vi toàn scope, let hoat đọng từng scope
let i = 10;
{//<== Scope
    let i = 20;
    console.log('i trong scope', i);
}
console.log('i ngoai scope', i);
//khai báo với const
//const dùng để khai báo biến là hằng sô (hằng số không gán lại đc giá trị bằng giá trị khác)
//lưu ý với object, array thì hằng só ta vẫn thay đổi dc giá trị thuộc tính (object), hoặc thay đổi được giá trị phần tử (array)
const pi = 3.141592;

const objectAjax = {
    url: 'http://google.com.vn',
    method: 'GET'
}
objectAjax.url = 'http://google.com.vn';
objectAjax.method = 'POST';
console.log(objectAjax);
// objectAjax = {
//     url:'http://google.com.vn',
//     method:'GET'
// }



//-----------------2. Arrow function-----------------
//Không thể khai báo lớp đối tượng (prototype) = arrow function

//es5: khai báo hàm
let hello_es5 = function (name) {
    return 'hello ' + name;
}

console.log(hello_es5('Tuan'));

//Es6: khai báo hàm duy nhất 1 lệnh return. Bỏ lệnh return, {}, chữ function
let hello_es6 = (name) => 'hello ' + name;
console.log(hello_es6('TTT'));

//Xây dựng đối tượng  dựa trên function es5
//ngữ cảnh con trỏ this
let hocVien = {
    hoTen: 'Nguyen Van A',
    lop: 'Front End xxx',
    layThongTinHocVien: function () {
        let hienThiThongTin = () => {
            console.log(`Họ tên: ${this.hoTen} - Lớp: ${this.lop}`);
        }
        hienThiThongTin();
    }
}
//dùng đới tượng hocVien gọi phương thức layThongTinhocVien()
hocVien.layThongTinHocVien();
//=> this.hoTen = '' this.lop = '';

//------ Rest param(Toán tử ...)--------------------
var tinhTong = function(...resParam) {
    switch(resParam.length){
        case 2:{
            //Công việc khi truyền vào 2 tham số
            return resParam[0] + resParam[1];
        }
        case 3:{
            //Công việc khi truyền 3 tham số
            return resParam[0] + resParam[1] + resParam[2];
        }
        default:{
            return 'Tham số không hợp lệ';
        }
    }
}

var tong = tinhTong(1,2);
var tong2 = tinhTong(1,2,3);
var tong3 = tinhTong(1,2,3,4,5,6);

console.log('tong',tong);
console.log('tong2',tong2);
console.log('tong2',tong3);

//Sao chép giá trị object
let hocVien1 = {id:5, hoTen:'Nguyen Van Teo'};
//Ví dụ thêm thuộc tính
let hocVien2 = {...hocVien1,lop:'FrontEnd 49'};//Chép các thuộc tính và giá trị của hocVien1 vào object hocVien2
//vừa gán vừa set lại giá trị
let hocVien3 = {...hocVien1, hoTen:'Nguyên Thị B'}
console.log(hocVien1);
console.log(hocVien2);
console.log(hocVien3);

//Sao chép giá trị Array
let arrNum1 = [1,2,3,4];
let arrNum2 = [...arrNum1,5];
console.log('arrNum1', arrNum1);
console.log('arrNum1', arrNum2);

//--------------------5. Default Params--------------------
//Khi truyền tham số hàm sẽ lấy tham số mình truyền
//Khi không truyền tham số thì hàm sẽ lấy giá trị mặc định
var hienThiThongTinND = (hoTen = "AAA",namSinh=1999,tuoi=2020 - namSinh) =>{
    console.log('Họ Tên',hoTen);
    console.log('Tuổi', tuoi);
}
hienThiThongTinND('BBB',1999);
hienThiThongTinND('CCC',1987,25);

//---------------------6. Destructuring-------------

let hocVienCyber = {
    id:1,
    hoTen:'TTTTT',
    tuoi:20,
    thongTinCaNhan:{
        email: '5555555555@gmail.com',
        passWord: '123445'
    },
    hienThiThongTin : function(){
        console.log('Họ tên', this.hoTen);
        console.log('tuoi',this.tuoi);
    }
}
//Truy xuất thuộc tính thông quá ES5
    // let id = hocVienCyber.id;
    // let hoTen = hocVienCyber.hoTen;

//Truy xuất thuộc tính thông quá ES6
//bóc tách phương thức mặc định k hiểu this => muốn sử dụng được this phải dùng phương thức bind của Function để truyền ngược lịa đối tượng đó
let {id,hoTen,tuoi,thongTinCaNhan,hienThiThongTin} = hocVienCyber;
hienThiThongTin.bind(hocVienCyber)();

//-------------------------7. Template Strings----------------------
const showMessage = (name) => `Hi ${name}`;
showMessage('Nguyễn Văn GG');
//--------------------- Object literals (object chân phương)---------------
//Khai báo thuộc tính động cho object
let propsLopHoc = 'id';
let thongTinLopHoc = {
    [propsLopHoc]: 49,
    ['tenLop']: 'FE49'
}
console.log(thongTinLopHoc);
//Gán nhanh giá trị cho thuộc tính (từ tên biến tạo ra tên thuộc tính đồng thời gán giá trị đó cho thuộc tính của object)
let id_ = 1; let hoTen_ = 'Nguyễn Văn A';
let hienThiThongTinHocVien = function(hoTen){
    console.log('Họ tên', hoTen);
}
let hvFE49 = {
    id_:id_,
    hoTen_: hoTen_,
    hienThiThongTinHocVien
}
console.log('hvFE49',hvFE49);

//--------------------9. For … in & FOr ... of ----------------
let mangSanPham = [
    {id:1,tenSp:'iphone pro max',gia:1000},
    {id:2,tenSp:'iphone X', gia:800},
    {id:2,tenSp:'iphone XS',gia:900}
];
//for hello_es5
for(let i = 0; i<mangSanPham.length;i++){
    let sanPham = mangSanPham[i];
    console.log(sanPham);
}
// for .. in trả về index mỗi phần tử mảng sau mỗi lần duyệt, và key của object (for...in dùng để duyệt object tốt)

let obDanhSachSP = {
    'sda7da8sd7aa8s9': {id:1,tenSp:'iphone pro max',gia:1000},
    'sda7da8sd7aa8s55': {id:2,tenSp:'iphone X', gia:800},
    'sda7da8sd7aa8s77' : {id:2,tenSp:'iphone XS',gia:900}
}
obDanhSachSP.sda7da8sd7aa8s55;//cách 1 truy xuất thủ công
obDanhSachSP['sda7da8sd7aa8s55']; //cách 2 truy xuất thủ công
for ( let key in obDanhSachSP){
    let sanPham = obDanhSachSP[key];
    console.log('sản Phẩm', sanPham);
}
console.log('----for ... of -----');
// for .. of
for ( let sanPham of mangSanPham){
    console.log('sản Phẩm', sanPham);
}
//Kết luận for..in dùng để  duyệt các key( thuộc tính hay còn gọi là property) của bject
// for..ò dùng đẻ duyệt các phần tử của mảng (arary)

//-----------------10. OOP---------------
let sv = new SinhVienES6(112,'Nguyen Van A');
sv.hienThiThongTinSinhVien();

//import các lớp đối tượng, cá tham số phải viết đúng tên tên.
import {TruongPhong, domain} from './models/NhanVien.js';
import NhanVien123 from './models/NhanVien.js'; 
let truongPhong = new TruongPhong(2,"Nguyen Van B");
truongPhong.danhSachPB = [1,2,3,4];
truongPhong.hienThiThongTin();

let nhanVien123 = new NhanVien(3,"Nguyen Van C");
nhanVien.hienThiThongTin();

console.log(domain);