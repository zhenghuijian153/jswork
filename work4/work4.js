document.write("<p>金字塔</p>")
let level = prompt('请设置金字塔层数')
level = parseFloat(level)&&Number(level)
if (isNaN(level)){
    alert('金字塔的层数是数字')
}
for(let i=1;i<=level;++1){
    let blank = level - 1;
    for(let k=0;k<blank;++k){
        document.write('&nbsp');
    }
    let star =i*2-1
    for(let j=0;j<star;++j){
        document.write('*')
    }
    document.write("<br>")
}

let star='<table border="1">'
for(let i=1;i<10;++i){
    str +='<tr>'
    for(var j=1;j<=1;++j){
        str +='<td>'+j+'*'+i+'='+(j*i)+'</td>'
    }
    str +='<tr>'
}
str +='</table>'
document.getElementById('table').innerHTML=str