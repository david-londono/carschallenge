var Petitioner = function() {
  this.ajaxResponse = "";
};

Petitioner.prototype.ajax = function(method,url,object) {
  this._setXMLHttpRequest();
  this._openRequest(method, url);
  this._onLoad();
  this._send();
};

Petitioner.prototype._setXMLHttpRequest = function() {
  this.xhr = new XMLHttpRequest();
};

Petitioner.prototype._openRequest = function(method, url) {
  this.xhr.open(method,url);
}

Petitioner.prototype._onLoad = function() {
   var context = this;

   this.xhr.onreadystatechange = function(response) {
     context.done(response);
   }
};


Petitioner.prototype.done = function (xhr) {debugger;
  if (context.xhr.readyState === 4 && context.xhr.status === 200) {
      context.ajaxResponse = context.xhr.responseText;
    }
};

Petitioner.prototype.getResponse = function() {
  return this.ajaxResponse;
}


Petitioner.prototype._send = function(){
  this.xhr.send();
};




 //return Petitioner;
