let number = +prompt("Nhập vào một số từ 2 đến 8:");
switch (number) {
    case 2:
        document.write("Monday");
        break;
    case 3:
        document.write("Tuesday");
        break;
    case 4:
        document.write("Wednesday");
        break;
    case 5:
        document.write("Thursday");
        break;
    case 6:
        document.write("Friday");
        break;
    case 7:
        document.write("Saturday");
        break;
    case 8:
        document.write("Sunday");
        break;
    default:
        document.write("Số bạn vừa nhập vào không hợp lệ.")
        break;
}
