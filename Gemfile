source 'https://rubygems.org'
ruby File.read(File.join(File.dirname(__FILE__), '.ruby-version')).strip

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.6', '>= 5.2.6.2'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use Puma as the app server
gem 'puma', '~> 4.3', '>= 4.3.11'
# Use SCSS for stylesheets
gem 'bootstrap-sass'
gem 'sass-rails', '~> 5.0', '>= 5.0.6'
gem 'bourbon', '~> 4.2.0'
gem 'neat', '~> 1.8.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2', '>= 4.2.2'
# Use Delayed Job for background tasks
gem 'delayed_job_active_record'
gem 'delayed_job_web'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby
gem 'mixpanel-ruby'
gem 'device_detector'
gem 'twilio-ruby'
gem 'intercom-rails'
gem 'devise', '>= 4.4.2'
gem 'aws-sdk'
gem 'autosize'

gem 'timeliness'
gem 'validates_timeliness'

# Use jquery as the JavaScript library
gem 'jquery-rails', '>= 4.3.1'
gem 'jquery-ui-rails', '>= 6.0.1'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'activeadmin', '>= 1.3.0'

# Metrics and performance tracking
gem 'skylight'
gem 'sentry-raven'

# Attached media files
gem 'paperclip'

group :test do
  gem 'launchy', require: false
  gem 'capybara-screenshot'
  gem 'simplecov', require: false
  gem 'codeclimate-test-reporter', require: false
  gem 'shoulda-matchers', git: 'https://github.com/thoughtbot/shoulda-matchers.git', branch: 'rails-5'
end

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'addressable'
  gem 'byebug', platform: :mri
  gem 'capybara'
  gem 'database_cleaner'
  gem 'dotenv-rails', '>= 2.2.2'
  gem 'factory_girl_rails', '>= 4.8.0'
  gem 'faraday'
  gem 'poltergeist'
  gem 'pry-rails'
  gem 'rspec_junit_formatter'
  gem 'rspec-rails', '>= 3.6.0'
  gem 'selenium-webdriver'
  gem 'webmock'
  gem 'jasmine'
  gem 'awesome_print'
  gem 'faker'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.5.1'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'spring-commands-rspec'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
