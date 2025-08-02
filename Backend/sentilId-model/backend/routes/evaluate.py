from flask import Blueprint, request, jsonify
import numpy as np
from logic.classifier import model, scaler

evaluate_bp = Blueprint("evaluate", __name__)

@evaluate_bp.route("/", methods=["POST"])
def predict():
    try:
        data = request.json.get("features")
        if not data:
            return jsonify({"error": "No input features provided"}), 400

        X = np.array(data).reshape(1, -1)
        X_scaled = scaler.transform(X)
        prob = model.predict(X_scaled)[0][0]
        prediction = int(prob >= 0.5)

        return jsonify({
            "probability": float(prob),
            "prediction": prediction
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
