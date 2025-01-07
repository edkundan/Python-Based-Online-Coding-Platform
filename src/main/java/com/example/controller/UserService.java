package com.example.controller;

import com.example.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
package com.example.demo.service;

import org.springframework.stereotype.Service;

@Service
public class UserService {
    public String registerUser(User user) {
        // registration logic
        return "User registered successfully!";
    }
}

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public boolean login(String email, String password) {
        User user = userRepository.findByEmail(email);
        return user != null && user.getPassword().equals(password);
    }
    @Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;  // For password encryption

    public void saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));  // Encrypt the password before saving
        userRepository.save(user);
    }

    public boolean login(String email, String password) {
        User user = userRepository.findByEmail(email);
        return user != null && passwordEncoder.matches(password, user.getPassword());
    }
}

}
