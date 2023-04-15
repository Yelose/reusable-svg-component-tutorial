# Reusable Svg Component Tutorial by Yelose

## Create the component

```
ng g c components/svg
```

## Create a SVG model

```
ng g interface models/svg-model
```

```ts
export interface SvgModel {
  xmlns: string;
  dataName: string;
  width: string;
  height: string;
  viewBox: string;
  xmlnsXlink: string;
  content: string;
}
```

## Add the new component to the App

Let's check that component works.

```
ng serve
```

### Remove the code from app.component.html

Clear the app component and add the new svg component

```html
<app-svg></app-svg>
```

svg works!

## Add some svg code to the svg.component.html

<details>

<summary>
Add a full svg code to the component and check that it works on localhost:4200 or the port you are using. Click to copy the code.
</summary>

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  data-name="Layer 1"
  width="1082.09595"
  height="583.57701"
  viewBox="0 0 1082.09595 583.57701"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <path
    id="f49d3234-3c8e-421e-8fbc-1882acc2b62b-1670"
    data-name="Path 2362"
    d="M932.524,741.78851H276.399c-6.707-.007-12.142-4.606-12.15-10.281v-474.768c.008-5.676,5.443-10.275,12.15-10.281H932.525c6.707.007,12.14295,4.606,12.15,10.282v474.77C944.66707,737.18847,939.232,741.78851,932.524,741.78851Zm-656.125-491.218c-4.024,0-7.286,2.763-7.29,6.169v474.771c0,3.405,3.266,6.165,7.291,6.169H932.526c4.024,0,7.286-2.764,7.29-6.169v-474.771c0-3.405-3.266-6.165-7.29-6.169Z"
    transform="translate(-58.95203 -158.21149)"
    fill="#e6e6e6"
  />

  <path
    id="aa45fc53-812a-4d29-b97e-7f1282d3d680-1671"
    data-name="Path 2484"
    d="M546.258,439.30148l175.00007-34.992,3.8,96.011-13.7,108.762,9.9,129.708H532.525l4.912-150.492s-42.112-59.417-17.303-119.308Z"
    transform="translate(-58.95203 -158.21149)"
    fill="#6c63ff"
  />

  <path
    id="ab28f9f1-3872-4572-9db3-fdc0c2b56930-1672"
    data-name="Path 2485"
    d="M936.476,211.54248a28.21206,28.21206,0,0,1-26.5,34.191l-167.814,194.6-39.016-47.35,177.224-176.392a28.365,28.365,0,0,1,56.109-5.045Z"
    transform="translate(-58.95203 -158.21149)"
    fill="#feb8b8"
  />

  <path
    id="e38d1f50-71d2-4502-a947-37a79b1baefe-1673"
    data-name="Path 2486"
    d="M778.697,419.09451a12.636,12.636,0,0,1-4.181,9.668l-47.187,42.478a35.1342,35.1342,0,1,1-54.3-44.6l32.94111-54.51a12.65,12.65,0,0,1,18.885-3.21l49.25305,40.7a12.63693,12.63693,0,0,1,4.589,9.483Z"
    transform="translate(-58.95203 -158.21149)"
    fill="#6c63ff"
  />

  <path
    id="a4438e3b-f1f0-4fb4-883b-23c73ca92a93-1674"
    data-name="Path 2487"
    d="M271.86,668.85352a28.21306,28.21306,0,0,1,31.334-29.828l195.113-167.211,31.469,52.668-201.685,147.8a28.365,28.365,0,0,1-56.231-3.432Z"
    transform="translate(-58.95203 -158.21149)"
    fill="#feb8b8"
  />

  <circle
    id="b8db2fb6-f3e1-4f6c-8969-65ed1b7fc810"
    data-name="Ellipse 85"
    cx="568.62999"
    cy="126.80999"
    r="71.242"
    fill="#3f3d56"
  />

  <path
    id="a8ffa943-ba12-47ea-a3ce-887fe10517d1-1675"
    data-name="Path 2488"
    d="M458.995,487.3255a12.63794,12.63794,0,0,1,5.584-8.932l53.027-34.917a35.132,35.132,0,1,1,47.29144,51.96679q-.14941.136-.30036.27021l-40.751,48.961a12.65014,12.65014,0,0,1-19.152.34l-42.588-47.625a12.63515,12.63515,0,0,1-3.115-10.064Z"
    transform="translate(-58.95203 -158.21149)"
    fill="#6c63ff"
  />
  <circle
    id="b8556b8d-ea4d-44f1-881d-63b03cbd5c82"
    data-name="Ellipse 491"
    cx="561.88999"
    cy="171.78799"
    r="64.502"
    fill="#feb8b8"
  />

  <path
    id="b12de61e-1204-4bc3-8fe3-5af6696e169c-1676"
    data-name="Path 574"
    d="M664.769,158.21149a38.943,38.943,0,0,1-22.472,15.447c-15.713,4.208-.128,27.819-.128,27.819s-5.667-8.586,2.507-17.679S666.005,168.48949,664.769,158.21149Z"
    transform="translate(-58.95203 -158.21149)"
    fill="#3f3d56"
  />

  <circle
    id="b3381070-dd63-42ff-a7f2-d7b052b00dac"
    data-name="Ellipse 87"
    cx="580.43297"
    cy="48.93"
    r="19.854"
    fill="#3f3d56"
  />

  <path
    id="a59edb5f-8afb-4734-b526-6942bc6c3436-1677"
    data-name="Path 575"
    d="M669.053,223.78349c-16.186-6.122-43.136-9.226-57-7.1l1.9-13.885c13.33,6.889,40.157,10.127,57,7.1Z"
    transform="translate(-58.95203 -158.21149)"
    fill="#6c63ff"
  />

  <path
    id="a799e502-b5ec-41bb-ac2d-d7f36e72d183-1678"
    data-name="Path 576"
    d="M631.657,226.38049s-20.285,33.74-67.454,46.371-.385,83.513-.385,83.513-17.012-25.775,7.526-53.072S635.369,257.23349,631.657,226.38049Z"
    transform="translate(-58.95203 -158.21149)"
    fill="#3f3d56"
  />

  <path
    id="b966a1bb-b26c-4365-9b42-58e2bab2452b-1679"
    data-name="Path 577"
    d="M639.344,226.7015s19.487,46.344,40.881,50.726,19.771,77.61-13.685,88.591c0,0,24.4-42.93,3.543-71.721S636.058,242.74649,639.344,226.7015Z"
    transform="translate(-58.95203 -158.21149)"
    fill="#3f3d56"
  />
  <rect
    id="f9722a62-0ff9-4c04-8bc3-c55c9a508670"
    data-name="Rectangle 254"
    y="580.58"
    width="1082.09595"
    height="2"
    fill="#e6e6e6"
  />

  <path
    d="M247.83008,691.25848a19.087,19.087,0,0,0-19.086-19.088h-.0011v-14.683H155.327v72.66107a9.564,9.564,0,0,0,9.564,9.564h54.288a9.564,9.564,0,0,0,9.564-9.564V710.34644A19.088,19.088,0,0,0,247.83008,691.25848Zm-19.087,11.74494-.00012.00012v-23.493a11.74646,11.74646,0,0,1,.00012,23.49292Z"
    transform="translate(-58.95203 -158.21149)"
    fill="#e6e6e6"
  />

  <path
    id="aa566eb5-3f42-4528-81f0-de30369d1f39-1680"
    data-name="Path 776"
    d="M1032.41906,669.92748c14.376,15.426,15.119,38.1,15.119,38.1s-22.565-2.338-36.941-17.764-15.119-38.1-15.119-38.1S1018.043,654.50151,1032.41906,669.92748Z"
    transform="translate(-58.95203 -158.21149)"
    fill="#e6e6e6"
  />

  <path
    id="abd5ca91-6d07-45db-b5e3-f61f3053fe6d-1681"
    data-name="Path 777"
    d="M1077.676,694.00652c-15.426,14.376-38.1,15.119-38.1,15.119s2.338-22.565,17.764-36.941,38.1-15.119,38.1-15.119S1093.103,679.63048,1077.676,694.00652Z"
    transform="translate(-58.95203 -158.21149)"
    fill="#e6e6e6"
  />

  <path
    id="ab90bebd-a5e2-40ec-8bc4-54c2d6be70fa-1682"
    data-name="Path 778"
    d="M1073.842,739.7935h-56.739a5.8,5.8,0,0,1-5.219-3.265l-12.353-25.395a5.8,5.8,0,0,1,5.219-8.342h81.446a5.80007,5.80007,0,0,1,5.219,8.342l-12.353,25.394a5.8,5.8,0,0,1-5.219,3.265Z"
    transform="translate(-58.95203 -158.21149)"
    fill="#e5e5e5"
  />
