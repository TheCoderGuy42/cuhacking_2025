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


if __name__ == "__main__":
    test = Test()
    distance = test.get_distance()
    print(distance)


# database connection 
def connect():
    conn = psycopg2.connect(
        host="localhost",
        database="postgres",
        user="postgres",
        password="password"
    )
    return



