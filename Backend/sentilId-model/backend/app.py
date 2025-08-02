from flask import Flask
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Import and register blueprints
from routes.evaluate import evaluate_bp
from routes.mint_sbt import mint_sbt_bp
from routes.verify_zk import verify_zk_bp

app.register_blueprint(evaluate_bp, url_prefix="/evaluate")
app.register_blueprint(mint_sbt_bp, url_prefix="/mint")
app.register_blueprint(verify_zk_bp, url_prefix="/verify")

if __name__ == "__main__":
    app.run(debug=True)
