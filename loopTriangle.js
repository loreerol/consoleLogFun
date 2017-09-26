document.getElementById("boo").onclick = function () { console.log('boo!'); };

document.getElementById("triangle").onclick = function () { 
    var hash = "#";
    for (var numb = 0; numb <7; numb = numb+1){
    if (hash.length = numb) hash = (hash + "#");
        console.log(hash);
    };
 };

document.getElementById("fizzbuzz").onclick = function () { 
    var fizz = "fizz";
    var buzz = "buzz";
    for (var numb = 1; numb <101; numb = numb+1){
        if ((numb % 3 )== 0 & (numb % 5)==0) console.log(fizz + buzz);
        else if ((numb % 3) == 0) console.log(fizz); 
        else if ((numb % 5) == 0) console.log(buzz);
        else console.log(numb);
    };
};

document.getElementById("checkerboard").onclick = function () { console.log('boo!'); };