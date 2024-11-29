#!/bin/bash

# Exit on any error
set -e

# Step 1: Install Java (if not already installed)
echo "Checking for Java..."
if ! command -v java &> /dev/null
then
    echo "Java not found. Installing Java..."
    sudo apt update
    sudo apt install openjdk-17-jdk -y
else
    echo "Java is already installed."
fi

# Step 2: Install Maven (if not already installed)
echo "Checking for Maven..."
if ! command -v mvn &> /dev/null
then
    echo "Maven not found. Installing Maven..."
    sudo apt update
    sudo apt install maven -y
else
    echo "Maven is already installed."
fi

# Step 3: Install MySQL (if not already installed)
echo "Checking for MySQL..."
if ! command -v mysql &> /dev/null
then
    echo "MySQL not found. Installing MySQL..."
    sudo apt update
    sudo apt install mysql-server -y
    sudo systemctl start mysql
    sudo systemctl enable mysql
else
    echo "MySQL is already installed."
fi

# Step 4: Set up MySQL Database
echo "Setting up MySQL Database..."
MYSQL_ROOT_PASSWORD="root_password"  # You can change this to your own root password
DB_NAME="python_platform"

# Create a database and user for the application
mysql -u root -p$MYSQL_ROOT_PASSWORD -e "CREATE DATABASE IF NOT EXISTS $DB_NAME;"
mysql -u root -p$MYSQL_ROOT_PASSWORD -e "CREATE USER IF NOT EXISTS 'platform_user'@'localhost' IDENTIFIED BY 'platform_password';"
mysql -u root -p$MYSQL_ROOT_PASSWORD -e "GRANT ALL PRIVILEGES ON $DB_NAME.* TO 'platform_user'@'localhost';"
mysql -u root -p$MYSQL_ROOT_PASSWORD -e "FLUSH PRIVILEGES;"

echo "MySQL database setup completed."

# Step 5: Clone the repository (if not already cloned)
if [ ! -d "Python-Based-Online-Coding-Platform" ]; then
    echo "Cloning the repository..."
    git clone https://github.com/<your-username>/Python-Based-Online-Coding-Platform.git
fi

cd Python-Based-Online-Coding-Platform

# Step 6: Update application.properties for database connection
echo "Updating application.properties with database credentials..."
sed -i "s|spring.datasource.url=jdbc:mysql://localhost:3306/python_platform|spring.datasource.url=jdbc:mysql://localhost:3306/$DB_NAME|g" src/main/resources/application.properties
sed -i "s|spring.datasource.username=root|spring.datasource.username=platform_user|g" src/main/resources/application.properties
sed -i "s|spring.datasource.password=|spring.datasource.password=platform_password|g" src/main/resources/application.properties

# Step 7: Build and run the Spring Boot application
echo "Building the application..."
mvn clean install

echo "Running the Spring Boot application..."
mvn spring-boot:run

# Step 8: Notify user
echo "Setup completed! The application is now running at http://localhost:8080."
