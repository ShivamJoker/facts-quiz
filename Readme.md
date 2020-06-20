# Facts Quiz
### A collection of facts and it's truth availabe in JSON and as JS library

[See all the facts](https://shivamjoker.github.io/facts-quiz/)

# How to install ?

With Script tag
```js
<script src="https://unpkg.com/facts-quiz@latest/dist/factsquiz.min.js"></script>
```

Install via NPM
```js
npm i facts-quiz
```

# Using the library
```js
import fq from "facts-quiz";

// or import a particular function
import { getRandomFact } from "facts=quiz";

// get a random non repeating fact
fq.getRandomFact()

{
    "title": "Lightning never strikes in the same place twice.",
    "isTrue": false
}

// list all the facts
fq.getAllFacts()

// get total no. of facts
fq.getFactsLength

```
