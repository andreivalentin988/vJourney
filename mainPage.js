window.addEventListener("load", () => {
  const addTasks = document.querySelector(".button"),
    taskSection = document.querySelector("#tasks");

  addTasks.addEventListener("click", (e) => {
    e.preventDefault();
    let element = e.target;
    console.log("element");
    const taskAppear = document.createElement("div");
    taskAppear.classList.add("task");
    const taskContent = document.createElement("div");
    taskContent.classList.add("content");
    taskAppear.appendChild(taskContent);
    taskSection.appendChild(taskAppear);
  });
});
