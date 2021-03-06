const express = require("express")
const postModel = require("./post-model")

const router = express.Router({
    mergeParams: true,
})


router.get("/", async (req, res, next) => {
    try {
        const posts = await postModel.findByUserId(req.params.id)
        res.json(posts)
    } catch (err) {
        next(err)
    }
})



module.exports = router