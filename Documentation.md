1. Project Title
Project Title: Python-Based Online Learning Platform

2. Project Overview
Description:
The Python-Based Online Learning Platform is designed to offer users a range of Python programming tutorials and challenges. It allows users to register, log in, track their progress, and complete coding challenges to enhance their Python skills. The platform includes features such as user management, a dashboard for tracking progress, and the ability to register for courses and challenges.

Key Features:
User Registration and Login
User Dashboard
Python Tutorials (Basic, Intermediate, Advanced)
Coding Challenges (FizzBuzz, Palindrome, Sorting Algorithms)
User Profile Management
Real-time Challenge Status Tracking
3. Technologies Used
Backend:
Java: The project is developed in Java using the Spring Boot framework for building the backend.
Spring Boot: To set up the application structure and handle the HTTP requests, database connectivity, and user authentication.
Spring Security: For user authentication and authorization.
JDBC: To establish connections with MySQL for storing and retrieving user and course data.
MySQL: A relational database for storing user details, course information, and challenge progress.
Frontend:
HTML/CSS: For structuring and styling the user interface.
Bootstrap: A front-end framework for responsive design.
JavaScript: For form validation and interactivity on the client side.
Development Tools:
IDE: IntelliJ IDEA / Eclipse
Maven: For dependency management and build automation.
MySQL Workbench: For managing MySQL databases.
Git: Version control for the project.
4. Installation Guide
Prerequisites:
JDK 11 or above: Ensure you have Java Development Kit installed on your system.
MySQL: A MySQL server running with access to create databases and tables.
Maven: Make sure you have Apache Maven installed to build the project.
Spring Boot: Ensure you have Spring Boot configured.
Steps to Run the Project:
Clone the Repository:

bash
Copy code
git clone https://github.com/edkundan/Python-Based-Online-Coding-Platform
Setup MySQL Database:

Create a new database for the project in MySQL:
sql
Copy code
CREATE DATABASE python_learning_platform;
Create the necessary tables by running the provided SQL script in the sql folder:
bash
Copy code
source create_tables.sql;
Configure Application:

Navigate to src/main/resources/application.properties and update the database configuration:
properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/python_learning_platform
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
Build the Project:

Using Maven, run the following command in your project root directory:
bash
Copy code
mvn clean install
Run the Project:

Start the Spring Boot application:
bash
Copy code
mvn spring-boot:run
The application should now be running at http://localhost:8080.
Access the Application:

Open your web browser and navigate to http://localhost:8080 to access the platform.
Create a new account or log in with existing credentials.
5. Project Structure
plaintext
Copy code
- src/
  - main/
    - java/
      - com/
        - example/
          - pythonlearning/
            - controller/
              - UserController.java       <-- Controller logic
              - ChallengeController.java  <-- Controller logic
            - service/
              - UserService.java          <-- Service layer logic
              - ChallengeService.java     <-- Service layer logic
            - repository/
              - UserRepository.java       <-- Repository for data access
              - ChallengeRepository.java  <-- Repository for data access
            - model/
              - User.java                 <-- Entity for user data
              - Challenge.java            <-- Entity for challenge data
    - resources/
      - application.properties           <-- Database and application configuration
      - static/
        - css/
          - styles.css                  <-- CSS styles for the platform
        - js/
          - script.js                   <-- JavaScript for form validation
      - templates/
        - register.html                 <-- Registration page
        - login.html                    <-- Login page
        - dashboard.jsp                 <-- User Dashboard page
        - profile.jsp                   <-- Profile page
- test/
  - java/
    - com/
      - example/
        - pythonlearning/
          - service/
            - UserServiceTest.java      <-- Unit tests for UserService
            - ChallengeServiceTest.java <-- Unit tests for ChallengeService
          - controller/
            - UserControllerTest.java   <-- Unit tests for UserController
6. Exception Handling
Custom Exception Class:
Create a custom exception class for handling errors like "UserNotFoundException" or "ChallengeNotFoundException".
Global Exception Handler:
A global exception handler using @ControllerAdvice to handle all exceptions centrally.
7. Bean Validation
User Registration Validation:
Ensure that the user's data (e.g., email, password) is validated before being saved to the database using annotations like @NotNull, @Email, etc.
For example:
java
Copy code
@NotNull
@Email
private String email;
8. Core Feature Implementation
User Registration and Login:
Implement user registration with password hashing using BCryptPasswordEncoder.
Implement user login with session management.
Dashboard:
Display the user’s progress, tutorials, and challenges.
9. Testing
Unit Tests:
Write unit tests for each of the service methods to ensure they work as expected (e.g., UserServiceTest, ChallengeServiceTest).
10. Conclusion
This Python-Based Online Learning Platform serves as a simple yet functional application to help users learn Python programming through tutorials and challenges. It also demonstrates a modern, full-stack approach using Spring Boot, JDBC, and MySQL, with a well-organized project structure, ensuring scalability and maintainability.

11. Future Enhancements
Implement more advanced features like:
Course certification after completion of certain challenges.
Real-time collaborative coding.
Social sharing of progress.
