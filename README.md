# Python Server

This project contains a FastAPI server implemented in Python. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the FastAPI server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the FastAPI server and start the containers defined in the `docker-compose.yml` file.

- The FastAPI server should now be running. You can access at port `8000`.

## API Routes

The FastAPI server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.

# Node Server

This project also includes a Node.js server implemented with Express. It provides two routes for managing a task list.

## Project Structure

The Node server has the following files and directories:

- `node-server/src/index.js`: Contains the Express server implementation with two routes for adding and retrieving tasks.
- `node-server/src/__init__.js`: (Optional) Placeholder file if you want to mark the directory; not required in Node.js.
- `node-server/package.json`: Lists the dependencies and scripts for the Node server.
- `node-server/Dockerfile`: Used to build a Docker image for the Node server. It sets up the environment, installs dependencies, copies the source code, and specifies the start command.

## Getting Started

To run the Node server using Docker:

- Build and start the Docker containers with:

  ```shell
  docker compose up
  ```

  This will build the Docker image for the Node server and start the containers as defined in `docker-compose.yml`.

- The Node server will be accessible at port `8001`.

## API Routes

The Node server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.
- `GET /tasks`: Retrieves the task list.