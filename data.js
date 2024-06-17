var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "nicholas",
                date: Date.now(),
                content: "Hey to u to"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "nicholas",
                date: Date.now(),
                content: "Hey to u to"
            }
        ]
    }
];

var threads;
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
