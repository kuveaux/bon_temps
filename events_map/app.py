from flask import Flask

app = Flask(__name__)


# define static routes
@app.route("/")
def index():
    return 


@app.route("/about")
def about():
    return 


@app.route("/contact")
def contact():
    return 

if __name__ == "__main__":
    app.run(debug=True)