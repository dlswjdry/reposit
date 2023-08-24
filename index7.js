let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

//문제) *2하기
//첫번째 방법
function multiplyNumeric(obj, num){
    for (let key in obj){
        if (typeof obj[key]=="number"){
            obj[key]*=num
        }
    }
}

multiplyNumeric(menu,2)
console.log(menu)

//두번째 방법
const multiplyNumeric2=(obj, num) => {
    for (let [key, value] of Object.entries(obj)){
        if (typeof value==="number"){
            obj[key]=value*num
        }
    }
}

console.log(multiplyNumeric2(menu,2))
console.log(menu)

// { ...obj}는 새로운 주소를 지정하겠다. 안에 있는 내용을 그대로 가지고 오겠다. 라는 뜻