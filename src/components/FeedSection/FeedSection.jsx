import React from 'react';
import './FeedSection.css'; // Import the CSS file

const FeedSection = () => {
  const feedbackItems = [
    {
      profileImgSrc: 'src/assets/bgs/pro1.svg',
      name: 'Floyd Miles',
      feedback: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet.`,
      rating: 5
    },
    {
      profileImgSrc: 'src/assets/bgs/pro2.png',
      name: 'Ronald Richards',
      feedback: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet.`,
      rating: 4
    },
    {
      profileImgSrc: 'src/assets/bgs/pro3.png',
      name: 'Savannah Nguyen',
      feedback: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet.`,
      rating: 3
    }
  ];

  return (
    <section id="feed">
      <div className="feed-content">
        <span>
          <img src="src/assets/bgs/Rectangle 21 voil.png" alt="line" className="line4" /> Feedback
        </span>
        <div className="feed-row">
          {feedbackItems.map((item, index) => (
            <div className="feed-column" key={index}>
              <div className="profile-image">
                <img src={item.profileImgSrc} alt={`Profile ${index + 1}`} />
              </div>
              <div className="ratings">
                {Array.from({ length: item.rating }, (_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <h2>{item.name}</h2>
              <p>{item.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedSection;
