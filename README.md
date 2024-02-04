# Livestream Overlay Management App

Welcome to the Livestream Overlay Management App! This application allows users to view livestream videos from RTSP URLs and add custom overlays on top of the livestream.

## Features

- View livestream videos from RTSP URLs
- Add custom overlays such as logos and text
- Position and resize overlays as needed
- CRUD API for managing overlay settings

## Tech Stack

- Python (Flask)
- MongoDB
- React
- Video Streaming compatible with RTSP

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies:
   - Backend (Flask): Navigate to the `backend` directory and run `pip install -r requirements.txt`
   - Frontend (React): Navigate to the `frontend` directory and run `npm install`
3. Set up MongoDB: Ensure MongoDB is installed and running locally or configure the connection URI in the Flask backend (`app.py`)
4. Start the backend server: Navigate to the `backend` directory and run `python app.py`
5. Start the frontend server: Navigate to the `frontend` directory and run `npm start`
6. Access the application in your browser at `http://localhost:3000`

## API Documentation

### Overlay Endpoints

- **Create Overlay**: `POST /overlay/create`
- **Read Overlay Settings**: `GET /overlay/settings`
- **Update Overlay**: `PUT /overlay/update/<overlay_id>`
- **Delete Overlay**: `DELETE /overlay/delete/<overlay_id>`

For detailed information on how to interact with these endpoints, refer to the API documentation.

## User Documentation

Please refer to the user documentation provided in the `docs` directory for instructions on setting up and using the app. It includes details on inputting RTSP URLs, managing overlays, and more.

## Contributing

Contributions are welcome! Please submit any issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
