# SOCIO-MASAI
## Created a Fullstack Social Media App

## Backend

Multiple users should be able to register on the app.
While registering accept the following details.

<br>
name ==> String
email ==> String
gender ==> String
password ==> String

These users can create multiple posts.
Post will have the following details.
title ==> String
body ==> String
device ==> String

---


==> Where device is the one from which the post has been made, it can be "PC", "TABLET", "MOBILE"
Only logged in users can do any kind of CRUD operations.
A user can read, update and delete his/her posts only.
Following Routes should be there.
/users/register ==> To register a new user.
/users/login ==> For logging in generating a token
/posts ==> This will show the posts of logged in users.
/posts/add ==> A logged in user should only be able to add a new post.
/posts/update ==> The logged in user can update his/her posts.
/posts/delete ==> The logged in user can delete his/her posts.


---


Following Filtering functionalities should also be there.
1. If the device name is passed as query, then it should show only those posts from which device that post has been made.
 2. For Example, device=MOBILE ==> will give mobile posts only.
3. device1=MOBILE & device2=PC ==> will give the posts made by mobile and PC.
Mongo Atlas should be used.
Relationship between posts and user should be managed.
Middleware
Authentication middleware should be there to authenticate the user, for all the restricted routes.