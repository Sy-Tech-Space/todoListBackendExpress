package sy.tech.space.todoListBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sy.tech.space.todoListBackend.model.TaskModel;

@Repository
public interface TaskRepository extends JpaRepository<TaskModel, Long> {


}
