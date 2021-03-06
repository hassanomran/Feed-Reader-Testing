/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         /* the  test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it(' a URL defined and that the URL is not empty.', function () {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

         /* The  test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('a name defined and that the name is not empty.', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    /*  a new test suite named "The menu" */


    describe('The menu', function () {
        /* the test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        
        it('the menu element is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* the test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */


        it('changes visibility when the menu icon is clicked', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    /* a new test suite named "Initial Entries" */


    describe('Initial Entries', function () {



        beforeEach(function (completes) {
            loadFeed(0, completes);
        });


        it('are completes', function () {
            expect($('.feed .entry').length).not.toBe(0);
        });
    });

/* a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function () {
    

        var oldFeed;
        var newFeed;

        beforeEach(function (completes) {
            loadFeed(0, function () {
                oldFeed = $('.feed').find('h2')[0].innerText;
                completes();
            });
        });

        afterEach(function (completes) {
            loadFeed(0, completes);
        });

        it('that the content actually changes.', function (completes) {
            loadFeed(1, function () {
            	newFeed = $('.feed').find('h2')[0].innerText;

                expect(oldFeed).not.toEqual(newFeed);
                completes();
            });
        });
    });
}());
