# Data Structure Visualization

[![Vercel Deployment](https://img.shields.io/badge/Deployment-Vercel-black?style=flat&logo=vercel)](https://data-structure-visualization-alpha.vercel.app/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Rishabh028/Data-Structure--Visualization/blob/main/LICENSE)

An interactive web-based platform for visualizing common data structures and their algorithms. This tool is designed to help students, developers, and enthusiasts understand how data structures work by seeing their operations animated step-by-step.

### [View Live Demo](https://data-structure-visualization-alpha.vercel.app/)



## Overview

This application provides a hands-on learning experience by bridging the gap between abstract data structure concepts and their practical implementation. Users can write JavaScript code to perform operations like `insert`, `push`, or `pop` on various data structures and immediately see the visual consequences of their code. The animation panel illustrates every step of the algorithm, from finding an insertion point in a tree to rebalancing nodes.

## Key Features

-   **Interactive Visualizations:** Watch algorithms animate in real-time as your code executes.
-   **Live Code Editor:** Write your own JavaScript code to manipulate data structures and see the results instantly.
-   **Adjustable Speed:** Control the animation speed with a slider to closely inspect complex operations.
-   **Multiple Data Structures:** Support for a wide range of common data structures.
-   **Modern UI:** A sleek, responsive dark-mode interface built with React for a great user experience.

## Supported Data Structures

The platform currently supports the visualization of the following data structures and their primary operations:

-   **Set (Red-Black Tree):** `insert`, `erase`
-   **List / Deque:** `push_front`, `pop_front`, `push_back`, `pop_back`
-   **Stack:** `push`, `pop`
-   **Queue:** `push`, `pop`
-   **Priority Queue:** `push`, `pop`

## Tech Stack

-   **Frontend:** [React.js](https://reactjs.org/) (v16, using class components)
-   **Styling:** Plain CSS3 with a component-based stylesheet structure.
-   **Deployment:** [Vercel](https://vercel.com) for continuous integration and delivery.

## Project Structure

The codebase is organized to separate concerns, making it easier to maintain and extend.

```
/src
├── App.js              # Main application component and layout
├── component/          # All React components
│   ├── container/      # Components for animating specific data structures
│   ├── staticContainer/# Components for non-animated data displays
│   ├── InputSection.js # Right-side panel with code/data inputs
│   └── ShowSection.js  # Left-side panel for the main visualization
├── data/               # Logic for data parsing and visualization
│   └── visualizeContainer/ # Core logic for each data structure's operations
└── stylesheet/         # CSS files, mirrored to the component structure
```

-   **`src/component`**: Contains all UI components. The most important are `ShowSection` (the visualization canvas) and `InputSection` (the code editors).
-   **`src/component/container`**: Holds the components responsible for rendering and animating each step of an algorithm (e.g., `Insert.js` for a Red-Black Tree insertion).
-   **`src/data/visualizeContainer`**: This is the "brain" of the application. Each file here defines the sequence of states for an operation (e.g., `setTree.js` defines the steps for inserting into a set).

## Local Development

To run this project on your local machine, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v16 or later) and [npm](https://www.npmjs.com/) installed.

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
    This project was built with an older version of `react-scripts` that has a conflict with recent Node.js versions. The `start` script is already configured to handle this.
    ```sh
    npm start
    ```
    The application will open in your browser at `http://localhost:3000`.

## Deployment

This project is deployed on **Vercel**. The deployment process is fully automated:

-   A push or merge to the `main` branch on GitHub automatically triggers a new build and deployment on Vercel.
-   The `NODE_OPTIONS` environment variable is set to `--openssl-legacy-provider` in the Vercel project settings to ensure successful builds.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Rishabh028/Data-Structure--Visualization/blob/main/LICENSE) file for details.
