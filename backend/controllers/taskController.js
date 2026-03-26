const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
    try {
        const filter = req.user.role === 'admin' ? {} : { owner: req.user.id };
        const tasks = await Task.find(filter);
        res.json(tasks);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}

exports.createTask = async (req, res) => {
    try {
        const task = await Task.create({ ...req.body, owner: req.user.id });
        res.status(201).json(task);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}

exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if(!task) return res.status(404).json({ message: 'Task not found' });
        if(req.user.role !== 'admin' && task.owner.toString() !== req.user.id) 
            return res.status(403).json({ message: 'Unauthorized' });

        Object.assign(task, req.body);
        await task.save();
        res.json(task);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if(!task) return res.status(404).json({ message: 'Task not found' });
        if(req.user.role !== 'admin' && task.owner.toString() !== req.user.id) 
            return res.status(403).json({ message: 'Unauthorized' });

        await task.remove();
        res.json({ message: 'Task deleted' });
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}
