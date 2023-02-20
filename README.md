# Photo Star

Welcome to [Photo Star ](https://photo-star.herokuapp.com/) is a powerful web application that makes it easy for you to share and connect with photos. With Photo Star, you can create a profile to share your photos with the world, or use it as a social platform to stay connected with friends and family. Our React powered platform makes it easy to use on any device with an internet connection, so you can access your photos from anywhere. Keep track of your memories, find new photos to share, and more - all with Photo Star.

![mockup](src/assets/readme/mockup.png)

## Index 
* [Technologies Used](#technologies-used)
* [User Stories](#user-stories)
* [Fearures](#features)
* [Contact](#contacts)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)

## Technologies Used

 * [HTML5](https://en.wikipedia.org/wiki/HTML5)
 * [CSS](https://en.wikipedia.org/wiki/CSS)
 * [Bootsrap](https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework))
 * [Django/allauth](https://en.wikipedia.org/wiki/Django_(web_framework))
 * [Python](https://en.wikipedia.org/wiki/Python_(programming_language))
 * [Cloudinary](https://en.wikipedia.org/wiki/Cloudinary)
 * [Heroku](https://en.wikipedia.org/wiki/Heroku)
 * [Chrome](https://en.wikipedia.org/wiki/Google_Chrome)
 * [Stack Overflow](https://en.wikipedia.org/wiki/Stack_Overflow)
 * [Multi Device Website Mockup Generator](https://techsini.com/multi-mockup/index.php)
 * [Pep8](https://pypi.org/project/pep8/)
 * [W3school](https://en.wikipedia.org/wiki/W3Schools)
 * [Git](https://en.wikipedia.org/wiki/Git) 
 * [Github](https://en.wikipedia.org/wiki/GitHub)
 * [Gitpod](https://www.gitpod.io/docs/introduction) 

 ## User Stories 

### As a guest User... 

* As a user I can view a navbar from every page so that I can navigate easily between pages
* As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh
* As a user I can create a new account so that I can access all the features for signed up users
* As a user I can sign in to the app so that I can access functionality for logged in users

### As a Registered User...

* As a user I can tell if I am logged in or not so that I can log in if I need to
* As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
* As a logged out user I can see sign in and sign up options so that I can sign in/sign up
* As a user I can view user's avatars so that I can easily identify users of the application
* As a logged in user I can create posts so that I can share my images with the world!
* As a user I can view the details of a single post so that I can learn more about it
* As a logged in user I can like a post so that I can show my support for the posts that interest me
* As a user I can view the posts page so that I can read the comments about the post
* As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created
* As a logged in user I can add comments to a post so that I can share my thoughts about the post
* As a user I can see how long ago a comment was made so that I know how old a comment is
* As a user I can read comments on posts so that I can read what other users think about the posts
* As an owner of a comment I can delete my comment so that I can control removal of my comment from the application
* As an owner of a comment I can edit my comment so that I can fix or update my existing comment
* As a user I can view other users profiles so that I can see their posts and learn more about them
* As a user I can see a list of the most followed profiles so that I can see which profiles are popular
* As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them
* As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed
* As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them
* As a logged in user I can edit my profile so that I can change my profile picture and bio
* As a logged in user I can update my username and password so that I can change my display name and keep my profile secure



 ## Wireframe
The wireframe model is created as part of the project planning. Its task is to graphically present the appearance of the application on three different devices: computer - high resolution, tablet - medium resolution, mobile - low resolution. The application will be built on the basis of the created sketch.

### Landing Page
![home](src/assets/readme/landing-lg.png)
### Landing Page Medium and Small
![home](src/assets/readme/landing-md.png)


## Post Details Page

### User Post Details Large
![profile](src/assets/readme/post-page-lg.png)
### User Post Details Medium and Small
![profile](src/assets/readme/post-page-md.png)


## User Feed Page

### User Feed Page Large
![profile](src/assets/readme/feed-lg.png)
### User Feed Page Medium and Small
![profile](src/assets/readme/feed-md.png)


## User Liked Posts Page

### User Feed Page Large
![profile](src/assets/readme/liked-lg.png)
### User Feed Page Medium and Small
![profile](src/assets/readme/liked-md.png)



## Profile Page

### User Profile Large
![profile](src/assets/readme/profile-page-lg.png)
### User Profile Medium and Small
![profile](src/assets/readme/profile-page-md.png)

## Login 

### Login Large
![login](src/assets/readme/login-lg.png)
### Login Medium and Small
![login](src/assets/readme/login-md.png)

## Features

### Navigation Bar

* Featured at the top of the page, The navigation shows the page name in the left corner: My Blog that links to the Home page. When hovered over, NavBar icons menu changes color and display text for easy navigation.
* Featured on all pages, the full responsive navigation bar includes links to, Home page, Sign In and Sign Up. When logged in includes: Add Post, Home, Feed, Liked, Sign Out and My Profile which redirects user to desired page.

### Menu Logged In
![Menu Logged In](src/assets/readme/menu-logged-in.png)

### Menu Logged Out
![Menu Logged Out](src/assets/readme/menu-logged-out.png)


### Register Page

* Register is a section created for users to easily and efficiently create an account on our page. Register form is responsive to all screen sizes.

![register]()

### Login Page 

* Login page form allows user to login into user account

![Login]()

### Change Password

* Change password form allows user to update ppassword.

![Change Password]()

### Change User Details

* Change User Details allows user to updated details on his profile.

![Change User Details]()

### Add Post

* Add post allows user to post articles. 

![Add Post]()


## Testing

### Functionality

### Manual Testing
   
| Test Label         |            Test Action           |         Expected Outcome           | Test Outcome    |
|:------------------ |:---------------------------------|:-----------------------------------|:----------------|
| Menu Test          |  Responsive Nav bar              | Navigate to the desired page.      | PASS            |
| Edit/Delete post   |  Responsive Button               | Navigate to external websites      | PASS            |
| Login button (form)|  Responsive Login button.        | Navigates to home page             | PASS            |
| Register           |  Responsive Register button      | Navigates to home page             | PASS            |
| Social media links |  Responsive Social media icons   | Navigate to social media websites  | PASS            |
| Login/Logout       |  Responsive Nav bar              | Allows to log in and out           | PASS            |
| Add post           |  Responsive User page            | Navigate to add post section       | PASS            |
| Add category       |  Responsive Nav bar              | Allows to add new category         | PASS            |
| Add comment        |  Responsive User page            | Allows to add new comment          | PASS            |
| Search by cat      |  Responsive User page            | Allows user to search by categories| PASS            |
| Edit details       |  Responsive User page            | Navigates to edit details page     | PASS            |
| Edit Settings      |  Responsive User page            | Navigates to edit settings page    | PASS            |
| Show profile       |  Responsive User page            | Navigates to user profile page     | PASS            |       
| Edit/Delete post   |  Responsive User page            | Allows to delete/edit post         | PASS            |


### Performance Test 
  ![Performance](blog/images/performance.png)

### Browser Compatibilit

* Chrome  - Pass
* firefox - Pass 
* Safari - Pass 
* Edge  - Pass 

### Bugs

* 

### Validator Testing

* HTML
  - Code pass W3C HTML without errors

* CSS
  - Code pass W3C CSS without errors

* PEP8 
  - Code pass PEP8 without critical errors

* Accessibility
  - Colors and fonts chosen are easy to read and accessible by running it through lighthouse in dev tools.


## Deployment


### Publishing 

The project was deployed using Heroku. The process is as follows:

Once you have signed up to Heroku, on the top right of the dashboard there is a button labelled 'New'. This will open a dropdown; please select 'Create new app'. On the next page you can choose your region and a name for the project. Then click 'Create app'.

On the next page there is a menu along the top. Navigate to 'Settings', where you will find the config vars. Scroll down to the section named 'Config vars' and click on the button labelled 'Reveal config vars'. Cloudinary (AWS?) and Postgres will both need config vars as per your own details. You will also need to set a secret key. Once the config vars are saved, back in Gitpod save them in an env.py file. Make sure to add env.py to your .gitignore list so that your config vars do not become publically available on Github.

If you scroll back to the top of the page you will find the 'Deploy' tab, which has multiple options for deployment. I used Github for this project. When you click on the Github button a bar will come up for you to search for the repo you wish to connect to.

Once you have connected, you have the option to deploy automatically (the app will update every time you push) or manually (update only when you choose). I chose automatic but you can do what suits you.

After the first push/update, your app will be ready to go!



### How to clone the repository

* Go to the https://github.com/Archie9010/Blog repository on GitHub
* Click the "Code" button to the right of the screen, click HTTPs and copy the link there
* Open a GitBash terminal and navigate to the directory where you want to locate the clone
* On the command line, type "git clone" then paste in the copied url and press the Enter key to begin the clone process

The site was deployed to Heroku. The steps to deploy are followed:
* Push the latest code to GitHub.
* Go to Heroku
* Select new in the top right corner.
* Create a new app.
* Enter the app name and select Europe as the region.
* Connect to GitHub.
* Search for repo-name.
* Select connect to the relevant repo you want to deploy.
* Select the settings tab.
* Add buildpack
* Select Python, then save changes.
* Make sure Heroku/Python is at the top of the list, followed by Heroku/Nodejs
* Navigate to the deploy tab
* Scroll down to Manual Deploy and select deploy branch.

Live link: [BlogSeed](https://blog-archie.herokuapp.com/)


## Credits

* Heroku deployment instructions from Code Institute
* Hello Django and Django blog from code institute
* Stack overflow to support debugging 
* Youtube Tutorials 
* CI Tutor Support for Help with code
* [Bootstrap documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [Django documentation](hhttps://docs.djangoproject.com/en/4.0/)
* The code was inspiered by PP4 DjangoBlog.
* Post Display on landing page inspiered by CodeStar Blog by Code Insitute 
* CSS Background Pattern was taken from [CSS Background Website](https://www.magicpattern.design/tools/css-backgrounds)
* Brian Macharia- Mentor support, guidance, tips, and key things to look out for throughout the project.

### Content

* Navbar and Forms styles was taken from Bootsrap and Django
* Pictures were downloaded from Pexele
* All other content was written by the developer




