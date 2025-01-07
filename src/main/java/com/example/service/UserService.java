package com.example.demo.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {
    
    @Transactional
    public void registerUser(User user) {
        userRepository.save(user);
        // other business logic
    }
}
