var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Aaron",
        authorBio: "Hi, I'm Aaron. I love coding and sharing knowledge!",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "jack",
                authorBio: "Jack here, a passionate developer!",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "nicholas",
                authorBio: "Nicholas, a tech enthusiast!",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Aaron",
        authorBio: "Hi, I'm Aaron. I love coding and sharing knowledge!",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "jack",
                authorBio: "Jack here, a passionate developer!",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "nicholas",
                authorBio: "Nicholas, a tech enthusiast!",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }
];

// Save or load this data in local storage
var threads;
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
