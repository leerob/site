module.exports = {
    extends: 'get-off-my-lawn',
    rules: {
        'react/prop-types': 0,
        'get-off-my-lawn/prefer-arrow-functions': 0,
        camelcase: [
            'error',
            {
                allow: ['client_email', 'client_id', 'private_key']
            }
        ]
    }
};
