# Type Alias vs Interface in TypeScript: Core Differences and When to Use Which

In TypeScript, **Type Alias** and **Interface** are two extremely important features used to ensure type safety in our code. They allow us to define the exact shape of our data, making it very easy to manage bugs and prevent errors before runtime. Below, we will discuss the core differences between these two features and explore when to choose which.

## Core Differences Between Type Alias and Interface

**Keyword:** To define a Type Alias, we use the `type` keyword, whereas an Interface is created using the `interface` keyword.
**Declaration Merging:** If two interfaces are defined with the exact same name, TypeScript automatically merges them into a single interface. On the other hand, defining two Type Aliases with the same name results in a duplicate identifier error.
**Usage:** Interfaces are typically preferred for defining the shapes of objects or classes. Conversely, Type Aliases are essential for defining primitive types (`string`, `number`), union types (`|`), tuples, or function signatures.
**Extending:** An interface can easily inherit from another interface using the `extends` keyword. In contrast, a Type Alias combines multiple structures by using the intersection (`&`) operator instead of inheritance.

### Code Examples

```typescript

interface User {
  name: string;
}

interface User {
  age: number;
}

interface Admin extends User {
  role: string;
}


type ID = string | number;
type Product = { title: string } & { price: number };
```

## When to Choose One Over the Other

When you need to define the shape of a standard object, handle API responses, or plan to extend the interface in the future, using an `interface` is generally the best approach. However, when you need to define primitive values, complex union types, or specialized tuples for a variable or function, an `interface` cannot be used. In all such scenarios, choosing a `type` alias is the ideal and only option.

## Conclusion

In conclusion, both Type Alias and Interface are vital concepts for maintaining structural integrity and type safety in TypeScript. Utilizing them correctly in their respective places makes our code significantly more readable, helps keep the application bug-free, and dramatically reduces runtime errors.
