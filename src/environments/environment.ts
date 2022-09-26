// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  recipes: {
    endpoint: 'https://api.spoonacular.com/recipes/complexSearch',
    apiKey: '186cb1a5c90e411089137db2388b3cc5',
    completeEndPoint: 'https://api.spoonacular.com/recipes/complexSearch?apiKey=186cb1a5c90e411089137db2388b3cc5',
  },
  loginEndpoint: 'http://challenge-react.alkemy.org/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
