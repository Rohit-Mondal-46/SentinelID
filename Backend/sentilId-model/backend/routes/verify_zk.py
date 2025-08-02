from flask import Blueprint, jsonify

verify_zk_bp = Blueprint("verify_zk", __name__)

@verify_zk_bp.route("/", methods=["POST"])
def verify():
    # Simulate ZK verification
    return jsonify({"status": "✅ ZK proof verified successfully"})
