import Overview from "../models/OverviewModel.js";

export const getOverviews = async(req,res) => {
    try {
        const overViews = await Overview.find()

        res.status(200).json(overViews[0]);
        
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};
