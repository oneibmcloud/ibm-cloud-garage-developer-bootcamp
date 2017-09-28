<!-- .slide: data-background="resources/footer.svg" data-background-size="contain" data-background-position="bottom"  -->

##architecture - container

<a href="resources/agile-architecture/architecture-container.png">
  <img class="plain" height="50%" width="50%" src="resources/agile-architecture/architecture-container.png" />
</a>  


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<aside class="notes">
  <p>
    Web Application: an Apache Tomcat 7 web server that is the single point of access for the techtribes.je website from the Internet.  </p>
  <p>
    Content Updater: a standalone Java 7 application that updates information from Twitter, GitHub and blogs.  </p>
  <p>
    Relational Database: a MySQL database that stores the majority of the data behind the techtribes.je website.
  </p>
  <p>
    NoSQL Data Store: a MongoDB database that stores the tweets and blog posts.
  </p>
  <p>
    File System: the file system stores Lucene search indexes.
  </p>
</aside>