</svg>
```

</details>

You should see a person waving now! that's me!

## Making the component reusable

To make the component reusable, we need to add @Input to the reusable component, and [attributes] every time we use it, so, let's work for it!

### svg.component.ts

I want to be able to change hair color, skin color and clothes color, so I make some variables:

```ts
import { Component, Input } from "@angular/core";
import { SvgModel } from "src/app/models/svg-model";

@Component({
  selector: "app-svg",
  templateUrl: "./svg.component.html",
  styleUrls: ["./svg.component.scss"],
})
export class SvgComponent {
  @Input() image: SvgModel = {
    xmlns: "",
    dataName: "",
    width: "",
    height: "",
    viewBox: "",
    xmlnsXlink: "",
    content: "",
  };
}
```

### svg.component.html

This one is going to take the attributes from the parent component, and link them with our @Inputs that are actually empty

```html
<svg
  [attr.xmlns]="image.xmlns"
  [attr.data-name]="image.dataName"
  [attr.width]="image.width"
  [attr.height]="image.height"
  [attr.viewBox]="image.viewBox"
  [attr.xmlns:xlink]="image.xmlnsXlink"
  [innerHTML]="image.content | safeHtml"
></svg>
```

### app.component.ts

Now we need to give the variables to the child, lets add the attributes to the component we put in app

<details>

  <summary>
    This is a long code, click to copy
  </summary>

```ts
import { Component } from "@angular/core";
import { SvgModel } from "./models/svg-model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "reusable-svg-component";

  image: SvgModel = {
    xmlns: "http://www.w3.org/2000/svg",
    dataName: "Layer 1",
    width: "1082.09595",
    height: "583.57701",
    viewBox: "0 0 1082.09595 583.57701",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    content: `
        <path
          id="f49d3234-3c8e-421e-8fbc-1882acc2b62b-1670"
          data-name="Path 2362"
          d="M932.524,741.78851H276.399c-6.707-.007-12.142-4.606-12.15-10.281v-474.768c.008-5.676,5.443-10.275,12.15-10.281H932.525c6.707.007,12.14295,4.606,12.15,10.282v474.77C944.66707,737.18847,939.232,741.78851,932.524,741.78851Zm-656.125-491.218c-4.024,0-7.286,2.763-7.29,6.169v474.771c0,3.405,3.266,6.165,7.291,6.169H932.526c4.024,0,7.286-2.764,7.29-6.169v-474.771c0-3.405-3.266-6.165-7.29-6.169Z"
          transform="translate(-58.95203 -158.21149)"
          fill="#e6e6e6"
        />

        <path
          id="aa45fc53-812a-4d29-b97e-7f1282d3d680-1671"
          data-name="Path 2484"
          d="M546.258,439.30148l175.00007-34.992,3.8,96.011-13.7,108.762,9.9,129.708H532.525l4.912-150.492s-42.112-59.417-17.303-119.308Z"
          transform="translate(-58.95203 -158.21149)"
          fill="#6c63ff"
        />

        <path
          id="ab28f9f1-3872-4572-9db3-fdc0c2b56930-1672"
          data-name="Path 2485"
          d="M936.476,211.54248a28.21206,28.21206,0,0,1-26.5,34.191l-167.814,194.6-39.016-47.35,177.224-176.392a28.365,28.365,0,0,1,56.109-5.045Z"
          transform="translate(-58.95203 -158.21149)"
          fill="#feb8b8"
        />

        <path
          id="e38d1f50-71d2-4502-a947-37a79b1baefe-1673"
          data-name="Path 2486"
          d="M778.697,419.09451a12.636,12.636,0,0,1-4.181,9.668l-47.187,42.478a35.1342,35.1342,0,1,1-54.3-44.6l32.94111-54.51a12.65,12.65,0,0,1,18.885-3.21l49.25305,40.7a12.63693,12.63693,0,0,1,4.589,9.483Z"
          transform="translate(-58.95203 -158.21149)"
          fill="#6c63ff"
        />

        <path
          id="a4438e3b-f1f0-4fb4-883b-23c73ca92a93-1674"
          data-name="Path 2487"
          d="M271.86,668.85352a28.21306,28.21306,0,0,1,31.334-29.828l195.113-167.211,31.469,52.668-201.685,147.8a28.365,28.365,0,0,1-56.231-3.432Z"
          transform="translate(-58.95203 -158.21149)"
          fill="#feb8b8"
        />

        <circle
          id="b8db2fb6-f3e1-4f6c-8969-65ed1b7fc810"
          data-name="Ellipse 85"
          cx="568.62999"
          cy="126.80999"
          r="71.242"
          fill="#3f3d56"
        />

        <path
          id="a8ffa943-ba12-47ea-a3ce-887fe10517d1-1675"
          data-name="Path 2488"
          d="M458.995,487.3255a12.63794,12.63794,0,0,1,5.584-8.932l53.027-34.917a35.132,35.132,0,1,1,47.29144,51.96679q-.14941.136-.30036.27021l-40.751,48.961a12.65014,12.65014,0,0,1-19.152.34l-42.588-47.625a12.63515,12.63515,0,0,1-3.115-10.064Z"
          transform="translate(-58.95203 -158.21149)"
          fill="#6c63ff"
        />
        <circle
          id="b8556b8d-ea4d-44f1-881d-63b03cbd5c82"
          data-name="Ellipse 491"
          cx="561.88999"
          cy="171.78799"
          r="64.502"
          fill="#feb8b8"
        />

        <path
          id="b12de61e-1204-4bc3-8fe3-5af6696e169c-1676"
          data-name="Path 574"
          d="M664.769,158.21149a38.943,38.943,0,0,1-22.472,15.447c-15.713,4.208-.128,27.819-.128,27.819s-5.667-8.586,2.507-17.679S666.005,168.48949,664.769,158.21149Z"
          transform="translate(-58.95203 -158.21149)"
          fill="#3f3d56"
        />

        <circle
          id="b3381070-dd63-42ff-a7f2-d7b052b00dac"
          data-name="Ellipse 87"
          cx="580.43297"
          cy="48.93"
          r="19.854"
          fill="#3f3d56"
        />

        <path
          id="a59edb5f-8afb-4734-b526-6942bc6c3436-1677"
          data-name="Path 575"
          d="M669.053,223.78349c-16.186-6.122-43.136-9.226-57-7.1l1.9-13.885c13.33,6.889,40.157,10.127,57,7.1Z"
          transform="translate(-58.95203 -158.21149)"
          fill="#6c63ff"
        />

        <path
          id="a799e502-b5ec-41bb-ac2d-d7f36e72d183-1678"
          data-name="Path 576"
          d="M631.657,226.38049s-20.285,33.74-67.454,46.371-.385,83.513-.385,83.513-17.012-25.775,7.526-53.072S635.369,257.23349,631.657,226.38049Z"
          transform="translate(-58.95203 -158.21149)"
          fill="#3f3d56"
        />

        <path
          id="b966a1bb-b26c-4365-9b42-58e2bab2452b-1679"
          data-name="Path 577"
          d="M639.344,226.7015s19.487,46.344,40.881,50.726,19.771,77.61-13.685,88.591c0,0,24.4-42.93,3.543-71.721S636.058,242.74649,639.344,226.7015Z"
          transform="translate(-58.95203 -158.21149)"
          fill="#3f3d56"
        />
        <rect
          id="f9722a62-0ff9-4c04-8bc3-c55c9a508670"
          data-name="Rectangle 254"
          y="580.58"
          width="1082.09595"
          height="2"
          fill="#e6e6e6"
        />

        <path
          d="M247.83008,691.25848a19.087,19.087,0,0,0-19.086-19.088h-.0011v-14.683H155.327v72.66107a9.564,9.564,0,0,0,9.564,9.564h54.288a9.564,9.564,0,0,0,9.564-9.564V710.34644A19.088,19.088,0,0,0,247.83008,691.25848Zm-19.087,11.74494-.00012.00012v-23.493a11.74646,11.74646,0,0,1,.00012,23.49292Z"
          transform="translate(-58.95203 -158.21149)"
          fill="#e6e6e6"
        />

        <path
          id="aa566eb5-3f42-4528-81f0-de30369d1f39-1680"
          data-name="Path 776"
          d="M1032.41906,669.92748c14.376,15.426,15.119,38.1,15.119,38.1s-22.565-2.338-36.941-17.764-15.119-38.1-15.119-38.1S1018.043,654.50151,1032.41906,669.92748Z"
          transform="translate(-58.95203 -158.21149)"
          fill="#e6e6e6"
        />

        <path
          id="abd5ca91-6d07-45db-b5e3-f61f3053fe6d-1681"
          data-name="Path 777"
          d="M1077.676,694.00652c-15.426,14.376-38.1,15.119-38.1,15.119s2.338-22.565,17.764-36.941,38.1-15.119,38.1-15.119S1093.103,679.63048,1077.676,694.00652Z"
          transform="translate(-58.95203 -158.21149)"
          fill="#e6e6e6"
        />

        <path
          id="ab90bebd-a5e2-40ec-8bc4-54c2d6be70fa-1682"
          data-name="Path 778"
          d="M1073.842,739.7935h-56.739a5.8,5.8,0,0,1-5.219-3.265l-12.353-25.395a5.8,5.8,0,0,1,5.219-8.342h81.446a5.80007,5.80007,0,0,1,5.219,8.342l-12.353,25.394a5.8,5.8,0,0,1-5.219,3.265Z"
          transform="translate(-58.95203 -158.21149)"
          fill="#e5e5e5"
        />
    `,
  };
}
```

</details>

### app.component.html

Pass the values to the reusable component

```html
<app-svg [image]="image"></app-svg>
```

Now, it should work, but... it doesn't! let's panic, but just for 1 minute. Angular, doesn't like this code, so we have to let it know, it is safe, let's make a Pipe for it

## Creating a Pipe

```
ng g pipe pipes/safeHtml
```

### safe-html.pipe.ts

```ts
import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "safeHtml",
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
```

### svg.component.html

```html
<svg
  [attr.xmlns]="image.xmlns"
  [attr.data-name]="image.dataName"
  [attr.width]="image.width"
  [attr.height]="image.height"
  [attr.viewBox]="image.viewBox"
  [attr.xmlns:xlink]="image.xmlnsXlink"
  [innerHTML]="image.content | safeHtml"
