document.getElementById("loginForm").addEventListener("submit", function(e) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username.trim() || !password.trim()) {
        alert("Username and Password cannot be empty!");
        e.preventDefault();
    } else {
        alert("Login successful!"); // Replace with backend integration logic
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const tutorials = ["Python Basics", "Intermediate Python", "Advanced Python"];
    const challenges = ["FizzBuzz Challenge", "Palindrome Detector", "Sorting Algorithms"];

    const tutorialList = document.querySelector(".card-body ul:first-child");
    const challengeList = document.querySelector(".card-body ul:last-child");

    tutorials.forEach(tutorial => {
        const li = document.createElement("li");
        li.textContent = tutorial;
        tutorialList.appendChild(li);
    });

    challenges.forEach(challenge => {
        const li = document.createElement("li");
        li.textContent = challenge;
        challengeList.appendChild(li);
    });
});
