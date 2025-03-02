const todayDate = document.getElementById("day-name");
const currentDate = new Date();
todayDate.innerText = currentDate.toDateString();
const historyIs = document.getElementById("History-sesction");

const buttons = document.querySelectorAll(".btn-prim")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const cardTitle = document.querySelectorAll(".title-head");
        const taskAssigned = document.getElementById("task-assigned").innerText;
        const convertTaskAssigned = parseInt(taskAssigned);
        const markOfNumber = document.getElementById("mark-number").innerText;
        const convertMarkOfNumber = parseInt(markOfNumber);
        if (taskAssigned <= 0) {
            alert("No tasks remaining!")
        } else {
            alert("Board Updated Successfully!")
        }
        if (taskAssigned <= 1) {
            alert("Congrats!! you have successfully completed the current task");
        }
        document.getElementById("task-assigned").innerText = convertTaskAssigned - 1;
        document.getElementById("mark-number").innerText = convertMarkOfNumber + 1;
        buttons[i].disabled = true;
        buttons[i].classList.add(
            "bg-gray-400",
            "font-medium",
            "text-white",
            "rounded-xl",
            "py-1.5",
            "px-4",
            "text-[16px]",
            "cursor-not-allowed"
          );
          buttons[i].classList.remove("btn-prim");
        const newElement = document.createElement("div")
        newElement.innerHTML = `
        <div class=" bg-slate-100 rounded-lg m-4 p-2">
            <p> You have complete The Task ${cardTitle[i].innerText} at ${set12hourSet()}
            </p>
        </div>
        `;
        function set12hourSet() {
            const nowTime = new Date();
            let hours = nowTime.getHours();
            let minutes = nowTime.getMinutes();
            let seconds = nowTime.getSeconds();
            const amPm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            return `${hours}: ${minutes}:${seconds} ${amPm}`;
        }
        historyIs.appendChild(newElement)
    })
}

document.getElementById("clear_btn").addEventListener("click",function(){
    historyIs.innerText = "";
})


document.getElementById("themeBTn").addEventListener("click", function () {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

document.getElementById("descoverSomething").addEventListener("click", function(){
    window.location.href = "main-blog.html"
})
