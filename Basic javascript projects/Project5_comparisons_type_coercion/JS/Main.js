document.write(typeof "Word");

document.write("10" + 5)

document.write(2E310)

document.write(-3E310)

document.write(10 > 2)

document.write(10 < 2)


document.write(10==10)

x=10;
y=10;
document.write(x===y)

document.write(5 > 2 && 10 > 4);

document.write(5 > 10 || 10 > 4);

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}