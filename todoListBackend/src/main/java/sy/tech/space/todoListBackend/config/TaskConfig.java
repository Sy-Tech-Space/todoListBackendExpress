package sy.tech.space.todoListBackend.config;


import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import sy.tech.space.todoListBackend.model.TaskModel;
import sy.tech.space.todoListBackend.repository.TaskRepository;

import java.util.List;

@Configuration
public class TaskConfig {
    @Bean
    CommandLineRunner commandLineRunner(TaskRepository addressRepository) {
        return args -> {
            TaskModel address =
                    new TaskModel();
            addressRepository.saveAll(List.of(address));
        };
    }
}
