document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('jobForm');
    const outputDiv = document.getElementById('jobOutput');

    const savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    renderJobs(savedJobs);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const companyName = form.companyName.value;
        const jobTitle = form.jobTitle.value;
        const price = form.price.value;
        const description = form.description.value;

        const newJob = { companyName, jobTitle, price, description };
        savedJobs.push(newJob);
        localStorage.setItem('jobs', JSON.stringify(savedJobs));

        renderJobs(savedJobs);

        form.reset();
    });

    function renderJobs(jobs) {
        console.log(jobs);

        let tableHTML = '<table class="job-table">';
        tableHTML += '<thead><tr><th>Название компании</th><th>Вакансия</th><th>Цена</th><th>Описание</th></tr></thead>';
        tableHTML += '<tbody>';

        jobs.forEach(job => {
            tableHTML += `<tr><td>${job.companyName}</td><td>${job.jobTitle}</td><td>${job.price}</td><td>${job.description}</td></tr>`;
        });

        tableHTML += '</tbody></table>';

        outputDiv.innerHTML = tableHTML;
    }
});
