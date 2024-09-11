# CIRACORE Face Recognition System

This project utilizes a face recognition system built with CIRACORE, using various modules for facial detection, recognition, data processing, and API integration. Below is a description of the functionality of each key component.

## System Overview

The system is divided into several modules connected together to perform facial recognition tasks. Each module has specific functions:

### Diagram of CIRACORE
Below is the diagram of the CIRACORE system:

![Diagram of CIRACORE](./images/CIRACORE_DIAGRAM.png)

### 1. **ROS Server (ROS_SERVER)**
   The ROS (Robot Operating System) server is responsible for managing and processing commands and data from connected devices or systems. It serves as a communication hub for the face recognition operations.

### 2. **FaceRec Module (FaceRec)**
   The FaceRec module is used for face detection and recognition. It is configured to detect faces based on specified parameters, such as the size of the face and the bounding box for face detection. Once a face is detected, it forwards the image for further processing.

### 3. **JavaScript Code for Face Matching (Face Matching)**
   This module uses JavaScript to compare the detected face with the trained data in the Face Train module. The system uses facial coordinates (x-values) and sorts them in ascending order to match the face against the database.

### 4. **JavaScript Code for Unrecognized Faces (Face Status)**
   Another JavaScript module checks whether the face detected in the image exists in the database:
   - If the face does not match any record, it labels the face as "Unknown."
   - If no face is detected at all, it returns the status "No Face Found."

### 5. **JavaScript Code for Linebot Response (Linebot Check)**
   This module uses JavaScript to verify whether the processed result is sent to another field via Linebot. It ensures that the system can notify the user by sending the face recognition results back to the Linebot.

### 6. **Python Code for API Integration (API to Google Sheets)**
   The Python module is responsible for sending the processed data, including the payload from face recognition, to Google Sheets via an API. This allows for easy storage and further analysis of the recognition results.

## Features
- **Face Detection**
