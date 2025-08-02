import tensorflow as tf
import joblib

model = tf.keras.models.load_model("models/behavior_model.h5")
scaler = joblib.load("models/scaler.pkl")
