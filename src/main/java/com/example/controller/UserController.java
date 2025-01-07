package com.example.controller;

import com.example.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import com.example.demo.service.UserService;
@PostMapping("/register")
public String registerUser(@Valid @ModelAttribute User user, BindingResult result) {
    if (result.hasErrors()) {
        return "register";
    }
    userService.registerUser(user);
    return "redirect:/dashboard";
}

@GetMapping("/users/{id}")
public User getUser(@PathVariable Long id) {
    return userService.getUserById(id);
}

@PostMapping("/users")
public String createUser(@Valid @RequestBody User user) {
    userService.createUser(user);
    return "User created!";
}

@Controller
public class UserController {
    @Autowired
    private UserService userService;

    // Controller methods
}

@Controller
public class UserController {
    @GetMapping("/login")
    public String login() {
        return "login";  // login.jsp or login.html
    }
}

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/register")
    public String showRegisterForm(Model model) {
        model.addAttribute("user", new User());
        return "register";
    }

    @PostMapping("/register")
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result) {
        if (result.hasErrors()) {
            return "register";
        }
        userService.saveUser(user);
        return "redirect:/user/login";
    }

    @GetMapping("/login")
    public String showLoginForm() {
        return "login";
    }

    @PostMapping("/login")
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password) {
        if (userService.login(email, password)) {
            return "redirect:/user/dashboard";
        }
        return "redirect:/user/login?error";
    }

    @GetMapping("/dashboard")
    public String showDashboard() {
        return "dashboard";
    }
    /**
     * @param user
     * @param result
     * @return
     */
    @PostMapping("/register")
public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result) {
    if (result.hasErrors()) {
        return "register";  // Show form again if there are validation errors
    }
    userService.saveUser(user);
    return "redirect:/user/login";  // Redirect to login page after successful registration
    @PostMapping("/register")
    final String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result) {
    if (result.hasErrors()) {
        return "register";  // Show form again if there are validation errors
    }
    userService.saveUser(user);
    return "redirect:/user/login";  // Redirect to login page after successful registration
}
@PostMapping("/login")
public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model) {
    if (userService.login(email, password)) {
        return "redirect:/user/dashboard";  // Redirect to dashboard after successful login
    }
    model.addAttribute("error", "Invalid credentials, please try again.");
    return "login";  // Show login form again with error message
}
@GetMapping("/dashboard")
public String showDashboard(Model model) {
    User user = // Get the logged-in user (You can use Spring Security to fetch the authenticated user)
    model.addAttribute("user", user);
    return "dashboard";  // Show dashboard page
}



}

}
