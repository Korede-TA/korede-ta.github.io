# agbero.dev 🇳🇬👨🏿‍💻

my personal website 

scrappily put together with jekyll and modified heavily over time (last big update was: july 8 2020)

the code is pretty disorganized but [`\_layouts/default.html`](https://github.com/Korede-TA/korede-ta.github.io/blob/master/_layouts/default.html) is a good starting point if you want to make modifications


## getting it to work on your own computer 🛠

try to get [Ruby](https://www.ruby-lang.org/en/) and [Bundler](https://bundler.io/) installed if you don't have them already. you probably already have a version of Ruby if you're using a Mac

then..
install the project's dependencies with Bundler by running the command in any UNIX-based terminal (Windows users could check out some of these [terminal emulators](https://www.puttygen.com/windows-terminal-emulators#:~:text=Mintty%20is%20an%20open%2Dsource,mintty%20is%20Cygwin's%20default%20terminal.) if you don't have one already):
```sh
bundle install
```

right after that, you can run the development server by running this command:
```sh
bundle exec jekyll serve
```

that's it! the site should now be serving at `localhost:4000` so you can put that address in your web browser to see it live

it's a good idea to run the server in a separate terminal tab because you can make change to the code while it's running and it'll automatically update the code being served (although you might still need to refresh the page in the browser)


## putting it out there for the world to see ✨

i deploy my site using Github Pages. you can find some good guides to doing this for _free_ by searching ["github pages jekyll"](https://duckduckgo.com/?q=github+pages+jekyll) in your favorite search engine. 

only other thing i did was by a domain name and point the domain name resolution service (DNS) to Github Pages. you could find instructions for this by searching for ["github pages custom domain"](https://duckduckgo.com/?q=github+pages+custom+domain).


## feedback 🗣

if you're setting up your own personal website for the first time and you somehow stumbled upon mine and would like to use it as a starting point, feel free to open an issue or reach out to me and i'd be happy to help :)

