

function App() {
  

  console.log("Logging in with:", username, password);
};

return (
  <div className="min-h-screen flex items-center justify-center bg-gray-300">
    <div className="bg-white p-8 rounded shadow-md w-96 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form className="w-full">
        <div className="mb-4 w-full">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-600"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  </div>
);
};

export default App
