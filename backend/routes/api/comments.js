/**
 * @module routes/api/comments
 * 
 * Express router for handling comment-related API endpoints.
 */

 /**
    * GET /
    * 
    * Retrieves all comments from the database, sorted by creation date (most recent first).
    * 
    * @route GET /api/comments
    * @group Comments - Operations about comments
    * @returns {Array.<Comment>} 200 - An array of comment objects
    * @returns {object} 500 - Internal server error
    */

 /**
    * DELETE /:id
    * 
    * Deletes a comment by its ID.
    * 
    * @route DELETE /api/comments/{id}
    * @group Comments - Operations about comments
    * @param {string} id.path.required - The ID of the comment to delete
    * @returns {object} 200 - Success message
    * @returns {object} 404 - Comment not found
    * @returns {object} 500 - Internal server error
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
);      

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}); 

