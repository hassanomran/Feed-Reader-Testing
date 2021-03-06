# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

# Steps to run application

To start the app, open index.html in your browser. 

The tests were written in the feedreader.js file. The test results
appears at the bottom of the index.html page.

Tests that are green have passed and red have failed.

# How it work ?

1. a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

2. a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

3. a new test suite named "The menu".

4. a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.

5. a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

6. a test suite named "Initial Entries".

7.  a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

8. a test suite named "New Feed Selection".

9.  a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.


## The tests:

1. tests to make sure that the allFeeds variable has been defined and that it is not empty.
2. loops through each feed and determines if the URL is defined and not empty.
3. loops through each feed and determines that each feed has a name and not empty.
4. ensures the menu element is hidden by default.
5. validates proper functioning of the hamburger menu toggle.
6. tests that there is at least one entry in feed.
7. tests that new content is loaded by loadFeed().
