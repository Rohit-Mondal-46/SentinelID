from flask import Blueprint, jsonify

mint_sbt_bp = Blueprint("mint_sbt", __name__)

@mint_sbt_bp.route("/", methods=["POST"])
def mint():
    # Simulate minting an SBT
    return jsonify({"status": "✅ SBT minted successfully"})
