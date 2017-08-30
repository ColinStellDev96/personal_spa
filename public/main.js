Vue.use(VueRouter);

var myRouter = new VueRouter({
    routes: [
        {
            path: '/',
            component: {
                template: `
                    <div id="home">
                    <div class="container">

                    <div class="jumbotron"></div>

                    <h1 class="text-center">Creativity Drives Me, I Am Inspried by Work that Matters.</h1>

                    <div class="row">
                        <div class="col-md-6">
                            <img src="https://placeimg.com/550/300/tech" alt="project image">
                        </div>
                        <div class="col-md-6 text" >
                              <h3>Project One</h3>
                                <p>Readymade unicorn post-ironic, yuccie ennui stumptown normcore sustainable pug messenger bag. Synth mlkshk artisan polaroid aesthetic, trust fund direct trade VHS mustache raw denim marfa chambray irony DIY health goth. Viral austin thundercats la croix, master cleanse subway tile microdosing 90's unicorn pop-up waistcoat celiac.</p>
                                <a href="#">Visit The Project</a>
                         </div>
                      </div>

                      <div class="row">
                          <div class="col-md-6">
                              <img src="https://placeimg.com/550/300/tech" alt="project image">
                          </div>
                          <div class="col-md-6 text">
                                <h3>Project One</h3>
                                  <p>Readymade unicorn post-ironic, yuccie ennui stumptown normcore sustainable pug messenger bag. Synth mlkshk artisan polaroid aesthetic, trust fund direct trade VHS mustache raw denim marfa chambray irony DIY health goth. Viral austin thundercats la croix, master cleanse subway tile microdosing 90's unicorn pop-up waistcoat celiac.</p>
                                  <a href="#">Visit The Project</a>
                           </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <img src="https://placeimg.com/550/300/tech" alt="project image">
                            </div>
                            <div class="col-md-6 text">
                                  <h3>Project One</h3>
                                    <p>Readymade unicorn post-ironic, yuccie ennui stumptown normcore sustainable pug messenger bag. Synth mlkshk artisan polaroid aesthetic, trust fund direct trade VHS mustache raw denim marfa chambray irony DIY health goth. Viral austin thundercats la croix, master cleanse subway tile microdosing 90's unicorn pop-up waistcoat celiac.</p>
                                    <a href="#">Visit The Project</a>
                             </div>
                          </div>
                    </div>
                </div>`
            }
        }, {
            path: '/portfolio',
            component: {
                template: `
                    <div id="portfolio">
                        <div class="container">
                        <h2 class="text-center head">Web-Development Work</h2>

                          <div class="row" class='por'>
                              <div class="col-sm-6 col-md-4">
                                <div class="thumbnail">
                                  <img src="https://placeimg.com/1000/700/tech" alt="project">
                                    <h3>Project Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div class="text-center"><a href="#" class="btn btn-primary" role="button">Visit Project</a></div>
                                </div>
                              </div>

                              <div class="col-sm-6 col-md-4">
                                <div class="thumbnail">
                                  <img class='showcase_img'src="https://placeimg.com/1000/700/tech" alt="project">
                                    <h3>ASTEROID (NASA API)<img src='/imgs/code_craft_logo.jpg' class="cc_icon"></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div class="text-center"><a href="#" class="btn btn-primary" role="button">Visit Project</a></div>
                                </div>
                              </div>

                              <div class="col-sm-6 col-md-4">
                                <div class="thumbnail">
                                  <img src="https://placeimg.com/1000/700/tech" alt="project">
                                    <h3>Project Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div class="text-center"><a href="#" class="btn btn-primary" role="button">Visit Project</a></div>
                                </div>
                              </div>
                            </div>

                            <h2 class="text-center">Project Management Work</h2>

                            <div class="row">
                                <div class="col-sm-6 col-md-4">
                                  <div class="thumbnail">
                                    <img src="https://placeimg.com/1000/700/tech" alt="project">
                                      <h3>Richtr<a href="http://humandesign.com/" target="_blank"><img class="hd" src="/imgs/FKdZYKCA_400x400.png"></a></h3>
                                      <h4>Company: Human Design</h4>
                                      <h4>My Role: Project Manager</h4>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                      <div class="text-center"><a href="#" class="btn btn-primary" role="button">Visit Project</a></div>
                                  </div>
                                </div>

                                <div class="col-sm-6 col-md-4">
                                  <div class="thumbnail">
                                    <img src="https://placeimg.com/1000/700/tech" alt="project">
                                      <h3>Rayback Collective<a href="http://humandesign.com/" target="_blank"><img class="hd" src="/imgs/FKdZYKCA_400x400.png"></a></h3>
                                      <h4>Company: Human Design</h4>
                                      <h4>My Role: Project Manager</h4>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                      <div class="text-center"><a href="#" class="btn btn-primary" role="button">Visit Project</a></div>
                                  </div>
                                </div>

                                <div class="col-sm-6 col-md-4">
                                  <div class="thumbnail">
                                    <img src="https://placeimg.com/1000/700/tech" alt="project">
                                      <h3>CMBS<a href="http://humandesign.com/" target="_blank"><img class="hd" src="/imgs/FKdZYKCA_400x400.png"></a></h3>
                                      <h4>Company: Human Design</h4>
                                      <h4>My Role: Project Manager</h4>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                      <div class="text-center"><a href="#" class="btn btn-primary" role="button">Visit Project</a></div>
                                  </div>
                                </div>
                              </div>
                              <div class="resume"><i class="fa fa-file-text"></i>Colin Stell Resume</div>
                        </div>
            </div>`
            }
        }, {
            path: '/about',
            component: {
                template: `
                <div id="about">
                    <div class="container">

                    <div class="row">
                        <div class="col-md-6">
                            <img src="/imgs/colin_headshot_dev.jpg" class="img-responsive circle" alt="Responsive image">
                        </div>
                        <div class="col-md-6">
                            <h3>Colin Stell</h3>
                            <p>Hello! Thank you for visiting my site and taking the time to look through my work. I am a Colorado native from a little suburb of Denver called Golden, CO. In my 29 years of living, I have only spent one year out of Colorado (good ol' Spearfish, SD). I'm also the proud husband to my beautiful wife and a father to our three wonderful kids (2 boys and 1 little lady). They drive everything I do and areato my greatest source of joy!</p>
                            <p>Before switching careers and pursing a career in web-development and web-design, I spent 10 years working in the resturant industry as a cook. I've always loved working on a computer, (mostly through creating fun desings here and there) and I realized that the resturant industry wasn't something I was passionate enough about to continue as a career. After diving into some online courses for web-development, I was hooked and I have been working hard to learn this new skill.</p>
                            <p>Creativity drives me and I am passionate about creating great art. Primarily, that has always been through music, which I still very much do. Before entering a web-development bootcamp, (more on that below) I had the privlage of working for a great design agency in Boulder, CO called <a href="http://humandesign.com/">Human Design</a> where I worked as a project manager. During my time there, I got to work with fantastic UX/UI designers and web-developers on a host of different projects and the fire for focusing my creative drive was fueled for web-devlopment. Today, I am passionate about seeing designs for well crafted website and web/mobile apps come to life and my goal is to continue to be the best web-developer I can be with an eye for design!</p>
                        </div>
                  </div>

                  <div class="text-center">
                      <i class="fa fa-code"></i>
                      <h4>HTML5</h4>
                      <i class="fa fa-code"></i>
                      <h4>CSS3</h4>
                      <i class="fa fa-code"></i>
                      <h4>JavaScript</h4>
                      <i class="fa fa-code"></i>
                      <h4>jQuery</h4>
                      <i class="fa fa-code"></i>
                      <h4>Bootstrap</h4>
                      <i class="fa fa-code"></i>
                      <h4>GIT</h4>
                      <i class="fa fa-code"></i>
                      <h4>AJAX</h4>
                      <i class="fa fa-code"></i>
                      <h4>JSON</h4>
                      <i class="fa fa-code"></i>
                      <h4>Vue.js</h4>
                      <i class="fa fa-code"></i>
                      <h4>Node.js</h4>
                      <i class="fa fa-code"></i>
                      <h4>Express</h4>
                      <i class="fa fa-code"></i>
                      <h4>MongoDB</h4>
                  </div>

                  <div class="row" id="row2">
                      <div class="col-md-6" id="code_craft_img">
                          <img src="/imgs/code_craft_logo.jpg" class="img-responsive rounded" alt="Responsive image">
                      </div>
                      <div class="col-md-6">
                          <h3>Code Craft School of Technology</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                </div>
              </div>
          </div>`
            }
        }, {
            path: '/contact',
            component: {
                template: `
            <div>
                <div class="container">

                    <h2>Reach out to me!</h2>
                    <p class="lead">Please feel free to contact me in any of the various ways below, I would love to hear about any potential working oportunities or just to talk through anything you have seen on my site or resume. Thank you for visiting my site!</p>

                    <div class="row">
                        <div class="col-xs-6 col-sm-3">
                            <a href="mailto:colinjohnstell@gmail.com" target="_top"><div class="text-center"><i class="fa fa-envelope"></i></div></a>
                            <h3>E-Mail</h3>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <a href="https://www.linkedin.com/in/colin-stell-526280120/" target="_blank"><div class="text-center"><i class="fa fa-linkedin-square"></i></div></a>
                            <h3>LinkedIn</h3>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <a href="https://github.com/ColinStellDev96" target="_blank"><div class="text-center"><i class="fa fa-github-square"></i></div></a>
                            <h3>GitHub</h3>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <a href="https://twitter.com/ColinStell" target="_blank"><div class="text-center"><i class="fa fa-twitter-square"></i></div></a>
                            <h3>Twitter</h3>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <a href="https://medium.com/@colinjohnstell" target="_blank"><div class="text-center"><i class="fa fa-medium align"></i></div></a>
                            <h3>Medium</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                `
            }
        }
    ]
});

var mainVm = new Vue({el: '#app', router: myRouter});
