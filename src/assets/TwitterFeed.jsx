// import React from 'react';
// import { TwitterTimelineEmbed } from 'react-twitter-embed';

// export default function TwitterFeed() {
//   return (
//     <div className="twitter-card">
//       <div className="feed-header">
//         <h2>LATEST <span>UPDATES</span></h2>
//         <p>Stay up to date with match results and team announcements.</p>
//       </div>

//       {/* Added the crop-to-latest class here */}
//       <div className="twitter-frame crop-to-latest">
//         <TwitterTimelineEmbed
//           sourceType="profile"
//           screenName="VALORANT"
//           // Restricting the height limits how far down the timeline can generate data frames
//           options={{ height: 450 }} 
//           theme="dark"
//           noBorders={true}
//           noHeader={true}
//           noFooter={true} // Hides X's bottom "Load More" action panel
//           transparent={true}
//         />
//       </div>
//     </div>
//   );
// }