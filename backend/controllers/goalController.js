import asyncHandler from 'express-async-handler'

// @desc Get goals
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get goals' })
})

// @desc Create goals
// @route POST /api/goals
// @access private
const createGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: 'Create goal' })
})

// @desc Update goals
// @route PUT /api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

export {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal,
}