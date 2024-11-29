import java.sql.*;

public class InsertUser {
    public static void main(String[] args) {
        String insertQuery = "INSERT INTO users (username, email, password_hash, role_id) VALUES (?, ?, ?, ?)";

        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(insertQuery)) {

            pstmt.setString(1, "new_user");
            pstmt.setString(2, "newuser@example.com");
            pstmt.setString(3, "hashed_password_example");
            pstmt.setInt(4, 2); // Assuming role_id 2 is for regular user

            int rowsAffected = pstmt.executeUpdate();
            System.out.println("Inserted " + rowsAffected + " row(s) into the users table.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
