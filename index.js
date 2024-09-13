const btn = document.querySelector('#createBtn');
const forumPage = document.querySelector('.forum');
const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit')

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const messageInput = document.querySelector('#message');

let data;

function createForum(title, author, message) {
    return {
        title,
        author,
        message
    }
}

btn.addEventListener('click', () => {
    form.style.display = 'block';  
});

submitBtn.addEventListener('click', (e) => {
    data = createForum(titleInput.value, authorInput.value, messageInput.value);
    form.style.display = 'none';
    forumPage.innerHTML += `${data.title}, ${data.author}, ${data.message}`
    e.preventDefault();
})
