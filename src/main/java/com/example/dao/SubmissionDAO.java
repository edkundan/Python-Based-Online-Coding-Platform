package com.example.dao;

import java.sql.*;

public class SubmissionDAO {

    // Fetch all submissions
    public void getAllSubmissions() {
        String query = "SELECT * FROM submissions";
        try (Connection conn = DBConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {
            while (rs.next()) {
                int submissionId = rs.getInt("id");
                int userId = rs.getInt("user_id");
                int challengeId = rs.getInt("challenge_id");
                String code = rs.getString("code");
                String output = rs.getString("output");
                String status = rs.getString("status");
                System.out.println("Submission ID: " + submissionId + ", User ID: " + userId + ", Challenge ID: " + challengeId + ", Status: " + status);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Insert a new submission
    public boolean insertSubmission(int userId, int challengeId, String code, String output, String status) {
        String insertQuery = "INSERT INTO submissions (user_id, challenge_id, code, output, status) VALUES (?, ?, ?, ?, ?)";
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(insertQuery)) {
            pstmt.setInt(1, userId);
            pstmt.setInt(2, challengeId);
            pstmt.setString(3, code);
            pstmt.setString(4, output);
            pstmt.setString(5, status);

            int rowsAffected = pstmt.executeUpdate();
            return rowsAffected > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
}