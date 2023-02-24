export const checkResult = async (req, res) => {
    try {
        const { answers } = req.body;
        res.status(200).json(answers);
    } catch (error) {
        console.log(error)
    }
}