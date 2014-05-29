(function() {
  var Romo = function() {
    this._eventCallbacks = []
  }

  Romo.prototype.doInit = function() {
    $.each(this._eventCallbacks, function(idx, eventCallback) {
      $('body').on(eventCallback.eventName, eventCallback.callback)
    })

    this.triggerInitUI($('body'))
  }

  // init UI

  Romo.prototype.onInitUI = function(callback) {
    this._addEventCallback('romo:initUI', callback)
  }

  Romo.prototype.triggerInitUI = function(elem) {
    elem.trigger('romo:initUI')
  }

  Romo.prototype.initHtml = function(elem, data) {
    elem.html(data)
    this.triggerInitUI(elem)
  }

  // page handling

  Romo.prototype.reloadPage = function() {
    window.location = window.location
  }

  Romo.prototype.redirectPage = function(redirectUrl) {
    window.location = redirectUrl
  }

  // param serialization

  Romo.prototype.param = function(data, opts) {
    var paramData = $.extend({}, data)
    if (opts && opts.removeEmpty) {
      $.each(paramData, function(key, value) {
        if (value === '') {
          delete paramData[key]
        }
      })
    }

    return $.param(paramData)
  }

  // private

  Romo.prototype._addEventCallback = function(name, callback) {
    this._eventCallbacks.push({ eventName: name, callback:  callback })
  }

  window.Romo = new Romo()
})()

$(function() {

  Romo.doInit()

})
