import React from 'react';
// import "../assests/css/style.css";
import team1 from "../assests/img/team/team1.jpeg";
import team2 from "../assests/img/team/team2.jpeg";
import team3 from "../assests/img/team/team3.jpeg";
import team45 from "../assests/img/team/team45.jpg";




function AboutUsPage(props) {
  return (
    <section id="team" class="team section-bg">
    <div class="container">

      <div class="section-title">
        <h2>Team</h2>
        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
      </div>

      <div class="row">

        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div class="member">
            <div class="member-img">
              <img src={team3} class="img-fluid" alt=""/>
              <div class="social">
                {/* <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a> */}
                <a href="github.com/mariamkhan-dev"><i class="bi bi-github"></i></a>
                <a href="linkedin.com/in/mariam-i-khan/"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info">
              <h4>Mariam Khan</h4>
              <span>Backend Developer</span>
              <p>Hunter College, Computer Science</p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div class="member">
            <div class="member-img">
              <img src={team2} class="img-fluid" alt=""/>
              <div class="social">
                {/* <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a> */}
                <a href="https://github.com/DanielleBohensky"><i class="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/danielle-bohensky"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info">
              <h4>Danielle Bohensky</h4>
              <span>Backend Developer</span>
              <p>Queens College, Computer Science</p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div class="member">
            <div class="member-img">
              <img src={team45} class="img-fluid" alt=""/>
              <div class="social">
                {/* <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a> */}
                <a href="https://github.com/michaelatatefriedman"><i class="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/michaelafriedman/"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info">
              <h4>Michaela Friedman</h4>
              <span>Frontend Developer</span>
              <p>Queens College, Computer Science and Applied Mathematics</p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div class="member">
            <div class="member-img">
              <img src={team1} class="img-fluid" alt=""/>
              <div class="social">
                {/* <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a> */}
                <a href="https://github.com/SusanNiu"><i class="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/yuanyuan-niu-90/"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            
            <div class="member-info">
              <h4>Yuanyuan Niu</h4>
              <span>Frontend Developer</span>
              <p>Baruch College, Computer Information Systems</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default AboutUsPage;