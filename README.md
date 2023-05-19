# LAB - Class 31/ Class 32 / Class 33 / Class 34

## Project: todo-app

### Author: Mohammed Abubakar

### Problem Domain  

Phase 1

1. Implement the React context API for defining settings across the entire application.
    - Create React Context for managing application display settings and provide this at the application level.
    - Add the following defaults to the context provider’s state, they will not be changeable in this lab.
      - Display three items.
      - Hide completed items using a boolean.
      - Define “difficulty” as a default sort word to optionally use in the stretch goal.

2. Consume and utilize context values throughout your components.
    - Show a maximum of three items per screen by default in the `<List />` component.
   - Use the Mantine `<Pagination />` component to allow users to navigate a list of items.
    - Hide completed items in the list by default (the ability to show will be added in a later lab).

3. Pagination Notes:

    - Only display the first n items in the list, where n is the default number three from your settings context.
    - If you have more than n items in the list, the `<Pagination />` component will add a button that, when clicked, will replace the list with the next n. items in the list.
    - the `<Pagination />` component will manage the “previous” and “next” buttons upon correct implementation.

Phase 2

1. Extend your `context` provider to include all of the following features:
    - Create a `context` for managing application settings and provide this at the application level.
    - Display or Hide completed items (boolean).
    - Number of items to display per screen (number).
    - Default sort field (string).
    - Create a function in your context that saves user preferences (for the above) to local storage.
    - Implement a `useEffect()` (or `componentDidMount()`) in your context to read from local storage and set the values for those 2 state properties on application load.
        - Note: You will need to `stringify()` your state prior to saving to local storage, and parse it when you retrieve it.

2. Consume and utilize `Context` values throughout your components:
    - Show a maximum of a certain number of items per screen in the `<List />` component.
        - Properly implement the Mantine `<Pagination />` component functionality to let the users navigate a long list of items with the correct number of tasks showing per “page”.
    - Hide or show completed items in the list.

Phase 3 

1. Implement a Login/Auth React Context, “protect” the To Do application by restricting access to the various application features based on the users’ login status and capabilities.
    - Define a function that can simulate a `login` event.
        - Parameters: username and password as strings.
        - Sets a `User` on the auth context, and changes login status to `true`.
    - Define a function that can simulate a `logout` event.
        - Resets the `User` object and changes login status to `false`.
    - Define a function that can `authorize` a User based on a capability.
        - Parameters: a capability as a string.
        - Returns a boolean whether the `user` has the capability parameter.
2. Create an `<Auth />` component with the following features:
    - Given a capability prop of type string, conditionally render components based on the `user` stored in `context`.
    - Hide the entire interface until the user has logged in.
    - Implements the following RBAC rules:
        - Logged In Users with ‘update’ permissions can click the records to mark them as complete.
        - Logged In Users with ‘create’ permissions can create new items.
        - Logged In Users with ‘delete’ permissions can delete items.
        - Logged In Users with ‘read’ permissions can see the list of To Do Items.

Phase 4

1. Alter the Add, Toggle Complete, and Delete functions within your to do application to use your API instead of in memory state.
    - Fetch the current list of items from the database on application start.
    - Whenever you add/update/delete an item, refresh the state so the user can instantly see the change.
     - Consider: Do you re-fetch from the server every time you make a change?
         - If so, how?
         - If not, how will you stay in sync?
2. Alter the Login Context to use the server to login users instead of our mock users list

### Links and Resources


### Setup

#### How to initialize/run your application (where applicable)

npm start


