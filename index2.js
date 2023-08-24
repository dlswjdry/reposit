const arr = ["Open", "Source", "Software"]
for (let i=0; i<3; i++) console.log(i, arr[i]) // Not int i=0;
for (let idx in arr) console.log(idx) // 1 2 3
for (let val of arr) console.log(val) // Open Source Software