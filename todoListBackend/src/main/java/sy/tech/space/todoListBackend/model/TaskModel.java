package sy.tech.space.todoListBackend.model;

import jakarta.persistence.*;

@Entity
@Table
public class TaskModel {

    @Id
    @SequenceGenerator(
            name = "task_sequence",
            sequenceName = "task_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "task_sequence"
    )
    private long id;
    public long getId() {
        return id;
    }

    public TaskModel() {

    }
//TODO: add attributes, setter, getter and the toString method...
}
