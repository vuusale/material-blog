﻿# Material Blog

This is the repository of mini blog with a few functionalities created as final project of university course.

![img](https://github.com/vuusale/material-blog/blob/main/mainpage.png)

#### Main technologies used:
<ul>
  <li>Node.js</li>
  <li>React.js</li>
  <li>MySQL</li>
  <li>Material-UI</li>
</ul>

## Installation
  To run the application locally, it is required to have Node.js, React.js and NPM installed. After ensuring that you have these technologies installed, follow the below steps:
  
  - #### Clone the repository into a suitable location:
    
        git clone https://github.com/vuusale/material-blog.git
        
  - #### Run Node.js application on one terminal:
    
        cd back-end
        npm install
        npm start
    
  - #### Run React.js application on another terminal:

        cd front-end
        npm install
        npm run dev
      
  Now application must be running on localhost. `npm install` command installs all necessary dependencies into `node_modules` folder.
  
## Description
  The task is to create a web application having back-end part implemented in Node.js and a database in MySQL. Optionally, front-end side has been created as a single-page React.js application, which receives dynamic content from the back-end via HTTP requests. Material-UI framework is heaviliy utilized on the front-end, which provides high compatibility and attractive design.
  
## Main functionalities
  In this application, there are 2 roles: writer and reader. As the names suggest, writers are users who are able to publish articles, while readers can only read and leave comment under articles. Articles are grouped into sections according to what their content is about.
  
  ![img](https://github.com/vuusale/material-blog/blob/main/articles.png)
  
  Authorization is not strictly checked on the front-end as to which pages users can see, however, all requests are validated on the back-end via role-based authorization.
