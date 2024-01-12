let Maths = +prompt("Nhập điểm môn Toán:");
let Literature = +prompt("Nhập điểm môn Văn:");
let English = +prompt("Nhập điểm môn Anh:");
let medium = (Maths + Literature + English) / 3;

if (medium >= 8.0 && medium <= 10.0) {
    document.write("BẠN ĐƯỢC " + medium + " ĐIỂM XẾP LOẠI GIỎI.");
} else if (medium >= 6.5 && medium < 8.0) {
    document.write("BẠN ĐƯỢC " + medium + " ĐIỂM XẾP LOẠI KHÁ.");
} else if (medium >= 5.0 && medium < 6.5) {
    document.write("BẠN ĐƯỢC " + medium + " ĐIỂM XẾP LOẠI TRUNG BÌNH.");
} else {
    document.write("BẠN ĐƯỢC " + medium + " ĐIỂM XẾP LOẠI YẾU.");
}

