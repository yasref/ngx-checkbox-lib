# NgxCheckboxLib
[![](https://img.shields.io/npm/v/ngx-i24-checkbox)](https://www.npmjs.com/package/ngx-i24-checkbox)
[![](https://img.shields.io/npm/l/ngx-i24-checkbox)](https://www.npmjs.com/package/ngx-i24-checkbox)

> A lightweight plugin to display a modern checkbox.
 
## Features
* highly customizable
* very easy to implement
## Demo
[![](https://raw.githubusercontent.com/yasref/ngx-checkbox-lib/master/demo/imgs/ngx-checkbox.png)](https://stackblitz.com/edit/ngx-checkbox-demo)
* [Link](https://stackblitz.com/edit/ngx-checkbox-demo)
## Get started
#### Installation
```
$ npm i ngx-i24-checkbox
```
#### Example
##### TS
###### Module
```typescript 
import { NgxCheckboxModule } from 'ngx-i24-checkbox';
@NgModule({
  declarations: [ AppComponent ],
  imports: [BrowserModule, NgxCheckboxModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
 ###### Component
 ```typescript 
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
}
```
##### HTML

```html 
  <ngx-checkbox></ngx-checkbox>

  <!-- Or you can simply use directive -->
  <!-- Note: type should be `checkbox`  -->
  <input NgxCheckbox type="checkbox" />

``` 

## Options

| Property (Type) | Default | Description|
| - | - | - |
| color | '#3c3c3c' | The color of check |
| backColor| '#fff' | The background of checkbox |
| borderColor| '#c6c6c6' | The border color |
| shadow| '0px 0px 4px 1px #6c6c6c' | The shadow of the checkbox |
| cWidth| '20px' | The width of the checkbox |
| cHeight| '20px' | The height of the checkbox |
| checkWidth| '6px' | The width of the checkbox signal |
| checkHeight| '10px' | The height of the checkbox signal |
| value | true | The default value |
   

## Events
* `checkedChanged` - triggered on change the value

## Other Projects
| Name | Link | Description|
| - | - | - |
| ngx-i24-circular-progress | [Link](https://www.npmjs.com/package/ngx-i24-circular-progress) | Lightweight plugin to render simple, animated and retina optimized pie charts |
| ngx-i24-color-picker      | [Link](https://www.npmjs.com/package/ngx-i24-color-picker)      | A lightweight plugin to pick a color.                                         |
| ngx-weekday-picker        | [Link](https://www.npmjs.com/package/ngx-weekday-picker)      | A lightweight plugin to a pick weekday.                                         |

## Donation

 [![](https://raw.githubusercontent.com/yasref/ngx-i24-color-picker-lib/master/projects/demo/images/coffee.png)](https://www.buymeacoffee.com/yaseenref)

## Copyright
Copyright (c) 2022 Yaseen Alrefaee, contributors. Released under the MIT














<!-- 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->
