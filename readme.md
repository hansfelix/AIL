# Another interpreted language
Como parte de el proyecto Artemisa 1 🚀, donde se pondra en orbita la nave espacial Orion durante 25 dias, se require contar con un lenguaje de programacion al interior de la nave que pueda ser ejecutado en cualquier momento, sin necesidad de compilacion, por medio de peticiones http usando formato JSON.

![screenshot](/images/screenshot-2.png)
### Requiremets
- Node.js v15+ or npm v7+

## Quick start
### Install dependencies
> This will install all dependencies in each npm worspace.
```
npm install
```

After installment, you can build projects and serve the backend by:
```
npm start
```
## Exploring the app
Once you're set up, you can visit default URL`http://localhost:3000`. There is a terminal input where you can write an expression. Then press enter or click on evaluate button to get the response for given expression.

## Related Projects
This repo is a solution for [aimo code challenge](https://github.com/aimo/challenges/tree/main):

### TODO
- [ ] Frontend: handle bad request or server errors
- [ ] Add env vars for deployment
- [ ] Complete tests definition
- [ ] Backend: use lang as global types 
- [ ] Separate runtime in another npm worspace packages
- [ ] Frontend: add clouds for the bottom
- [ ] Frontend: improve background, create a component and render elements with svg and html
- [ ] Improve Accesibility