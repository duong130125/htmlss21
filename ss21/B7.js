let a = +prompt("Nhập số a:");
let b = +prompt("Nhập số b:");
let c = +prompt("Nhập số c:");
let max;

if (a >= b && a >= c) {
    max = a;
} else if (b >= a && b >= c) {
    max = b;
} else {
    max = c;
}
console.log("Số lớn nhất là - " + max);
