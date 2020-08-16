let mangSanPham = [
    {maSP:1, tenSP: 'Sony Eperia XZ2', gia: 1750, hangSX: 'SONY'},
    {maSP:2, tenSP: 'Sony Eperia XZ1', gia: 1550, hangSX: 'SONY'},
    {maSP:3, tenSP: 'Sony Eperia XZPremium', gia: 1850, hangSX: 'SONY'},
    {maSP:4, tenSP: 'Google Pixel XL', gia: 1650, hangSX: 'GOOGLE'},
    {maSP:5, tenSP: 'Sony Eperia 2', gia: 1650, hangSX: 'GOOGLE'},
    {maSP:6, tenSP: 'Samsung Galaxy Note 9', gia: 3750, hangSX: 'SAMSUNG'},
    {maSP:7, tenSP: 'Samsung Galaxy S10 Plus', gia: 4750, hangSX: 'SAMSUNG'},
    {maSP:8, tenSP: 'Samsung Galaxy S10 5G', gia: 5750, hangSX: 'SAMSUNG'},
]
//Lay cac san pham co hangSX = 'SONY';
//ES5
let mangDTSONY = [];
// for (let index = 0; index < mangSanPham.length; index++) {
//    let sp = mangSanPham[index];
//    if(sp.hangSX === 'SONY'){
//        mangDTSONY.push(sp);
//    }
    
// }
// console.log(mangDTSONY);

//filter là hàm trả về kết quả  là 1 mảng con thỏ điều kiện arrow function bên trong phương thức filter
mangDTSONY = mangSanPham.filter(dt => dt.hangSX === 'SONY');
console.log(mangDTSONY);
//Lấy ra các sản phẩm có giá trên 2000;
let mangDTTren2000 = mangSanPham.filter(dt => dt.gia > 2000 && dt.hangSX === 'SAMSUNG');
console.log(mangDTTren2000);

//hàm find: tìm ra phần tử thỏa điều kiện arrow function (Lưu ý: CHỉ trả về phần tử đàu tiên tìm đc, nếu không tìm đc trả underfine)
let dtMa7 = mangSanPham.find(dienthoai => dienthoai.maSP === 7);
if(dtMa7){
    console.log('dtMa7', dtMa7);
}
else{
    console.log('Không tìm thấy sản phẩm');
}

//hàm findindex: Tươn tự find nhưng nó tả về vị trí phần tử đầu tiên tìm thấy, không tìm thấy trả về -1
let index = mangSanPham.findIndex(dt => dt.maSP == 5);
if(index !== -1){//Tìm ra đc index => xử lý xóa
    mangSanPham.splice(index,1);
    console.log(mangSanPham);
}
else{
    console.log('Không tìm thấy vị trí');
}
//Nếu theo yêu cầu trên viết băng filter thì sẽ nhanh hơn
let mangSPXoa = mangSanPham.filter(dt => dt.maSP !== 5);
console.log(mangSPXoa);

//foreach: dùng thực hiện các xử lý tren cá phần tử của mảng, trả về undefine
mangSanPham.forEach((dt,index) => {
    console.log(`dt ${index}`,dt);
});

//Hàm map dùng để biến đổi mảng này thành mảng khác
let mangCardBS4 = mangSanPham.map((dt, index)=>{
    return `<div class="col-4">
    <div class="card text-left">
      <img class="card-img-top" src="holder.js/100px180/" alt="">
      <div class="card-body">
        <h4 class="card-title">${dt.tenSP}</h4>
        <p class="card-text">${dt.gia}</p>
      </div>
    </div>
    </div>`
});
console.log(mangCardBS4);
// mangCardBS4.forEach((divCardSP,index)=>{
//     document.getElementById('dssp').innerHTML += divCardSP;
// }
// )

//reduce: tương tự map và foreach nhưng lặp qua n phần tử trả về 1 giá trị
//Ví dụ tính tổng tiền tất cả điện thoại
//Tham số thứ 1: là callback function duyệt qua n phần tử
    //3 tham số callback
        //Tham số 1: giá trị ban đầu(cũng như giá trị sau mỗi lần cộng dồn)
        //Tham số 2: tưng object trong mảng
        //Tham số 3: vị trí của object trong mảng
//tham số 2 là giá trị khởi đầu cho tham số thứ 1 của callback

let tongTienDT = mangSanPham.reduce((tongTien,dt,index)=>{
    return tongTien += dt.gia;
},0);

console.log('tong tien dt',tongTienDT);

let contentHTML = mangSanPham.reduce((content,dt,index)=>{
    return content += `<div class="card text-white bg-primary">
      <img class="card-img-top" src="" alt="">
      <div class="card-body">
        <h4 class="card-title">${dt.tenSP}</h4>
        <p class="card-text">${dt.gia}</p>
      </div>
    </div>`
},'');
document.getElementById('dssp').innerHTML = contentHTML;

let mangSortTheoTen = mangSanPham.sort((spSau,spTruocDo)=>{
    let tenSP = spSau.tenSP.toLowerCase().trim();
    let tenSPTruocDo = spTruocDo.tenSP.toLowerCase().trim();
    if( tenSP > tenSPTruocDo){
        return 1; //hoán vị
    }
    else {
        return -1;//Giữ nguyên
    }
});
console.log('mảng sắp xếp theo tên: ',mangSortTheoTen);

//sắp xếp theo số
let mangSanPhamGiaTangDan = mangSanPham.sort((spSau,spTruoc)=>{
    return spSau.gia - spTruoc.gia;
});
console.log(mangSanPhamGiaTangDan);