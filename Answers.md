1. What problem does the context API help solve?

-- context API helps keep our state clean by removing the disorganization and errors associated with prop-drilling by allowing us to store data on a context object and retrieve that data in necessary components.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-- actions are events that are dispatched and processed by a reducer, letting us know exactly what state is going to change.
-- reducers are pure functions which maintain immutability for our state.
-- the store is basically a repository which holds all of our immutable state, and handles all the dispatched actions and then updates our state.  It's known as the single source of truth because it is a single immutable state tree where all our state changes are handled.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

-- Application state is state that is managed for the entire application across all components, whereas Component state is state managed specifically in a particular parent component and it's child components.  It's much easier to debug and manage state if it's in Component state (given that the state is only managed within that component tree)
-- Application state is immutable, thus we never modify it, we just clone the state object and replace previous state with the new copy we've created.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-- redux-thunk is a middleware that allows us to handle asynchronous operations inside our action creators. It intercepts the normal redux flow and does something before actions make it to the reducer. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!

-- my favorite is Redux because it helps me conceptualize where my state is being managed.  I don't have to keep creating new state objects in multiple components and add multiple similar functions throughout my application.
Though, at the moment, i think i still find it easier to understand props and prop-drilling even though it can be cumbersome.