const buildRoute = (routeString, params) => {
    const replacedRoute = routeString.replace(/:[a-zA-Z_-]+/g, (match) => {
      const paramName = match.slice(1);
      return params[paramName] || match;
    });
  
    return replacedRoute;
  };
  
  console.log(buildRoute('/user/:user-id/create', { userId: 1 }));
  console.log(buildRoute('/:tour-id/:game-id/:player-id/goal', { tourId: 1, gameId: 14, playerId: 125151 }));
  