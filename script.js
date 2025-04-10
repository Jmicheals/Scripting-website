
const toggleDarkMode = document.getElementById('dark-mode-toggle');
toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("success-message").style.display = "block";
});

document.getElementById("search-bar").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const courses = document.querySelectorAll(".course");

    courses.forEach(course => {
        const courseText = course.textContent.toLowerCase();
        course.style.display = courseText.includes(query) ? "block" : "none";
    });
});
function openEnrollForm() {
    const formHtml = `
        <div id="enroll-form-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); display: flex; justify-content: center; align-items: center; z-index: 1000;">
            <div style="background: white; padding: 30px; border-radius: 15px; width: 350px; text-align: center; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);">
                <h3 style="margin-bottom: 20px; font-size: 24px; color: #007bff;">Enroll Now</h3>
                <form id="enroll-form" style="display: flex; flex-direction: column; gap: 15px;">
                    <input type="text" name="name" placeholder="Your Name" required style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 8px; font-size: 14px;">
                    <input type="email" name="email" placeholder="Your Email" required style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 8px; font-size: 14px;">
                    <button type="submit" style="padding: 12px; background: #007bff; color: white; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; transition: background-color 0.3s ease;">Submit</button>
                </form>
                <button onclick="closeEnrollForm()" style="margin-top: 15px; padding: 10px; background:rgb(0, 0, 0); border: 1px solid #ccc; border-radius: 8px; font-size: 14px; cursor: pointer; transition: background-color 0.3s ease;">Close</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', formHtml);

    document.getElementById('enroll-form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for enrolling!');
        closeEnrollForm();
    });
}

function closeEnrollForm() {
    const overlay = document.getElementById('enroll-form-overlay');
    if (overlay) {
        overlay.remove();
    }
}
