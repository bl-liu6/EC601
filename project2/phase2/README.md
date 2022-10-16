# Social Media Analyzer
b8liu@bu.edu


## MVP and User Stories
### MVP (Minimum Valualbe Product)

- look up user's followers
- get tweets of one selected user
- retrieve tweets liked by one selected user
- perform sentiment analyze
- receive results 



### User Stories
#### Political analyzer
He/she wants to analyze the sentiment of the tweets of one politician (e.g JoeBiden)

#### Influencer's temper
A journalist wants to analyze one influencer's sentiment on Twitter in a time period.






## Modular design

#### User-defined-input, 

- specifing the Twitter account, 
- number of tweets, 
- include retweets/replies or not

#### Twitter API
- sending user-defined-input as a query to Twitter API
- retrieve raw tweets data

#### Data cleaning
- Remove mention block (@JoeBiden)
- Remove retweet block (RT @JoeBiden:)
- Remove embedded URLs

#### Google API
- Send the clean data to Google NLP API
- Retrive sentiment analysis result from Google

#### Present data
- Present the sentiment analysis result in a graph/chart



## Target User

One who want to do sentiment analysis to one twitter account, and also holds an Twitter API token/ Twitter Development account.



## Basic User Stories.
One who's interested in one user's Twitter account and would like to have sentiment analysis of multiple tweets.


