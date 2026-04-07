const { getUserProfile } = require('./userService');

const userId = 1;

console.log(`Fetching profile for user ${userId}...`);

const profile = getUserProfile(userId);

console.log('User profile:', profile);
