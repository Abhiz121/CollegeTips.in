// JavaScript for Pet Adoption Carousel

let currentIndex = 0;
const petProfiles = document.querySelectorAll('.pet-profile');
const totalPets = petProfiles.length;

function nextPet() {
  petProfiles[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalPets;
  petProfiles[currentIndex].classList.add('active');
}

function prevPet() {
  petProfiles[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + totalPets) % totalPets;
  petProfiles[currentIndex].classList.add('active');
}

// Automatically cycle through the pets every 3 seconds
setInterval(nextPet, 3000);

// Chatbot Functionality
function sendMessage() {
  const message = document.getElementById('user-message').value;
  if (message.trim() !== "") {
    const messagesDiv = document.querySelector('.messages');
    const userMsg = document.createElement('div');
    userMsg.classList.add('msg', 'user');
    userMsg.textContent = message;
    messagesDiv.appendChild(userMsg);
    document.getElementById('user-message').value = "";
    
    // Simulate bot response
    const botMsg = document.createElement('div');
    botMsg.classList.add('msg', 'bot');
    botMsg.textContent = "I’ll get back to you shortly!";
    messagesDiv.appendChild(botMsg);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll
  }
}
