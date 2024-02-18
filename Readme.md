
# Backend

- I had to build an Express application. 
- There are following API endpoints that are present . 
- Also used MongoDB Atlas for this.
- one can read, update, and delete posts only. 

- The following routes are available :
    1. /users/register ==> To register a new user.
    2. /users/login ==> For logging in and generating a token.
    3. /posts ==> This will show my posts.
    4. /posts/add ==> I can add a new post.
    5. /posts/update ==> I can update my posts.
    6. /posts/delete ==> I can delete my posts.
    <br>

Additionally, the following filtering functionalities are available:
1. If the device name is passed as a query, then it will show only those posts from which the post has been made on that device.Means add filter in the code ,create an select tag where user can swich between the device name and according to that should see the posts 
2. For example, device=MOBILE ==> will give me mobile posts only.
3. device1=MOBILE & device2=PC ==> will give me the posts made by mobile and PC.
 <br>
- used Mongo Atlas for data storage, and for to manage the relationship between posts.
- Middleware is in place, including an authentication middleware to authenticate one for all the restricted routes.
- While coding, followed these practices:
	1. Hashing the password for security.
	2. Using JWT for authentication.
	3. Implementing the MVC (Model-View-Controller) architectural pattern.
	4. Utilizing a .env file for keeping crucial information secure.

 <br>

### User Routes
***POST /users/register***
- This route will be responsible for registering a new user to the database.
- While registration you need to took care of the password as well its not been stored as it is, kept track of it's safety by hashing it.
- Multiple users can register on the app.
 <br>

While registering it accepts the following details.

1) name ==> String
2) email ==> String
3) gender ==> String
4) password ==> String

 <br>

- while registration you have to check that password should contain all the following things, 
- otherwise user cannot register, send appropriate response in this case.
- => At least one uppercase character
- => At least one number
- => At least a special character
- => The length of password should be at least 8 characters long


 <br>

- If a user already exist, a new user with same email cannot register, 
- send appropriate response in this case.
 <br>

Responses:
200: {"msg":"The new user has been registered", "registeredUser":<User details who just registered>}
400: {"error":<error message should be sent>}
 <br>


***POST /users/login***
This route is responsible for authenticating the user.
Send email and pass to authenticate the user.
Responses:
200: {"msg":"Login successful!", "token":<A token has to be sent>}
400: {"error":<error message should be sent>}
JWT must be used for token generation.
token should have a expiry .
 <br>

***GET /users/logout***
This route is responsible for logging out the user.
You can achieve this by blacklisting the token.
This has to be done in the database that means there should be a separate collection where blacklisted tokens have to be kept.
Schema and model you can design as per your convenience for this feature.
Responses:
200: {"msg":"User has been logged out"}
400: {"error":<error message should be sent>}
 <br>

### Post Routes
***POST /posts/add <Restricted Route>***
- These users can create multiple posts.
- Post will have the following details.
1) title ==> String
2) body ==> String
3) device ==> String
<br>
==> Where device is the one from which the post has been made, it can be "PC", "TABLET", "MOBILE"
Only logged in users can do any kind of CRUD operations.
 <br>
Responses:
200: {"msg":"Post added"}
400: {"error":<error message should be sent>}
<br>


***GET /posts/get <Restricted Route>***
A user has to be authenticated to access this route.'
 <br>
Responses:
200:
- If no query parameter is provided:
- Returns all the posts present in the database.
- If a query parameter 'title' is provided:
- Returns all the posts that have a title matching the query.
400: {"error":<error message should be sent>}
(User can only delete/update the post which he had made)
 <br>

***PATCH /posts/update/:id <Restricted Route>***
A user has to be authenticated to access this route.
A user should be able to update any details of a post whose id has been passed as param
 <br>
Responses:
200: send the updated Post
400: {"error":<error message should be sent>}
 <br>

***DELETE /posts/delete/:id <Restricted Route>***
A user has to be authenticated to access this route.
A user should be able to delete any post whose id has been passed as param
<br>
Responses:
200: {"message":"post deleted"}
400: {"error":<error message should be sent>}


<!-- img links: 
https://i.ibb.co/YRRqK5M/istock.jpg
https://i.ibb.co/Sm6vcX4/post-logo.jpg
https://i.ibb.co/0sx4rsn/posts-markers.jpg -->