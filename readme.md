npm init -y => initiates nodejs application

npm i express => install express package

server.js 

# API
API is a set of rules that help communicate two web applications 
can be me ny types of API's

1. REST API
-> representational state transfer 
-> methods are as follows:
 GET => sever se data fetch karta h
 POST => sever pe data send karta h
 PATCH => server pe data already h usi data ko update karta h
 DELETE => server pe data h use delete karna hoga
 PUT => 


 W8l7E1ezmiNzzY4h

 mongodb+srv://anjaliramesh14012005_db_user:W8l7E1ezmiNzzY4h@cluster0.tguba7j.mongodb.net/?appName=Cluster0

 find()
 returns data in the form of array of object 
 guarantees return on object atleast [{},{}] or gives empty array[]
 findOne()
 returns one element
 if data found it will return object {} and if not returns null


 we never save image in database
 we give our image to cloud storage provider(csp) and this csp gives us url of the image and then the image url is stored in database

 # multer

 #
 preventdefault unwanted loading prevent karta h
 
 # post-app
 jaise hi post-air caption form me dalke submit karoge image aur caption api ke through server pe jayenge aur image upload karenge imagekit pe return me url dega imagekit caption or url dono database me save honge phir hamare pass response aayega aur jaise hi response aayega ham use navigate kar denge feed page pe
 

 # Authentication

 validation
-> Checking whether the data entered by the user is correct in format and rules.
Focus: Data quality

Example:
Email must contain @
Password must be at least 8 characters
Age should be a number

verification
->Checking whether the information is real or belongs to the user
Focus: Truth / correctness of identity or data

Example:
OTP sent to your phone/email
Email verification link
Aadhaar verification

👉 Example:
User enters email → system sends OTP → user enters OTP → system checks
✔️ This is verification
 
 authentication
 ->Confirming the identity of the user
Focus: Identity

Example:
Login with username & password
Login with Google
Fingerprint / Face ID

 authorization 
 ->Checking what actions the user is allowed to perform
Focus: Permissions / access control

Example:
Admin can delete posts
User can only edit their own profile
Only paid users can access premium content

Think of a club entry 👇
Validation → Is your ID card format correct?
Verification → Is this ID card genuine?
Authentication → Are you really that person?
Authorization → Are you allowed inside VIP area?

# Token
1.User registers with username, email, password and data is stored in database.
2.User logs in using email and password, and server generates a token after successful authentication.
3.This token contains user-related information like userId and expiry, and is signed by the server.
4.For accessing protected resources, the user sends this token to the server.
5.Server verifies the token and identifies which user is making the request.

“Token is proof that the user is authenticated, and it is used to authorize access to protected resources without sending credentials every time.”

🔹 Step 1: Registration

User sends:
username, email, password

Server:
Validates data
Hashes password
Stores in DB
❌ No token required here (usually)

🔹 Step 2: Login (Authentication)

User sends:
email + password

Server:
Verifies credentials
If correct → generates token (e.g., JWT)

✔️ Token contains:
userId
expiry time

🔹 Step 3: Token sent to client

Server sends:
token

Client stores it:
localStorage / cookies

🔹 Step 4: Access protected routes

Client sends request with token:
Authorization: Bearer <token>

Server:
Verifies token
Extracts user info
Allows or denies access