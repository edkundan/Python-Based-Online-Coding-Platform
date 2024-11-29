import java.sql.*;

public class CodeExecutionDAO {
    
    // Fetch all code executions
    public void getAllExecutions() {
        String query = "SELECT * FROM code_executions";
        try (Connection conn = DBConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {
            while (rs.next()) {
                int executionId = rs.getInt("id");
                int userId = rs.getInt("user_id");
                String code = rs.getString("code");
                String output = rs.getString("output");
                String status = rs.getString("status");
                System.out.println("Execution ID: " + executionId + ", User ID: " + userId + ", Status: " + status);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Insert a new code execution record
    public boolean insertCodeExecution(int userId, String code, String output, String status) {
        String insertQuery = "INSERT INTO code_executions (user_id, code, output, status) VALUES (?, ?, ?, ?)";
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(insertQuery)) {
            pstmt.setInt(1, userId);
            pstmt.setString(2, code);
            pstmt.setString(3, output);
            pstmt.setString(4, status);

            int rowsAffected = pstmt.executeUpdate();
            return rowsAffected > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
}
