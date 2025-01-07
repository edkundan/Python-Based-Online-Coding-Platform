package com.example.demo.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Value("${email.sender}")
    private String emailSender;

    public void sendEmail(String to, String subject, String body) {
        // send email logic using emailSender
    }
}
