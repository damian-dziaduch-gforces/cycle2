describe('jquery.cycle2.carousel.js', function () {
  it('exists', function () {
    expect($.fn.cycle.transitions.carousel).toBeDefined();
  });

  describe('method getSlideWidth', function () {
    it('exists', function () {
      expect($.fn.cycle.transitions.carousel.getSlideWidth).toBeDefined();
    });

    it('calls element\'s getBoundingClientRect method', function () {
      /** @type {HTMLElement} slide */
      var element = jasmine.createSpyObj('slide', ['getBoundingClientRect']);
      $.fn.cycle.transitions.carousel.getSlideWidth(element);
      expect(element.getBoundingClientRect).toHaveBeenCalled();
    });

    it('returns element\'s width via getBoundingClientRect method', function () {
      var element = {
        getBoundingClientRect: function () {
          return {
            width: 250.5
          }
        }
      };
      expect($.fn.cycle.transitions.carousel.getSlideWidth(element)).toBe(250.5);
    });
  });

  describe('method getSlideHeight', function () {
    it('exists', function () {
      expect($.fn.cycle.transitions.carousel.getSlideHeight).toBeDefined();
    });

    it('calls element\'s getBoundingClientRect method', function () {
      /** @type {HTMLElement} slide */
      var element = jasmine.createSpyObj('slide', ['getBoundingClientRect']);
      $.fn.cycle.transitions.carousel.getSlideHeight(element);
      expect(element.getBoundingClientRect).toHaveBeenCalled();
    });

    it('returns element\'s width via getBoundingClientRect method', function () {
      var element = {
        getBoundingClientRect: function () {
          return {
            height: 100.11
          }
        }
      };
      expect($.fn.cycle.transitions.carousel.getSlideHeight(element)).toBe(100.11);
    });
  });
});
