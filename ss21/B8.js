let weight = +prompt("Nhập cân nặng của bạn (kg):");
let height = +prompt("Nhập chiều cao của bạn (m):");
let BMI = weight / (height * height);

if (BMI < 18.5) {
    document.write("Chỉ số BMI của bạn là: " + BMI + " Phân loại: Gầy.");
} else if (BMI >= 18.5 && BMI < 25) {
    document.write("Chỉ số BMI của bạn là: " + BMI + " Phân loại: Bình thường.");
} else if (BMI == 25) {
    document.write("Chỉ số BMI của bạn là: " + BMI + " Phân loại: Thừa cân.");
} else if (BMI > 25 && BMI < 30) {
    document.write("Chỉ số BMI của bạn là: " + BMI + " Phân loại: Tiền béo phì.");
} else if (BMI > 30 && BMI < 35) {
    document.write("Chỉ số BMI của bạn là: " + BMI + " Phân loại: Béo phì độ I.");
} else if (BMI >= 35 && BMI < 40) {
    document.write("Chỉ số BMI của bạn là: " + BMI + " Phân loại: Béo phì độ II.");
} else {
    document.write("Chỉ số BMI của bạn là: " + BMI + " Phân loại: Béo phì độ III.");
}
