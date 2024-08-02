package com.example.taskmaster.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private LocalDateTime dueDate;

    @OneToMany(mappedBy = "task", cascade = CascadeType.ALL)
    private List<TaskAssignment> taskAssignments;

    // Constructors, getters, and setters
    public Task() {
    }

    public Task(String title, String description, LocalDateTime dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

    // Getters and Setters
    // ...
}
