# Finbro expense-tracker

### See live version: [click](https://expense-tracker-app-c20f7.web.app/)

## A fully responsive expense tracker web app.

#### Project including: Landing page, Authentication pages and Dashboard for the main part. Users are welcomed on a home page, with little description about the application. When you're creating an account you are redirected to dashboard, where there is an intuitive UI for adding and deleting Expense transactions and Income transactions, and analyzing the data on the provided charts. Transactions are stored in Firestore database provided by Firebase and data is filtered so it can be displayed in the charts.

*bug to fix: reactivity problem in the Dashboard/Overview section when adding a new transaction

#### In the Overview section chart it is displayed only the totals summed every day from the last 7 days. Charts are updated dynamically thanks to Browser's Date that let me to calculate valid dates so I could properly filter transactions and build the data for the charts. 

### Firebase - firestore for database and authentication.

### Tailwindcss for styling

### React.js for UI

### Written is Typescript

### State Management initially made using the React Context API, then switched it to redux/toolkit.

### Using react-chartjs for the charts.



![Dashboard UI Image](https://i.imgur.com/7I3khIf.png)




