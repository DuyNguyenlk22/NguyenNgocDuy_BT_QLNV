function renderDSNV(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var data = arr[i];
    var theTr = `<tr>
    <td>${data.account}</td>
    <td>${data.name}</td>
    <td>${data.email}</td>
    <td>${data.date}</td>
    <td>${data.chucvu}</td>
    <td>${data.tongLuong()}</td>
    <td>${data.xepLoai()}</td>
    <td><button class="btn btn-success"onclick="suaThongTin('${
      data.account
    }')">Sửa</button>
    <button class="btn btn-danger"onclick="deleteNV('${
      data.account
    }')">Xoá</button>
    </td>
    </tr>`;
    content += theTr;
  }
  domID("tableDanhSach").innerHTML = content;
}
function timViTri(id, arr) {
  return arr.findIndex(function (item) {
    return item.account == id;
  });
}
function showThongTin(item) {
  domID("tknv").value = item.account;
  domID("name").value = item.name;
  domID("email").value = item.email;
  domID("password").value = item.matkhau;
  domID("datepicker").value = item.date;
  domID("luongCB").value = item.luong;
  domID("chucvu").value = item.chucvu;
  domID("gioLam").value = item.giolam;
}
function layThongTin() {
  var _taiKhoan = domID("tknv").value;
  var _name = domID("name").value;
  var _email = domID("email").value;
  var _matkhau = domID("password").value;
  var _date = domID("datepicker").value;
  var _luong = domID("luongCB").value;
  var _chucvu = domID("chucvu").value;
  var _giolam = domID("gioLam").value;
  var nv = new NhanVien(
    _taiKhoan,
    _name,
    _email,
    _matkhau,
    _date,
    _luong,
    _chucvu,
    _giolam
  );
  return nv;
}
