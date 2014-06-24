
(function() {
  var State, _mediaQueryList;

  this.Harvey = (function() {

    function Harvey() {}

    Harvey.states = {};

    /*
        Creates a new State object for the given media query using the passed hash
        of callbacks and stores it in @states. The passed hash may contain up to
        three callbacks. See documentation of the State class for more information.
    */


    Harvey.attach = function(mediaQuery, callbacks) {
      var state;
      if (!this.states.hasOwnProperty(mediaQuery)) {
        this.states[mediaQuery] = [];
        this._add_css_for(mediaQuery);
      }
      state = new State(mediaQuery, callbacks != null ? callbacks.setup : void 0, callbacks != null ? callbacks.on : void 0, callbacks != null ? callbacks.off : void 0);
      if (!this.states[mediaQuery].length) {
        this._watch_query(mediaQuery);
      }
      this.states[mediaQuery].push(state);
      if (this._window_matchmedia(mediaQuery).matches) {
        this._update_states([state], true);
      }
      return state;
    };

    /*
        Removes a given State object from the @states hash.
    
        @param  object  state  A valid state object
    */


    Harvey.detach = function(state) {
      var i, s, _i, _len, _ref, _results;
      _ref = this.states[state.condition];
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        s = _ref[i];
        if (state === s) {
          _results.push(this.states[s.condition][i] = void 0);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    /*
        Create a new matchMediaListener for the passed media query.
    
        @param  string  mediaQuery  A valid CSS media query to watch
    */


    Harvey._watch_query = function(mediaQuery) {
      var _this = this;
      return this._window_matchmedia(mediaQuery).addListener(function(mql) {
        return _this._update_states(_this.states[mediaQuery], mql.matches);
      });
    };

    /*
        Activates/Deactivates every State object in the passed list.
    
        @param  array   states  A list of State objects to update
        @param  boolean active Whether to activate or deactivate the given states
    */


    Harvey._update_states = function(states, active) {
      var state, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = states.length; _i < _len; _i++) {
        state = states[_i];
        if (active) {
          _results.push(state.activate());
        } else {
          _results.push(state.deactivate());
        }
      }
      return _results;
    };

    /*
        BEWARE: You're at the edge of the map, mate. Here there be monsters!
    
        ------------------------------------------------------------------------------------
    
        Private methods to fix and polyfill the matchMedia interface for several engines
    
        * Inspired by Nicholas C. Zakas' article on the different problems with matchMedia
          http://www.nczonline.net/blog/2012/01/19/css-media-queries-in-javascript-part-2/
    
        * Implementing a modified coffeescript version of Scott Jehl's and Paul Irish's matchMedia.js polyfill
          https://github.com/paulirish/matchMedia.js
    */


    /*
        [FIX] for Firefox/Gecko browsers that lose reference to the
              MediaQueryList object unless it's being stored for runtime.
    */


    Harvey._mediaList = {};

    /*
        @param  string  mediaQuery      A valid CSS media query to monitor for updates
        @Return object  MediaQueryList  Depending on the browser and matchMedia support either a native
                                        mediaQueryList object or an instance of _mediaQueryList
    */


    Harvey._window_matchmedia = function(mediaQuery) {
      if (window.matchMedia && 'addListener' in window.matchMedia('all')) {
        if (!(mediaQuery in this._mediaList)) {
          this._mediaList[mediaQuery] = window.matchMedia(mediaQuery);
        }
        return this._mediaList[mediaQuery];
      }
      /*
            [POLYFILL] for all browsers that don't support matchMedia() at all (CSS media query support
                       is still mandatory though).
      */

      if (!this._listening) {
        this._listen();
      }
      if (!(mediaQuery in this._mediaList)) {
        this._mediaList[mediaQuery] = new _mediaQueryList(mediaQuery);
      }
      return this._mediaList[mediaQuery];
    };

    /*
        Add resize and orientationChange event listeners to the window element
        to monitor updates to the viewport
    */


    Harvey._listen = function() {
      var evt,
        _this = this;
      evt = window.addEventListener || window.attachEvent;
      evt('resize', function() {
        var mediaList, mediaQuery, _ref, _results;
        _ref = _this._mediaList;
        _results = [];
        for (mediaQuery in _ref) {
          mediaList = _ref[mediaQuery];
          _results.push(mediaList._process());
        }
        return _results;
      });
      evt('orientationChange', function() {
        var mediaList, mediaQuery, _ref, _results;
        _ref = _this._mediaList;
        _results = [];
        for (mediaQuery in _ref) {
          mediaList = _ref[mediaQuery];
          _results.push(mediaList._process());
        }
        return _results;
      });
      return this._listening = true;
    };

    /*
        [FIX] for Webkit engines that only trigger the MediaQueryListListener
              when there is at least one CSS selector for the respective media query
    
        @param  string  MediaQuery  The media query to inject CSS for
    */


    Harvey._add_css_for = function(mediaQuery) {
      if (!this.style) {
        this.style = document.createElement('style');
        this.style.setAttribute('type', 'text/css');
        document.getElementsByTagName('head')[0].appendChild(this.style);
      }
      mediaQuery = "@media " + mediaQuery + " {.harvey-test{}}";
      if (!this.style.styleSheet) {
        return this.style.appendChild(document.createTextNode(mediaQuery));
      }
    };

    return Harvey;

  })();

  /*
    A State allows to execute a set of callbacks for the given valid CSS media query.
  
    Callbacks are executed in the context of their state object to allow access to the
    corresponding media query of the State.
  
    States are not exposed to the global namespace. They can be used by calling the
    static Harvey.attach() and Harvey.detach() methods.
  */


  State = (function() {

    State.prototype.active = false;

    State.prototype.is_setup = false;

    /*
        Creates a new State object
    
        @param  string    condition The media query to check for
        @param  function  setup     Called the first time `condition` becomes valid
        @param  function  on        Called every time `condition` becomes valid
        @param  function  off       Called every time `condition` becomes invalid
    */


    function State(condition, setup, on, off) {
      this.condition = condition;
      this.setup = setup;
      this.on = on;
      this.off = off;
    }

    /*
        Activate this State object if it is currently deactivated. Also perform all
        set up tasks if this is the first time the State is activated
    */


    State.prototype.activate = function() {
      if (this.active) {
        return;
      }
      if (!this.is_setup) {
        if (typeof this.setup === "function") {
          this.setup();
        }
        this.is_setup = true;
      }
      if (typeof this.on === "function") {
        this.on();
      }
      return this.active = true;
    };

    /*
        Deactive this State object if it is currently active
    */


    State.prototype.deactivate = function() {
      if (!this.active) {
        return;
      }
      if (typeof this.off === "function") {
        this.off();
      }
      return this.active = false;
    };

    return State;

  })();

  /*
    [FIX] simple implemenation of the matchMedia interface to mimic the native
          matchMedia interface behaviour to work as a polyfill for Harvey
  */


  _mediaQueryList = (function() {
    /*
        Creates a new _mediaQueryList object
    
        @param  string  media  A valid CSS media query
    */

    function _mediaQueryList(media) {
      this.media = media;
      this._listeners = [];
      this.matches = this._matches();
    }

    /*
        Add a new listener to this mediaQueryList that will be called every time
        the media query becomes valid
    */


    _mediaQueryList.prototype.addListener = function(listener) {
      this._listeners.push(listener);
      return void 0;
    };

    /*
        Evaluate the media query of this mediaQueryList object and notify
        all registered listeners if the state has changed
    */


    _mediaQueryList.prototype._process = function() {
      var callback, current, _i, _len, _ref, _results;
      current = this._matches();
      if (this.matches === current) {
        return;
      }
      this.matches = current;
      _ref = this._listeners;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        callback = _ref[_i];
        _results.push(callback(this));
      }
      return _results;
    };

    /*
        Check whether the media query is currently valid
    */


    _mediaQueryList.prototype._matches = function() {
      if (!this._tester) {
        this._get_tester();
      }
      this._tester.innerHTML = '&shy;<style media="' + this.media + '">#harvey-mq-test{width:42px;}</style>';
      this._tester.removeChild(this._tester.firstChild);
      return this._tester.offsetWidth === 42;
    };

    /*
        Retrieve the element to test the media query on from the DOM or create
        it if it has not been injected into the page yet
    */


    _mediaQueryList.prototype._get_tester = function() {
      this._tester = document.getElementById('harvey-mq-test');
      if (!this._tester) {
        return this._build_tester();
      }
    };

    /*
        Create a new div with a unique id, move it outsite of the viewport and inject it into the DOM.
        This element will be used to check whether the registered media query is currently valid.
    */


    _mediaQueryList.prototype._build_tester = function() {
      this._tester = document.createElement('div');
      this._tester.id = 'harvey-mq-test';
      this._tester.style.cssText = 'position:absolute;top:-100em';
      return document.body.insertBefore(this._tester, document.body.firstChild);
    };

    return _mediaQueryList;

  })();

}).call(this);