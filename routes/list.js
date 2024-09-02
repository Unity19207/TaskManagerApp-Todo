const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

// Create Task in list
router.post("/addTask", async (req, res) => {
    try {
        const { title, description, id } = req.body;
        const existinguser = await User.findById(id);

        if (existinguser) {
            const list = new List({
                title,
                description,
                user: existinguser,
            });
            await list.save().then(() => {
                res.status(200).json({ list: list });
            });
            existinguser.list.push(list);
            existinguser.save();
        }
    } catch (error) {
        console.log(error);
    }
});

// Update Task from list
router.put("/updateTask/:id", async (req, res) => {
    try {
        // const { title, description, email } = req.body;
        // const existinguser = await User.findOne({ email });
        // if (existinguser) {
        // }
        const { title, description } = req.body;
        const list = await List.findByIdAndUpdate(req.params.id, {
            title,
            description,
        });
        list.save().then(() => {
            res.status(200).json({ message: "Task Updated" });
        });
    } catch (error) {
        console.log(error);
    }
});

// Delete Task from list

router.delete("/deleteTask/:id", async (req, res) => {
    try {
        const { id } = req.body;
        const existinguser = await User.findByIdAndUpdate(id, {
            $pull: { list: req.params.id },
        });
        if (existinguser) {
            await List.findByIdAndDelete(req.params.id).then(() => {
                res.status(200).json({ message: "Task Deleted" });
            });
        }
    } catch (error) {
        console.log(error);
    }
});

//Get Task from list

router.get("/getTasks/:id", async (req, res) => {
    const list = await List.find({ user: req.params.id }).sort({
        createdAt: -1,
    });
    if (list.length !== 0) {
        res.status(200).json({ list: list });
    } else {
        res.status(200).json({ message: "No Task Created yet" });
    }
});

module.exports = router;
