//ES5 khai bao lop doi tuong
var SinhVien = function(maSinhVien,tenSinhVien){
    this.maSV='';
    this.tenSV='';
    this.thongTinSinhVien = function(){
        console.log(`Ma SV: ${this.maSV}' - Ten SV : ${this.tenSV}`);
    }
}
//ES6 khai bao class
class SinhVienES6{
    maSV = '';
    tenSV = '';
    constructor(maSinhVien,tenSinhVien){
        this.maSV = maSinhVien;
        this.tenSV = tenSinhVien;
    }
    hienThiThongTinSinhVien(){
        console.log(`Ma Sv: ${this.maSV} - Ten SV: ${this.tenSV}`);
    }
}