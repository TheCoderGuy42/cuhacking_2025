from flask import Flask, request, jsonify
from bs4 import BeautifulSoup
import requests 
import os 
import googlemaps
import psycopg2

app = Flask(__name__)

@app.route("/")
def Test():
    return "<p>Test</p>"

if __name__ == "__main__":
    app.run()

# web scraping
def scrape():
    url = "https://volunteerottawa.ca/volunteer/search-volunteer-opportunities/"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")


# database connection 
def connect():
    conn = psycopg2.connect(
        host="localhost",
        database="postgres",
        user="postgres",
        password="password"
    )
    return