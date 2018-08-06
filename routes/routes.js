const AccountController = require('../controllers/UserController');
const UploadController = require('../controllers/UploadController');
const VideoController = require('../controllers/VideoController');
const BetaKeyController = require('../controllers/BetaKeyControllers');
module.exports = (server) => {
  server.route('/userCreate')
    .post(AccountController.passwordHash, AccountController.createUser, BetaKeyController.removeBetaKey);
  server.route('/createAwsUser')
    .post(AccountController.passwordHash, AccountController.createAwsUser);
  server.route('/checkUsername')
    .post(AccountController.checkUsername);
  server.route('/checkEmail')
    .post(AccountController.checkEmail);
  server.route('/loginUser')
    .post(AccountController.loginUser);
  server.route('/mongoLogin')
    .post(AccountController.mongoLogin);
  server.route('/getUsername')
    .get(AccountController.getUsername);
  server.route('/getUserData')
    .post(AccountController.getUserData);
  server.route('/userNameMatch')
    .post(AccountController.userNameMatch);
  server.route('/getUserID')
    .get(AccountController.getUserID);
  server.route('/logoutUser')
    .get(AccountController.logoutUser);
  server.route('/uploadProfilePic')
    .post(UploadController.deleteProfileImage, UploadController.uploadProfileImage);
  server.route('/getBucketList')
    .get(UploadController.listAllBucketObjects);
  server.route('/getUserImage')
    .post(UploadController.getUserImage);
  server.route('/addDefaultPic')
    .post(UploadController.addDefaultPic);
  server.route('/uploadVideo')  
    .post(VideoController.countNumVideos, VideoController.uploadVideo);
  server.route('/getVideoList')
    .get(VideoController.getVideoList);
  server.route('/postVideoList')
    .post(VideoController.postVideoList);
  server.route('/getAllVideos')
    .get(VideoController.getAllVideos);
  server.route('/searchVideos')
    .post(VideoController.videoSearch);
  server.route('/getFirstVideoName')
    .get(VideoController.getFirstVideoName);
  server.route('/getVideo')
    .post(VideoController.getVideoByID);
  server.route('/deleteVideos')
    .post(VideoController.deleteVideos);
  server.route('/addComment')
    .post(VideoController.addComment);
  server.route('/addReplies')
    .post(VideoController.addReplies);
  server.route('/countNumVideos')
    .get(VideoController.countNumVideos);
  server.route('/checkSecretKey')
    .post(AccountController.checkSecretKey);
  server.route('/checkAdminKey')
    .post(AccountController.checkAdminKey);
  server.route('/deleteUserVideos')
    .get(VideoController.deleteUserVideos);
  server.route('/deleteUser')
    .get(AccountController.deleteUser);
  server.route('/deleteUserFinal')
    .get(VideoController.deleteUserVideos, UploadController.deleteProfileImage, AccountController.deleteUser);
  server.route('/addNewKey')
    .get(BetaKeyController.addNewKey);
  server.route('/createBetaTable')
    .get(BetaKeyController.createNewTable);
  server.route('/doesKeyExist')
    .post(BetaKeyController.doesKeyExist);
  server.route('/deleteKey')
    .post(BetaKeyController.deleteKey);
  server.route('/getUnsentKeys')
    .get(BetaKeyController.getUnsentKeys);
  server.route('/sendEmail')
    .get(BetaKeyController.sendEmail);
  server.route('/sendBetaKey')
    .post(BetaKeyController.sendBetaKey);
  server.route('viewUpdate')
    .get(VideoController.viewUpdate);
};