></svg>
```

Great! our image is back!

## Checking reusability

### Let's create another component with a few svg inside

```
ng g c components/svg-grid
```

Well, now we have a problem, if we keep coding like this, our ts files will get so big, so let's fix it.

let's make a folder `called svg-data` inside `svg-grid` folder and let's add a ts file for each svg we create, this way it will be much more organized

I created a ts file called `waving-girl.ts` inside `svg-data`

<detail>

<summary>
copy the image variable from app.component.ts, and paste it inside `waving-girl.ts`.
</summary>

```ts
import { SvgModel } from "src/app/models/svg-model";

export const image: SvgModel = {
  xmlns: "http://www.w3.org/2000/svg",
  dataName: "Layer 1",
  width: "100%",
  height: "fit-content",
  viewBox: "0 0 1082.09595 583.57701",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  content: `
      <path
        id="f49d3234-3c8e-421e-8fbc-1882acc2b62b-1670"
        data-name="Path 2362"
        d="M932.524,741.78851H276.399c-6.707-.007-12.142-4.606-12.15-10.281v-474.768c.008-5.676,5.443-10.275,12.15-10.281H932.525c6.707.007,12.14295,4.606,12.15,10.282v474.77C944.66707,737.18847,939.232,741.78851,932.524,741.78851Zm-656.125-491.218c-4.024,0-7.286,2.763-7.29,6.169v474.771c0,3.405,3.266,6.165,7.291,6.169H932.526c4.024,0,7.286-2.764,7.29-6.169v-474.771c0-3.405-3.266-6.165-7.29-6.169Z"
        transform="translate(-58.95203 -158.21149)"
        fill="#e6e6e6"
      />

      <path
        id="aa45fc53-812a-4d29-b97e-7f1282d3d680-1671"
        data-name="Path 2484"
        d="M546.258,439.30148l175.00007-34.992,3.8,96.011-13.7,108.762,9.9,129.708H532.525l4.912-150.492s-42.112-59.417-17.303-119.308Z"
        transform="translate(-58.95203 -158.21149)"
        fill="#6c63ff"
      />

      <path
        id="ab28f9f1-3872-4572-9db3-fdc0c2b56930-1672"
        data-name="Path 2485"
        d="M936.476,211.54248a28.21206,28.21206,0,0,1-26.5,34.191l-167.814,194.6-39.016-47.35,177.224-176.392a28.365,28.365,0,0,1,56.109-5.045Z"
        transform="translate(-58.95203 -158.21149)"
        fill="#feb8b8"
      />

      <path
        id="e38d1f50-71d2-4502-a947-37a79b1baefe-1673"
        data-name="Path 2486"
        d="M778.697,419.09451a12.636,12.636,0,0,1-4.181,9.668l-47.187,42.478a35.1342,35.1342,0,1,1-54.3-44.6l32.94111-54.51a12.65,12.65,0,0,1,18.885-3.21l49.25305,40.7a12.63693,12.63693,0,0,1,4.589,9.483Z"
        transform="translate(-58.95203 -158.21149)"
        fill="#6c63ff"
      />

      <path
        id="a4438e3b-f1f0-4fb4-883b-23c73ca92a93-1674"
        data-name="Path 2487"
        d="M271.86,668.85352a28.21306,28.21306,0,0,1,31.334-29.828l195.113-167.211,31.469,52.668-201.685,147.8a28.365,28.365,0,0,1-56.231-3.432Z"
        transform="translate(-58.95203 -158.21149)"
        fill="#feb8b8"
      />

      <circle
        id="b8db2fb6-f3e1-4f6c-8969-65ed1b7fc810"
        data-name="Ellipse 85"
        cx="568.62999"
        cy="126.80999"
        r="71.242"
        fill="#3f3d56"
      />

      <path
        id="a8ffa943-ba12-47ea-a3ce-887fe10517d1-1675"
        data-name="Path 2488"
        d="M458.995,487.3255a12.63794,12.63794,0,0,1,5.584-8.932l53.027-34.917a35.132,35.132,0,1,1,47.29144,51.96679q-.14941.136-.30036.27021l-40.751,48.961a12.65014,12.65014,0,0,1-19.152.34l-42.588-47.625a12.63515,12.63515,0,0,1-3.115-10.064Z"
        transform="translate(-58.95203 -158.21149)"
        fill="#6c63ff"
      />
      <circle
        id="b8556b8d-ea4d-44f1-881d-63b03cbd5c82"
        data-name="Ellipse 491"
        cx="561.88999"
        cy="171.78799"
        r="64.502"
        fill="#feb8b8"
      />

      <path
        id="b12de61e-1204-4bc3-8fe3-5af6696e169c-1676"
        data-name="Path 574"
        d="M664.769,158.21149a38.943,38.943,0,0,1-22.472,15.447c-15.713,4.208-.128,27.819-.128,27.819s-5.667-8.586,2.507-17.679S666.005,168.48949,664.769,158.21149Z"
        transform="translate(-58.95203 -158.21149)"
        fill="#3f3d56"
      />

      <circle
        id="b3381070-dd63-42ff-a7f2-d7b052b00dac"
        data-name="Ellipse 87"
        cx="580.43297"
        cy="48.93"
        r="19.854"
        fill="#3f3d56"
      />

      <path
        id="a59edb5f-8afb-4734-b526-6942bc6c3436-1677"
        data-name="Path 575"
        d="M669.053,223.78349c-16.186-6.122-43.136-9.226-57-7.1l1.9-13.885c13.33,6.889,40.157,10.127,57,7.1Z"
        transform="translate(-58.95203 -158.21149)"
        fill="#6c63ff"
      />

      <path
        id="a799e502-b5ec-41bb-ac2d-d7f36e72d183-1678"
        data-name="Path 576"
        d="M631.657,226.38049s-20.285,33.74-67.454,46.371-.385,83.513-.385,83.513-17.012-25.775,7.526-53.072S635.369,257.23349,631.657,226.38049Z"
        transform="translate(-58.95203 -158.21149)"
        fill="#3f3d56"
      />

      <path
        id="b966a1bb-b26c-4365-9b42-58e2bab2452b-1679"
        data-name="Path 577"
        d="M639.344,226.7015s19.487,46.344,40.881,50.726,19.771,77.61-13.685,88.591c0,0,24.4-42.93,3.543-71.721S636.058,242.74649,639.344,226.7015Z"
        transform="translate(-58.95203 -158.21149)"
        fill="#3f3d56"
      />
      <rect
        id="f9722a62-0ff9-4c04-8bc3-c55c9a508670"
        data-name="Rectangle 254"
        y="580.58"
        width="1082.09595"
        height="2"
        fill="#e6e6e6"
      />

      <path
        d="M247.83008,691.25848a19.087,19.087,0,0,0-19.086-19.088h-.0011v-14.683H155.327v72.66107a9.564,9.564,0,0,0,9.564,9.564h54.288a9.564,9.564,0,0,0,9.564-9.564V710.34644A19.088,19.088,0,0,0,247.83008,691.25848Zm-19.087,11.74494-.00012.00012v-23.493a11.74646,11.74646,0,0,1,.00012,23.49292Z"
        transform="translate(-58.95203 -158.21149)"
        fill="#e6e6e6"
      />

      <path
        id="aa566eb5-3f42-4528-81f0-de30369d1f39-1680"
        data-name="Path 776"
        d="M1032.41906,669.92748c14.376,15.426,15.119,38.1,15.119,38.1s-22.565-2.338-36.941-17.764-15.119-38.1-15.119-38.1S1018.043,654.50151,1032.41906,669.92748Z"
        transform="translate(-58.95203 -158.21149)"
        fill="#e6e6e6"
      />

      <path
        id="abd5ca91-6d07-45db-b5e3-f61f3053fe6d-1681"
        data-name="Path 777"
        d="M1077.676,694.00652c-15.426,14.376-38.1,15.119-38.1,15.119s2.338-22.565,17.764-36.941,38.1-15.119,38.1-15.119S1093.103,679.63048,1077.676,694.00652Z"
        transform="translate(-58.95203 -158.21149)"
        fill="#e6e6e6"
      />

      <path
        id="ab90bebd-a5e2-40ec-8bc4-54c2d6be70fa-1682"
        data-name="Path 778"
        d="M1073.842,739.7935h-56.739a5.8,5.8,0,0,1-5.219-3.265l-12.353-25.395a5.8,5.8,0,0,1,5.219-8.342h81.446a5.80007,5.80007,0,0,1,5.219,8.342l-12.353,25.394a5.8,5.8,0,0,1-5.219,3.265Z"
        transform="translate(-58.95203 -158.21149)"
        fill="#e5e5e5"
      />
  `,
};
```

</detail>

I changed the width and the height so they fit in the container we will place them in

```css
  width: '100%',
  height: 'fit-content',
