// Function to toggle visibility of a section
function toggleSection(buttonId: string, sectionId: string): void {
    const button = document.getElementById(buttonId);
    const section = document.getElementById(sectionId);

    if (button) {
        button.addEventListener('click', function() {
            if (section) {
                // Toggle the display of the section
                section.style.display = section.style.display === 'none' || section.style.display === '' ? 'block' : 'none';
            }
        });
    } else {
        console.error(`Button with ID ${buttonId} not found.`);
    }
}

// Initialize toggle functionality for each section
toggleSection('toggleSkillsButton', 'skills');
toggleSection('toggleEducationButton', 'education');
toggleSection('toggleWorkExperienceButton', 'work_experience');