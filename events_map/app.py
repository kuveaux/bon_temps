from flask import Flask
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
from config import password

# flask setup
app = Flask(__name__)
# database setup
Base = automap_base()
engine = create_engine(f"postgresql+psycopg2://akufoy:{password}@rds-postgresql-bon-temps.capxvife87l2.us-east-2.rds.amazonaws.com:5432/bon_temps")
Base.prepare(engine, reflect=True)
Events = Base.classes.events
session = Session(engine)

# template rendering
@app.route("/")
def home():
    return render_template("index.html")

# route - leaflet
@app.route("/api/leaflet_data")
def leaflet_data():
    
    return 

if __name__ == "__main__":
    app.run(debug=True)