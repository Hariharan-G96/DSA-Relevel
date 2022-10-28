function generateBinary(n){
    let q = [];

    q.push("1");

    while(n--){
        let s1 = q[0];
        q.shift();
        console.log(s1);

        let s2 = s1;

        q.push(s1 + "0");

        q.push(s2 + "1");
    }
}

let n = 5;
generateBinary(n);