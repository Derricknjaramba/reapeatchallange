function calculateGrade() {
    // Prompt user for input
    let input = prompt("Enter the student's marks (0-100):");
    
    // Convert input to a number
    let marks = parseFloat(input);
    
    // Check if marks is a valid number between 0 and 100
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Error: Marks should be a number between 0 and 100.");
        return;
    }
    
    // Determine the grade based on the marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    
    // Output the grade
    alert(`The grade for ${marks} marks is: ${grade}`);
}

// Example usage:
calculateGrade();