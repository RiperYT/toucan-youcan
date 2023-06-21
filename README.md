Our application is designed to simplify the process of organizing and creating schedules for various educational organizations. We recognized the importance of having a centralized location to manage schedules and wanted to make the process as simple and convenient as possible. To begin, we spent a considerable amount of time researching and analyzing the topic, taking into account the various needs and preferences of potential users. This research allowed us to determine the essential features and functionalities required for an effective schedule management tool. We then moved on to design, creating several mockups and interface designs before finalizing the overall look and feel of the application. Our front-end was built using React, which allowed us to implement the design elements seamlessly and create a user-friendly interface. For the server-side logic, we opted for asp.net core web API, which provided us with the necessary tools to manage the backend functionalities of our application. This allowed us to focus on the core features of the application and optimize the code for better performance. The application itself allows users to create organizations and categorize them into subjects, making it easy to manage schedules for different classes or courses. From there, users can create schedules, edit them, and view the resulting timetable in a variety of convenient formats, including Google Calendar, Outlook Calendar, and a Telegram bot. Overall, we believe that our application will be an invaluable tool for educators and students alike, helping them to stay organized and manage their time effectively. We are proud of our development path, which involved careful planning, meticulous design, and efficient implementation, resulting in a high-quality product that meets the needs of our users.
This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

Для створення бази даних треба встановити докер після чого ввести ці команди:

1. Створення контейнеру: docker run --name scheduler -p 5602:5432 -e POSTGRES_PASSWORD=justsomepassword -d postgres:12

2. Встановлення готової бази даних(без реалізована і завантажена пізніше): .\bin\psql.exe -U sheduler_admin -p 5602 -a -f sheduler-dump.sql

В майбутньому бекенд частина вебзастосунку буде також перероблена в докер образ, після чого її також треба буде запускати через контейнер для зручної автоматизації.