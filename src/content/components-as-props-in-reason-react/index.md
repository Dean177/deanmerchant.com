---
title: Components as as props in reason react
description: Components as as props in reason react
date: '2019-12-28'
spoiler: Yes you can.
---

In Javascript React, you can pass a whole components as props like this

```jsx
  <Menu banner={MyBanner} />
```

But in ReasonReact the [docs](https://reasonml.github.io/reason-react/docs/en/component-as-prop) have this to say

> In ReactJS, `<Menu banner={MyBanner} />` is easy; in ReasonReact, we can't trivially pass the whole component module (it wouldn't even be syntactically valid because a module resides in another layer of the language).

Which isn't quite true.

Modules do need special treatment, but we **can** pass the whole component module :

## [First class modules](https://dev.realworldocaml.org/first-class-modules.html)

First class modules were added in Ocaml version 3.12 and allow you do treat modules as values that you can store in variables or pass to functions.

The primary catch is they are a little more heavy syntacically since you are required to create a module type and annotate the usage sites.

> A first-class module is created by “packing” a module with a signature. Done using the “module” keyword.

For an illustrative example we will be creating an `IconButton` component that will takes an `Icon` component as a prop.

Lets say we have a `CheckIcon` component that looks like this:

```reasonml
module CheckIcon = {
  [@react.component]
  let make = (~color: string=?) => <svg />;
};
```

First we need to create a module type.

```reasonml
module type Icon = {
  [@react.component]
  let make: (~color: string=?) => React.element;
};
```

Then we can create the IconButton component:

```reasonml
module IconButton = {
  [@react.component]
  let render = (~icon: (module Icon), ~color, ~label, ~onClick) => {
    let (module Icon) = icon;
    <button onClick>
      <Icon color />
      <label>React.string(label)</label>
    </button>
  };
};
```

Which we can now use like so:

```reason
<IconButton
  color="green"
  icon=(module CheckMarkIcon)
  label="success"
/>
```

## Should you do this?

You probably should still use a function as the docs recommend.

First class modules don't support some common ways that  this is used for in vanilla react:

- Spread props
- 'Child' props with different optional arguments

The primary downside to this approach is that the functions within, your module need to match exactly:

```reasonml
module SadnessIcon: Icon = {
  [@react.component]
  let make = (~color: string=?, ~size: float=?) => <svg />;
};
```
