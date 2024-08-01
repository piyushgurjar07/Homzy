const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const {isLoggedIn,isOwner,validatelisting} = require("../middleware.js");
const listeningController = require("../conrollers/listings.js");

router.route("/")
      .get( wrapAsync(listeningController.index))
      .post(isLoggedIn,
        validatelisting,wrapAsync(listeningController.createListing)); 


router.get("/new",isLoggedIn,listeningController.renderNewForm);
      
router.route("/:id")
      .get(wrapAsync(listeningController.showListing)) //Show Route
      .put(isLoggedIn,isOwner,validatelisting,wrapAsync(listeningController.updateListing)) //update route
      .delete(isLoggedIn,isOwner,wrapAsync(listeningController.destroyListing)); //Delete route


//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listeningController.renderEditForm));

module.exports = router;