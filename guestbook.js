function addComment() {
  var comment = document.getElementById("comment").value;
  var commentList = document.getElementById("commentList");
  var newComment = document.createElement("p");
  newComment.innerHTML = comment;
  commentList.innerHTML = ""; // 이전 댓글들을 모두 지웁니다.
  commentList.appendChild(newComment); // 새로운 댓글을 추가합니다.
  document.getElementById("comment").value = "";
}
function clearComments() {
  var commentList = document.getElementById("commentList");
  commentList.innerHTML = ""; // 모든 댓글을 지웁니다.
}
