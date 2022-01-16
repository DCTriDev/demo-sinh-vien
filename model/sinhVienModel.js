function SinhVien(_maSV, _tenSV, _email, _pass, _dayOfBirth, _khoaHoc, _diemToan, _diemLy, _diemHoa) {
    this.maSV = _maSV
    this.tenSV = _tenSV
    this.email = _email
    this.pass = _pass
    this.dayOfBirth = _dayOfBirth
    this.khoaHoc = _khoaHoc
    this.diemToan = _diemToan
    this.diemLy = _diemLy
    this.diemHoa = _diemHoa
    this.diemTB = function () {
        return ((this.diemToan + this.diemLy + this.diemHoa) / 3)
    }
}