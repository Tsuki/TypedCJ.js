TypedCJ.js
========

[View the live demo](http://blog.sukitsuki.com/TypedCJ.js/) | [Go to my blog, blog.sukitsuki.com](http://blog.sukitsuki.com/)

TypedCJ.js 是對Typed.js 作出條改 加入倉頡輸入法的效果。

---

Installation
------------
This is really all you need to get going.

~~~ javascript
<script src="jquery.js"></script>
<script src="typedCJ.js"></script>
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

------------
