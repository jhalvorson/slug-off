![Slug off](https://file-enkhgwwuwf.now.sh/)

A tiny and probably useless set of helper functions to turn your strings into slugs, because, laziness.

Uses Rollup and Babel to transpile JS. *It even has Babel?!* Yes, I know. See the first line for the reason.

## Usage

So, for some reason you want to use this module?

First in your terminal, `cd` into your project and run:

`npm install slug-off`

Now import it into your file:

`import slugOff from 'slug-off';`

You can now run `slugOff('my Awesome line oF t3xt Bruh')`. The `slugOff` function takes two parameters: string, separator. If you're a monster and want to use underscores for your slugs you can run `slugOff('why would I do this?', '_');`,