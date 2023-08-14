function NhanVien(
  _taiKhoan,
  _name,
  _email,
  _matkhau,
  _date,
  _luong,
  _chucvu,
  _giolam
) {
  this.account = _taiKhoan;
  this.name = _name;
  this.email = _email;
  this.matkhau = _matkhau;
  this.date = _date;
  this.luong = _luong;
  this.chucvu = _chucvu;
  this.giolam = _giolam;
  this.tongLuong = function () {
    if (this.chucvu === "Sếp") {
      return this.luong * 3;
    } else if (this.chucvu === "Trưởng phòng") {
      return this.luong * 2;
    } else {
      return this.luong * 1;
    }
  };
  this.xepLoai = function () {
    if (this.giolam >= 192) {
      return "Nhân viên xuất sắc";
    } else if (this.giolam >= 176 && this.giolam < 192) {
      return "Nhân viên giỏi";
    } else if (this.giolam >= 160 && this.giolam < 176) {
      return "Nhân viên khá";
    } else {
      return "Nhân viên trung bình";
    }
  };
}
