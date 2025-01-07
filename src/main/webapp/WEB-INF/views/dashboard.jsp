<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css"> <!-- Custom styling -->
    <style>
        body {
            background-color: #f8f9fa; /* Light grey background */
        }
        .card {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for cards */
        }
        .navbar {
            background-color: #007bff !important; /* Bootstrap primary color */
        }
        .navbar-brand, .nav-link {
            color: #fff !important; /* White navbar text */
        }
        .navbar-brand:hover, .nav-link:hover {
            color: #cce5ff !important; /* Light blue hover effect */
        }
    </style>
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Learning Platform</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <div class="container mt-5">
        <h2 class="text-center mb-4">Welcome to Your Dashboard</h2>
        <div class="row">
            <!-- Tutorials Section -->
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-header text-white bg-primary">Your Tutorials</div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">Python Basics</li>
                            <li class="list-group-item">Intermediate Python</li>
                            <li class="list-group-item">Advanced Python</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Challenges Section -->
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-header text-white bg-success">Your Challenges</div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">FizzBuzz Challenge</li>
                            <li class="list-group-item">Palindrome Detector</li>
                            <li class="list-group-item">Sorting Algorithms</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS (optional for interactivity) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/script.js"></script>
    <link rel="stylesheet" href="assets/css/style.css">


</body>
</html>
