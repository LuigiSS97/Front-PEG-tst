[![](/peg-contas.png)]()

# Front end code challenge
Hello!

Thanks for your interest in joining the team :)
This is a front end code challenge designed to access the ability of a front-end candidate to create an app using our current technology stack.

We wish you the best of luck!

## Overview 
Your challenge is to build a vue.js app that reproduce one of ours screen with mocked data. [![](/test-goal.jpg)]()

## Required
- Implement layout;
- Use some features of ES6+;
- Show us your work through your commit history;
- Use test server data;

## Recommendations
- Use vue-cli to create your project;
- All the assets you need is in `/assets/` directory;
- Use any additional library;

## Bonus
- Layout responsiveness;
- Use any CSS preprocessor;
- Select of activities;
> You have to change the route when you select a new activity and show at the url the id of this activity. The same when you change the page
- Filter "Organizar por:";
> Must have options ["Prioridade(SLA)" and "Receber documentos"]. When you filter by the first option you have to reorganize the card by the highest value in the variable `days`. In the second filter you have to show only the cards with the property `hasPendingDocument = true`
- Select all;
> Must select all checks at the cards that the property `hasPendingDocument = false`
- Use some state managing solution;
- Unit tests or any other test you think is important.
- Host the website on the service of your choice;

## Evaluation criteria
- Code organization
- Code readability
- Commit history - structure and quality in english
- Component-based structure
- Reusable Components
- Libraries used
- ES6 features
- Vue Conventions

## How to run test server
- Install npm package with terminal command `yarn` or `npm install`
- Run server with terminal command `yarn server` or `npm run server`
- Keep the terminal open when you use the test server, it will show you the routes.
> It's possible to complete the test with routes `/activities` and `/activity/:activityId/cards`, but you can also use: `/activity/:activityId` and `/cards`

## Submission instructions
1. Create a GitHub repository for the test;
2. Create a new readme file with the instructions to run the project, and add any comments that you think is relevant;
3. You can make the repository public or enable access for our devs: dsnjunior or edim.

## Questions? 
> If you have any questions, you can create an issue on our repository and we will clear things up for you :)
