
# **Python-Based Online Coding Platform**

A full-stack coding platform built with **Java Spring Boot** for the backend and a Python integration layer. This platform enables users to write, execute, and test Python code online, with real-time feedback and interactive tutorials.

---

## **Features**
- 🧑‍💻 **Python Code Execution**: Write and execute Python code with secure sandboxing.
- 🔒 **User Authentication**: User login and registration using Spring Security.
- 🎯 **Practice Challenges**: Solve pre-defined Python programming challenges.
- 🌐 **Responsive Design**: Optimized for mobile and desktop platforms.
- 🤝 **Java-Python Integration**: Execute Python scripts using Java's `ProcessBuilder`.

---

## **Technologies Used**

### **Backend (Java)**
- **Spring Boot**: Framework for REST API development.
- **Spring Data JPA**: Database management.
- **Spring Security**: User authentication and authorization.

### **Frontend**
- **Thymeleaf**: HTML template engine for dynamic rendering.
- **CSS/JavaScript**: For styling and interactivity.

### **Database**
- **MySQL**: Relational database for storing user data and code execution history.

---

## **Getting Started**

### **Prerequisites**
1. **Java 17** or higher installed.
2. **Maven 3.8+** for dependency management.
3. **MySQL** installed and running.

### **Setup Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/edkundan/Python-Based-Online-Coding-Platform.git
   cd Python-Based-Online-Coding-Platform
   ```

2. Configure the **MySQL database** in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/python_platform
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```

3. Build and run the application:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

4. Access the application at:
   ```
   http://localhost:8080
   ```

---

## **Project Structure**

Python-Based-Online-Coding-Platform/
├── .git/                           # Git configuration files
├── .gitignore                      # Git ignore file
├── target/                          # Compiled .class and .jar files (generated by Maven)
├── src/                             # Source code directory
│   ├── main/
│   │   ├── java/
│   │   │   ├── com/
│   │   │   │   ├── yourcompany/
│   │   │   │   │   ├── controller/               # Controllers for handling user requests
│   │   │   │   │   │   ├── UserController.java
│   │   │   │   │   │   └── DashboardController.java
│   │   │   │   │   ├── dao/                     # DAO classes for database operations
│   │   │   │   │   │   ├── UserDAO.java
│   │   │   │   │   │   ├── CodeExecutionDAO.java
│   │   │   │   │   │   └── ChallengeDAO.java
│   │   │   │   │   ├── model/                   # POJO classes (User, CodeExecution, etc.)
│   │   │   │   │   │   ├── User.java
│   │   │   │   │   │   ├── CodeExecution.java
│   │   │   │   │   │   └── Challenge.java
│   │   │   │   │   ├── service/                 # Services to implement business logic
│   │   │   │   │   │   ├── UserService.java
│   │   │   │   │   │   └── ChallengeService.java
│   │   │   │   │   ├── exception/               # Custom exception handling
│   │   │   │   │   │   ├── ResourceNotFoundException.java
│   │   │   │   │   ├── configuration/           # Spring Security and App Configurations
│   │   │   │   │   │   └── WebSecurityConfig.java
│   │   │   │   │   └── PythonBasedOnlineCodingPlatformApplication.java  # Main Spring Boot class
│   │   ├── resources/
│   │   │   ├── application.properties           # Application properties (database config, etc.)
│   │   │   ├── static/                         # Static files like images, CSS, JS
│   │   │   │   ├── css/
│   │   │   │   │   └── style.css
│   │   │   │   ├── js/
│   │   │   │   │   └── script.js
│   │   │   ├── templates/                      # Thymeleaf templates for frontend pages
│   │   │   │   ├── login.html
│   │   │   │   ├── dashboard.jsp
│   │   │   │   ├── users.jsp
│   │   │   │   └── profile.jsp
├── pom.xml                             # Maven build configuration file
├── README.md                           # Project documentation
├── LICENSE                             # License file (e.g., MIT, Apache)


---

## **REST API Endpoints**

### **Code Execution API**
- **POST** `/api/code/execute`
  - **Description**: Executes a Python script and returns the output.
  - **Request Body**:
    ```json
    {
        "code": "print('Hello, World!')"
    }
    ```
  - **Response**:
    ```json
    {
        "output": "Hello, World!",
        "success": true
    }
    ```

### **User APIs**
- **POST** `/api/users/register`
  - **Description**: Registers a new user.
- **POST** `/api/users/login`
  - **Description**: Authenticates the user and returns a token.

---

## **Contributing**

We welcome contributions! To contribute:
1. Fork this repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Contact**
- **Author**: Kundan Kumar
- **GitHub**: https://github.com/edkundan/Python-Based-Online-Coding-Platform
- **Email**: edixlike@gmail.com

--- 

