function goldbach() {
    let sum = document.getElementById('odd').value
    if(sum%2!==0){
        alert("请输入大于2的偶数")
    }
    let goldbach = document.getElementById('goldbach')
    let arr  =[]
    for(i=2;i<=sum;i++){
        a = 0
        for(j=2;j<i;j++){
            if(i%j==0){
                a++
            }
        }
        if(a==0){
            arr .push(i)
        }
    }
    let str = ''
    console.log(sum)
    for(let i=0;i<(arr .length)/2;i++){
       for(let j=0;j<arr .length;j++){
           if((arr [i]+arr [j])===Number(sum)){
               str += '<div>'+sum+"可以拆分为两个质数"+arr [i]+"与"+arr [j]+"的和"+ '</div>'
               console.log(sum+"可以拆分为两个质数"+arr [i]+"与"+arr [j]+"的和")
           }
       }
    }
    goldbach.innerHTML = str
}
