# Webpage URL parser

This returns the title, description, and largest image of the URL page.

## How to test

API URL - [https://still-fjord-03639.herokuapp.com/parse-url-page](https://still-fjord-03639.herokuapp.com/parse-url-page)

Pass a body to the API in the format - 
```
{
    "url": "https://facebook.com"
}
```

Response - 
```
{
    "status": "success",
    "pageTitle": "Welcome to Facebook Page - Log In or Sign Up",
    "largestImg": "https://facebook.com/largest.png"
}
```

## How to run

- Clone the code from github [here](https://github.com/Hershur/get-webpage-meta-data)
- Install all dependencies - npm install
- 

