## Props in React

**Props** is short for **properties**.  
It is used to send data dynamically to a component. Passing a prop to a component is like passing an argument to a function.

---

### Passing Props to a Component

```js
<RestaurantCard
  resName="Hotel Shadab"
  rating="4.5"
  cuisine="Biryani, Chinese, Haleem"
/>
```

---

### Receiving Props in a Component

When props are sent, they are wrapped as a **JavaScript object**.

```js
const RestaurantCard = (props) => {
  return (
    <div>
      <h3>{props.resName}</h3>
      <h3>{props.rating}</h3>
    </div>
  );
};
```

Here, **`props`** is the default keyword that stores all the props passed to the function.

---

### Destructuring Props

```js
const RestaurantCard = ({ resName, cuisine }) => {
  return <div>{resName}</div>;
};
```

---

## Config Driven UI

A **Config Driven UI** is a user interface built and configured using a declarative config file or a data structure, rather than being hardcoded.

- The **config** is often data coming from an API which may change depending on different factors such as **user**, **location**, etc.
- Instead of hardcoding multiple components with different prop values, the **JavaScript `map()` function** can be used to loop over an array and pass the data dynamically.

---

### Example: Rendering Components Using `map()`

```js
{
  resList.map((restaurant) => (
    <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />
  ));
}
```

---

### Keys in `map()`

- While using `map()`, each item must have a **unique key**.
- This is because if a new component appears at the beginning without a unique ID, the DOM will re-render **all components** as it can't identify where to place it.
- Providing a unique **ID** helps React place components optimally, improving **performance**.

> **Note:** Never use the **index** as a key in `map()` — it is not recommended.
