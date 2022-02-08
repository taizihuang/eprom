// 获取弹窗
var modal = document.getElementById('myModal');

// 获取图片插入到弹窗 ，使用 "alt" 属性作为文本部分的内容
var modalImg = document.getElementById("img01");

function click1(link) {
    modal.style.display = "block";
    modalImg.src = link;
}
function click2() {
    modal.style.display = "none";
}

var i = 0;
//var list = ["1.jpg","2.jpg"]
function nextImg(list) {
    i++
    var next = document.getElementById("img01");
    if (i == list.length) {
        i = 0;
    }
    next.src = list[i];
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      click2()
    }
  })