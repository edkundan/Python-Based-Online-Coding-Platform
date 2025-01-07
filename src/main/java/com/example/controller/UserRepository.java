package com.example.controller;

import com.example.model.User;
package com.example.demo.repository;

import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {
    public void saveUser(User user) {
        // logic to save user to database
    }
}

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
