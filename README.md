# San Diego Housing Project

## Overview
The purpose and goal of this project is to determine where is San Diego would residents benefit the most from low-moderate income housing broken down by zipcode. We used a K-means model to analyze several different categories. The categories that we chose to focus on are accessibility to transit, food(markets), hospitals, and parks. To get this data we obtained census flat files for the population, income, and living percentages, performed web-scraping for the hospital information, utilized the San Diego trasit geoJSON data, as well as used Google's PlacesAPI for the markets and parks. We preprocessed the all data, compiled, trained, and evaluated the data to get our results.

## Websites



Our presentation slides can be found [HERE](https://docs.google.com/presentation/d/1OCs_Wxn8r2Oqt4n0LE-w1oS4UMFryct7r1KTf5uLS3w/edit?usp=sharing)


All our information can be found on [San Diego Housing Project](https://tsmtruong.github.io/final-project/index.html).


![Dashboard](https://github.com/tsmtruong/final-project/blob/tsmtruong/Resources/Pictures/Dashboard.PNG)



The Affordable housing storyboard can be found on [Our Tableau](https://public.tableau.com/app/profile/rashaan3749/viz/AffordableHousingstoryslides/Story1?publish=yes).

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
- For our project we decided to go with unsupervised machine learning, specifically using K-means. 
#### Data Preprocessing
- We gathered all the San Diego Housing information the Census Bureau published which was grouped by zip code. If a zip code was missing information such as households living in said zip code, we dropped the zip code. The census bureau also published values as a percentage of their categories, so we had to convert their percentages to workable whole
numbers.
- We decided upon 5 amenities that would additionally benefit areas of affordable housing: Proximity to schools, hospitals, parks, grocery stores, and transit stops. We came to the consensus on these amenities as they serve the backbone of services that someone or some family on a budget would look for and need access to daily.
#### Machine Model
- We used a kmeans model which utilized 4 primary pca components. Training and testing was done without splitting our data due to the model utilized.
- We decided on a clustering model as we were looking to better get an idea of which zip codes absolutely needed affordable housing and which ones would need it later than others. A supervised or neural network would have been very binary in an environment that needed to be flexible. However that flexibility may lead to some zip codes being misclassified.
- We opted not to change our model other than adding the amenities between week 2 and week 3 as the model felt lack luster modeling only income data and housing.
- Our explained variance ratio has 4 pca components which accounts for 81% of the variance of the data. As shown in the code, we are able to get a model that can account for a reasonable swath of the data without overfitting.

![scatter plot](https://github.com/tsmtruong/final-project/blob/tsmtruong/static/images/final_scatter.png)

![3D Scatter](https://github.com/tsmtruong/final-project/blob/tsmtruong/Resources/Pictures/3D_Scatter.jpg)

#### DBSCAN
- DBSCAN, a machine learning model to process high resource areas into clusters that will outline key areas that affordable housing would benefit the most from.
- a crucial component for the model was to gather the latitudes and longitudes for each Resource.
- This was achieved by utilizing the Google GeoCoding API, since the data that was given prior already contained street addresses we were able to fetch the latitudes and longitudes with the given address. Once the geo coordinates were acquired, it was time to load them into the machine learning model.
- At first there were 200+ clusters, and clusters that were clustered on outliers, but with a few tweaks to the model we ended up with 13 clusters that more accurately depicted prime locations for housing. 

![clusters](https://github.com/tsmtruong/final-project/blob/main/Resources/Pictures/Clusters.png)


## Conclusion

  - In conclusion, we found that Class 4 had the highest need for affordable housing followed closely by class 0 with the second highest need.
    - Class 4 contains the zipcodes 
      - 91910, 91911, 91950, 91977, 92020, 92021, 92105, 92113, 92114, 92115, 92126, 92154
    - Class 0 contains the zipcodes
      - 91932, 91941, 91942, 91945, 92008,92019, 92025, 92026, 92027, 92028, 92040, 92054, 92056, 92057, 92058, 92065, 92069, 92071, 92078, 92081, 92083,         92084, 92102, 92107, 92108, 92110, 92111, 92117,92120, 92123, 92124, 92139, 92173,92672
  - Using these two lists of zipcode we compared them to the resources/amenities list and found that the zipcodes 91941, 91942, and 92114 have the best       accessibility to resources and high ranking schools. We have concluded that these are the zipcodes that would benefit the most from affordable           housing. 

![Top 3](https://github.com/tsmtruong/final-project/blob/main/Resources/Pictures/top_3_tableau.jpg)

![markets](https://github.com/tsmtruong/final-project/blob/main/Resources/Pictures/markets_tableau.jpg)

![schools](https://github.com/tsmtruong/final-project/blob/main/Resources/Pictures/school_ratings_tableau.jpg)
