$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/customer.feature");
formatter.feature({
  "name": "Kullanici customer sayfasina gider",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@customer"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Kullanici gecerli kimlik bilgileriyle customer olusturur",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Kullanici login sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "username textbox kutusuna gecerli username \"\u003cusername\u003e\" girer",
  "keyword": "And "
});
formatter.step({
  "name": "password textbox kutusuna gecerli password \"\u003cpassword\u003e\" girer",
  "keyword": "And "
});
formatter.step({
  "name": "sign in butonuna tiklayarak giris yapar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici kendi username ini login kisminda gorur",
  "keyword": "Then "
});
formatter.examples({
  "name": "Gecerli data girilir",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Azizeke47",
        "Mardin4738."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Kullanici gecerli kimlik bilgileriyle customer olusturur",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@customer"
    }
  ]
});
formatter.step({
  "name": "Kullanici login sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepdefinitions.kullanici_login_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "username textbox kutusuna gecerli username \"Azizeke47\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CustomerStepDefinitions.username_textbox_kutusuna_gecerli_username_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "password textbox kutusuna gecerli password \"Mardin4738.\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CustomerStepDefinitions.password_textbox_kutusuna_gecerli_password_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in butonuna tiklayarak giris yapar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepdefinitions.sign_in_butonuna_tiklayarak_giris_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kendi username ini login kisminda gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepdefinitions.kullanici_kendi_username_ini_login_kisminda_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Employee create a new customer sayfasina gider",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@customer"
    },
    {
      "name": "@managecustomer"
    }
  ]
});
formatter.step({
  "name": "Employee My operations a tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CustomerStepDefinitions.employee_My_operations_a_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Employee Manage customera tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CustomerStepDefinitions.employee_Manage_customera_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Employee Create a new customera tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CustomerStepDefinitions.employee_Create_a_new_customera_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Employee SSN textboxina tiklar ve gecerli SSN numarsini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CustomerStepDefinitions.employee_SSN_textboxina_tiklar_ve_gecerli_SSN_numarsini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Employee serach boxa tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CustomerStepDefinitions.employee_serach_boxa_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Employee firstname gorur",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CustomerStepDefinitions.employee_firstname_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Employee lastname gorur",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CustomerStepDefinitions.employee_lastname_gorur()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027Toastify__toast Toastify__toast--error toastify-toast\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-M9ST69D5\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\adily\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63852}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 1ebaa2d87036e322a334307f0624c2cf\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027Toastify__toast Toastify__toast--error toastify-toast\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.getText(Unknown Source)\r\n\tat gmibank.stepdefinitions.CustomerStepDefinitions.employee_lastname_gorur(CustomerStepDefinitions.java:75)\r\n\tat ✽.Employee lastname gorur(file:///C:/Users/adily/IdeaProjects/gmibankaplication/src/test/resources/features/customer.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Employee email gorur",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CustomerStepDefinitions.employee_email_gorur()"
});
formatter.result({
  "status": "skipped"
});
});