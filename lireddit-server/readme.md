These are notes that I am taking from the tutorial: https://www.youtube.com/watch?v=I6ypD7qv3Z8&ab_channel=BenAwad

Setup instructions:
Package.json should be universally relevant

Startup instructions:
Have 1 terminal run "yarn wait"
Have 1 more run run "yarn dev"
Then you have 1 terminal for commands
at 30mins or so, npm install reflect-metadata, and also u might need username/password depending on how u set up postgresql

For some reason, importing a file in a seperate folder you need to use ../ depending on how many layers up the file is. Can't just use Ctrl+.

To get the playground, added this piece of code in index file where the apollo server was generated:  
plugins: [
ApolloServerPluginLandingPageGraphQLPlayground({
// options
})
],

When using nodemailer, this code snipped is required to make it work ->  
tls: {
rejectUnauthorized: false, // This is required
},
