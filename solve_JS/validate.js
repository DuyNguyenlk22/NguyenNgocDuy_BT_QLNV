var thongBaoErr = [
  "Vui lòng không để trống",
  "Tài khoản tối đa 4-6 ký số",
  "Email không hợp lệ",
  "Mật khẩu không hợp lệ (Có ít nhất 6-10 ký tự, chứa ít nhất 1 ký tự số , 1 ký tự in hoa và 1 ký tự đặc biệt )",
  "Vui lòng chọn chức vụ hợp lệ",
  "Họ tên phải là chữ",
  "Tài khoản phải là số ",
  "Lương phải là số",
  "Giờ làm phải là số",
];

function kiemTraRong(idErr, value) {
  var thongBao = domID(idErr);
  if (value.trim().length == 0) {
    thongBao.innerHTML = thongBaoErr[0];
    thongBao.style.display = "block";
    return false;
  } else {
    thongBao.innerHTML = " ";
    return true;
  }
}

function kiemTraPass(idErr, value, indexThongBao) {
  const re =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
  var thongBao = domID(idErr);
  if (value.trim().length == 0) {
    thongBao.innerHTML = thongBaoErr[0];
    thongBao.style.display = "block";
    return false;
  } else if (re.test(value)) {
    thongBao.innerHTML = " ";
    return true;
  } else {
    thongBao.innerHTML = thongBaoErr[indexThongBao];
    thongBao.style.display = "block";
    return false;
  }
}
function kiemTraChucVu(indexThongBao) {
  var select = domID("chucvu");
  var thongBao = domID("tbChucVu");
  if (select.selectedIndex == 0) {
    thongBao.innerHTML = thongBaoErr[indexThongBao];
    thongBao.style.display = "block";
    return false;
  } else {
    thongBao.innerHTML = " ";
    return true;
  }
}

function kiemTraTaiKhoan(
  idErr,
  value,
  min,
  max,
  indexThongBao1,
  indexThongBao2
) {
  const re = /^[0-9]+$/;
  var thongBao = domID(idErr);
  var length = value.trim().length;

  if (value.trim().length == 0) {
    thongBao.innerHTML = thongBaoErr[0];
    thongBao.style.display = "block";
    return false;
  } else if (length < min || length > max) {
    thongBao.innerHTML = thongBaoErr[indexThongBao1];
    thongBao.style.display = "block";
    return false;
  } else if (re.test(value)) {
    thongBao.innerHTML = " ";
    return true;
  } else {
    thongBao.innerHTML = thongBaoErr[indexThongBao2];
    thongBao.style.display = "block";
    return false;
  }
}

function kiemTraRegex(idErr, value, indexThongBao1, regex) {
  const re = regex;
  var giaTri = value.replace(/\s/g, "");
  var thongBao = domID(idErr);

  if (value.trim().length == 0) {
    thongBao.innerHTML = thongBaoErr[0];
    thongBao.style.display = "block";
    return false;
  } else if (re.test(giaTri)) {
    thongBao.innerHTML = " ";
    return true;
  } else {
    thongBao.innerHTML = thongBaoErr[indexThongBao1];
    thongBao.style.display = "block";
    return false;
  }
}
function kiemTraGiaTri(idErr, value, min, max, indexThongBao) {
  const re = /^[0-9]+$/;
  var thongBao = domID(idErr);
  if (value.trim().length == 0) {
    thongBao.innerHTML = thongBaoErr[0];
    thongBao.style.display = "block";
    return false;
  } else if (value < min || value > max) {
    thongBao.innerHTML = `Vui lòng nhập vào từ ${min} - ${max}`;
    thongBao.style.display = "block";
    return false;
  } else if (re.test(value)) {
    thongBao.innerHTML = " ";
    return true;
  } else {
    thongBao.innerHTML = thongBaoErr[indexThongBao];
    thongBao.style.display = "block";
    return false;
  }
}
