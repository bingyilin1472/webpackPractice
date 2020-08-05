import helloWorld from "./hello-world";
// 他必須依賴hello-world.js
// 這裡沒有引入語法，因此必須同時於html之中引入hello-world.js
// 則同樣被引入到index.html的index.js則也可以呼叫hello-world.js之中的function
helloWorld()