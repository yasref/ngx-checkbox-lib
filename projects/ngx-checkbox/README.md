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
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Code scaffolding

Run `ng generate component component-name --project ngx-checkbox` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-checkbox`.
> Note: Don't forget to add `--project ngx-checkbox` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-checkbox` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-checkbox`, go to the dist folder `cd dist/ngx-checkbox` and run `npm publish`.

## Running unit tests

Run `ng test ngx-checkbox` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->
