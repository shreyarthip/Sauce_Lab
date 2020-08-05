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
  "duration": 22358613800,
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
  "duration": 1614746900,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with xpath \u003d\u003d //span[text()\u003d\u0027Username\u0027] (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 296 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SAUCE-M5KOC5RP6\u0027, ip: \u002710.119.52.241\u0027, os.name: \u0027Windows Server 2008 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities [{browserAttachTimeout\u003d0, ie.enableFullPageScreenshot\u003dtrue, enablePersistentHover\u003dtrue, ie.forceCreateProcessApi\u003dfalse, ie.forceShellWindowsApi\u003dfalse, pageLoadStrategy\u003dnormal, ignoreZoomSetting\u003dfalse, ie.fileUploadDialogTimeout\u003d3000, version\u003d11, platform\u003dWINDOWS, nativeEvents\u003dtrue, ie.ensureCleanSession\u003dfalse, elementScrollBehavior\u003d0, ie.browserCommandLineSwitches\u003d, requireWindowFocus\u003dfalse, browserName\u003dinternet explorer, initialBrowserUrl\u003dabout:blank, javascriptEnabled\u003dtrue, ignoreProtectedModeSettings\u003dfalse, enableElementCacheCleanup\u003dtrue, unexpectedAlertBehaviour\u003ddismiss}]\nSession ID: XXXXXXXX-XXXX-XXXX-XXXX-XXXX24251abb\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Username\u0027]}\nCommand duration or timeout: 0 milliseconds\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.Util.getTextFromElement(Util.java:51)\r\n\tat org.example.HomePage.verifyTextToHomepage(HomePage.java:16)\r\n\tat org.example.MyStepsDefs.user_is_on_homepage(MyStepsDefs.java:12)\r\n\tat ✽.Given User is on homepage(src/test/resources/features/login.feature:17)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to find element with xpath \u003d\u003d //span[text()\u003d\u0027Username\u0027] (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 296 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SAUCE-M5KOC5RP6\u0027, ip: \u002710.119.52.241\u0027, os.name: \u0027Windows Server 2008 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities [{browserAttachTimeout\u003d0, ie.enableFullPageScreenshot\u003dtrue, enablePersistentHover\u003dtrue, ie.forceCreateProcessApi\u003dfalse, ie.forceShellWindowsApi\u003dfalse, pageLoadStrategy\u003dnormal, ignoreZoomSetting\u003dfalse, ie.fileUploadDialogTimeout\u003d3000, version\u003d11, platform\u003dWINDOWS, nativeEvents\u003dtrue, ie.ensureCleanSession\u003dfalse, elementScrollBehavior\u003d0, ie.browserCommandLineSwitches\u003d, requireWindowFocus\u003dfalse, browserName\u003dinternet explorer, initialBrowserUrl\u003dabout:blank, javascriptEnabled\u003dtrue, ignoreProtectedModeSettings\u003dfalse, enableElementCacheCleanup\u003dtrue, unexpectedAlertBehaviour\u003ddismiss}]\nSession ID: XXXXXXXX-XXXX-XXXX-XXXX-XXXX24251abb\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Username\u0027]}\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CHETAN\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: EventFiringWebDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:103)\r\n\tat com.sun.proxy.$Proxy1.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:188)\r\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:48)\r\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:1)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat org.openqa.selenium.remote.server.DefaultSession$1.run(DefaultSession.java:176)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepsDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 16406965600,
  "status": "passed"
});
formatter.before({
  "duration": 110921391600,
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
  "duration": 2079679800,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with xpath \u003d\u003d //span[text()\u003d\u0027Username\u0027] (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 296 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SAUCE-M5KOC5RP6\u0027, ip: \u002710.119.38.100\u0027, os.name: \u0027Windows Server 2008 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities [{browserAttachTimeout\u003d0, ie.enableFullPageScreenshot\u003dtrue, enablePersistentHover\u003dtrue, ie.forceCreateProcessApi\u003dfalse, ie.forceShellWindowsApi\u003dfalse, pageLoadStrategy\u003dnormal, ignoreZoomSetting\u003dfalse, ie.fileUploadDialogTimeout\u003d3000, version\u003d11, platform\u003dWINDOWS, nativeEvents\u003dtrue, ie.ensureCleanSession\u003dfalse, elementScrollBehavior\u003d0, ie.browserCommandLineSwitches\u003d, requireWindowFocus\u003dfalse, browserName\u003dinternet explorer, initialBrowserUrl\u003dabout:blank, javascriptEnabled\u003dtrue, ignoreProtectedModeSettings\u003dfalse, enableElementCacheCleanup\u003dtrue, unexpectedAlertBehaviour\u003ddismiss}]\nSession ID: XXXXXXXX-XXXX-XXXX-XXXX-XXXX54a94b81\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Username\u0027]}\nCommand duration or timeout: 0 milliseconds\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.Util.getTextFromElement(Util.java:51)\r\n\tat org.example.HomePage.verifyTextToHomepage(HomePage.java:16)\r\n\tat org.example.MyStepsDefs.user_is_on_homepage(MyStepsDefs.java:12)\r\n\tat ✽.Given User is on homepage(src/test/resources/features/login.feature:17)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to find element with xpath \u003d\u003d //span[text()\u003d\u0027Username\u0027] (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 296 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SAUCE-M5KOC5RP6\u0027, ip: \u002710.119.38.100\u0027, os.name: \u0027Windows Server 2008 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities [{browserAttachTimeout\u003d0, ie.enableFullPageScreenshot\u003dtrue, enablePersistentHover\u003dtrue, ie.forceCreateProcessApi\u003dfalse, ie.forceShellWindowsApi\u003dfalse, pageLoadStrategy\u003dnormal, ignoreZoomSetting\u003dfalse, ie.fileUploadDialogTimeout\u003d3000, version\u003d11, platform\u003dWINDOWS, nativeEvents\u003dtrue, ie.ensureCleanSession\u003dfalse, elementScrollBehavior\u003d0, ie.browserCommandLineSwitches\u003d, requireWindowFocus\u003dfalse, browserName\u003dinternet explorer, initialBrowserUrl\u003dabout:blank, javascriptEnabled\u003dtrue, ignoreProtectedModeSettings\u003dfalse, enableElementCacheCleanup\u003dtrue, unexpectedAlertBehaviour\u003ddismiss}]\nSession ID: XXXXXXXX-XXXX-XXXX-XXXX-XXXX54a94b81\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Username\u0027]}\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CHETAN\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: EventFiringWebDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:103)\r\n\tat com.sun.proxy.$Proxy1.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:188)\r\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:48)\r\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:1)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat org.openqa.selenium.remote.server.DefaultSession$1.run(DefaultSession.java:176)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepsDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 17630021200,
  "status": "passed"
});
});