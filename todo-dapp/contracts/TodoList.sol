// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TodoList {
    struct Task {
        uint id;
        string content;
        bool completed;
    }

    mapping(address => Task[]) private tasks;

    function createTask(string memory _content) public {
        tasks[msg.sender].push(Task(tasks[msg.sender].length, _content, false));
    }

    function toggleCompleted(uint _id) public {
        require(_id < tasks[msg.sender].length, "Task does not exist");
        tasks[msg.sender][_id].completed = !tasks[msg.sender][_id].completed;
    }

    function getTasks() public view returns (Task[] memory) {
        return tasks[msg.sender];
    }

function deleteTask(uint _id) public {
    delete tasks[msg.sender][_id];
}
}