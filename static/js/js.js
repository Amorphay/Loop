let outPut = document.querySelector(".para")
let textArea = document.querySelector(".textArea")
let submit = document.querySelector(".btn")
function loop (number) {
    for (let i = number; i >= 0; i--) {
        if (i === number) {
            var para = document.createElement("p");
            para.textContent = `Countdown ${i} `;
            outPut.appendChild(para);
            continue;
        }
        if (i === 0) {
            var para = document.createElement("p");
            para.textContent = 'Blast off!';
            outPut.appendChild(para);
            break;
        }
        var para = document.createElement("p");
        para.textContent = `${i} `;
        outPut.appendChild(para);
    }
}
submit.addEventListener('click',function ()
{
    var value = textArea.value;
    if (value === '')
    {
        alert("请输入倒计时数值")
    }
    else
    {
        outPut.innerHTML = ''
        textArea.value = ''
        textArea.focus()
        loop(value)
    }

})
