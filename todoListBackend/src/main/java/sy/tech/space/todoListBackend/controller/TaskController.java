package sy.tech.space.todoListBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sy.tech.space.todoListBackend.model.TaskModel;
import sy.tech.space.todoListBackend.service.TaskService;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/task")
public class TaskController {

    private final TaskService taskService;

    @Autowired // the addressService will be created automatically
    public TaskController(TaskService taskService) {
    this.taskService = taskService;
    }

    @GetMapping
    public List<TaskModel> getTasks(){
           return this.taskService.getTasks();
    }


    @PostMapping
    public void addNewTask(@RequestBody TaskModel taskModel){
        taskService.addNewTask(taskModel);
    }

    @DeleteMapping(path = "{taskId}")
    public void deleteTask(@PathVariable("taskId") Long id){
        //TODO: complete the function...
    }

    // TODO:  @PutMapping is used to update an object
}
