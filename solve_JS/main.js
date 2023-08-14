function domID(id) {
  return document.getElementById(id);
}
var dsnv = [];
var data = localStorage.getItem("DSNV");
if (data != null) {
  var tableNV = JSON.parse(data);
  dsnv = tableNV.map(function (item) {
    return new NhanVien(
      item.account,
      item.name,
      item.email,
      item.matkhau,
      item.date,
      item.luong,
      item.chucvu,
      item.giolam
    );
  });
  renderDSNV(dsnv);
}
domID("btnThemNV").addEventListener("click", function themNhanVien() {
  // var _taiKhoan = domID("tknv").value;
  // var _name = domID("name").value;
  // var _email = domID("email").value;
  // var _matkhau = domID("password").value;
  // var _date = domID("datepicker").value;
  // var _luong = domID("luongCB").value;
  // var _chucvu = domID("chucvu").value;
  // var _giolam = domID("gioLam").value;
  // var nv = new NhanVien(
  //   _taiKhoan,
  //   _name,
  //   _email,
  //   _matkhau,
  //   _date,
  //   _luong,
  //   _chucvu,
  //   _giolam
  // );
  var nv = layThongTin();
  // VALIDATION
  // validate account
  var kq =
    kiemTraTaiKhoan("tbTKNV", nv.account, 4, 6, 1, 6) &
    kiemTraRegex("tbTen", nv.name, 5, /^[a-zA-Z]+$/) &
    kiemTraRegex(
      "tbEmail",
      nv.email,
      2,
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    ) &
    kiemTraPass("tbMatKhau", nv.matkhau, 3) &
    kiemTraRong("tbNgay", nv.date) &
    kiemTraGiaTri("tbLuongCB", nv.luong, 1000000, 20000000, 7) &
    kiemTraChucVu(4) &
    kiemTraGiaTri("tbGiolam", nv.giolam, 80, 200, 8);

  if (!kq) return;
  //END VALIDATION
  dsnv.push(nv);
  var jsonData = JSON.stringify(dsnv);
  localStorage.setItem("DSNV", jsonData);
  renderDSNV(dsnv);
});
function deleteNV(id) {
  var index = timViTri(id, dsnv);
  dsnv.splice(index, 1);
  renderDSNV(dsnv);
  var jsonData = JSON.stringify(dsnv);
  localStorage.setItem("DSNV", jsonData);
}
function suaThongTin(id) {
  var index = timViTri(id, dsnv);
  var nv = dsnv[index];
  domID("btnThem").click();
  showThongTin(nv);
  domID("tknv").disabled = true;
}
domID("btnCapNhat").addEventListener("click", function () {
  var data = layThongTin();
  // validate account
  var kq =
    kiemTraTaiKhoan("tbTKNV", data.account, 4, 6, 6, 1) &
    kiemTraRegex("tbTen", data.name, 5, /^[a-zA-Z]+$/) &
    kiemTraRegex(
      "tbEmail",
      data.email,
      2,
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    ) &
    kiemTraPass("tbMatKhau", data.matkhau, 3) &
    kiemTraRong("tbNgay", data.date) &
    kiemTraGiaTri("tbLuongCB", data.luong, 1000000, 20000000, 7) &
    kiemTraChucVu(4) &
    kiemTraGiaTri("tbGiolam", data.giolam, 80, 200, 8);

  if (!kq) return;
  var index = timViTri(data.account, dsnv);
  dsnv[index] = data;

  renderDSNV(dsnv);
  var jsonData = JSON.stringify(dsnv);
  localStorage.setItem("DSNV", jsonData);
});
function searchSV() {
  var input = domID("searchName").value.toUpperCase();
  var table = domID("tableDanhSach");
  var tr = table.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td")[6];

    var txtvalue = td.innerText;
    if (txtvalue.toUpperCase().indexOf(input) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
domID("btnDong").addEventListener("click", function clearInfoInForm() {
  location.reload();
});
