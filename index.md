---
layout: post
title: Articles
---


<h1>{{ page.title }}</h1>
<ul class="post-list">
{% for post in site.posts limit:10 %}
  <li>
    <span class="post-date"><date>{{ post.date | date_to_xmlschema }}</date></p>
    <h3 class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <div class="post-excerpt">{{ post.excerpt }}</div>
  </li>
  {% endfor %}
</ul>
