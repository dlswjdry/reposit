const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.push(11)); // destructive, push 잘 안 써
console.log(arr)
console.log(arr.pop());
console.log(arr)
console.log(arr.includes(2));
console.log(arr.slice(2,5));
console.log(arr)
console.log(arr.splice(2,5));
console.log(arr)
console.log(arr.concat([11,12,13])); // nondestructive, concat을 주로 많이 사용
console.log(arr)
console.log(arr.join(' '));
console.log(arr.reverse()); // destructive
console.log('a')
console.log(arr)
console.log(arr.shift()); // destructive
console.log(arr)
console.log(arr.unshift(1));
console.log(arr.sort()); // destructive
console.log(arr) 
console.log(arr.toString()); 
console.log(arr)