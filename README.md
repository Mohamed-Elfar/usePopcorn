# 🍿 usePopcorn - Movie Database & Watchlist App

A modern React application for discovering movies and managing your personal watchlist. Built with React hooks, featuring real-time movie search, ratings, and a comprehensive movie details view.

## 🌟 Features

- **Movie Search**: Real-time search functionality using the OMDB API
- **Movie Details**: Comprehensive movie information including plot, cast, director, and ratings
- **Personal Ratings**: Rate movies with a custom star rating component
- **Watchlist Management**: Add and remove movies from your personal watchlist
- **Statistics Dashboard**: View statistics about your watched movies
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Component-Based Architecture**: Clean, modular React components

## 🚀 Live Demo

[Live Demo](https://use-popcorn-yzv6.vercel.app/)

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **JavaScript ES6+** - Modern JavaScript features
- **CSS3** - Custom styling
- **OMDB API** - Movie database API
- **Vercel** - Deployment platform

## 📚 Learning Objectives

This project demonstrates practical usage of several React concepts:

### useEffect Hook Patterns

1. **Data Fetching Effect**

   ```javascript
   useEffect(() => {
     async function fetchMovies() {
       // API call logic
     }
     fetchMovies();
   }, [query]); // Runs when query changes
   ```

2. **Cleanup Function**

   ```javascript
   useEffect(() => {
     const controller = new AbortController();
     // fetch with abort signal
     return () => controller.abort(); // Cleanup
   }, [query]);
   ```

3. **Conditional Effect Execution**
   ```javascript
   useEffect(() => {
     if (query.length < 3) {
       setMovies([]);
       return;
     }
     // Only fetch when query is long enough
   }, [query]);
   ```

### Component Architecture

- **Separation of Concerns**: Each component has a single responsibility
- **Props Pattern**: Data flows down through props
- **Event Handler Pattern**: Events bubble up through callback props
- **Custom Hooks Potential**: Reusable stateful logic (can be extracted)

### State Management Patterns

- **Derived State**: Calculating values from existing state
- **State Updates**: Using functional updates for complex state changes
- **Conditional Rendering**: Showing different UI based on state

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Box.js              # Collapsible container component
│   ├── ErrorMessage.js     # Error display component
│   ├── Loader.js           # Loading spinner component
│   ├── Logo.js             # App logo component
│   ├── Main.js             # Main layout component
│   ├── Movie.js            # Individual movie item
│   ├── MovieDetails.js     # Detailed movie view
│   ├── MoviesList.js       # Movie search results list
│   ├── Navbar.js           # Navigation bar
│   ├── NumResults.js       # Results counter
│   ├── Search.js           # Search input component
│   ├── WatchedMovie.js     # Individual watched movie item
│   ├── WatchedMoviesList.js # Watched movies list
│   └── WatchedSummary.js   # Watchlist statistics
├── App.js                  # Main application component
├── StarRating.jsx          # Reusable star rating component
├── index.css              # Global styles
└── index.js               # App entry point
```

## 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/usepopcorn.git
   cd usepopcorn
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Get OMDB API Key**

   - Visit [OMDB API](http://www.omdbapi.com/apikey.aspx)
   - Sign up for a free API key
   - Replace the API key in `src/App.js`:

   ```javascript
   const key = "your-api-key-here";
   ```

4. **Start development server**

   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Deploy to Netlify

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Upload the `build` folder to Netlify**

### Environment Variables

For production deployment, consider using environment variables for the API key:

```javascript
const key = process.env.REACT_APP_OMDB_API_KEY || "your-fallback-key";
```

## 🎯 Key Learning Points

### 1. useEffect for Side Effects

- **Data Fetching**: Making API calls when component mounts or dependencies change
- **Cleanup**: Preventing memory leaks and race conditions
- **Dependency Array**: Controlling when effects run

### 2. Component Communication

- **Props Down**: Passing data from parent to child components
- **Events Up**: Child components communicate with parents via callback functions
- **State Lifting**: Moving state to common ancestor when multiple components need it

### 3. Event Handling Patterns

- **Synthetic Events**: React's cross-browser event system
- **Event Handlers**: Functions that respond to user interactions
- **Prevent Default**: Controlling browser default behaviors

### 4. Conditional Rendering

- **Loading States**: Showing spinners during async operations
- **Error States**: Displaying error messages when things go wrong
- **Empty States**: Handling cases when there's no data to display

### 5. Performance Considerations

- **AbortController**: Cancelling fetch requests to prevent race conditions
- **Functional Updates**: Using functions in setState for better performance
- **Key Props**: Proper key usage in lists for efficient re-rendering

## 🐛 Common Issues & Solutions

### 1. API Key Issues

- **Problem**: 401 Unauthorized errors
- **Solution**: Ensure your OMDB API key is valid and not expired

### 2. CORS Issues

- **Problem**: Cross-origin request blocked
- **Solution**: OMDB API supports CORS, but ensure you're making requests from allowed domains

### 3. Search Performance

- **Problem**: Too many API calls during typing
- **Solution**: Consider implementing debouncing for search input

## 🔮 Future Enhancements

- [ ] Add debounced search to reduce API calls
- [ ] Implement local storage for watchlist persistence
- [ ] Add movie recommendations
- [ ] Include trailer integration
- [ ] Add user authentication
- [ ] Implement advanced filtering and sorting
- [ ] Add movie reviews and comments
- [ ] Create shareable watchlists

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [OMDB API](http://www.omdbapi.com/) for providing movie data
- [React](https://reactjs.org/) team for the amazing framework
- Jonas Schmedtmann for the course inspiration

---

Made with ❤️ and React
