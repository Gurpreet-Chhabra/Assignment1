# ReviewAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Content:

1) Social login :

    Implemented in Login component (facebook +  google login).
    Used "angularx-social-login" npm module.
    https://github.com/abacritt/angularx-social-login

2) Session timeout :

    Implemented in timeout component in timeout.service.ts.
    Used "angular2-moment" "@ng-idle/keepalive" module.
    https://github.com/HackedByChinese/ng2-idle
    https://long2know.com/2017/12/angular-user-session-timeout/
    https://github.com/rednez/angular-user-idle

3) LocalForageService:
    Implemented localforageservice  in localForage.config.service.ts + LocalForageConfigService (App folder).
    Used in login and header component.

4) Route guard implemeted in app.routing.ts file.

5) Single service file i-e Homeservice in home folder
