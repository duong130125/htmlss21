let month = +prompt("Nhập vào số tháng trong năm từ 1 đến 12:");
switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        document.write("Tháng " + month + " có 31 ngày trong năm.");
        break;
    case 4: case 6: case 9: case 11:
        document.write("Tháng " + month + " có 30 ngày trong năm.");
        break;
    case 2:
        document.write("Tháng " + month + " có 28 ngày hoặc 29 trong năm.");
        break;
    default:
        document.write("Tháng bạn vừa nhập vào không hợp lệ.");
        break;
}

