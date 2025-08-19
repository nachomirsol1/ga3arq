# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### ADD PROJECT
In order to add images of a project you have to make the following steps.
- Go to **Cloudinary** and upload the images
- Go to pages > projects > model and add the id, path, imgUrl, label, description and the linkTo matching the name of the project, for example /projects/albalat_cityhall_cantest
- Then it is important to add the translations matching the name of the project, for example: "albalat_cityhall_cantest": "Albalat City Hall Contest", this way you will have the name of the project in both languages when you hover over the image
- Finally you need to add a folder in projectTemplates with the name of the new project matching the name if possible, not important. Inside the folder you create an index.js with the array of objects with the same properties but just with the values in imageUrl matching the cloudinary path image and the label with the title.
- The last step is just in the index of the model folder inside project templates, add
