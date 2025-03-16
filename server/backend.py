from flask import Flask, request, jsonify
from bs4 import BeautifulSoup
import requests 
import os 
import googlemaps
import psycopg2
import time
from dotenv import load_dotenv
import requests
import json

load_dotenv()

"""app = Flask(__name__)

@app.route("/")
def Testing():
    return "<p>Test</p>"
"""
class Test:
    def __init__(self):
        self.key = os.getenv("API_KEY")  # Ensure this is set in your .env file

    def get_distance(self, origin, destination):
        url = "https://routes.googleapis.com/directions/v2:computeRoutes"
        headers = {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": self.key,
            "X-Goog-FieldMask": "routes.distanceMeters,routes.duration"
        }
        payload = {
            "origin": {
                "address": origin
            },
            "destination": {
                "address": destination
            },
            "travelMode": "DRIVE"
        }
        response = requests.post(url, headers=headers, data=json.dumps(payload))
        data = response.json()
        return data


def scrape():
    url = "https://volunteerottawa.ca/volunteer/search-volunteer-opportunities/"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    listings = []
    all_listings = soup.select("div.elementor-widget-wrap.elementor-element-populated")
    for listing in all_listings:
        title = listing.select_one("div.jet-listing-dynamic-field__content")
        title_text = title.get_text(strip=True) if title else "No Title"
        
        org_type = "No Org Type"
        volunteer_type = "No Volunteer Type"
        commitment = "No Commitment"
        location = "No Location"
        deadline = "No Deadline"

        terms_divs = listing.select("div.jet-listing.jet-listing-dynamic-terms")
        for div in terms_divs:
            text = div.get_text(strip=True)
            if text.startswith("Organization types:"):
                org_type = text.replace("Organization types:", "").strip()
            elif text.startswith("Volunteer Types:"):
                volunteer_type = text.replace("Volunteer Types:", "").strip()
            elif text.startswith("Commitment:"):
                commitment = text.replace("Commitment:", "").strip()
            elif text.startswith("Location:"):
                location = text.replace("Location:", "").strip()

        deadline_div = None
        for d in listing.select("div.jet-listing-dynamic-field__content"):
            if "Deadline:" in d.get_text():
                deadline_div = d
                break
        if deadline_div:
            d_text = deadline_div.get_text(strip=True) 
            if d_text.startswith("Deadline:"):
                deadline = d_text.replace("Deadline:", "").strip()
         
        link = listing.select_one("a.jet-listing-dynamic-link__link")
        link_url = link["href"] if link else "No Link"
        listings.append({
            "title": title_text,
            "organization_types": org_type,
            "volunteer_types": volunteer_type,
            "commitment": commitment,
            "location": location,
            "deadline": deadline,
            "link": link_url
        })
    return listings


# database connection 
def connect():
    return psycopg2.connect(
        host="localhost",
        port="5432",
        dbname="volottdb",
        user="user",
        password="password"
    )

## create the actual table for caching 
def create_table():
    sql = """
    CREATE TABLE IF NOT EXISTS listings (
        id SERIAL PRIMARY KEY,
        data JSONB
    );
    """
    with connect() as conn:
        with conn.cursor() as cur:
            cur.execute(sql)
            conn.commit()

# have to write the scrapped data into the db
def write_data(data):
    sql = "INSERT INTO listings (data) VALUES (%s);"
    with connect() as conn:
        with conn.cursor() as cur:
            cur.execute(sql, (json.dumps(data),))
            conn.commit()


if __name__ == "__main__":
    test = Test()
    create_table()
    data = scrape()
    print(f"Scraped {len(data)} listings.")
    write_data(data)
    print("Data written to database.")  
    distance = test.get_distance()
    print(distance)
