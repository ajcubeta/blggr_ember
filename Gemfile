source 'https://rubygems.org'

gem 'rails', '4.0.0'

gem 'pg'
gem 'sass-rails', '~> 4.0.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 1.2'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

gem 'devise', '3.0.0'
gem 'postmark-rails'
gem 'capistrano'
gem 'ejs'
gem 'active_model_serializers'
gem 'time_diff'

group :development do
  gem 'pry-rails'
  gem 'puma'
  gem 'quiet_assets'
  gem 'awesome_print'
  # gem 'spring'
end

group :development, :test do
  gem 'rspec-rails', '~> 2.14.0'
  gem 'fabrication'
  gem 'brakeman'
  gem 'metric_fu'
  gem 'rubocop'
  gem 'jasmine', github: 'pivotal/jasmine-gem', ref: 'e8105'
end

group :test do
  gem 'capybara'
  gem 'shoulda-matchers'
  gem 'database_cleaner'
  gem 'faker'
  gem 'timecop'
  gem 'poltergeist', require: 'capybara/poltergeist'
  gem 'launchy'
  gem 'ci_reporter'
  gem 'simplecov', require: false
  gem 'simplecov-rcov-text', require: false
end