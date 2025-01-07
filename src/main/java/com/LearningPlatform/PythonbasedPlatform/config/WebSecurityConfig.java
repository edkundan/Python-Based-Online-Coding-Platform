package com.LearningPlatform.PythonbasedPlatform.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    // Bean for password encoder
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // Configure Spring Security for login and authorization
        http
            .authorizeRequests()
                .antMatchers("/login", "/register").permitAll() // Allow public access to login and register pages
                .anyRequest().authenticated() // Require authentication for all other pages
            .and()
            .formLogin()
                .loginPage("/login")  // Custom login page
                .permitAll() // Allow everyone to access the login page
            .and()
            .logout()
                .permitAll(); // Allow everyone to access the logout functionality
    }
}
