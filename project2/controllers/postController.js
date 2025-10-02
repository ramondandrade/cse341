const db = require('../models');
const Posts = db.Posts;
const ObjectId = require('mongodb').ObjectId;

// Create a post
exports.createPost = async (req, res) => {
    try {

        const { title, content, authorId, tags, imageUrl } = req.body;

        const post = new Posts({
            title,
            content,
            authorId,
            tags: tags || [],
            imageUrl: imageUrl || null,
        });
        const savedPost = await post.save({
            isNew: true
        });

        res.status(201).json(savedPost);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Posts.find().populate('authorId', 'username'); // Populate author details
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific post
exports.getPost = async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id).populate('authorId', 'username'); // Populate author details
        if (!post) {
            return res.status(404).json({ message: 'Posts not found' });
        }
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a post
exports.updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedPost = await Posts.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { useFindAndModify: false, isNew: false }
        );
        if (!updatedPost) {
            return res.status(404).json({ message: 'Posts not found' });
        }
       res.status(200).json( { status: true, message: 'Post updated successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a post
exports.deletePost = async (req, res) => {
    try {
        const post = await Posts.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Posts not found' });
        }

        res.json({ message: 'Posts deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all posts by a user
exports.getPostsByUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const posts = await Posts.find({ authorId: userId }).populate('authorId', 'username');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};