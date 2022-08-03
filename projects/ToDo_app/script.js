"use sctrict"

let inputTask = document.querySelector('#input-task_id');
let addButton = document.querySelector('#add-button_id');
let taskList = document.querySelector('.todo-list__body');
let nodes_checkBox = document.querySelectorAll('.item__check');
let nodes_delButton = document.querySelectorAll('.item__delete-button');

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    })
}

function uid() {
    return (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, "");
};

function saveTasks() {
    localStorage.clear();
    localStorage.setItem(0, JSON.stringify(taskList.innerHTML));
}

function addEventCheckBox() {
    nodes_checkBox = document.querySelectorAll('.item__check');
    nodes_checkBox.forEach(node => {
        addEventListener('click', () => {
            if (node.checked) {
                node.nextElementSibling.classList.add('crossed-out_text');
                node.checked = true;
            } else {
                node.nextElementSibling.classList.remove('crossed-out_text');
                node.checked = false;
            }
            saveTasks();
        });
    })
}

function addEventDelButton() {
    nodes_delButton = document.querySelectorAll('.item__delete-button');
    nodes_delButton.forEach(node => {
        node.addEventListener('click', () => {
            node.parentElement.parentElement.remove();
            saveTasks();
        });
    })
}

inputTask.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        addButton.click();
    }
});

addButton.addEventListener('click', () => {
    let task_data = inputTask.value;
    if (!task_data) {
        alert('Поле не заполнено!');
    } else {
        let u_id = uid();
        let elem_task = document.createElement('div');
        elem_task.className = "item";
        elem_task.innerHTML = `<div class="item-left">
                                    <input type="checkbox" class="item__check" id="item__check_id_${u_id}" name="item__check_name" value="0">
                                    <Label class="item__label" for="item__check_id_${u_id}">&nbsp;&nbsp;&nbsp;&nbsp;${task_data}</Label>
                                </div>
                                <div class="item-right">
                                    <button class="item__delete-button" id="delete-button_id">
                                        <div class="delete-button__svg"></div>
                                    </button>
                                </div>`;
        taskList.append(elem_task);
        saveTasks();
        addEventCheckBox();
        addEventDelButton();
        inputTask.value = '';
    }
})

//Добавление обработчиков событий при загрузке страницы

Promise.all([sleep(1000)]).then(() => {
    addEventDelButton()
    addEventCheckBox()
})

// При запуске

taskList.innerHTML = JSON.parse(localStorage.getItem(0));
nodes_checkBox = document.querySelectorAll('.item__check');
nodes_checkBox.forEach(node => {
    if (node.nextElementSibling.classList.contains('crossed-out_text')) {
        node.checked = true;
    } else {
        node.checked = false;
    }
})

// Скрытие контента до полной загрузки страницы

document.querySelector(".hideAll").style.display = "block";
window.onload = function () { document.querySelector(".hideAll").style.display = "none"; }
