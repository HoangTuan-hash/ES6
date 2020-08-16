export class NhanVien{
    maNV = '';
    tenNV = '';
    constructor(ma,ten){
        this.maNV = ma;
        this.tenNV = ten;
    }
    hienThiThongTin(){
        console.log(`Ma NV: ${this.maNV} - Ten NV: ${this.tenNV}`);
    }

}
export class TruongPhong extends NhanVien {
    danhSachPB;
    constructor(ma, ten){
     super(ma,ten);
    }
    hienThiThongTin(){
        super.hienThiThongTin();
        console.log(`Danh Sach PB : ${this.danhSachPB}`);
    }
}

export const domain = 'http://google.com.vn';

//export default moi file chỉ export 1 lần => Khi import teuf default thì không có {} và có thể sửa tên đc
export default NhanVien;