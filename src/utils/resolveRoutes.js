const resolveRoutes = (route) => {
    if (route.length <= 2) {
      let validRoute = route === '/' ? route : '/:id';
      return validRoute;
    }
    return `/${route}`;
  };
  
  export default resolveRoutes;