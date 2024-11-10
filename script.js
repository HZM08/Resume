// Function to toggle visibility of a section and its corresponding line
function toggleSection(buttonId, sectionId, lineId) {
    var button = document.getElementById(buttonId);
    var section = document.getElementById(sectionId);
    var line = document.getElementById(lineId);
    if (button) {
        button.addEventListener('click', function () {
            if (section && line) {
                var isVisible = section.style.display !== 'none' && section.style.display !== '';
                section.style.display = isVisible ? 'none' : 'block';
                line.style.display = isVisible ? 'none' : 'block';
            }
        });
    }
    else {
        console.error("Button with ID ".concat(buttonId, " not found."));
    }
}
// Initialize toggle functionality for each section
toggleSection('toggleSkillsButton', 'skills', 'skillsLine');
toggleSection('toggleEducationButton', 'education', 'educationLine');
toggleSection('toggleWorkExperienceButton', 'work_experience', 'workExperienceLine');
