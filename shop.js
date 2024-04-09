let clickBtn = document.getElementById("clickBtn");
let counter = 0;
clickBtn.addEventListener('click', function(){
    const count = document.getElementById("counter");
    counter++;
    count.innerText = `Clicked ${counter}`;
})