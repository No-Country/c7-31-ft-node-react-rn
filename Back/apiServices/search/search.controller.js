const {Activities} = require('../activities/activities.model')
const {Locals} = require('../locals/locals.model')
const { Op } = require("sequelize");
const {handleHttpError} = require('../../utils/handleError')


const search = async (req,res,next) => {

    const searchBar = req.query.q

    try {
        
        const searchActivities = await Activities.findAll({
            include: [{model: Locals}],
            where:{
                name:{
                    [Op.like]: `${searchBar}%` 
                }
            }
        })
    
        const searchLocals = await Locals.findAll(
            {
            include: [{model: Activities}], 
            where:{
                name:{
                    [Op.like]: `%${searchBar}%` 
                }            
            },
            order: [
                    ['name', 'ASC'],
                    ['price', 'ASC'],
                ]        
            }
        )
        

        res.status(200).json({
            searchActivities,
            searchLocals
        })

    } catch (error) {
        handleHttpError(res, 'ERROR_SEARCH', 500)
    }


}




module.exports = {search}