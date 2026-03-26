import os
from flask import Flask, render_template, request, send_from_directory
app = Flask(__name__)

hostels = [
    {"name": "UPES On-Campus", "location": "Bidholi Campus", "distance": 0.0, "price": 120000},
    {"name": "Greenview Hostel", "location": "Near UPES", "distance": 0.9, "price": 139000},
    {"name": "Aura for Girls", "location": "Premnagar Road", "distance": 1.1, "price": 128000},
    {"name": "Woodstock Hostel", "location": "Bidholi Area", "distance": 1.5, "price": 150000},
    {"name": "32 Bigha Hostel", "location": "Bidholi", "distance": 1.6, "price": 100000},
    {"name": "Salwoods Hostel", "location": "Pondha", "distance": 2.1, "price": 107000},
    {"name": "Aravali Hostel", "location": "Premnagar", "distance": 3.0, "price": 159000},
]

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route("/", methods=["GET"])
def index():
    try:
        max_distance = float(request.args.get("distance", "3"))
    except ValueError:
        max_distance = 3.0
    try:
        max_price = int(request.args.get("price", "160000"))
    except ValueError:
        max_price = 160000

    filtered = [
        h for h in hostels
        if h["distance"] <= max_distance and h["price"] <= max_price
    ]

    return render_template("index.html",
                           hostels=filtered,
                           distance=max_distance,
                           price=max_price)

if __name__ == "__main__":
    app.run(debug=True)
