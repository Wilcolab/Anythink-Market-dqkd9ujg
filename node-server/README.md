# Node Server

This project is a simple Express server called `node-server` that listens on port 8001. It is designed to be lightweight and serves as a starting point for building more complex applications.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or higher)
- Yarn (version 1.22 or higher)
- Docker (optional, for containerization)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/microsoft/vscode-remote-try-node.git
   cd node-server
   ```

2. Install the dependencies:

   ```
   yarn install
   ```

### Running the Server

To run the server in development mode with automatic restarts on code changes, use:

```
yarn start
```

The server will be available at `http://localhost:8001`.

### Building the Docker Image

To build the Docker image, run the following command in the project root:

```
docker build -t node-server .
```

### Running the Docker Container

After building the image, you can run the container with:

```
docker run -p 8001:8001 node-server
```

The server will be accessible at `http://localhost:8001`.

### License

This project is licensed under the MIT License.