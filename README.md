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
