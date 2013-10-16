var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Python for Scientific Computation',
    subtitle: '',
    eventTitle: 'Seminar talk',
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/matheon-logo-color.svg',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    theme: ['matheon'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Nico Schlömer',
    company: 'Researcher, Matheon',
    gplus: 'https://plus.google.com/110475963061639463862',
    twitter: '@nschloe',
    //www: 'http://www.you.com',
    github: 'http://github.com/nschloe'
  }/*, {
    name: 'Second Name',
    company: 'Job Title, Google',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'
  }*/]
};

