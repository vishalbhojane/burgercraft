# BurgerCraft

This is a JavaScript App that generates CSS styles for creating a responsive and animated hamburger menu icon using the provided configuration options. The generated CSS can be applied to an HTML structure like this:

```html
<div class="hamburger">
  <div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```
The user can customize various aspects of the hamburger menu icon through input fields in the HTML file, including its width, height, thickness, border radius, and color. When the user clicks on the hamburger icon, it toggles between two states – closed and open – by animating the position and size of each horizontal bar.

The code also includes functions to calculate the hypotenuse, inclination angle, and coordinates required for the animation based on the given dimensions. It updates the CSS styles dynamically whenever any of the input values change. Additionally, there are helper functions to copy the generated CSS or HTML code to the clipboard with one click.

## Demo

https://burgercraft.netlify.app