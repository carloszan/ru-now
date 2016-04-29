import React, { Component } from 'react';

window.fbAsyncInit = function() {
  FB.init({
    appId      : '816127438519308',
    xfbml      : true,
    version    : 'v2.6'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

export default ({}) => {
  return (
    <div
      className="fb-like"
      data-share="true"
      data-width="450"
      data-show-faces="true">
    </div>
  )
}
