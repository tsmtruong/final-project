-- Creating tables for San Diego housing data
CREATE TABLE San_Diego_Housing_Data(
	Zip_Code INT,
	Households_Total VARCHAR,
	Households_Total_Less_than_10000 VARCHAR,
	Households_Total_10000_to_14999 VARCHAR,
	Households_Total_15000_to_24999 VARCHAR,
	Households_Total_25000_to_34999	VARCHAR,
	Households_Total_35000_to_49999	VARCHAR,
	Households_Total_50000_to_74999	VARCHAR,
	Households_Total_75000_to_99999	VARCHAR,
	Households_Total_100000_to_149999 VARCHAR,
	Households_Total_150000_to_199999 VARCHAR,
	Households_Total_200000_or_more VARCHAR,
	Households_Median_income_dollars VARCHAR,
	Households_Mean_income_dollars VARCHAR,
	Households_PERCENT_ALLOCATED_Household_income_in_the_past_12_months VARCHAR,
	Families_Total VARCHAR,
	Families_Total_Less_than_10000 VARCHAR,
	Families_Total_10000_to_14999 VARCHAR,
	Families_Total_15000_to_24999 VARCHAR,
	Families_Total_25000_to_34999 VARCHAR,
	Families_Total_35000_to_49999 VARCHAR,
	Families_Total_50000_to_74999 VARCHAR,
	Families_Total_75000_to_99999 VARCHAR,
	Families_Total_100000_to_149999	VARCHAR,
	Families_Total_150000_to_199999	VARCHAR,
	Families_Total_200000_or_more	VARCHAR,
	Families_Median_income_dollars VARCHAR,
	Families_Mean_income_dollars VARCHAR,
	Families_PERCENT_ALLOCATED_Family_income_in_the_past_12_months VARCHAR,
	Married_couple_families_Total VARCHAR,
	Married_couple_families_Total_Less_than_10000	VARCHAR,
	Married_couple_families_Total_10000_to_14999 VARCHAR,
	Married_couple_families_Total_15000_to_24999 VARCHAR,
	Married_couple_families_Total_25000_to_34999 VARCHAR,
	Married_couple_families_Total_35000_to_49999 VARCHAR,
	Married_couple_families_Total_50000_to_74999 VARCHAR,
	Married_couple_families_Total_75000_to_99999 VARCHAR,
	Married_couple_families_Total_100000_to_149999 VARCHAR,
	Married_couple_families_Total_150000_to_199999 VARCHAR,
	Married_couple_families_Total_200000_or_more VARCHAR,
	Married_couple_families_Median_income_dollars VARCHAR,
	Nonfamily_households_Total VARCHAR,
	Nonfamily_households_Total_Less_than_10000 VARCHAR,
	Nonfamily_households_Total_10000_to_14999 VARCHAR,
	Nonfamily_households_Total_15000_to_24999 VARCHAR,
	Nonfamily_households_Total_25000_to_34999 VARCHAR,
	Nonfamily_households_Total_35000_to_49999 VARCHAR,
	Nonfamily_households_Total_50000_to_74999 VARCHAR,
	Nonfamily_households_Total_75000_to_99999 VARCHAR,
	Nonfamily_households_Total_100000_to_149999	VARCHAR,
	Nonfamily_households_Total_150000_to_199999	VARCHAR,
	Nonfamily_households_Total_200000_or_more VARCHAR,
	Nonfamily_households_Median_income_dollars VARCHAR,
	Nonfamily_households_Mean_income_dollars VARCHAR,
	Nonfamily_households_PERCENT_ALLOCATED_Nonfamily_income_in_the_past_12_months VARCHAR,
	PRIMARY KEY (Zip_Code)
);

-- Creating table for school data 
CREATE TABLE San_Diego_School_Data (
	Zip_Code INT,
	circle_rating_small	INT,
	scale VARCHAR,
	name VARCHAR, 
	address VARCHAR, 
FOREIGN KEY (Zip_Code) REFERENCES San_Diego_Housing_Data(Zip_Code),
	PRIMARY KEY (name, address)
);

-- Creating a table for hospital data
CREATE TABLE San_Diego_Hospital_Data (
	Zip_Code INT,
	hospital_name VARCHAR,
	address VARCHAR,
	zipcode VARCHAR,
	zipcodes VARCHAR,
FOREIGN KEY (Zip_Code) REFERENCES San_Diego_Housing_Data(Zip_Code)
);

-- Creating a table for park data
CREATE TABLE San_Diego_Parks_Data (
	Zip_Code INT,
	Number_of_parks INT,
FOREIGN KEY (Zip_Code) REFERENCES San_Diego_Housing_Data(Zip_Code)
);

-- Creating a table for market data
CREATE TABLE San_Diego_Markets_Data (
	Zip_Code INT,	
	business_status VARCHAR,
	name VARCHAR,
	lat VARCHAR,
	lng VARCHAR,
	country_code VARCHAR
);


