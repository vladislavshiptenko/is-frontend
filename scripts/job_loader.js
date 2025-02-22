document.addEventListener('DOMContentLoaded', () => {
    const vacancyListElement = document.querySelector('.vacancy-list');
    const preloaderElement = document.getElementById('preloader');

    const displayVacancy = vacancyListElement.style.display;
    vacancyListElement.style.display = 'none';

    async function fetchPostData() {
        try {
            preloaderElement.style.display = 'block';

            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            const posts = await response.json();
            const randomUserId = Math.floor(Math.random() * 10) + 1;
            const filteredPosts = posts.filter(post => post.userId === randomUserId);

            const vacancies = filteredPosts.map(post => ({
                title: post.title,
                company: "Газета «Вакансии для всех»",
                salary: "20000-50000 рублей",
                description: post.body
            }));

            renderVacancies(vacancies);
        } catch (error) {
            console.error('Ошибка:', error);
            vacancyListElement.innerHTML = '<li>⚠️ Что-то пошло не так</li>';
        } finally {
            preloaderElement.style.display = 'none';
            vacancyListElement.style.display = displayVacancy;
        }
    }

    function renderVacancies(vacancies) {
        vacancies.forEach(vacancy => {
            const vacancyElement = document.createElement('li');
            vacancyElement.classList.add('vacancy-item');

            vacancyElement.innerHTML = `
                <h3 class="vacancy-item__title"><a href="#" class="vacancy-item__link">${vacancy.title}</a></h3>
                <p class="vacancy-item__company">${vacancy.company}</p>
                <p class="vacancy-item__salary">${vacancy.salary}</p>
                <p class="vacancy-item__description">${vacancy.description}</p>
                <button class="vacancy-item__button">Контакты</button>
                <button class="vacancy-item__button">Отклик</button>
            `;

            vacancyListElement.appendChild(vacancyElement);
        });
    }

    fetchPostData();
});

