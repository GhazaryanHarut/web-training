function canGetCount(n) {
    let canGetCount = 0;

    return function newFunction(){
        if (canGetCount < n) {
            canGetCount++;
            return 'yes';
        }
        else {
            return 'no';
        }
    };
}

