const endpoints = {
  addAdmin: "HTTP.POST /admin/add",
  addModToCommunity: "HTTP.POST /community/mod",
  approveRegistrationApplication:
    "HTTP.PUT /admin/registration_application/approve",
  banFromCommunity: "HTTP.POST /community/ban_user",
  banPerson: "HTTP.POST /user/ban",
  blockCommunity: "HTTP.POST /community/block",
  blockPerson: "HTTP.POST /user/block",
  changePassword: "HTTP.PUT /user/change_password",
  createComment: "HTTP.POST /comment",
  createCommentReport: "HTTP.POST /comment/report",
  createCommunity: "HTTP.POST /community",
  createCustomEmoji: "HTTP.POST /custom_emoji",
  createPost: "HTTP.POST /post",
  createPostReport: "HTTP.POST /post/report",
  createPrivateMessage: "HTTP.POST /private_message",
  createPrivateMessageReport: "HTTP.POST /private_message/report",
  createSite: "HTTP.POST /site",
  deleteAccount: "HTTP.POST /user/delete_account",
  deleteComment: "HTTP.POST /comment/delete",
  deleteCommunity: "HTTP.POST /community/delete",
  deleteCustomEmoji: "HTTP.Post /custom_emoji/delete",
  deletePost: "HTTP.POST /post/delete",
  deletePrivateMessage: "HTTP.POST /private_message/delete",
  distinguishComment: "HTTP.POST /comment/distinguish",
  editComment: "HTTP.PUT /comment",
  editCommunity: "HTTP.PUT /community",
  editCustomEmoji: "HTTP.PUT /custom_emoji",
  editPost: "HTTP.PUT /post",
  editPrivateMessage: "HTTP.PUT /private_message",
  editSite: "HTTP.PUT /site",
  featurePost: "HTTP.POST /post/feature",
  followCommunity: "HTTP.POST /community/follow",
  getBannedPersons: "HTTP.GET /user/banned",
  getCaptcha: "HTTP.GET /user/get_captcha",
  getComment: "HTTP.GET /comment",
  getComments: "HTTP.GET /comment/list",
  getCommunity: "HTTP.GET /community",
  getFederatedInstances: "HTTP.Get /federated_instances",
  getModlog: "HTTP.GET /modlog",
  getPersonDetails: "HTTP.GET /user",
  getPersonMentions: "HTTP.GET /user/mention",
  getPost: "HTTP.GET /post",
  getPosts: "HTTP.GET /post/list",
  getPrivateMessages: "HTTP.GET /private_message/list",
  getReplies: "HTTP.GET /user/replies",
  getReportCount: "HTTP.GET /user/report_count",
  getSite: "HTTP.GET /site",
  getSiteMetadata: "HTTP.GET /post/site_metadata",
  getUnreadCount: "HTTP.GET /user/unread_count",
  getUnreadRegistrationApplicationCount:
    "HTTP.GET /admin/registration_application/count",
  leaveAdmin: "HTTP.POST /user/leave_admin",
  likeComment: "HTTP.POST /comment/like",
  likePost: "HTTP.POST /post/like",
  listCommentReports: "HTTP.GET /comment/report/list",
  listCommunities: "HTTP.GET /community/list",
  listPostReports: "HTTP.GET /post/report/list",
  listPrivateMessageReports: "HTTP.GET /private_message/report/list",
  listRegistrationApplications: "HTTP.GET /admin/registration_application/list",
  lockPost: "HTTP.POST /post/lock",
  login: "HTTP.POST /user/login",
  markAllAsRead: "HTTP.POST /user/mark_all_as_read",
  markCommentReplyAsRead: "HTTP.POST /comment/mark_as_read",
  markPersonMentionAsRead: "HTTP.POST /user/mention/mark_as_read",
  markPostAsRead: "HTTP.POST /post/mark_as_read",
  markPrivateMessageAsRead: "HTTP.POST /private_message/mark_as_read",
  passwordChangeAfterReset: "HTTP.POST /user/password_change",
  passwordReset: "HTTP.POST /user/password_reset",
  purgeComment: "HTTP.POST /admin/purge/comment",
  purgeCommunity: "HTTP.POST /admin/purge/community",
  purgePerson: "HTTP.POST /admin/purge/person",
  purgePost: "HTTP.POST /admin/purge/post",
  register: "HTTP.POST /user/register",
  removeComment: "HTTP.POST /comment/remove",
  removeCommunity: "HTTP.POST /community/remove",
  removePost: "HTTP.POST /post/remove",
  resolveCommentReport: "HTTP.PUT /comment/report/resolve",
  resolveObject: "HTTP.GET /resolve_object",
  resolvePostReport: "HTTP.PUT /post/report/resolve",
  resolvePrivateMessageReport: "HTTP.PUT /private_message/report/resolve",
  saveComment: "HTTP.PUT /comment/save",
  savePost: "HTTP.PUT /post/save",
  saveUserSettings: "HTTP.PUT /user/save_user_settings",
  search: "HTTP.GET /search",
  transferCommunity: "HTTP.POST /community/transfer",
  uploadImage: "",
  verifyEmail: "HTTP.POST /user/verify_email",
};
