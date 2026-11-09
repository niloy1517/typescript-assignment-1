# Assignment 01 - TypeScript Problem Solving & Blogs

Hey there! This repository contains my solutions for the first assignment, focusing on core TypeScript features like Generics, OOP with access modifiers, and Asynchronous programming. I have also included two technical blogs explaining essential TS concepts that I learned during this module.

## Project Structure
Kept the file structure completely raw and clean as per the requirements:
* `solutions.ts` -> Contains all code solutions (strictly typed, zero `any` types, and no runtime noise).
* `type-narrowing.md` -> My first technical blog post about Type Narrowing.
* `type-alias-vs-interface.md` -> My second technical blog post comparing Types and Interfaces.
* `README.md` -> This documentation file.

## Core Implementations Summary
To avoid any code noise, I haven't added comments inside the main script file. Here is a brief look at the implementation logic:
**Problems 1-3:** Handled default parameters, built type guards for input processing, and implemented read-only coordinate tuples.
**Problems 4-5:** Leveraged TypeScript Generics (`<T>`) along with built-in array methods like `.flat()` and `.filter()` for strict data manipulation.
**Problems 6-7:** Created a structured class inheritance hierarchy using `Employee` and `Manager`, properly utilizing `protected` and `private` modifiers.
**Problem 8:** Designed an asynchronous validator handling conditions via native `Promises` and `setTimeout` delays.

## Technical Blogs
You can navigate directly to the detailed blog posts using these relative paths:
** [Blog 1: What is Type Narrowing in TypeScript?](./type-narrowing.md)
** [Blog 2: Type Alias vs Interface in TypeScript](./type-alias-vs-interface.md)

## How to Run & Test
Since this project intentionally omits setup boilerplate (`tsconfig.json` or `package.json`), you can run and test the standalone `solutions.ts` script using `tsx` out of the box:

```bash
npx tsx solutions.ts
```

---
**Developed by:** Niloy Gope
