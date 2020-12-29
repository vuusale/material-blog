const PERMISSIONS = Object.freeze({
    ONLY_WRITERS_ADMIN: ['WRITER'],
    ONLY_AUTHENTICATED: ['WRITER', 'READER']
});

module.exports = PERMISSIONS;