const db = require('./locals.model')
const { handleHttpError } = require("../../utils/handleError");

const getLocals = async (req, res, next)=> {

  const local = await db.Locals.findAll({attributes: ['id', 'name', 'description', 'avatar']})

  try {
    res.json(local)

  } catch (error) {
    handleHttpError(res,"ERROR_GET_LOCALS",404)
  }
}

const getDetailLocal = async (req, res, next) => {

  try {
    const {id} = req.params

    const getId = await db.Locals.findByPk(id);

    if(!getId){
      return res.status(404).json({
        message: 'Local not found'
      })
    }

    res.status(200).json({
      message: 'Local found',
      data: getId
    })
  } catch (error) {
    handleHttpError(res,"ERROR_GET_LOCAL",404)
  }

}

const createLocal = async (req, res, next) => {

    const localBody = req.body

    try {
      const local = await db.Locals.create(localBody)

    if(!local){
        throw  new Error('Error create local')
    }

      res.status(201).json(
        {
          message: 'Local created',
          data:local
        }
      )
      
    } catch (error) {
      handleHttpError(res,"ERROR_CREATE_LOCALS",404)
    }

  }

const updateLocal = async (req, res, next) => {

  const {id} = req.params

  const localBody = req.body

  try {

    const update = await db.Locals.update({
      name: localBody.name,
      description: localBody.description,
      email: localBody.email,
      avatar: localBody.avatar

    },
  {
      where:{
      id: parseInt(id)
      }
    }
  )

  if(update == 0) {
      throw new Error("Error local updated");
  }

    return res.status(200).json({
      message: 'Local updated',
      newData: localBody
    })
  } catch (error) {
    handleHttpError(res,"ERROR_UPDATE_LOCAL",404)
  }

}

const deleteLocal = async (req, res, next) => {
  try {
    const id = req.params.id

    const localDeleted = await db.Locals.destroy(
      { 
          where: {id}
      }
    );

    if (localDeleted === 0) {            
      return res.status(404).json({
          message: "Local not found",
      })
    }

      return res.status(200).json({
          message: "Deleted",
          id: id
      })


    
  } catch (error) {
    handleHttpError(res,"ERROR_DELETE_LOCAL",404)
  }

}
  
module.exports  = {getLocals, getDetailLocal,createLocal, updateLocal, deleteLocal}
