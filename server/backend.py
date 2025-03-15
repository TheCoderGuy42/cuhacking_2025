from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def Test():
    return "<p>Test</p>"

if __name__ == "__main__":
    app.run()