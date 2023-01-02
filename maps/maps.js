const store = new Map([
    ["t-shirt", 20],
    ["shorts", 30],
    ["jeans", 50]
]);

store.forEach((value, key) => {
    console.log(`Value: ${value}, key: ${key}`);
})

console.log(store.get("jeans"));
console.log(store.set("jeans", 100));
store.delete("shorts")
console.log(store);
console.log(store.has("shorts"));
console.log(store.size);