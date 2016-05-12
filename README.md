TypedCJ.js
========

[View the live demo](http://www.mattboldt.com/demos/typed-js/) | [Go to my site, mattboldt.com](http://www.mattboldt.com)

Typed.js is a jQuery plugin that types. Enter in any string, and watch it type at the speed you've set,
backspace what it's typed, and begin a new sentence for however many strings you've set.

---

Looking for some custom use cases for Typed.js? [Check out the wiki](https://github.com/mattboldt/typed.js/wiki)

---

Installation
------------
This is really all you need to get going.

~~~ javascript
<script src="jquery.js"></script>
<script src="typed.js"></script>
<script>
	$(function(){
		$(".element").typed({
			strings: ["First sentence.", "Second sentence."],
			typeSpeed: 0
		});
	});
</script>
...

<span class="element"></span>
~~~

