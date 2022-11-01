# San Diego Housing Project

## Overview
The purpose and goal of this project is to determine where is San Diego would residents benefit the most from low-moderate income housing broken down by zipcode. We used a K-means model to analyze several different categories. The categories that we chose to focus on are accessibility to transit, food(markets), hospitals, and parks. To get this data we obtained census flat files for the population, income, and living percentages, performed web-scraping for the hospital information, utilized the San Diego trasit geoJSON data, as well as used Google's PlacesAPI for the markets and parks. We preprocessed the all data, compiled, trained, and evaluated the data to get our results.

## Websites

All our information can be found on [San Diego Housing Project](https://tsmtruong.github.io/final-project/index.html).


A rough draft of our visuals can be found on [Our Tableau](https://public.tableau.com/app/profile/rashaan3749/viz/Affordablehousingrough/Sheet8?publish=yes).

## Results
### Data Gathering and Cleaning
#### Data
- Census Data
- San Diego MTS transit data
- San Diego Hospital Data
- School Rating Data
- Supermarket Data
- Parks data
#### Gathering and Cleaning Methods
- CSV flat files
- GeoJSON files
- WebScraping
- Google PlacesAPI
- Excel
- Python

### Unsupervised Machine Learning
- For our project we decided to go woth unsupervised machine learning, specifically using K-means. 
#### Data Preprocessing
- We gathered all the San Diego Housing information the Census Bureau published which was grouped by zip code. If a zip code was missing information such as households living in said zip code, we dropped the zip code. The census bureau also published values as a percentage of their categories, so we had to convert their percentages to workable whole
numbers.
We decided upon 5 amenities that would additionally benefit areas of affordable housing: Proximity to schools, hospitals, parks, grocery stores, and transit stops. We came to the consensus on these amenities as they serve the backbone of services that someone or some family on a budget would look for and need access to daily.
#### Machine Model
We used a kmeans model which utilized 4 primary pca components. Training and testing was done without splitting our data due to the model utilized.
We decided on a clustering model as we were looking to better get an idea of which zip codes absolutely needed affordable housing and which ones would need it later than others. A supervised or neural network would have been very binary in an environment that needed to be flexible. However that flexibility may lead to some zip codes being misclassified.
We opted not to change out model other than adding the amenities between week 2 and week 3 as the model felt lack luster modeling only income data and housing.
Our <I forget what this noun is> has 4 pca components which accounts for 81% of the variance of the data. As shown in the code, we are able to get a model that can account for a reasonable swath of the data without overfitting.

## Conclusion
