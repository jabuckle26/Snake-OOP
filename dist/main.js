!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var o=function(){var e=this;this.segments=[],this.moving=!1,this.orientation="horizontal",this.dx=10,this.dy=0,this.createBabySnake=function(){e.segments.push([30,10]),e.segments.push([20,10]),e.segments.push([10,10]),e.moving=!0},this.move=function(){var n=e.segments[0].map((function(e){return e}));"horizontal"===e.orientation?n[0]+=e.dx:"vertical"===e.orientation&&(n[1]+=e.dy),e.segments.unshift(n),e.segments=e.segments.slice(0,-1)},this.checkCollision=function(){var n=e.segments[0];(n[0]<-10||n[0]>490||n[1]>490||n[1]<-10)&&(e.moving=!1)},this.changeOrientation=function(n){switch(n.code){case"ArrowRight":0===e.dx&&(e.dx=10,e.dy=0,e.orientation="horizontal");break;case"ArrowLeft":0===e.dx&&(e.dx=-10,e.dy=0,e.orientation="horizontal");break;case"ArrowDown":0===e.dy&&(e.dx=0,e.dy=10,e.orientation="vertical");break;case"ArrowUp":0===e.dy&&(e.dx=0,e.dy=-10,e.orientation="vertical")}console.log(e.dx,e.dy)},this.growSnake=function(){}};console.log("JAMES");var r=function(){document.addEventListener("keyup",u.changeOrientation),u.move(),a(),i(u.segments),u.checkCollision(),!1===u.moving&&c()},i=function(e){var n=document.querySelector(".game-container");e.forEach((function(e){var t=document.createElement("div");t.classList.add("snake-segment"),t.style.left=e[0]+"px",t.style.top=e[1]+"px",n.appendChild(t)}))},a=function(){var e=document.querySelectorAll(".snake-segment");Array.from(e).forEach((function(e){e.remove()}))},c=function(){console.log("GAME OVER!"),(u=new o).createBabySnake(),a(),i(u.segments)};document.body.onkeyup=function(e){"Space"===e.code&&(console.log("STARTING GAME"),u.createBabySnake(),i(u.segments),document.querySelector(".title-screen").style.display="none",document.querySelector(".game-container").style.display="block",u.moving=!0,setInterval(r,s))};var s=200,u=new o}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4udHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJzZWdtZW50cyIsIm1vdmluZyIsIm9yaWVudGF0aW9uIiwiZHgiLCJkeSIsImNyZWF0ZUJhYnlTbmFrZSIsInB1c2giLCJtb3ZlIiwibmV3SGVhZExvY2F0aW9uIiwibWFwIiwidW5zaGlmdCIsInNsaWNlIiwiY2hlY2tDb2xsaXNpb24iLCJoZWFkIiwiY2hhbmdlT3JpZW50YXRpb24iLCJldiIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwiZ3Jvd1NuYWtlIiwiZ2FtZUxvb3AiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzbmFrZSIsInB1cmdlU25ha2VzIiwiZHJhd1NuYWtlU2VnbWVudHMiLCJnYW1lT3ZlciIsInNuYWtlU2VnbWVudHMiLCJncmlkIiwicXVlcnlTZWxlY3RvciIsImZvckVhY2giLCJzbmFrZVNlZ21lbnQiLCJuZXdTZWdtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwibGVmdCIsInRvcCIsImFwcGVuZENoaWxkIiwiYWxsU2VnbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwidGFyZ2V0U2VnbWVudCIsInJlbW92ZSIsIlNuYWtlIiwiYm9keSIsIm9ua2V5dXAiLCJlIiwiZGlzcGxheSIsInNldEludGVydmFsIiwiZ2xvYmFsVGltZXIiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTRixHQUcvREcsRUFBT0UsR0FBSSxFQUdKRixFQUFPRCxRQUtmRixFQUFvQlEsRUFBSUYsRUFHeEJOLEVBQW9CUyxFQUFJVixFQUd4QkMsRUFBb0JVLEVBQUksU0FBU1IsRUFBU1MsRUFBTUMsR0FDM0NaLEVBQW9CYSxFQUFFWCxFQUFTUyxJQUNsQ0csT0FBT0MsZUFBZWIsRUFBU1MsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWixFQUFvQmtCLEVBQUksU0FBU2hCLEdBQ1gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWViLEVBQVNpQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RQLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFbUIsT0FBTyxLQVF2RHJCLEVBQW9Cc0IsRUFBSSxTQUFTRCxFQUFPRSxHQUV2QyxHQURVLEVBQVBBLElBQVVGLEVBQVFyQixFQUFvQnFCLElBQy9CLEVBQVBFLEVBQVUsT0FBT0YsRUFDcEIsR0FBVyxFQUFQRSxHQUE4QixpQkFBVkYsR0FBc0JBLEdBQVNBLEVBQU1HLFdBQVksT0FBT0gsRUFDaEYsSUFBSUksRUFBS1gsT0FBT1ksT0FBTyxNQUd2QixHQUZBMUIsRUFBb0JrQixFQUFFTyxHQUN0QlgsT0FBT0MsZUFB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V0FDaEIsSUFBTWdCLEVBQXdCbkIsU0FBU29CLGlCQUFpQixrQkFDeERDLE1BQU1DLEtBQUtILEdBQWFWLFNBQVEsU0FBQ2MsR0FDN0JBLEVBQWNDLGFBS2hCbkIsRUFBVyxXQUNiVCxRQUFRQyxJQUFJLGVBQ1pLLEVBQVEsSUFBSXVCLEdBQ056QyxrQkFDTm1CLElBQ0FDLEVBQWtCRixFQUFNdkIsV0FJNUJxQixTQUFTMEIsS0FBS0MsUUFBVSxTQUFVQyxHQUNmLFVBQVhBLEVBQUVqQyxPQUNGQyxRQUFRQyxJQUFJLGlCQUNaSyxFQUFNbEIsa0JBQ05vQixFQUFrQkYsRUFBTXZCLFVBQ0NxQixTQUFTUSxjQUFjLGlCQUMxQ08sTUFBTWMsUUFBVSxPQUNRN0IsU0FBU1EsY0FBYyxtQkFDMUNPLE1BQU1jLFFBQVUsUUFDM0IzQixFQUFNdEIsUUFBUyxFQUVma0QsWUFBWS9CLEVBQVVnQyxLQUk5QixJQUFJQSxFQUFzQixJQUN0QjdCLEVBQVEsSUFBSXVCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvL1NuYWtlIGNsYXNzXHJcbmV4cG9ydCBjbGFzcyBTbmFrZSB7XHJcbiAgICBzZWdtZW50czogbnVtYmVyW11bXSA9IFtdO1xyXG4gICAgbW92aW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBvcmllbnRhdGlvbjogc3RyaW5nID0gJ2hvcml6b250YWwnO1xyXG4gICAgZHg6IG51bWJlciA9IDEwO1xyXG4gICAgZHk6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY3JlYXRlQmFieVNuYWtlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbMzAsIDEwXSk7XHJcbiAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsyMCwgMTBdKTtcclxuICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWzEwLCAxMF0pO1xyXG4gICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdIZWFkTG9jYXRpb246IG51bWJlcltdID0gdGhpcy5zZWdtZW50c1swXS5tYXAoaSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICBuZXdIZWFkTG9jYXRpb25bMF0gKz0gdGhpcy5keDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICBuZXdIZWFkTG9jYXRpb25bMV0gKz0gdGhpcy5keTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWdtZW50cy51bnNoaWZ0KG5ld0hlYWRMb2NhdGlvbik7XHJcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IHRoaXMuc2VnbWVudHMuc2xpY2UoMCwgLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ29sbGlzaW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWQ6IG51bWJlcltdID0gdGhpcy5zZWdtZW50c1swXTtcclxuICAgICAgICBpZiAoaGVhZFswXSA8IC0xMCB8fCBoZWFkWzBdID4gNDkwIHx8IGhlYWRbMV0gPiA0OTAgfHwgaGVhZFsxXSA8IC0xMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VPcmllbnRhdGlvbiA9IChldikgPT4ge1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb246IHN0cmluZyA9IGV2LmNvZGU7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmR4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5keCA9IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5keCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHggPSAtMTBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmR4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmR5ID0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmR4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmR5ID0gLTEwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JpZW50YXRpb24gPSAndmVydGljYWwnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5keCwgdGhpcy5keSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ3Jvd1NuYWtlID0gKCkgPT4ge1xyXG4gICAgICAgIC8vd2hlbiBzbmFrZSBoYXMgZWF0ZW4gc29tZXRoaW5nXHJcbiAgICAgICAgLy9cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTbmFrZSB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuY29uc29sZS5sb2coJ0pBTUVTJyk7XHJcblxyXG4vLyBET00gRlVOQ1RJT05TXHJcbmNvbnN0IGdhbWVMb29wID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHNuYWtlLmNoYW5nZU9yaWVudGF0aW9uKTtcclxuICAgIHNuYWtlLm1vdmUoKTtcclxuICAgIHB1cmdlU25ha2VzKCk7XHJcbiAgICBkcmF3U25ha2VTZWdtZW50cyhzbmFrZS5zZWdtZW50cyk7XHJcbiAgICBzbmFrZS5jaGVja0NvbGxpc2lvbigpO1xyXG4gICAgLy9DSEVDSyBFQVRJTkcgSEVSRVxyXG4gICAgLy9HUk9XIEhFUkVcclxuICAgIGlmIChzbmFrZS5tb3ZpbmcgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgZ2FtZU92ZXIoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IGRyYXdTbmFrZVNlZ21lbnRzID0gKHNuYWtlU2VnbWVudHMpID0+IHtcclxuICAgIGxldCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJyk7XHJcbiAgICBzbmFrZVNlZ21lbnRzLmZvckVhY2goc25ha2VTZWdtZW50ID0+IHtcclxuICAgICAgICBsZXQgbmV3U2VnbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5ld1NlZ21lbnQuY2xhc3NMaXN0LmFkZCgnc25ha2Utc2VnbWVudCcpO1xyXG4gICAgICAgIG5ld1NlZ21lbnQuc3R5bGUubGVmdCA9IHNuYWtlU2VnbWVudFswXSArICdweCc7XHJcbiAgICAgICAgbmV3U2VnbWVudC5zdHlsZS50b3AgPSBzbmFrZVNlZ21lbnRbMV0gKyAncHgnO1xyXG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQobmV3U2VnbWVudCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBwdXJnZVNuYWtlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFsbFNlZ21lbnRzOiBOb2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbmFrZS1zZWdtZW50Jyk7XHJcbiAgICBBcnJheS5mcm9tKGFsbFNlZ21lbnRzKS5mb3JFYWNoKCh0YXJnZXRTZWdtZW50OiBFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0U2VnbWVudC5yZW1vdmUoKTtcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5jb25zdCBnYW1lT3ZlciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdHQU1FIE9WRVIhJyk7XHJcbiAgICBzbmFrZSA9IG5ldyBTbmFrZTtcclxuICAgIHNuYWtlLmNyZWF0ZUJhYnlTbmFrZSgpO1xyXG4gICAgcHVyZ2VTbmFrZXMoKTtcclxuICAgIGRyYXdTbmFrZVNlZ21lbnRzKHNuYWtlLnNlZ21lbnRzKTtcclxufVxyXG5cclxuLy9TdGFydCBnYW1lXHJcbmRvY3VtZW50LmJvZHkub25rZXl1cCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoZS5jb2RlID09PSAnU3BhY2UnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NUQVJUSU5HIEdBTUUnKTtcclxuICAgICAgICBzbmFrZS5jcmVhdGVCYWJ5U25ha2UoKTtcclxuICAgICAgICBkcmF3U25ha2VTZWdtZW50cyhzbmFrZS5zZWdtZW50cyk7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1zY3JlZW4nKTtcclxuICAgICAgICB0aXRsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGxldCBnYW1lU2NyZWVuID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGdhbWVTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgc25ha2UubW92aW5nID0gdHJ1ZTtcclxuICAgICAgICAvL0luaXRpYWxpc2UgbWFpbiBnYW1lIGxvb3AgLSBicmVha3MgdXBvbiBkZWF0aFxyXG4gICAgICAgIHNldEludGVydmFsKGdhbWVMb29wLCBnbG9iYWxUaW1lcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBnbG9iYWxUaW1lcjogbnVtYmVyID0gMjAwO1xyXG5sZXQgc25ha2UgPSBuZXcgU25ha2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=