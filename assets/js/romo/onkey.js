var RomoOnkey = RomoComponent(function(elem) {
  this.elem = elem;

  this.defaultTriggerOn = 'keydown';
  this.defaultDelayMs   = 0;
  this.delayTimeout     = undefined;

  this.doInit();

  this.triggerOn = Romo.data(this.elem, 'romo-onkey-on') || this.defaultTriggerOn;
  Romo.on(this.elem, this.triggerOn, Romo.proxy(this._onTrigger, this));

  Romo.trigger(this.elem, 'romoOnkey:ready', [this]);
});

// private

RomoOnkey.prototype._doTrigger = function(triggerEvent) {
  clearTimeout(this.delayTimeout);
  this.delayTimeout = setTimeout(
    Romo.proxy(function() {
      Romo.trigger(this.elem, 'romoOnkey:trigger', [triggerEvent, this]);
    }, this),
    Romo.data(this.elem, 'romo-onkey-delay-ms') || this.defaultDelayMs
  );
}

// event functions

RomoOnkey.prototype.romoEvFn._onTrigger = function(e) {
  if (Romo.hasClass(this.elem, 'disabled') === false) {
    this._doTrigger(e);
  }
}

// init

Romo.addElemsInitSelector('[data-romo-onkey-auto="true"]', RomoOnkey);
