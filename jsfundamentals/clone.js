const user = {
  name: "Alex",
  address: { city: "Berlin", zip: "10115" }
};

// 1) Shallow copy
const copy1 = { ...user };

// 2) Deep (JSON)
const copy2 = JSON.parse(JSON.stringify(user));

// 3) Modern deep clone
const copy3 = structuredClone(user);

// Mutations
copy1.address.city = "Rome";
copy2.address.city = "Madrid";
copy3.address.city = "Paris";

// Print all in one line
console.log([
  `user: ${user.address.city}`,
  `copy1: ${copy1.address.city}`,
  `copy2: ${copy2.address.city}`,
  `copy3: ${copy3.address.city}`
].join(" | ")
); // user: Rome | copy1: Rome | copy2: Madrid | copy3: Paris
