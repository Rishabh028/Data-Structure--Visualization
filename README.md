# Data Structure Visualization

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Rishabh028/Data-Structure--Visualization/blob/main/LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-brightgreen)](https://rishabh028.github.io/Data-Structure--Visualization/)

An interactive web-based platform for visualizing common data structures and their algorithms. This tool is designed to help students, developers, and enthusiasts understand how data structures work by seeing their operations animated step-by-step.

### 📌 [Live Demo](https://data-structure-visualization-2ugvtn9sy-rishabh028s-projects.vercel.app/)



## Features

- **Interactive Visualizations:** Watch algorithms animate in real-time.
- **Code Editor:** Write your own JavaScript code to manipulate data structures and see the results.
- **Speed Control:** Adjust the animation speed to your preferred pace.
- **Multiple Data Structures:** Support for a wide range of common data structures.
- **Modern UI:** A sleek, responsive dark-mode interface built with React.

## Supported Data Structures

The platform currently supports the visualization of the following data structures and their primary operations:

-   **List / Deque:** `push_front`, `pop_front`, `push_back`, `pop_back`
-   **Stack:** `push`, `pop`
-   **Queue:** `push`, `pop`
-   **Priority Queue:** `push`, `pop`
-   **Set (Red-Black Tree):** `insert`, `erase`
-   **Map (Red-Black Tree):** `insert`, `erase`

## Tech Stack

-   **Frontend:** [React.js](https://reactjs.org/)
-   **Styling:** CSS3 with a modern, responsive design
-   **Deployment:** [GitHub Pages](https://pages.github.com/)

## Getting Started

To run this project on your local machine, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Rishabh028/Data-Structure--Visualization.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd Data-Structure--Visualization
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

4.  **Run the development server:**
    ```sh
    npm start
    ```
    The application will open in your browser at `http://localhost:3000`.

    > **Note:** If you encounter an `error:0308010C:digital envelope routines::unsupported` error when running `npm start`, it is due to a conflict with recent Node.js versions. The project is already configured to handle this. The `start` script in `package.json` uses the `--openssl-legacy-provider` flag to resolve it.

## How to Use

1.  **Write Code:** Use the "Write Code" editor on the right to write JavaScript commands to interact with the data structures. Sample code is provided to get you started.
2.  **Provide Input:** Use the "Input Data JSON" field to provide any initial data your code might need.
3.  **Execute:** Click the "submit" button to run your code.
4.  **Visualize:** The visualization panel on the left will animate the operations you've executed.
5.  **Control Speed:** Use the "speed bar" slider to control the animation speed.

## Deployment

This project is deployed using GitHub Pages. The `npm run deploy` command triggers the following process:

1.  The `predeploy` script runs `npm run build`, creating a production-ready `build` folder.
2.  The `deploy` script uses the `gh-pages` package to push the contents of the `build` folder to a special `gh-pages` branch in the repository.
3.  GitHub automatically serves the content of this branch as a static website.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

