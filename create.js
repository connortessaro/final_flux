document.getElementById('add-thread-btn').addEventListener('click', function() {
    var title = document.getElementById('thread-title').value;
    var content = document.getElementById('thread-content').value;

    if (title && content) {
        var newThread = {
            id: threads.length ? threads[threads.length - 1].id + 1 : 1,
            title: title,
            author: 'Aaron',
            date: Date.now(),
            content: content,
            comments: []
        };

        threads.push(newThread);
        localStorage.setItem('threads', JSON.stringify(threads));

        // Optionally clear the input fields
        document.getElementById('thread-title').value = '';
        document.getElementById('thread-content').value = '';

        // Optionally redirect to the main page or show a success message
        alert('Thread added successfully!');
        window.location.href = '/'; // Uncomment to redirect to the main page
    } else {
        alert('Please fill out both the title and content fields.');
    }
});
