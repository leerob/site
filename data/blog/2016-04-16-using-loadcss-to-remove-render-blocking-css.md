---
title: "Using loadCSS to remove render blocking CSS"
summary: "Improve performance by removing blocking scripts like CSS from rendering other parts of your website."
image: "/assets/images/posts/app.jpg"
tags: [web, drupal, css]
---

{% include image.html path="posts/app.jpg" path-detail="posts/app.jpg" alt="Angularjs components" %}

When doing frontend performance optimizations for your website or app one of the important things to consider is when are visitors actually getting content delivered to them, to be able to interact and see when they visit your site for the first time.

This is especially important for typical seo dependant sites where a lot of the visitors are first time visitors that don’t have your CSS / Fonts or Javascript cached in the browser. Be it online shops, job portals or simple sites this is an extremely relevant topic and not so easy to get around with.

We will explore how you can deliver a better experience by delivering content as fast as possible so that what is really important (what the user sees the first few seconds) gets delivered immediately in the first response the site gets from the server, and everything else gets downloaded in the background asynchronously.

## Prioritizing the size of above the fold content

Above the fold content it’s not just a SEO keyword that is used by marketeers to make sure you compact everything you can into it, bluttering it with whatever you think is relevant in your page (everything..?).

Above the fold is a very important topic when you think about the performance of a page, because that is actually the only thing you need to deliver “immediately” to the user, hopefully in the “first round trip” (response from the server to the browser request). Anything after that can be delivered in a second / third / fourth requests asynchronously so that the user only actually has to wait for this portion of the page.

When you think about this it actually makes a huge impact and immediately sounds really unnecessary that you have to force the users to wait for the footer’s CSS or javascript for example to load to actually deliver the page to them.

Google has a great tip on this on the [Google performance optimization page]("https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent"). Take a look I am sure it will be extremely helpful.

We will now go on to how you can accomplish this in technical terms using [LoadCSS]("https://github.com/filamentgroup/loadCSS")  and [Critial-CSS]("https://github.com/filamentgroup/criticalCSS")

##How it works - Moving all CSS out of the blocking zone

When you use a normal CSS link tag to include the CSS in the header of your webpage as the below snippet this tells the browser that when reading this page it should block everything and fetch that specific CSS file from the server.

{% highlight html %}
<head>
<link rel="stylesheet" type="text/css" href="theme.css">
</head>
{% endhighlight %}

This means making an extra request, waiting for the response and if you have multiple CSS files this means then multiple requests and for mobile devices where the network latency can be bigger this becomes to be a real burden for the user, sometimes waiting several seconds before actually seeing a single pixel on the page.

Like we mentioned earlier the solution is to make sure that the above the fold is presentable at first payload and everything else is loaded in a non blocking way. Let’s explore this further.

## Step 1 - Moving CSS out of the head and loading it asynchronously

The first step of the process is to move the CSS out of the blocking zone (link tags in the head) into the body tag (actually to the bottom of the body tag) and using [LoadCSS]("https://github.com/filamentgroup/loadCSS") to load the CSS asynchronously. This will make sure that the page is delivered without any block resource for CSS.

Because loading CSS and other files being loaded asynchronously using :

{% highlight html %}
<link rel="preload">
{% endhighlight %}

[W3Spec]("https://www.w3.org/TR/2015/WD-preload-20150721") is being implemented in some browsers, but not all by using loadCSS in the following way you make sure to take advantage of this and use loadCSS to polyfill browsers that don’t support this feature.

{% highlight html %}
<link rel="preload" href="path/to/mystylesheet.css" as="style" onload="this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="path/to/mystylesheet.css"></noscript>
{% endhighlight %}

Since rel="preload" does not apply the CSS on its own (it merely fetches it), there is an onload handler on the link that will do that for us as soon as the CSS finishes loading. Since this step requires JavaScript, you may want to include an ordinary reference to your CSS file as well, using a noscript element to ensure it only applies in non-JavaScript settings.

This can increase a lot the page speed just by itself depending on how big your CSS is. Try it out and I am sure you will already see a great impact.

## Step 2 - Getting the critical above the fold CSS

Now that you have all your CSS being loaded in a non blocking way, what you experience is that there is a second or two of unstyled content when you clear your cache. So if the browser is not caching your CSS files while they are not loaded the page appears blank or unstyled.

This is definitely not what we want and that is why we will inject the above the fold CSS inline in the head tag so that the user does not perceive this unstyled content at all and just gets the page lightening fast.

So how do we get the CSS that is exactly and only exactly the CSS of the above the fold? You could built it on your own on a separate stylesheet but that is a bit of an extra work you don’t want to do, and fortunately you don’t have to. We will use [Critial-CSS]("https://github.com/filamentgroup/criticalCSS") for this.

