const tmpl = (a, b) => {
  return `<div class="project" ng-repeat="proj in projects">
  <div>
    <div class="info">
      <div class="title">
        <h3>{{proj.title}}</h3>
        <div class="line"></div>
      </div>
      <div class="description">
        <p>{{proj.desc}}</p>
      </div>
      <a class="project-btn" ng-href="{{proj.siteUrl}}" target="_blank"><p>VIEW PROJECT</p></a>
      <a class="github-btn" ng-href="{{proj.github}}" target="_blank"><p>View code on Github</p></a>
    </div>
    <div class="preview">
      <div class="bar-top">
        <div class="browser-circles">
          <div class="circle red"></div>
          <div class="circle yellow"></div>
          <div class="circle green"></div>
        </div>
      </div>
      <div class="content">
        <img ng-src="{{proj.img}}" alt="" />
      </div>
      <div class="bar-bottom"></div>
    </div>
  </div>
  <div class="line"></div>
</div>`
}
export default tmpl