```

### app.component.html

Before moving on, let's try our new component

```html
<app-svg [image]="image"></app-svg>

<app-svg-grid></app-svg-grid>
```

svg-grid works!

### svg-grid.component.ts

Adding a few svg

```ts
import { Component } from "@angular/core";
import { SvgModel } from "src/app/models/svg-model";
import { wavingGirl } from "./svg-data/waving-girl";

@Component({
  selector: "app-svg-grid",
  templateUrl: "./svg-grid.component.html",
  styleUrls: ["./svg-grid.component.scss"],
})
export class SvgGridComponent {
  images: SvgModel[] = [wavingGirl, wavingGirl, wavingGirl, wavingGirl];
}
```

### svg-grid.component.scss

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  justify-items: center;
  width: fit-content;
  margin: auto;
}
```

### svg-grid-component.html

```html
<div class="container">
  <app-svg *ngFor="let img of images" [image]="img"></app-svg>
</div>
```

Almost done, let's add one more to check that it is for real reusable

### new file `colors.ts`

But first, add a colors.ts file wherever you want, I added it to the app folder just for this example.

```ts
export const colors = {
  primary: "#6C63FF",
  hair: "#A52A2A",
  skin: "#ffbfb6",
};
```

### svg-data/lovely.ts

Adding a lovely svg `lovely.ts`.

