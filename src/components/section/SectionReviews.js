import React from 'react';
import styled from 'styled-components';

// Component Dependency
import SectionTitle from 'SectionTitle';

// Component Style
const ReviewLogo = styled.div`
  margin-top: 20px;

  img {
    width: 200px;
    height: auto;
  }
`;

const ReviewStar = styled.div`
  i {
    color: #FFD700;
  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
`;

const ReviewCard = styled.span`
  width: 300px;
  height: 400px;
  background-color: #c3c3c3;
  display: inline-block;

  @media (min-width: 768px) {
    width: 700px;
  }
`;

const SectionReviews = (props) => {
  return (
    <section>
      <SectionTitle sectionHeading="Our custumers love us"/>
      <div class="d-flex justify-content-center">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class=""></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2" class=""></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item">
              <ReviewCard/>
              <ReviewStar class="carousel-caption d-md-block">
                <img class="avatar" src={"assets/images/avatar1.png"} />
                <ul>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </ul>
                <p>Kevin says: They were very efficient in resolving my car problems!! Partyyyyy</p>
              </ReviewStar>
            </div>
            <div class="carousel-item active">
              <ReviewCard/>
              <ReviewStar class="carousel-caption d-md-block">
                <img class="avatar" src={"assets/images/avatar2.png"} />
                <ul>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </ul>
                <p>Mario says: I got ma car get back on the road as quickly as possible, they do what they promise!! Yahoooo</p>
              </ReviewStar>
            </div>
            <div class="carousel-item">
              <ReviewCard/>
              <ReviewStar class="carousel-caption d-md-block">
                <img class="avatar" src={"assets/images/avatar3.png"} />
                <ul>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </ul>
                <p>Princess Lela says: top company, they are superstars...just like me!</p>
              </ReviewStar>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <ReviewLogo class="col-12 d-flex flex-column justify-content-between align-items-center">
        <p class="text-center">Read all of our reviews on</p>
        <a href="#">
          <img class="text-center" alt="google reviews" src="/assets/images/google-logo.png" />
        </a>
      </ReviewLogo>
    </section>
  );
}

export default SectionReviews;
