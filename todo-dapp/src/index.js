import Web3 from 'web3';
import TodoListABI from '../build/contracts/TodoList.json';

let web3;
let todoList;

const init = async () => {
    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = TodoListABI.networks[networkId];
            todoList = new web3.eth.Contract(
                TodoListABI.abi,
                deployedNetwork && deployedNetwork.address,
            );
            renderTasks();
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        console.log('Please install MetaMask!');
    }
};

const renderTasks = async () => {
    const taskList = document.getElementById('taskList');
    const accounts = await web3.eth.getAccounts();
    const tasks = await todoList.methods.getTasks().call({ from: accounts[0] });
    taskList.innerHTML = tasks.map((task, index) => `
        <li>
            <input type="checkbox" id="task-${index}" class="custom-checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${index})">
            ${task.content} 
            <button class="delete-btn" onclick="deleteTask(${index})">✖</button>
        </li>
    `).join('');
};

window.deleteTask = async (id) => {
    console.log(`Deleting task ${id}`);
    const accounts = await web3.eth.getAccounts();
    await todoList.methods.deleteTask(id).send({
        from: accounts[0],
        gasPrice: web3.utils.toWei('20', 'gwei') 
    });
    renderTasks();
};

window.createTask = async () => {
    const taskContent = document.getElementById('taskInput').value;
    const accounts = await web3.eth.getAccounts();
    await todoList.methods.createTask(taskContent).send({
        from: accounts[0],
        gasPrice: web3.utils.toWei('20', 'gwei')
    });
    renderTasks();
};

window.toggleTask = async (id) => {
    const accounts = await web3.eth.getAccounts();
    await todoList.methods.toggleCompleted(id).send({
        from: accounts[0],
        gasPrice: web3.utils.toWei('20', 'gwei') 
    });
    renderTasks();
};

window.addEventListener('load', init);