Using variables for theming your svg.

<detail>

<summary>
Adding a new svg, with color variables
</summary>

```ts
import { colors } from "src/app/colors";
import { SvgModel } from "src/app/models/svg-model";

const hairColor: string = colors.hair;
const skinColor: string = colors.skin;
const primaryColor: string = colors.primary;
const heartColor: string = "#DB7093";

export const lovelySvg: SvgModel = {
  xmlns: "http://www.w3.org/2000/svg",
  dataName: "",
  width: "100%",
  height: "fit-content",
  viewBox: "0 0 524.66998 392.98537",
  xmlnsXlink: "0 0 524.66998 392.98537",
  content: `<polygon
  points="146.06 297.49914 116.45 300.71914 102.28 291.05913 94.08 300.71914 98.02 321.09914 102.52 337.18914 129.85001 323.30913 151.86 321.31914 146.06 297.49914"
  fill="${skinColor}" />
  <polygon
    points="296.09 263.36913 224.62 262.07912 137.69 298.77913 149.28 323.89913 227.84 301.99914 349.53 336.76912 332.79001 254.35914 296.09 263.36913"
    fill="#2f2e41" />
  <path
    d="m100.05,299.83913l14.21-1.10999-18.07-38.17001s-8.37-2.95999-9.66,6.25c-1.29,9.20001,9.7,71.53,12.92,71.53s14.02-6.29999,14.02-6.29999l-15.99-30.26999,2.58-1.92999h-.01v-.00003Z"
    fill="#2f2e41" />
  <path
    d="m456.35001,289.38915c-1.42999.14999-2.98999.38-4.64999.72-7.04001,1.42999-7.17999,6.20999-7.12,7.29999l-.04999-.03c-.70999,1.13-1.14999,2.28-1.42001,3.37l-.32001-14.64001c.20999-.42999.39999-.92999.56-1.42999.53,1.62,1.39001,3.14999,2.13,3.04999.97-.13,1.39001-2.98001,1.20999-5,1.23001,1.57999,3.29999,3.28,4.07999,2.76001.62-.42001.25-2.14001-.42999-3.70001,1.42001.85999,2.98999,1.42001,3.48001.87.67001-.73999-.92999-3.26999-2.39999-4.67999,1.97.17999,4.48001-.13,4.64001-1.03.14001-.73999-1.35999-1.67001-2.95001-2.26999,1.60001-.42001,3.10001-1.16,3.04999-1.89001-.06-.87-2.28-1.45001-4.20001-1.53,1.45001-1.13,2.78-2.70001,2.37-3.41-.37-.64999-2.10999-.39999-3.72.17001.95001-1.35999,1.62-2.89001,1.10999-3.41-.63-.64999-2.88.47-4.42001,1.72.29999-1.94.14999-4.39001-.72-4.60999-.73001-.19-1.76001,1.23999-2.47,2.79001-.31-1.63-.95001-3.17001-1.67999-3.17001-1.04001,0-1.88,3.14001-1.88,5.17999v.32999c-.10001-.12-.22-.25-.35999-.38-1.47-1.42001-4.29999-3-5.03-2.26001-.51001.51999.16,2.04999,1.10999,3.41-1.60999-.57001-3.35001-.82999-3.72-.17001-.5.88,1.64999,3.06,3.39001,4.12-.10001-.01001-.22-.01999-.32999-.03-2.04001-.14001-5.23001.48999-5.29999,1.53-.04999.73001,1.45001,1.47,3.04999,1.89001-1.60001.60001-3.09,1.53-2.95001,2.26999.16.89999,2.67001,1.20999,4.64001,1.03-1.47,1.41-3.07001,3.94-2.39999,4.67999.48999.54001,2.06-.01999,3.48001-.87-.67999,1.56-1.04999,3.28-.42999,3.70001.82001.54999,3.09-1.37,4.28-3.01999-.12,2.01999.35999,4.79999,1.32001,4.91.39999.04999.82999-.38,1.20999-1.04001l-1.09,15.73999c-.25,1.82999,1.37,3.03,1.51999,3.78l.23001,10.66c-.26001-.76001-.62-1.54001-1.10001-2.31l-.04999.03c.06-1.10001-.07999-5.87-7.12-7.29999-1.66-.34-3.22-.57001-4.64999-.72-1.69-.17999-2.35001,2.13-.82001,2.88,2.20999,1.07999,4.29001,2.44,5.37,4.04999,2.76999,4.12,6.59,1.73999,7.14001,1.37.60999,1.01001,1.01001,2.03,1.26001,3l.12,5.66c-.03.13-.04999.20999-.04999.20999l.06.01999.29999,13.70001,2.79999-.01999-1-14c.17001-.76001.69-3.32999,0-6l-1-11h0s.06.29001,0,0l-1.29999-4.32001c.19-1.34.63-2.84,1.51999-4.32999.54001.37,4.37,2.75,7.14001-1.37,1.07999-1.60999,3.16-2.97,5.37-4.04999,1.51999-.75.87-3.06-.82001-2.88h0v-.03h0l.00998.00003Zm-12.76001,32.41l-.04999-2.39999c.10999.91.10001,1.72.04999,2.39999Z"
    fill="#f2f2f2" />
  <path
    d="m0,337.10912c0,.66.53,1.19,1.19,1.19h522.28998c.65997,0,1.19-.53,1.19-1.19s-.53003-1.19-1.19-1.19H1.19c-.66,0-1.19.53-1.19,1.19Z"
    fill="#3f3d56" />
  <polygon
    points="346.54999 177.50913 353.64001 153.68914 374.23999 153.03913 382.60999 182.65914 346.54999 177.50913"
    fill="${skinColor}" />
  <polygon
    points="346.54999 177.50913 353.64001 153.68914 374.23999 153.03913 382.60999 182.65914 346.54999 177.50913"
    isolation="isolate" opacity=".1" />
  <path
    d="m378.17999,174.18914l-33.48001-1.28999-10.38,21.35001-16.01999,94.55,84.03,18.98999s5.14999-105.60001-6.44-120.41-17.70999-13.2-17.70999-13.2h0v.00999Z"
    fill="${primaryColor}" />
  <path id="uuid-f13f85f7-b64c-4cdb-8983-c7111a87917c-2840"
    d="m280.12,100.14914c-1.39999-7.45-6.37-12.78-11.12-11.89s-7.45999,7.65-6.06,15.11c.51999,2.99,1.73999,5.8,3.57001,8.22l6.31,31.51,12.45001-2.53-5.51999-31.46c.82999-2.92.95001-5.99.35001-8.96h.01999-.00003Z"
    fill="${skinColor}" />
  <polygon
    points="373.17001 182.76914 304.79001 169.29914 285.57001 111.49914 264.04001 116.59913 285.64001 201.97913 363.04001 212.15914 373.17001 182.76914"
    fill="${primaryColor}" />
  <path
    d="m269.03,7.56914h0c-.07001.07-.13.13-.20001.2-10.35001-10.28-27.03-10.37-37.5-.2h0c-10.5,10.2-10.86,26.95-.8,37.59h0l.25.26h0l37.05,38.15,38.41-37.3-.10999-.11c.06-.06.13-.12.20001-.18h0c10.60999-10.3,10.85001-27.25.54999-37.85h0c-10.29999-10.61-27.25-10.85-37.85001-.55h0v-.01Z"
    fill="${heartColor}" />
  <path
    d="m278.19,196.76914h0c-.12.12-.23999.25-.35999.37-19.07001-18.92-49.78-19.09-69.06-.37h0c-19.34,18.78999-20,49.64-1.47,69.23h0l.46001.48999h0l68.24001,70.26001,70.73001-68.70001-.20001-.20001c.12-.10999.23999-.22.35999-.32999h0c19.53-18.97,19.98999-50.17999,1.01999-69.72h0c-18.97-19.53-50.17999-19.99001-69.72-1.02h.01001-.01001v-.00998Z"
    fill="${heartColor}" />
  <path
    d="m382.51999,275.07912s25.26999,21.04999,15.89001,33.82001c-9.37,12.76999-41.25,35.63-55.64999,28.54001s-44.29001-58.33002-44.29001-58.33002l-7.82001,52.48999-20.45999-1.81s-14.86-74.14-1.16-85.51001c13.70999-11.37,76.11002,8.73,76.11002,8.73l37.37,22.08h0l.00998-.00998Z"
    fill="#2f2e41" />
  <polygon
    points="275.29999 322.81914 269.44 341.02913 257.23001 358.13915 266.59 372.14913 296.34 352.55913 296.23999 342.47915 291.57001 336.18914 288.26999 324.12914 275.29999 322.81914"
    fill="${skinColor}" />
  <path
    d="m265.94,365.24914l-7.47-12.14001-25.72,33.48999s1.19,8.79999,9.97,5.73999,63.20999-30.95999,61.73999-33.83002-7.5-18.29001-7.5-18.29001l-28.12,26.42999-2.89001-1.41h0l-.00998.01007Z"
    fill="#2f2e41" />
  <path id="uuid-df8c86ac-64b9-45b2-b041-cf5a573dc8f0-2841"
    d="m281.73001,274.90914c-7.54999.75-13.28,5.25-12.79999,10.04999s6.98001,8.09,14.53,7.34c3.01999-.26001,5.92999-1.23999,8.5-2.85001l31.92999-3.57001-1.45001-12.62-31.82001,2.79001c-2.82999-1.07999-5.88-1.47-8.89001-1.13h0l.00003-.00998Z"
    fill="${skinColor}" />
  <polygon
    points="372.07001 189.32914 352.75 256.28914 293.51001 270.44915 296.73001 292.34914 383.66 278.17913 400.47 201.94913 372.07001 189.32914"
    fill="${primaryColor}" />
  <circle cx="361.32001" cy="133.45914" r="27.35999" fill="${skinColor}" />
  <path
    d="m363.5,96.66913c-.79001.46-1.85001-.24-2.10999-1.12-.25-.88.04001-1.82.34-2.68.48999-1.46.98001-2.92,1.48001-4.37,1.04999-3.1,2.16-6.31,4.42999-8.67,3.42001-3.56,8.85999-4.47,13.76001-3.81,6.29001.84,12.48999,4.25,15.42001,9.88,2.92001,5.63,1.67999,13.49-3.60001,17,7.53,8.63,10.14999,18.25,9.73999,29.69-.41,11.45-12.89001,21.98-21.01999,30.04001-1.82001-1.10001-3.47-6.25999-2.47-8.14,1-1.87-.42999-4.05.79999-5.77s2.26999,1.02,1.01999-.69c-.79001-1.08,2.29001-3.58,1.12-4.22-5.67001-3.14-7.56-10.21001-11.13-15.63-4.29999-6.53-11.66-10.96-19.44-11.69-4.29001-.4-8.82001.33-12.32999,2.82-3.51999,2.49-5.79001,6.94-4.98001,11.17001-2.10999-2.14-3.16-5.29-2.76999-8.27.39999-2.98,2.23001-5.74,4.82999-7.26-1.57999-5.22-.23001-11.23,3.44-15.27s18.54001-3.35,23.88998-2.29l-.41-.71h0l-.00998-.00999Z"
    fill="${hairColor}" />
  <path
    d="m364.34,116.63913c7.09.77,12.20999,6.91,16.53,12.58,2.48999,3.27,5.10001,6.88,5.04001,10.99001-.06,4.14999-2.84,7.72-4.17001,11.66-2.17001,6.44-.06,14.09,5.10999,18.5-5.10001.97-10.62-2.86-11.5-7.98-1.03-5.96001,3.48999-11.71001,2.95999-17.74001-.47-5.31-4.64999-9.39-8.20999-13.36s-6.89001-9.23-5.26001-14.3l-.5-.34h0l.00003-.01001Z"
    fill="${hairColor}" />`,
};
```

</detail>

### svg-grid.component.ts

```ts
import { Component } from "@angular/core";
import { SvgModel } from "src/app/models/svg-model";
import { wavingGirl } from "./svg-data/waving-girl";
import { lovelySvg } from "./svg-data/lovely";

@Component({
  selector: "app-svg-grid",
  templateUrl: "./svg-grid.component.html",
  styleUrls: ["./svg-grid.component.scss"],
})
export class SvgGridComponent {
  images: SvgModel[] = [
    wavingGirl,
    lovelySvg,
    wavingGirl,
    lovelySvg,
    wavingGirl,
    wavingGirl,
    lovelySvg,
  ];
}
```

### I have changed some more colors, you can check the final code

Change your `colors.ts` variable to see the changes on the images.

I hope it was helpfull, you will see it in action shortly in my portfolio.

Thank you for following this tutorial.
