const PERMISSIONS = Object.freeze({
    ONLY_ADMIN: ['ADMIN'],
    ONLY_WRITERS_ADMIN: ['ADMIN', 'WRITER'],
    ONLY_AUTHENTICATED: ['ADMIN', 'WRITER', 'READER']
});

module.exports = PERMISSIONS;