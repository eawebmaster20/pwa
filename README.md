# Pwa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Capacitor integration
1. build project with
code ```
    ng build
```
2. install capacitor for the native platforms
code ```
npm i @capacitor/ios @capacitor/android
```

3. initialize capacitor in the project
code ```
npx cap init
```


4. install the core packages and cli of capacitor
code ```
npm i @capacitor/core @capacitor/cli
```

5. add the platform (in this case i only wanted android)
code ```
npx cap add android
```

6. To change app icon, install capacitor assets
code ```
npm i @capacitor/assets
```

7. Place your icon.png in assets folder located at same directory as capacitor.config.ts

8. generate the assets to replace capacitor's default app icon
code```
npx capacitor-assets generate
```

9. confirm if adb can see you connected device/ simulator
code ```
adb devices
```

10. syncronize the project to update assets
code ```
npx cap sync android
```

11. build the android app and deploy to target device
code ```
npx cap run android
```