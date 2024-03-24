package sy.tech.space.todoListBackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sy.tech.space.todoListBackend.model.TaskModel;
import sy.tech.space.todoListBackend.repository.TaskRepository;

import java.util.List;

@Service // is a Bean and Service
public class TaskService {
   private final TaskRepository taskRepository;

   @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }


    public List<TaskModel> getTasks() {
        return taskRepository.findAll();
    }

    public void addNewTask(TaskModel task) {
        taskRepository.save(task);
    }
}
