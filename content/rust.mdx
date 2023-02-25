---
title: Rust Is The Future of JavaScript Infrastructure
publishedAt: Nov 11, 2021
summary: Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?
---

[Rust](https://www.rust-lang.org/) is a fast, reliable, and memory-efficient programming language. It's been voted the most loved programming language [six](https://insights.stackoverflow.com/survey/2016#technology-most-loved-dreaded-and-wanted) [years](https://insights.stackoverflow.com/survey/2017#most-loved-dreaded-and-wanted) [in](https://insights.stackoverflow.com/survey/2018#technology-_-most-loved-dreaded-and-wanted-languages) [a](https://insights.stackoverflow.com/survey/2019#technology-_-most-loved-dreaded-and-wanted-languages) [row](https://insights.stackoverflow.com/survey/2020#most-loved-dreaded-and-wanted) ([survey](https://insights.stackoverflow.com/survey/2021/#technology-most-loved-dreaded-and-wanted)). Created by Mozilla, it's now used at [Facebook](https://engineering.fb.com/2021/04/29/developer-tools/rust/), [Apple](https://twitter.com/oskargroth/status/1301502690409709568), [Amazon](https://aws.amazon.com/blogs/opensource/why-aws-loves-rust-and-how-wed-like-to-help/), [Microsoft](https://twitter.com/ryan_levick/status/1171830191804551168), and [Google](https://security.googleblog.com/2021/04/rust-in-android-platform.html) for systems infrastructure, encryption, virtualization, and more low-level programming.

Why is Rust now being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?

> Note: This post is also available in [Chinese](https://mp.weixin.qq.com/s?__biz=MzkxNDIzNTg4MA==&mid=2247485792&idx=1&sn=682a4dee7ce4d3b47a81baf9ebd7a98a&chksm=c170c1e7f60748f17585d6bfca0cff6edbf71bab95f0a4a1ea0bcf2d43c16d1722666d9fadc1&token=1766743281&lang=zh_CN#rd), [Portuguese](https://codigofonte.com.br/artigos/rust-e-o-futuro-da-infraestrutura-javascript), [Vietnamese](https://www.alanphan.xyz/vi/rush), and [Arabic](https://www.tutomena.com/rust-and-javascript/).

## What is Rust?

Rust helps developers write fast software that's memory-efficient. It's a modern replacement for languages like C++ or C with a focus on code safety and concise syntax.

Rust is quite different than JavaScript. JavaScript tries to find variables or objects not in use and automatically clears them from memory. This is called [Garbage Collection](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>). The language abstracts the developer from thinking about manual memory management.

With Rust, developers have more control over memory allocation, without it being as painful as C++.

> Rust uses a relatively unique memory management approach that incorporates the idea of memory “ownership”. Basically, Rust keeps track of who can read and write to memory. It knows when the program is using memory and immediately frees the memory once it is no longer needed. It enforces memory rules at compile time, making it virtually impossible to have runtime memory bugs. You do not need to manually keep track of memory. The compiler takes care of it. – [Discord](https://blog.discord.com/why-discord-is-switching-from-go-to-rust-a190bbca2b1f)

## Adoption

On top of the companies mentioned above, Rust is also being used for popular open-source libraries like:

- [Firecracker](https://github.com/firecracker-microvm/firecracker) (AWS)
- [Bottlerocket](https://github.com/bottlerocket-os/bottlerocket) (AWS)
- [Quiche](https://github.com/cloudflare/quiche) (Cloudflare)
- [Neqo](https://github.com/mozilla/neqo) (Mozilla)

> Rust has been a force multiplier for our team, and betting on Rust was one of the best decisions we made. More than performance, its ergonomics and focus on correctness has helped us tame sync's complexity. We can encode complex invariants about our system in the type system and have the compiler check them for us. – [Dropbox](https://dropbox.tech/infrastructure/rewriting-the-heart-of-our-sync-engine)

## From JavaScript to Rust

JavaScript is the most widely used programming language, operating on every device with a web browser. Over the past ten years, a massive ecosystem has been built around JavaScript:

- **Webpack:** developers wanted to bundle multiple JavaScript files into one.
- **Babel:** developers wanted to write modern JavaScript while supporting older browsers.
- **Terser:** developers wanted to generate the smallest possible file sizes.
- **Prettier:** developers wanted an opinionated code formatter that just worked.
- **ESLint:** developers wanted to find issues with their code before deploying.

Millions of lines of code have been written and even more bugs have been fixed to create the bedrock for shipping web applications of today. All of these tools are written with JavaScript or TypeScript. This has worked well, but we've reached peak optimization with JS. This has inspired a new class of tools, designed to drastically improve the performance of building for the web.

### SWC

[SWC](http://swc.rs/), created in 2017, is an extensible Rust-based platform for the next generation of fast developer tools. It's used by tools like Next.js, Parcel, and Deno, as well as companies like Vercel, ByteDance, Tencent, Shopify, and more.

SWC can be used for compilation, minification, bundling, and more – and is designed to be extended. It's something you can call to perform code transformations (either built-in or custom). Running those transformations happens through higher-level tools like Next.js.

### Deno

[Deno](https://deno.land/), created in 2018, is a simple, modern, and secure runtime for JavaScript and TypeScript that uses [V8](https://v8.dev/) and is built with Rust. It's an attempt to replace Node.js, written by the original creators of Node.js. While it was created in 2018, it didn't hit [v1.0 until May 2020](https://deno.com/blog/v1).

Deno's linter, code formatter, and docs generator are [built using SWC](https://twitter.com/devongovett/status/1369033422002389000).

### esbuild

[esbuild](https://esbuild.github.io/), created in January 2020, is a JavaScript bundler and minifier 10-100x faster than existing tools, written in Go.

> I'm trying to create a build tool that A) works well for a given sweet spot of use cases (bundling JavaScript, TypeScript, and maybe CSS) and B) **resets the expectations of the community for what it means for a JavaScript build tool to be fast**. Our current tools are way too slow in my opinion. – Evan, Creator of esbuild ([Source](https://news.ycombinator.com/item?id=22336334))

Building JavaScript tooling with systems programming languages, like Go and Rust, was fairly niche until esbuild was released. In my opinion, esbuild sparked a wider interest in trying to make developer tools faster. Evan chose to use Go:

> The Rust version probably could be made to work at an equivalent speed with enough effort. But at a high level, Go was much more enjoyable to work with. This is a side project and it has to be fun for me to work on it. – Evan, Creator of esbuild ([Source](https://news.ycombinator.com/item?id=22336284))

Some argue Rust could perform better, but both could achieve Evan's original goal of influencing the community:

> Even with just basic optimization, Rust was able to outperform the hyper hand-tuned Go version. This is a huge testament to how easy it is to write efficient programs with Rust compared to the deep dive we had to do with Go. – [Discord](https://blog.discord.com/why-discord-is-switching-from-go-to-rust-a190bbca2b1f)

### Rome

[Rome](https://rome.tools/blog/2020/08/08/introducing-rome), created in August 2020, is a linter, compiler, bundler, test runner, and more, for JavaScript, TypeScript, HTML, JSON, Markdown, and CSS. They aim to replace and unify the entire frontend development toolchain. It's created by [Sebastian](https://twitter.com/sebmck), who also created Babel.

Why rewrite everything, then?

> Making the necessary modifications to Babel to allow for it to be a reliable base for other tools would have required changes to absolutely everything. The architecture is bound to the initial design choices I made in 2014 when I was learning about parsers, ASTs, and compilers. - Sebastian ([Source](https://rome.tools/blog/2020/08/08/introducing-rome))

Rome is currently written in TypeScript and runs on Node.js. But they're now working on [rewriting in Rust](https://rome.tools/blog/2021/09/21/rome-will-be-rewritten-in-rust) using RSLint parser and their own visitor system for AST traversal.

### NAPI

Rust's integration with Node.js is better than other low-level languages.

[napi-rs](https://napi.rs/) allows you to build pre-compiled Node.js add-ons with Rust. It provides an out-of-the-box solution for cross-compilation and publishing native binaries to NPM, without needing `node-gyp` or `postinstall` scripts.

You can build a Rust module that can be called directly from Node.js, without needing to create a child process like esbuild.

## Rust + WebAssembly

[WebAssembly](https://webassembly.org/docs/use-cases/) *(*WASM*)* is a portable low-level language that Rust can compile to. It runs in the browser, is interoperable with JavaScript, and is supported in all major modern browsers.

> WASM is definitely a lot faster than JS, but not quite native speed. In our tests, Parcel runs 10-20x slower when compiled to WASM than with native binaries. – [Devon Govett](https://twitter.com/devongovett)

While WASM isn't the perfect solution yet, it _can_ help developers create extremely fast web experiences. The Rust team is [committed](https://www.rust-lang.org/what/wasm) to a high-quality and cutting-edge WASM implementation. For developers, this means you could have the performance advantages of Rust (vs. Go) while still compiling for the web (using WASM).

Some early libraries and frameworks in this space:

- [Yew](https://yew.rs/)
- [Percy](https://github.com/chinedufn/percy)
- [Seed](https://github.com/seed-rs/seed)
- [Sycamore](https://github.com/sycamore-rs/sycamore)
- [Stork](https://stork-search.net/)

These Rust-based web frameworks that compile to WASM aren't trying to replace JavaScript, but work alongside it. While we aren't there yet, it's interesting to see Rust coming after the web on both sides: **making existing JavaScript tooling faster** _and_ **future-forward ideas for [compiling to WASM](https://rustwasm.github.io/docs/book/introduction.html)**.

It's Rust all the way down.

## Why Not Rust?

Rust has a steep learning curve. It's a lower level of abstraction than what most web developers are used to.

Once you're on native code (through Rust, Go, Zig, or other low-level languages),
the algorithms and data structures are [more important](https://twitter.com/devongovett/status/1457945506332692482) than the language choice. It's not a silver bullet.

> Rust makes you think about dimensions of your code that matter tremendously for systems programming. It makes you think about how memory is shared or copied. It makes you think about real but unlikely corner cases and make sure that they're handled. It helps you write code that's incredibly efficient in every possible way. – Tom MacWright ([Source](https://macwright.com/2021/01/15/rust.html))

Further, Rust's usage in the web community is still niche. It hasn't reached critical adoption. Even though learning Rust for JavaScript tooling will be a barrier to entry, interestingly developers would rather have a [faster tool that's harder to contribute to](https://twitter.com/devongovett/status/1261379312898306048). [Fast software wins](https://craigmod.com/essays/fast_software/).

Currently, it's hard to find a Rust library or framework for your favorite services (things like working with authentication, databases, payments, and more). I do think that once Rust and WASM reach critical adoption, this will resolve itself. But not yet. **We need existing JavaScript tools to help us bridge the gap and incrementally adopt performance improvements**.

## The Future of JavaScript Tooling

I believe Rust is the future of JavaScript tooling. [Next.js 12](http://nextjs.org/12) started our transition to fully replace Babel (transpilation) and Terser (minification) with SWC and Rust. Why?

- **Extensibility:** SWC can be used as a Crate inside Next.js, without having to fork the library or workaround design constraints.
- **Performance:** We were able to achieve ~3x faster Fast Refresh and ~5x faster builds in Next.js by switching to SWC, with more room for optimization still in progress.
- **WebAssembly:** Rust's support for WASM is essential for supporting all possible platforms and taking Next.js development everywhere.
- **Community:** The Rust community and ecosystem are amazing and only growing.

It's not just Next.js adopting SWC, either:

- [Deno's](https://deno.land/) linter, code formatter, and docs generator are [built using SWC](https://twitter.com/devongovett/status/1369033422002389000).
- [dprint](https://github.com/devongovett/dprint-node), built on SWC, is a [30x faster](https://twitter.com/devongovett/status/1400138335721455617) code formatting replacement for Prettier.
- [Parcel](https://parceljs.org/) improved overall build performance by [up to 10x](https://v2.parceljs.org/blog/beta3/) with SWC.

> Parcel uses SWC like a library. Before we used Babel's parser and custom transforms written in JS. Now, we use SWC's parser and [custom transforms in Rust](https://github.com/parcel-bundler/parcel/tree/v2/packages/transformers/js/core/src). This includes a full scope hoisting implementation, dependency collection, and more. It's similar in scope to how Deno built on top of SWC. – [Devon Govett](https://twitter.com/devongovett)

It's early days for Rust – a few important pieces are still being figured out:

- **Plugins:** Writing plugins in Rust isn't as approachable for many JavaScript developers. At the same time, exposing a plugin system in JavaScript could negate performance gains. A definitive solution hasn't emerged yet. Ideally, the future combines both JavaScript and Rust. If you want to write a plugin with JavaScript, it's possible with a tradeoff for speed. Need more performance? Use the Rust plugin API.
- **Bundling:** One interesting area of development is `swcpack`, which is SWC's replacement for Webpack. It's still under development but could be very promising.
- **WebAssembly:** As mentioned above, the prospect of writing Rust and compiling to WASM is enticing, but there's still work to be done.

<Callout emoji="💡">

**Update 2023:** [Turbopack](https://turbo.build/pack) has been released, the Rust-powered successor to Webpack.

</Callout>

Regardless, I'm confident Rust will continue to have a major impact on the JavaScript ecosystem for the next 1-2 years and into the future. Imagine a world where all of the build tools used in Next.js are written in Rust, giving you optimal performance. Then, Next.js could be distributed as a [static binary](https://en.wikipedia.org/wiki/Static_build) you'd download from NPM.

That's the world I want to live (and develop) in.

---

_Thanks to [Devon Govett](https://twitter.com/devongovett) for reviewing an early draft of this article._
