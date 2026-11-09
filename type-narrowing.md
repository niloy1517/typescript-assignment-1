# What is Type Narrowing in TypeScript? Provide practical examples using typeof, instanceof, and the in operator

In TypeScript, **Type Narrowing** is an incredibly important concept. It is generally used to keep our applications error-free and protect them from unexpected inputs and bugs. When a variable has multiple data types (such as a union type), type narrowing allows us to return specific results based on the exact data type at runtime. In TypeScript, this can be achieved very easily using normal `if-else` conditions.

## Detailed Body Paragraphs with Code Examples

Simply put, Type Narrowing in TypeScript is the process of keeping the application free from errors and bugs when dealing with unexpected inputs. Below are three practical code examples and explanations using the `typeof`, `instanceof`, and `in` operators:

### 1. `typeof` Operator Guard

*** Suppose we need a function to process data, and its job is to check the type of the provided input and return a specific message based on that data type.

```typescript
const processInputType = (input: string | number | boolean): string => {
    if (typeof input === 'string') {
        return 'This is string data type';
    } else if (typeof input === 'number') {
        return 'This is number data type';
    } else if (typeof input === 'boolean') {
        return 'This is boolean data type';
    } else {
        return 'This is unexpected data type';
    }
};
```

**Explanation:**
In the example above, we created a function named `processInputType` that accepts `string`, `number`, or `boolean` data types (which we call a Union Type). However, inside the function, we need to return different results depending on each specific type. 
This is exactly where we use the `typeof` operator for type narrowing. When the first condition checks `typeof input === 'string'`, TypeScript becomes certain that inside this specific block, the `input` variable will act only as a string. Similarly, using the `else if` blocks, we narrowed down and separated the number and boolean types. As a result, the application provides the correct result based on the input type without any runtime crashes.

### 2. `instanceof` Operator Guard

*** Suppose we have a system with two distinct user classes—`Admin` and `Guest`. We need a function that checks the class of the incoming object and returns a specific welcome or greetings message accordingly.

```typescript
class Admin {
  showDashboard(): string { return "Welcome Admin! Accessing dashboard" }
}

class Guest {
  showHome(): string { return "Welcome Guest! Accessing home page" }
}

const loginUser = (user: Admin | Guest): string => {
  if (user instanceof Admin) {
    return user.showDashboard(); 
  } else {
    return user.showHome(); 
  }
};
```

**Explanation:**
Here, the incoming input object is not a simple primitive type (like string or number), so we cannot use `typeof`. To check if an object belongs to a specific class, we used the `instanceof` operator to achieve type narrowing. If the condition inside the first `if` block is true, TypeScript ensures that the object is an instance of `Admin` and allows its internal method to run. If it is false, it narrows it down to the `Guest` class inside the `else` block.

### 3. `in` Operator Guard

*** Suppose we have two interfaces—`Email` and `Phone`. We need a function to check whether a specific property or 'key' exists inside the incoming object so it can return the correct notification message.

```typescript
interface Email {
  sendEmail: string;
}

interface Phone {
  sendSMS: string;
}

const sendAlert = (contact: Email | Phone): string => {
  if ("sendEmail" in contact) {
    return `Sending alert to email: ${contact.sendEmail}`; 
  } else {
    return `Sending alert to phone: ${contact.sendSMS}`; 
  }
};
```

**Explanation:**
When working with plain objects or interfaces, `instanceof` does not work because interfaces do not exist at runtime. In this scenario, we used the `in` operator for type narrowing to check if a specific property exists inside the object. If `"sendEmail" in contact` is true in the first `if` condition, TypeScript confidently recognizes it as an object of the `Email` interface; otherwise, it narrows it down as a `Phone` object in the `else` block.

## Conclusion

Through the concept of TypeScript's Type Narrowing, we can easily match our expected data with the provided input to deliver precise results. This serves as an excellent mechanism for type safety within our code, protecting the application from any unexpected data issues at a production level.
