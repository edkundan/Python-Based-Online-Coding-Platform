import java.sql.*;

public class Main {
    public static void main(String[] args) {
        // Fetch all users from the database using UserDAO
        UserDAO userDAO = new UserDAO();
        System.out.println("Fetching all users:");
        userDAO.getAllUsers();  // Fetch all users
        
        // Fetch all code executions from the database using CodeExecutionDAO
        CodeExecutionDAO executionDAO = new CodeExecutionDAO();
        System.out.println("Fetching all code executions:");
        executionDAO.getAllExecutions();  // Fetch all code executions
        
        // Fetch all challenges from the database using ChallengeDAO
        ChallengeDAO challengeDAO = new ChallengeDAO();
        System.out.println("Fetching all challenges:");
        challengeDAO.getAllChallenges();  // Fetch all challenges
        
        // Fetch all submissions from the database using SubmissionDAO
        SubmissionDAO submissionDAO = new SubmissionDAO();
        System.out.println("Fetching all submissions:");
        submissionDAO.getAllSubmissions();  // Fetch all submissions
        
        // You can also directly query the 'users' table in the database using JDBC
        String query = "SELECT * FROM users";
        
        try (Connection conn = DBConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {

            System.out.println("Fetching users directly via JDBC:");
            while (rs.next()) {
                int userId = rs.getInt("id");
                String username = rs.getString("username");
                String email = rs.getString("email");
                System.out.println("User ID: " + userId + ", Username: " + username + ", Email: " + email);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}