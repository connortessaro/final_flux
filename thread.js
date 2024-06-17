var id = window.location.search.slice(1); // Get the thread ID from the URL
var thread = threads.find(t => t.id == id); // Find the thread with that ID
console.log(thread);
var header = document.querySelector('.header');
var headerHtml = `
    <h4 class="title">
        ${thread.title}
    </h4>
    <div class="bottom">
        <p class="author">
            <a href="/profile.html?username=${thread.author}">${thread.author}</a>
        </p>
        <p class="timestamp">
            ${new Date(thread.date).toLocaleString()}
        </p>
        <p class="comment-count">
            ${thread.comments.length} comments
        </p>
    </div>
`;
header.insertAdjacentHTML('beforeend', headerHtml);

function addComment(comment) {
    var commentHtml = `
        <div class="comment">
            <div class="top-comment">
                <p class="user">
                    <a href="/profile.html?username=${comment.author}">${comment.author}</a>
                </p>
                <p class="comment-ts">
                    ${new Date(comment.date).toLocaleString()}
                </p>
            </div>
            <div class="comment-content">
                ${comment.content}
            </div>
        </div>
    `;
    comments.insertAdjacentHTML('beforeend', commentHtml);
}

var comments = document.querySelector('.comments');
for (let comment of thread.comments) {
    addComment(comment);
}

var btn = document.querySelector('button');
btn.addEventListener('click', function() {
    var txt = document.querySelector('textarea');
    var profileUsername = localStorage.getItem('profile-username') || 'Guest'; // Use saved profile name or fallback to 'Guest'
    var comment = {
        content: txt.value,
        date: Date.now(),
        author: profileUsername,
    };
    if (!txt.value) {
        alert("Please fill out the content field.");
    } else {
        addComment(comment);
        txt.value = '';
        thread.comments.push(comment);
        localStorage.setItem('threads', JSON.stringify(threads));
    }
});
