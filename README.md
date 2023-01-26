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
When I first started working on Bayut, I quickly realized that the third-party API I was using had some limitations. It only allowed for 500 requests per month and had a slow response time of 3.7 to 4.17 seconds. Additionally, plans for the API started at $20 for 10k requests, which wasn't cost-effective since the data I was pulling from the API didn't change frequently.

To overcome these limitations, I implemented a caching layer using Redis database. I cached the search results and the listing results per city with the same filtering parameters, and set the time-to-live (TTL) to 1 day to 3 days. This allowed me to dramatically improve the response time and reduce costs.

For example, let's say I sent 1,000 requests to list all the properties listed in Dubai. Before the optimization, the cost would have been $0.002 per request, for a total cost of $2. The response time for each request would have been 4.7 seconds.

After implementing the caching layer, the initial request given to the client and added to the Redis database costs $0.002 for calling Rabid API. The remainder of the requests (999) were served from the Redis database, which costs nothing and has a 64%–87.33% quicker response time to the client than the third-party API (570 ms).

It's worth noting that each request is only charged once every one to three days. This means that even if a user makes multiple requests within that time frame, they will only be charged for the initial request.
#### Backend 

[Github link](https://github.com/yousefhany77/bayut-clone)

#### FrontEnd
[Github link](https://github.com/yousefhany77/bayut-clone)
 
#### Live Demo
[here](https://bayut.youssefhany.dev)
