# Introducing Bayut - A property listing platform that streamlines the search process for both buyers and sellers.

I developed Bayut using Next.js for the front-end and a custom server for the back-end. To improve response time and reduce API costs, I implemented a caching layer using Redis database. The result was an improvement of 87.33% in API response time and cost.

I also deployed Bayut to an Oracle instance and Dockerized the entire project, including the front and back-end. This made the project more secure and easier to maintain. To style the platform, I used Tailwind CSS and for testing, I used Jest.

One of the main highlights of Bayut is the improved search capabilities. It allows users to filter properties by location, price, and number of rooms. This makes it easier for buyers to find their dream home and for sellers to reach the right audience.

In this project, I utilized JavaScript, TypeScript, Next.js, Tailwind CSS, Jest, Redis, Oracle, and Docker.


## Tech Stack
- Nextjs
- Backend Nodejs
- Redis 
- Jest
- Typescript
- Mapbox
- Third-party APIs [geo-location, CHECK PHONE, RapidAPI Bayut Data]
- Docker

## How I reduced API response time & cost by  87.33%?
![bayut api](https://res.cloudinary.com/dlutaqccw/image/upload/v1672693112/Untitled_2022_12_04_1627_cb27ee6dff.png)
The third-party API allows only 500 requests per month and responds in 3.7 to 4.17 seconds, which is a long time; this is insufficient, and plans start at $20 for 10k requests, because the data does not change frequently. So I used Redis to cache the search results and the listing results per city with the same filtering parameters for TTL = 1 day to 3 days.
If I sent 1,000 requests to list all the properties listed in Dubai
 I used Oracle's free tier [Here](https://www.oracle.com/eg/cloud/free/)
Redis costs me zero dollars 
### Before the optimization
Cost per thousand requests = $0.002 * 1000 = 2$.   
response time for each request = 4.7 seconds
### After the optimization
The initial request given to the client and added to the Redis database costs $0.002 for calling Rabid API.              
The remainder of the requests (999) were served from the Redis database, which costs nothing and has a 64%–87.33% quicker response time to the client than the third-party API (570 ms).       
_Please keep in mind that each request is only charged once every one to three days._
#### Backend 

[Github link](https://github.com/yousefhany77/bayut-clone)

#### FrontEnd
[Github link](https://github.com/yousefhany77/bayut-clone)
 
#### Live Demo
[here](https://bayut.youssefhany.dev)
