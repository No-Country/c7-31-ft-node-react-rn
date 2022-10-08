const express = require("express");

const { authRouter } = require("../apiServices/auth/auth.routes");
const { activitiesRouter } = require("../apiServices/activities/activities.routes");
const {categoriesRouter} = require('../apiServices/categories/categories.routes')
const {chatRouter} = require('../apiServices/chats/chats.routes')
const {favsItemsRouter} = require('../apiServices/favs_items/favs_items.routes')
const {favsListRouter} = require('../apiServices/favs_lists/favs_lists.routes')
const {groupsRouter} = require('../apiServices/groups/groups.routes')
const {localsRouter} = require('../apiServices/locals/locals.routes')
const {messagesRouter} = require('../apiServices/messages/messages.routes')
const {reservationRouter} = require('../apiServices/reservations/reservations.routes')
const {reviewsRouter} = require('../apiServices/reviews/reviews.routes')
const {usersRouter} = require('../apiServices/users/users.routes');
const { viewsRouter } = require("../apiServices/views/views.routes");


const router = express.Router();

//Endpoints
router.use("/auth",authRouter )
router.use("/activities",activitiesRouter)
router.use("/categories",categoriesRouter)
router.use('/chat', chatRouter)
router.use('/favs-item', favsItemsRouter)
router.use('/favs-list', favsListRouter)
router.use('/groups', groupsRouter)
router.use('/locals', localsRouter)
router.use('/messages', messagesRouter)
router.use('/reservation', reservationRouter)
router.use('/reviews', reviewsRouter)
router.use('/users', usersRouter)


// for render the public folder

router.use("/", viewsRouter);


module.exports = { router };