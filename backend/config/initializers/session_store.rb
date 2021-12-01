if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: 'cat-app', domain: 'domain'
else
  Rails.application.config.session_store :cookie_store, key: 'cat-app'
end
