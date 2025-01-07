package com.example.dao;

import java.sql.*;

public class ChallengeDAO {

    // Fetch all challenges
    public void getAllChallenges() {
        String query = "SELECT * FROM challenges";
        try (Connection conn = DBConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {
            while (rs.next()) {
                int challengeId = rs.getInt("id");
                String title = rs.getString("title");
                String description = rs.getString("description");
                System.out.println("Challenge ID: " + challengeId + ", Title: " + title + ", Description: " + description);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Insert a new challenge
    public boolean insertChallenge(String title, String description) {
        String insertQuery = "INSERT INTO challenges (title, description) VALUES (?, ?)";
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(insertQuery)) {
            pstmt.setString(1, title);
            pstmt.setString(2, description);

            int rowsAffected = pstmt.executeUpdate();
            return rowsAffected > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
}