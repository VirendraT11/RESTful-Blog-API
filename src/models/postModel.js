let posts = [
    { id: 1, title: 'First Post', content: 'This is first post', category: 'general' },
    { id: 2, title: 'Second Post', content: 'This is second post', category: 'tech' },
    { id: 3, title: 'Third Post', content: 'This is third post', category: 'general' },
];

module.exports = {
    getAllPosts : () => posts,
    getPostById: (id) => posts.find(post => post.id === id),
    createPost: (post) => {
        const newPost = { id: posts.length + 1, ...post };
        posts.push(newPost);
        return newPost;
    }, 
    updatePost: (id, updatedPost) => {
        if(index !== -1) {
            posts[index] = { ...posts[index], ...updatedPost};
            return posts[index];
        }
        return null;
    },
    deletePost: (id) => {
        const index = posts.findIndex(post => post.id === id);
        if(index !== -1) {
            posts.splice(index, 1);
            return true;
        }
        return false;
    },
    getPostsByCategory: (category) => posts.filter(post => post.category === category),
};