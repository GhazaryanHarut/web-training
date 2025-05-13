function canGetCount(n) {
    let canGetCount = 0;

    return function newFunction(){
        if (canGetCount < n) {
            canGetCount++;
            console.log("yes");
        }
        else {
            console.log("no");
        }
    };
}
const getCount = canGetCount(3);
getCount(); // yes
getCount(); // yes
getCount(); // yes
getCount(); // no
const getCount2 = canGetCount(2);
getCount2(); // yes
getCount2(); // yes
getCount2(); // no