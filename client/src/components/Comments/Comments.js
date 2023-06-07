// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Comments = ({ videoId }) => {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const apiKey = process.env.YOUTUBE_API_KEY;
//         const apiUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${id.videoId}&key=${apiKey}`;

//         const response = await axios.get(apiUrl);
//         const commentItems = response.data.items;
//         const extractedComments = commentItems.map((item) => ({
//           id: item.id,
//           videoId: item.snippet.videoId,
//           comment: item.snippet.topLevelComment.snippet.textDisplay,
//           likes: item.snippet.topLevelComment.snippet.likeCount,
//           dislikes: item.snippet.topLevelComment.snippet.dislikeCount,
//           replies: item.replies ? item.replies.comments.map(reply => ({
//             id: reply.id,
//             commentId: reply.snippet.parentId,
//             comment: reply.snippet.textDisplay,
//             likes: reply.snippet.likeCount,
//             dislikes: reply.snippet.dislikeCount
//           })) : []
//         }));

//         setComments(extractedComments);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchComments();
//   }, [videoId]);

//   return (
//     <div>
//       <h2>Comments</h2>
//       {comments.length > 0 ? (
//         <div>
//           {comments.map((comment) => (
//             <div key={comment.id}>
//               <p>{comment.comment}</p>
//               <p>Likes: {comment.likes}</p>
//               <p>Dislikes: {comment.dislikes}</p>
//               {comment.replies.length > 0 && (
//                 <div>
//                   <h4>Replies:</h4>
//                   {comment.replies.map((reply) => (
//                     <div key={reply.id}>
//                       <p>{reply.comment}</p>
//                       <p>Likes: {reply.likes}</p>
//                       <p>Dislikes: {reply.dislikes}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No comments available.</p>
//       )}
//     </div>
//   );
// };

// export default Comments;