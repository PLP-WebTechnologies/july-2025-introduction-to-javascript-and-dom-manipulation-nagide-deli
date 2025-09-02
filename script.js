//Variable declaration
let userName = "John Doe";
const pi = 3.14159;
var isActive = true;        

        
//Function definition and invocation
function greet(name) {
    return `Hello, ${name}!`;
} 
console.log(greet(userName)); 

function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(5, 10));


        
//for loop
for (let i = 1; i < 5; i++) {
    console.log(`count ${i}`);
}

//while loop

let num = 1;
while (num <=5){
    console.log(`number ${num}`);
    num++;
}


// DOM Manipulation Script

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Part 1: Variable declarations and conditionals
    console.log("DOM fully loaded and parsed");
    
    // Variables
    let viewCount = localStorage.getItem('viewCount') || 0;
    let darkMode = localStorage.getItem('darkMode') === 'true';
    const currentDate = new Date();
    
    // Conditionals
    if (darkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('themeStatus').textContent = 'Dark';
    }
    
    // Update view count
    viewCount++;
    localStorage.setItem('viewCount', viewCount);
    document.getElementById('viewCount').textContent = viewCount;
    
    // Update current year in footer
    document.getElementById('currentYear').textContent = currentDate.getFullYear();
    
    // Update last updated timestamp
    document.getElementById('lastUpdated').textContent = currentDate.toLocaleString();
    
    // Part 2: Custom functions
    // Function to toggle dark mode
    function toggleDarkMode() {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode');
        document.getElementById('themeStatus').textContent = darkMode ? 'Dark' : 'Light';
        localStorage.setItem('darkMode', darkMode);
    }
    
    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && message) {
            // Show success message
            const formStatus = document.getElementById('formStatus');
            formStatus.textContent = 'Thank you for your message! We will get back to you soon.';
            formStatus.className = 'success';
            formStatus.style.display = 'block';
            
            // Clear form
            document.getElementById('contactForm').reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        } else {
            // Show error message
            const formStatus = document.getElementById('formStatus');
            formStatus.textContent = 'Please fill out all fields.';
            formStatus.className = 'error';
            formStatus.style.display = 'block';
        }
    }
    
    // Part 3: Loop examples
    // Add event listeners to navigation links using a loop
    const navLinks = document.querySelectorAll('nav a, .footer-nav a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.id.replace('Link', '').replace('footer', '');
            showSection(targetId);
        });
    }
    
    // Add event listeners to social buttons using a loop
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            alert(`You clicked on our ${platform} link! (This would normally redirect to ${platform}.com)`);
        });
    });
    
    // Part 4: DOM interactions
    // Show/hide team section
    document.getElementById('toggleTeam').addEventListener('click', function() {
        const teamList = document.getElementById('teamList');
        if (teamList.style.display === 'none') {
            teamList.style.display = 'block';
            this.textContent = 'Hide Team';
        } else {
            teamList.style.display = 'none';
            this.textContent = 'Show Team';
        }
    });
    
    // Toggle theme button
    document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);
    
    // Reset counter button
    document.getElementById('resetCounter').addEventListener('click', function() {
        viewCount = 0;
        localStorage.setItem('viewCount', viewCount);
        document.getElementById('viewCount').textContent = viewCount;
    });
    
    // Form submission
    document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
    
    // Function to show specific section
    function showSection(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll('.container > section');
        for (let i = 0; i < sections.length; i++) {
            sections[i].style.display = 'none';
        }
        
        // Show selected section
        document.getElementById(sectionId).style.display = 'block';
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
    
    // Initialize page - show home section by default
    showSection('home');
});



