@GetMapping("/search")
public String searchUsers(@RequestParam String keyword) {
    return "Searching for: " + keyword;
}
