let listSinhVien = []
let LOCAL_STORAGE = 'listSinhVienLocal'

//Lấy dữ liệu từ localStorage gán vào listSinhVien
let newListSinhVienData = localStorage.getItem(LOCAL_STORAGE)
let newListSV = JSON.parse(newListSinhVienData)
if (newListSV) {
    listSinhVien = newListSV.map(function (key) {
        return new SinhVien(key.maSV, key.tenSV, key.email, key.pass, key.dayOfBirth, key.khoaHoc, key.diemToan, key.diemLy, key.diemHoa)
    })
    RenderTable(listSinhVien)
}


function ThemSinhVien() {
    let sinhVienNew = LayThongTinSV()
    if (CheckSV(sinhVienNew)) {
        listSinhVien.push(sinhVienNew)
        let dssvJson = JSON.stringify(listSinhVien)
        localStorage.setItem(LOCAL_STORAGE, dssvJson)
    }
    RenderTable(listSinhVien)
}

function SuaSV(maSV) {
    let viTri = LayViTri(maSV, listSinhVien)
    if (viTri != -1) {
        let curSinhVien = listSinhVien[viTri]

        document.querySelector('#txtMaSV').value = curSinhVien.maSV
        document.querySelector('#txtMaSV').disable = true
        document.querySelector('#txtTenSV').value = curSinhVien.tenSV
        document.querySelector('#txtEmail').value = curSinhVien.email
        document.querySelector('#txtPass').value = curSinhVien.pass
        document.querySelector('#txtNgaySinh').value = curSinhVien.dayOfBirth
        document.querySelector('#khSV').value = curSinhVien.khoaHoc
        document.querySelector('#txtDiemToan').value = curSinhVien.diemToan
        document.querySelector('#txtDiemLy').value = curSinhVien.diemLy
        document.querySelector('#txtDiemHoa').value = curSinhVien.diemHoa
    }
}

function RenderTable(arr) {
    let contentHTML = ''
    for (let i = 0; i < arr.length; i++) {
        let sv = arr[i]
        contentHTML += `<tr>
                <td>${sv.maSV}</td>
                <td>${sv.tenSV}</td>
                <td>${sv.email}</td>
                <td>${sv.dayOfBirth}</td>
                <td>${sv.khoaHoc}</td>
                <td>${sv.diemTB()}</td>
                <td>
                <button class="btn btn-success" onclick="SuaSV('${sv.maSV}')">Sửa</button>
                <button class="btn btn-danger">Xoá</button>
                </td>
            </tr>`
    }

    document.querySelector('#tbodySinhVien').innerHTML = contentHTML
}

function CheckSV(newSV) {
    for (let i = 0; i < listSinhVien.length; i++) {
        if (newSV.maSV == listSinhVien[i].maSV)
            return false
    }
    return true
}

function LayThongTinSV() {
    let maSVValue = document.querySelector('#txtMaSV').value
    let tenSVValue = document.querySelector('#txtTenSV').value
    let emailSVValue = document.querySelector('#txtEmail').value
    let passSVValue = document.querySelector('#txtPass').value
    let dayOdBirthSVValue = document.querySelector('#txtNgaySinh').value
    let khoaHocSVValue = document.querySelector('#khSV').value
    let diemToanSVValue = document.querySelector('#txtDiemToan').value * 1
    let diemLySVValue = document.querySelector('#txtDiemLy').value * 1
    let diemHoaSVValue = document.querySelector('#txtDiemHoa').value * 1

    return new SinhVien(maSVValue, tenSVValue, emailSVValue, passSVValue, dayOdBirthSVValue, khoaHocSVValue, diemToanSVValue, diemLySVValue, diemHoaSVValue)
}

function LayViTri(maSV, arr) {
    let viTri = -1
    for (let i = 0; i < arr.length; i++) {
        const sv = arr[i]
        if (sv.maSV == maSV)
            viTri = i
    }
    return viTri
}

function CapNhapSV() {
    let sv = LayThongTinSV()
    let viTri = LayViTri(sv.maSV,listSinhVien)
    if (viTri!==-1){
        listSinhVien[viTri]= sv
    }

    let dssvJson = JSON.stringify(listSinhVien)
    localStorage.setItem(LOCAL_STORAGE, dssvJson)
    RenderTable(listSinhVien)
}
function XoaSV(maSV){
    var viTri = LayViTri(maSV,listSinhVien)
    if(viTri!==-1){

    }
}