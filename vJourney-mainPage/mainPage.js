// window.addEventListener("load", () => {
//   const addTasks = document.querySelector(".button"),
//     taskSection = document.querySelector("#tasks");

//   addTasks.addEventListener("click", (e) => {
//     e.preventDefault();
//     let element = e.target;
//     console.log("element");
//     const taskAppear = document.createElement("div");
//     taskAppear.classList.add("task");
//     const taskContent = document.createElement("div");
//     taskContent.classList.add("content");
//     taskAppear.appendChild(taskContent);
//     taskSection.appendChild(taskAppear);
//   });
// });

window.addEventListener("load", () => {
  const form = document.querySelector("#newTaskForm"),
    input = document.querySelector("#newTaskInput1"),
    input2 = document.querySelector("#newTaskInput2"),
    taskList = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;

    if (!task) {
      alert("Please complete the shift form");
      return;
    }

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskContentElement = document.createElement("div");
    taskContentElement.classList.add("content");
    // taskContentElement.innerText = task;

    const endInput = document.createElement("input");
    endInput.classList.add("End");
    endInput.innerText = task;

    const profitInput = document.createElement("input");
    profitInput.classList.add("totalProfit");
    profitInput.innerText = task;

    const startInput = document.createElement("input");
    startInput.classList.add("Start");
    startInput.innerText = task;


    const desctiptionInput= document.createElement("input")
    desctiptionInput.classList.add("summary")
    desctiptionInput.innerText = task

    taskElement.appendChild(taskContentElement);
    taskList.appendChild(taskElement);
    taskContentElement.appendChild(startInput);
    taskContentElement.appendChild(profitInput);
    taskContentElement.appendChild(endInput);
    taskContentElement.appendChild(desctiptionInput);

  });
});
