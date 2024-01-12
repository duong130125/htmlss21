let year = prompt("Bạn sinh năm bao nhiêu?");
let number = parseInt(year);
if (!isNaN(number)) {
    let age = new Date().getFullYear() - number;
    document.write("Bạn năm nay đã: " + age + " tuổi");
} else {
    document.write("Năm sinh không hợp lệ vui lòng nhập lại.");
}
