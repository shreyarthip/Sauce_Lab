$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "User should not be able to log in successfully",
  "description": "and user get an error message",
  "id": ";user-should-not-be-able-to-log-in-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@invalidCredential"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cinvalid_username\u003e\" in username inputbox",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter \"\u003cinvalid_password\u003e\" in password inputbox",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should able to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should not be able to log in successfully and user should get an error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": ";user-should-not-be-able-to-log-in-successfully;",
  "rows": [
    {
      "cells": [
        "invalid_username",
        "invalid_password"
      ],
      "line": 25,
      "id": ";user-should-not-be-able-to-log-in-successfully;;1"
    },
    {
      "cells": [
        "admin",
        ""
      ],
      "line": 26,
      "id": ";user-should-not-be-able-to-log-in-successfully;;2"
    },
    {
      "cells": [
        "",
        "admin123"
      ],
      "line": 27,
      "id": ";user-should-not-be-able-to-log-in-successfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10666401700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should not be able to log in successfully",
  "description": "and user get an error message",
  "id": ";user-should-not-be-able-to-log-in-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@invalidCredential"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"admin\" in username inputbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter \"\" in password inputbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should able to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should not be able to log in successfully and user should get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 330089400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    }
  ],
  "location": "MyStepsDefs.user_enters_in_username_inputbox(String)"
});
formatter.result({
  "duration": 216368800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "MyStepsDefs.user_enter_in_password_inputbox(String)"
});
formatter.result({
  "duration": 135628500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "duration": 144108400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "duration": 54961900,
  "status": "passed"
});
formatter.after({
  "duration": 322039900,
  "status": "passed"
});
formatter.before({
  "duration": 8241978400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should not be able to log in successfully",
  "description": "and user get an error message",
  "id": ";user-should-not-be-able-to-log-in-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@invalidCredential"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\" in username inputbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter \"admin123\" in password inputbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should able to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should not be able to log in successfully and user should get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 51224600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "MyStepsDefs.user_enters_in_username_inputbox(String)"
});
formatter.result({
  "duration": 117736200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 12
    }
  ],
  "location": "MyStepsDefs.user_enter_in_password_inputbox(String)"
});
formatter.result({
  "duration": 134420200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "duration": 98469500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "duration": 39995700,
  "status": "passed"
});
formatter.after({
  "duration": 224777400,
  "status": "passed"
});
});