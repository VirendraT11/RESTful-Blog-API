const postModel = require('../models/postModel');
const paginate = require('../utils/paginate');

const getAllPosts = async (requestAnimationFrame, res) => {
    const { category, page = 1, limit = 10 } = req.query;
    let posts = postModel.getAllPosts();

    if(category) {
        posts = postModel.getPostsByCategory(category);
    }

    const paginatedPosts = paginate(posts, page, limit);
    res.json(paginatedPosts);
};

const getPostById = async (req, res) => {
    const post = postModel.getPostById(parseInt(req.params.id));
    if(post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};

const createPost = async (req, res) => {
    const newPost = postModel.createPost(req.body);
    res.status(201).json(newPost);
};

const updatePost =async (req, res) => {
    const updatedPost = postModel.updatePost(parseInt(req.params.id), req.body);
    if(updatedPost) {
        res.json(updatedPost);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};

const deletePost = async (req, res) => {
    const isDeleted = postModel.deletePost(parseInt(req.params.id));
    if(isDeleted) {
        res.status(200).json({ message: 'Post not found' });
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost, 
    updatePost,
    deletePost,
};