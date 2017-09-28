<!-- .slide: data-background="resources/footer.svg" data-background-size="contain" data-background-position="bottom"  -->

##architecture - component

<a href="resources/agile-architecture/architecture-component.png">
  <img class="plain" height="50%" width="50%" src="resources/agile-architecture/architecture-component.png" />
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
    Scheduled Content Updater: This component orchestrates the update of information from Twitter, GitHub and blogs on a scheduled basis (i.e. every fifteen minutes). It also recalculates the “recent activity” and awards badges once per hour. It’s a Spring Bean that uses the Spring scheduling annotations. See je.techtribes.component.scheduledcontentupdater1 for the code.  </p>
  <p>
    Twitter Connector: This component is responsible for connecting to Twitter in order to
    refresh profile information and retrieve tweets.   </p>
  <p>
    GitHub Connector: This component is responsible for connecting to GitHub in order to refresh repository information.
  </p>
  <p>
    News Feed Connector: This component is responsible for connecting to RSS/Atom feeds in order to refresh the news and blog posts aggregated into the techtribes.je website.
  </p>
</aside>
