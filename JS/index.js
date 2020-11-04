// class DisplayStatement{
//   static displayStatement(){
//     let output = document.querySelector('#showHeader');
//     const StoredStatements =[
//       "Hạnh phúc không phải là có tất cả những gì bạn muốn, mà là trân trọng những gì bạn đang có.",
//       "Thước đo của cuộc đời không phải là thời gian mà là sự cống hiến.",
//       "Người giàu có không phải là người có nhiều mà là người cho nhiều.",
//       "Trưởng thành không phải là khi ta nói về những điều lớn lao mà là khi ta hiểu được những điều nhỏ bé.",
//       "Cô đơn không phải là khi ta ở một mình mà là khi ta ở giữa đám đông nhưng vẫn cảm thấy cô độc.",
//       "Ngu ngốc nhất không phải là thất bại, mà là không dám thử.",
//       "Nơi lạnh nhất không phải là Bắc Cực mà là nơi không có tình người.",
//       "Lo lắng không làm cho những điều tồi tệ ngừng xảy ra mà nó chỉ làm cho những điều tốt lành ngừng lại.",
//       "Mục đích tối thượng của đời người không phải là kiến thức mà là hành động.",
//       "Thời gian sẽ chữa lành mọi vết thương."
//     ]

//     let timer = null;
//     let index = 0;
//     function printStatements(){
//       output.innerHTML = output.innerHTML + StoredStatements[index] + 
// //     }
// //   }
// // }

// DisplayStatement.displayStatement();

class Task {
  constructor(taskname, deadline, combobox) {
    this.taskname = taskname;
    this.deadline = deadline;
    this.combobox = combobox;
  }
}

class DisplayOnWeb {
  static displayTasks() {
    const StoredTasks = [
      {
        taskname: "Hoàn thành JS Exercise",
        deadline: "14/05/2018",
        combobox: "Finish",
      },
      {
        taskname: "Hoàn thành JS Exercise",
        deadline: "14/05/2018",
        combobox: "Process",
      },
    ];

    const tasks = StoredTasks;
    tasks.forEach((task) => DisplayOnWeb.addTaskToList(task));
  }

  static addTaskToList(task) {
    const list = document.querySelector("#task-list");
    const row = document.createElement("tr");

    row.innerHTML = `
     <td>${task.taskname}</td>
     <td>${task.deadline}</td>
     <td>${task.combobox}</td>
     <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
     `;
    list.appendChild(row);
  }

  static clearFields() {
    document.querySelector("#taskName").value = "";
    document.querySelector("#deadline").value = "";
    document.querySelector("#comboBox").value = "";
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const placeContainer = document.querySelector(".container");
    const placeForm = document.querySelector("#list-task");
    placeContainer.insertBefore(div, placeForm);
    setTimeout(() => document.querySelector(".alert").remove(), 2000);
  }

  static deleteTask(el) {
    if (el.classList.contains("delete") && confirm("Bạn có chắc muốn xoá?")) {
      el.parentElement.parentElement.remove();
    }
  }
}
document.addEventListener("DOMContentLoaded", DisplayOnWeb.displayTasks);
document.querySelector("#task-form").addEventListener("submit", (e) => {
  const taskname = document.querySelector("#taskName").value;
  const deadline = document.querySelector("#deadline").value;
  const combobox = document.querySelector("#comboBox").value;

  if (taskname === "" || deadline === "") {
    DisplayOnWeb.showAlert("Điền vào ô trống trước khi submit", "danger");
  } else {
    const task = new Task(taskname, deadline, combobox);

    DisplayOnWeb.addTaskToList(task);
    DisplayOnWeb.showAlert("Bạn đã thêm thành công", "success");
    DisplayOnWeb.clearFields();
  }
});

document.querySelector("#task-list").addEventListener("click", (e) => {
  DisplayOnWeb.deleteTask(e.target);
  // DisplayOnWeb.showAlert("Bạn đã xoá thành công", 'success');
});
