# Test Component (VueJS)
An example VueJS Component, which can be installed on another project.

```
<test-component></test-component>
```

## Installation

```
npm install https://github.com/kjohnson/vuejs-component/ --save
```

The component(s) can be registered automatically as a plugin, or...
```js
import TestComponent from 'vuejs-component';

Vue.use(TestComponent);
```

The components can be manually registered, as needed.
```js
//in your app.js or similar file
import Vue from 'vue';
import { TestComponent } from 'vuejs-component';

Vue.component('test-component', TestComponent);
```
