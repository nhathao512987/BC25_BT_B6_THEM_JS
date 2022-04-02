/* In ra Số Nguyên Tố */
function primenumber (x)
{
    var result = "", i=2 ;
    for ( i=2; i < x; i++) {
        if (checkPrimeNumber(i)) {
            result += " " + i;
        }
    }

    return result;
}

function checkPrimeNumber (x)
{
    var result = true; i = 2; 
    while ( i < x) {
        if ( x % i == 0) {
            result = false;
            break;
        }
        i++;
    } 

    return result;
}

document.getElementById("primeNumber").onclick = function () {
    var x = document.getElementById("txtNumber").value * 1;
    document.getElementById("noti").innerHTML = primenumber(x);
}