CritialCSS allows you to specify a URL, a stylesheet, some optional settings like the height or width of the above the fold (in case you want a bit more or a bit less of auto CSS) and it will launch a headless browser, in this case phantomJs, and it will fetch the above the fold CSS and put it into a separate file for you to use.

This is how it looks in VanillaJs :

{% highlight javascript %}
var request = require('request');
var path = require( 'path' );
var criticalcss = require("criticalcss");
var fs = require('fs');
var tmpDir = require('os').tmpdir();
var cssUrl = 'http://site.com/style.css';
var cssPath = path.join( tmpDir, 'style.css' );
request(cssUrl).pipe(fs.createWriteStream(cssPath)).on('close', function() {
  criticalcss.getRules(cssPath, function(err, output) {
    if (err) {
      throw new Error(err);
    } else {
      criticalcss.findCritical("https://site.com/", { rules: JSON.parse(output) }, function(err, output) {
        if (err) {
          throw new Error(err);
        } else {
          console.log(output);
        }
      });
    }
  });
});
{% endhighlight %}

## Step 3 - Saving the critical CSS

{% highlight javascript %}
gulp.task 'critical', ->
  request = require('request')
  util = require ('gulp-util')
  path = require('path')
  criticalcss = require('criticalcss')
  fs = require('fs')
  tmpDir = require('os').tmpdir()
  cssUrl = "https://www.examplesite.com/style.css"
  cssPath = path.join(tmpDir, 'style.css')
  includePath = path.join(__dirname, 'dist/css/critical.css')
  request(cssUrl).pipe(fs.createWriteStream(cssPath)).on 'close', ->
    criticalcss.getRules cssPath,{buffer: 2000*1024}, (err, output) ->
      if err
        throw new Error(err)
      else
        criticalcss.findCritical ("https://www.examplesite.com"), {rules: JSON.parse(output),buffer: 2000*1024}, (err, output) ->
          if err
            throw new Error(err)
          else
            fs.writeFile includePath, output, (err) ->
              if err
                throw new Error(err)
              console.log 'Critical for jobs written to include!'
      return
{% endhighlight %}

There is a couple of things going on here. On the first part we initialise some variables like critical-css, util, path etc. Then we set up the CSS path to fetch the CSS from and the IncludePath which is where the final css will be created on which includes only the above the fold css.

We then run critical css on the page URL, here you can set some options we only set the buffer for memory limits reasons with node. Once criticalCSS finishes we use fs.write to write to the includePath we initialised earlier. And we have our criticalCSS compiled and extracted into a specific file in dist/css/critical.css.

## Step 4 - Inlining the critical CSS

This step can depend a lot depending on where and on what you are building your site with. The idea here is that we take the CSS from the CSS file generated by CriticalCSS and embed it inline in a style tag in the head of your page. By inlining it we are making sure it gets delivered with the first response the server delivers and not extra request is needed to present the page in a nicely styled way, completely transparent to the user of all the process we just went through.

If you are living in CMS world this tipically means doing some kind of preprocess to fetch this CSS and put it directly into the page, for example in Drupal it would look somewhat like this :

{% highlight php %}
/**
 * Implements hook_process_page().
 */
function my_theme_preprocess_page(&$vars) {
// First, define the options for drupal_add_css();
$critical_css_options = [
    'type' => 'inline',
    'scope' => 'header',
    'group' => CSS_SYSTEM,
    'weight' => -1000,
    'preprocess' => FALSE,
  ];
$critical_css_file = 'critical.css';
    // Inline the CSS.
    drupal_add_css(file_get_contents(drupal_get_path('theme', 'my_theme') . '/dist/css/' . $critical_css_file), $critical_css_options);
}
{% endhighlight %}

It’s important to keep the amount of the CriticalCSS short, so that the first response does not take too long to be delivered but usually the amount of criticalCSS is a very small portion of the overall CSS so the impact you will see can be that the user now is seeing the content a couple of seconds earlier.

## Testing out the results

A good tool to test the results out is [Webpage test]("http://www.webpagetest.org/") you can see the fist time the user gets anything painted in the browser with charts and screenshots of what exactly he sees.

![Visual progress](https://sites.google.com/a/webpagetest.org/docs/_/rsrc/1334422231485/using-webpagetest/metrics/speed-index/chart-line-small.png)

Make sure that you make some tests before and after doing this process so you can track the effect that it did on your page.

This will also greatly impact the Webpagespeed test from google since one of the key concepts is keeping above the fold content clean and non blocked.

## Other improvements

This is only one of many improvements you can make on the frontend. Other improvements I might write about in the future :

*   Minifying CSS
*   Minifying and Uglifying your Javascript
*   Using picture HTML tag to deliver images to different medias (device sizes)
*   Optimizing images by removing any metadata from them before delivering them
*   Remove render blocking javascript

Read more about some tips on the [google page speed insights]("https://developers.google.com/speed/docs/insights/about")
