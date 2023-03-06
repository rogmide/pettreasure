# Pettreasure - Capstone Project
	
- #### Find cute and smart pets to play with you

- Link:

	https://pettreasure.net/
	
	### Pet Treasure:

	- 	All in one place, all users on this site will have the opportunity to find the best companion.

	- Is a pet adoption website to help the customer find the pet they are looking for. With an easy UI. Pet Treasure uses a real-time API that brings information about pets available to be adopted.

	### Features

	- Display a list of pets of different types that are available to be adopted. 
	- Display a range of pet organization information 
	- Users can save their favorite pets that they like 
	- Users can leave a comment for pets 
	- Users can see recent pet's view
	- Users can search for a pet using a location, City, State, or Zip Code

	### API

	- PetFinder For Developers

	- Link: 
	
		- https://www.petfinder.com/developers/v2/docs/


	### Technology Use
	
	- ReactJS
	- JavaScript
	- PostgreSQL
	- Nginx
	- Ubuntu 22.04.1 LTS

- ### To Run The Project Local

	- Get a API TOKEN and API SECRET KEY from https://www.petfinder.com/developers/v2/docs/
	
	- run capstone.sql file
		
		  psql < capstone.sql

	- With the Database created you need to update "config table" with the API TOKEN and SECRET KEY

		  INSERT INTO config (api_key, secret_key, api_token) VALUES ('API TOKEN', 'API SECRET KEY', 'dont change this field');


# Project Proposal

- Link
	
	https://docs.google.com/document/d/1j0J_hVuvATXpy0M0NSr48YtzvjUFC3hXvfYkfp04eb8/edit#heading=h.2gazcsgmxkub#

# Database Schema

- Link: 

	https://github.com/rogmide/pettreasure/tree/main/dbschema