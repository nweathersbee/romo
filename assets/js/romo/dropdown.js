$.fn.romoDropdown = function() {
  return $.map(this, function(elem) {
    return new RomoDropdown($(elem))
  })
}

var RomoDropdown = function(element) {
  this.elem = $(element)
  this.popupElem = $('<div class="romo-dropdown-popup"><div class="romo-dropdown-body"></div></div>')
  this.popupElem.appendTo('body')
  this.bodyElem = this.popupElem.find('> .romo-dropdown-body')
  this.romoInvoke = this.elem.romoInvoke()[0]

  var positionData = this._parsePositionData(this.elem.data('dropdown-position'))
  this.popupPosition  = positionData.position  || 'bottom'
  this.popupAlignment = positionData.alignment || 'left'
  this.popupElem.attr('data-dropdown-position',  this.popupPosition)
  this.popupElem.attr('data-dropdown-alignment', this.popupAlignment)
  // don't propagate click events on the popup elem.  this prevents the popup
  // from closing when clicked (see body click event bind on popup open)
  this.popupElem.on('click', function(e) {
    if (e != undefined) {
      e.stopPropagation()
    }
  })

  this.bodyElem.addClass(this.elem.data('dropdown-style-class'))
  this.bodyElem.css({
    'min-width':  this.elem.data('dropdown-min-width'),
    'max-width':  this.elem.data('dropdown-max-width'),
    'width':      this.elem.data('dropdown-width'),
    'min-height': this.elem.data('dropdown-min-height'),
    'max-height': this.elem.data('dropdown-max-height'),
    'height':     this.elem.data('dropdown-height')
  })

  this.elem.unbind('click')
  this.elem.on('click', $.proxy(this.onToggleClick, this))
  this.elem.on('invoke:loadStart', $.proxy(function(e, invoke) {
    this.doLoadBodyStart()
  }, this))
  this.elem.on('invoke:loadSuccess', $.proxy(function(e, data, invoke) {
    this.doLoadBodySuccess(data)
  }, this))
  this.elem.on('invoke:loadError', $.proxy(function(e, xhr, invoke) {
    this.doLoadBodyError(xhr)
  }, this))

  this.doInit()
  this.elem.trigger('dropdown:ready', [this])
}

RomoDropdown.prototype.doInit = function() {
  // override as needed
}

RomoDropdown.prototype.doLoadBodyStart = function() {
  this.bodyElem.html('')
  this.doPlacePopupElem()
  this.elem.trigger('dropdown:loadBodyStart', [this])
}

RomoDropdown.prototype.doLoadBodySuccess = function(data) {
  Romo.initHtml(this.bodyElem, data)
  this.doPlacePopupElem()
  this.elem.trigger('dropdown:loadBodySuccess', [data, this])
}

RomoDropdown.prototype.doLoadBodyError = function(xhr) {
  this.elem.trigger('dropdown:loadBodyError', [xhr, this])
}

RomoDropdown.prototype.onToggleClick = function(e) {
  if (e != undefined) {
    e.preventDefault()
  }

  if (this.elem.hasClass('disabled') === false) {
    this.doToggle()
  }
}

RomoDropdown.prototype.doToggle = function() {
  if (this.popupElem.hasClass('romo-dropdown-open')) {
    this.doPopupClose()
  } else {
    this.doPopupOpen()
  }
  this.elem.trigger('dropdown:toggle', [this])
}

RomoDropdown.prototype.doPopupOpen = function() {
  this.romoInvoke.doInvoke()
  this.popupElem.addClass('romo-dropdown-open')
  this.doPlacePopupElem()

  // bind an event to close the popup when clicking away from the
  // popup.  Bind on a timeout to allow time for any toggle
  // click event to propagate.  If no timeout, we'll bind this
  // event, then the toggle click will propagate which will call
  // this event and immediately close the popup.
  setTimeout($.proxy(function() {
    $('body').on('click', $.proxy(this.onWindowBodyClick, this))
  }, this), 100)

  // bind "esc" keystroke to toggle close
  $('body').on('keyup', $.proxy(this.onWindowBodyKeyUp, this))

  // bind window resizes reposition dropdown
  $(window).on('resize', $.proxy(this.onResizeWindow, this))

  this.elem.trigger('dropdown:popupOpen', [this])
}

RomoDropdown.prototype.doPopupClose = function() {
  this.popupElem.removeClass('romo-dropdown-open')

  // unbind any event to close the popup when clicking away from it
  $('body').off('click', $.proxy(this.onWindowBodyClick, this))

  // unbind "esc" keystroke to toggle close
  $('body').off('keyup', $.proxy(this.onWindowBodyKeyUp, this))

  // unbind window resizes reposition dropdown
  $(window).off('resize', $.proxy(this.onResizeWindow, this))

  this.elem.trigger('dropdown:popupClose', [this])
}

RomoDropdown.prototype.onWindowBodyClick = function(e) {
  this.doPopupClose()
}

RomoDropdown.prototype.onWindowBodyKeyUp = function(e) {
  if (e.keyCode === 27 /* Esc */) {
    this.doPopupClose()
  }
}

RomoDropdown.prototype.onResizeWindow = function(e) {
  this.doPlacePopupElem()
}

RomoDropdown.prototype.doPlacePopupElem = function() {
  var pos = $.extend({}, this.elem[0].getBoundingClientRect(), this.elem.offset())
  var w = this.popupElem[0].offsetWidth
  var h = this.popupElem[0].offsetHeight
  var pad = 2 // spacing
  var offset = {}

  switch (this.popupPosition) {
    case 'top':
      $.extend(offset, { top: pos.top - h - pad })
      break
    case 'bottom':
      $.extend(offset, { top: pos.top + pos.height + pad })
      break
  }
  switch (this.popupAlignment) {
    case 'left':
      $.extend(offset, { left: pos.left })
      break
    case 'right':
      $.extend(offset, { left: pos.right - w })
      break
  }

  this.popupElem.offset(offset)
}

RomoDropdown.prototype._parsePositionData = function(posString) {
  var posData = (posString || '').split(',')
  return { position: posData[0], alignment: posData[1] }
}

Romo.onInitUI(function(e) {
  $(e.target).find('.romo-dropdown[data-dropdown-auto="true"]').romoDropdown()
})
