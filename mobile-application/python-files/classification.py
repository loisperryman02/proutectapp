import tensorflow as tf
import tensorflow_hub as hub
import tensorflow_text as text
import pandas as pd 
from sklearn.model_selection import train_test_split
from sklearn.metrics.pairwise import cosine_similarity

df = pd.read_csv('C:\\Users\\User\\Documents\\GitHub\\proutectapp\\mobile-application\\python-files\\sentiment_analysis_training_set.csv')

# Assigns 1 to positive feedback and 0 to negative feedback - creates a new column in original dataframe
df['safe'] = df['Sentiment'].apply(lambda x: 1 if x=='Positive' else 0)

# Creates train and test set
X_train, X_test, y_train, y_test = train_test_split(df['Feedback'], df['safe'], stratify=df['safe'])

# Must download pre-trained models for semantic analysis
bert_preprocess = hub.KerasLayer("https://www.kaggle.com/models/tensorflow/bert/frameworks/TensorFlow2/variations/en-uncased-preprocess/versions/3")
bert_encoder = hub.KerasLayer("https://www.kaggle.com/models/tensorflow/bert/frameworks/TensorFlow2/variations/en-uncased-l-12-h-768-a-12/versions/4")

def get_feedback_embedding(feedback):

    # Preprocessing stage 
    prepocessed_feedback = bert_preprocess(feedback)

    # Encoding stage
    return bert_encoder(prepocessed_feedback)['pooled_output']

# Sequential vs Functional Model in Keras.. read article 

# Input layer of NN
text_input = tf.keras.layers.Input(shape=(), dtype=tf.string, name="text")
preprocessed_text = bert_preprocess(text_input)
outputs = bert_encoder(preprocessed_text)

# Neural Network layers
l = tf.keras.layers.Dropout(0.1, name='dropout')(outputs['pooled_output'])
l = tf.keras.layers.Dense(1, activation='sigmoid', name='output')(l)

# Construct final model
model = tf.keras.Model(inputs=[text_input], outputs=[l])

print(model.summary())

# Training parameters - 769 as input parameters are 768.
METRICS = [
    tf.keras.metrics.BinaryAccuracy(name='accuracy'),
    tf.keras.metrics.Precision(name="precision"),
    tf.keras.metrics.Recall(name='recall')
]

optimizer = tf.keras.optimizers.Adam(learning_rate=2e-5)
model.compile(optimizer=optimizer,
              loss = 'binary_crossentropy',
              metrics = METRICS)


print(model.fit(X_train, y_train, epochs=10))
print(model.evaluate(X_test, y_test))

y_predicted = model.predict(X_test)
y_predicted = y_predicted.flatten()

import numpy as np 

y_predicted = np.where(y_predicted > 0.5, 1, 0)
print(y_predicted)

from sklearn.metrics import confusion_matrix, classification_report

cm = confusion_matrix(y_test, y_predicted)

print(cm)

from matplotlib import pyplot as plt
import seaborn as sn

sn.heatmap(cm, annot = True, fmt = 'd')
plt.xlabel("Predicted")
plt.ylabel("Truth")
plt.show()























