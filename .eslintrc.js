module.exports = {
  extends: 'get-off-my-lawn',
  rules: {
    'react/prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-no-literals': 0,
    'react/display-name': 0,
    'react/no-unescaped-entities': 0,
    'sort-keys': 0,
    'objects/no-object-properties-one-line': 0,
    'node/no-unpublished-require': 0,
    camelcase: [
      'error',
      {
        allow: [
          'client_email',
          'client_id',
          'private_key',
          'project_id',
          'email_address',
          'client_secret',
          'access_token',
          'refresh_token',
          'grant_type'
        ]
      }
    ]
  }
};
