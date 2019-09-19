call mkdir restful
call cd restful
call npm init -y
call npm i express express-flash mongoose bcrypt express-session ejs
call type nul > server.js
call mkdir config
call cd config
call type nul > mongoose.js
call type nul > routes.js
call cd ..
call mkdir controllers
call mkdir static
call mkdir models
call mkdir views
call cd views
call type nul > index.ejs
call cd ..
