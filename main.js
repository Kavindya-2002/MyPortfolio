var typed= new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("open");
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    
    var params = {
        name: document.querySelector('input[placeholder="Enter Your Name"]').value,
        email: document.querySelector('input[placeholder="Enter Your Email"]').value,
        subject: document.querySelector('input[placeholder="Subject"]').value,
        message: document.querySelector('textarea[placeholder="Enter Your Message"]').value
    };

  
    
    emailjs.send("service_st1a6sy", "template_t6g8by3", params)
      .then(function(response) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      }, function(error) {
        alert("Failed to send message. Please try again!");
        console.error("Error:", error);
      });
});

document.addEventListener("DOMContentLoaded", () => {
  const topButton = document.querySelector('.top');
  const footer = document.querySelector('.last-text');

  topButton.style.display = 'none'; 

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const footerOffsetTop = footer.offsetTop;

    
    if (scrollY + windowHeight >= footerOffsetTop - 100) {
      topButton.style.display = 'block';
    } else {
      topButton.style.display = 'none';
    }
  });
});


