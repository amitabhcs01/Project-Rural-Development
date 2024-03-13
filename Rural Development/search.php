<?php
// Check if the search form was submitted
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Check if the search input is not empty
    if (!empty($_GET['search'])) {
        $search_term = $_GET['search'];
        // Process the search term, e.g., sanitize it, log it, etc.
        // For now, let's just output it
        echo "You searched for: " . htmlspecialchars($search_term);
        // Here you would typically perform the search against a database or use an API
        // Then you would display the results to the user
    } else {
        echo "Search term is empty";
    }
}
?>
