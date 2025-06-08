// components/ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("🚨 Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
        return (
            <div className="text-center p-40 bg-productGray h-[100vh] font-urbanist">
                <h1 className="text-2xl font-bold text-red-600 ">Something went wrong 😞</h1>
                <p className="mt-2 text-gray-700">Please, try to refresh the page.</p>
            </div>
        );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
