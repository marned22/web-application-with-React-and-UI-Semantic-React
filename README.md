# СПОРТ ВО БИТОЛА (Sports in Bitola)

A React-based web application showcasing sports teams and activities in Bitola, Macedonia. The website features information about football (ФК Пелистер), handball (РК Еурофарм Пелистер), basketball (КК Пелистер), and the fan group Чкембари.

## 🚀 Features

- **Multi-sport Coverage**: Football, Handball, Basketball teams information
- **Team Rosters**: Complete player profiles with statistics and photos
- **Match Results & Fixtures**: Current and upcoming match schedules
- **League Tables**: Live standings for different competitions
- **News Section**: Latest sports news and updates with local storage
- **Fan Group Information**: Dedicated section for Чкембари supporters
- **Responsive Design**: Mobile-friendly interface using Semantic UI React

## 🏗️ Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Main navigation with hamburger menu
│   ├── Footer.js       # Site footer
│   ├── fudbal/         # Football-specific components
│   └── rakomet/        # Handball-specific components
├── pages/              # Main page components
│   ├── pocetna/        # Home page
│   ├── fudbal/         # Football section (ФК Пелистер)
│   ├── rakomet/        # Handball section (РК Еурофарм Пелистер)
│   ├── kosarka/        # Basketball section (КК Пелистер)
│   └── ckembari/       # Fan group section
├── novosti/            # News management with local storage
├── App.js             # Main application component with routing
└── index.js           # Application entry point

public/
├── images/             # Static images for teams and players
├── *.json             # Data files (rezultati.json, sledni.json, tabela*.json)
├── index.html         # HTML template
└── favicon.ico        # Site favicon
```

## 📚 Technologies Used

- **React** (^18.x) - Frontend framework
- **React Router DOM** - Client-side routing for navigation
- **Semantic UI React** - UI component library for responsive design
- **JavaScript ES6+** - Programming language
- **CSS3** - Custom styling
- **JSON** - Data storage for match results, fixtures, and tables
- **Local Storage** - Browser storage for news management

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## ⚙️ Setup and Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/marned22/web-application-with-React-and-UI-Semantic-React.git
   cd web-application-with-React-and-UI-Semantic-React
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Available Routes

- `/` - Home page with latest news and match schedules
- `/fudbal` - Football team (ФК Пелистер) information
- `/fudbal/rezultati` - Football match results
- `/fudbal/sledni` - Upcoming football matches
- `/fudbal/tabela` - Football league table
- `/fudbal/sostav` - Football team roster
- `/rakomet` - Handball team (РК Еурофарм Пелистер) information
- `/rakomet/rezultati` - Handball match results
- `/rakomet/sledni` - Upcoming handball matches
- `/rakomet/tabela` - Handball league table
- `/rakomet/sostav` - Handball team roster
- `/kosarka` - Basketball team information
- `/ckembari` - Fan group information

## 🏃‍♂️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## 📊 Data Management

The application uses:

- **JSON files** in the `public` directory for sports data:
  - `rezultati.json` / `rezultatiR.json` - Match results
  - `sledni.json` / `sledniR.json` - Upcoming fixtures
  - `tabela*.json` - League tables
  - `novosti.json` - News articles

- **Local Storage** for news management (add, edit, delete news)

## 🎨 UI Components (Semantic UI React)

- **Navigation**: Menu, Segment for responsive navigation
- **Data Display**: Table, Card, Image, Header for content presentation
- **Layout**: Grid, Divider, Container for responsive layouts
- **Interactive**: Button, Modal, Accordion, Tab for user interactions
- **Typography**: Header with various sizes and styling

## 🌐 Language Support

The application is primarily in Macedonian (Cyrillic script):
- Team names and content in Macedonian
- Navigation and UI elements in Macedonian
- News section supports Macedonian content

## 📱 Responsive Features

- **Mobile Navigation**: Hamburger menu for mobile devices
- **Responsive Tables**: Scroll-friendly tables on small screens
- **Flexible Grid**: Semantic UI Grid system for layout adaptation
- **Touch-friendly**: Optimized for mobile interactions

## 🔧 Key Features Implementation

- **Dynamic Routing**: React Router for seamless navigation
- **Data Fetching**: Fetch API for loading JSON data
- **State Management**: React hooks (useState, useEffect)
- **Component Reusability**: Shared components across different sports sections
- **News Management**: Full CRUD operations with local storage persistence

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Create React App](https://github.com/facebook/create-react-app) - Project bootstrapping
- [Semantic UI React](https://react.semantic-ui.com/) - UI component library
- [React Router](https://reactrouter.com/) - Routing solution
- Sports teams: ФК Пелистер, РК Еурофарм Пелистер, КК Пелистер
- Fan group: Чкембари

---

**Note**: This is a frontend-only application that uses static JSON files and local storage for data management. No backend server or database is required.
