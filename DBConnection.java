import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
    
    private static final String URL = "jdbc:mysql://localhost:3306/python_coding_platform"; // Database URL
    private static final String USER = "root"; // MySQL username
    private static final String PASSWORD = "your_password"; // MySQL password
    
    public static Connection getConnection() throws SQLException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver"); // Load JDBC driver
        } catch (ClassNotFoundException e) {
            System.out.println("MySQL JDBC Driver not found.");
            e.printStackTrace();
            return null;
        }
        
        return DriverManager.getConnection(URL, USER, PASSWORD); // Establish connection
    }
}

