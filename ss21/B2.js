let number = prompt("Nhập vào một số bất kỳ:");
if (!isNaN(number)) {
    let temp = parseFloat(number);  
    if (temp % 2 === 0) {
        document.write("Số " + temp + " là số chẵn.");
    } else {
        document.write("Số " + temp + " là số lẻ.");
    }
} else {
    document.write("Giá trị nhập vào không hợp lệ.");
}
