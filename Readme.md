# Facts Quiz

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
import fq from "facts-quiz"

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
