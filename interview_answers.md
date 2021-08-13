# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

sharing state down a component tree, so we no longer need props drilling

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are objects which have a type and might have a payload

reducers are apps state management center, it gets the action object after dispatch function calls the action and perform an operation on the state depending on the action type

store is a state container that hold the apps state and it is called the single source of truth because the only way to change data in UI is by dispatching an action which will change the state within a reducer

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

it allows us to call action creators that return a function that takes dispatch method as an argument allowing us to dispatch synchronous action after api asynchronous call has finished

4. What is your favorite state management system you've learned and this sprint? Please explain why!
context api, because its so simple and easy to implement