$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/settings.feature");
formatter.feature({
  "name": "Sistem gecersiz kimlik bilgileriyle güncelleme yapmaya izin vermemelidir.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SettingsPage"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Kullanici gecerli kimlik bilgileriyle login olur",
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
        "customer01",
        "3edc.%TGB:"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Kullanici gecerli kimlik bilgileriyle login olur",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SettingsPage"
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
  "name": "username textbox kutusuna gecerli username \"customer01\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CustomerStepDefinitions.username_textbox_kutusuna_gecerli_username_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "password textbox kutusuna gecerli password \"3edc.%TGB:\" girer",
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
  "name": "Kullanici ayarlar sayfasina gider",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SettingsPage"
    },
    {
      "name": "@US_7_0"
    }
  ]
});
formatter.step({
  "name": "Kullanici, kullanici adina tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.SettingsStepDefinitions.kullanici_kullanici_adina_tiklar()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//*[.\u003d\u0027customer lastname\u0027])[2]\"}\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9KDP0QC2\u0027, ip: \u0027192.168.0.198\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\ersn1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52208}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 9c37aca035a63c666807826c72812f93\n*** Element info: {Using\u003dxpath, value\u003d(//*[.\u003d\u0027customer lastname\u0027])[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.SettingsStepDefinitions.kullanici_kullanici_adina_tiklar(SettingsStepDefinitions.java:21)\r\n\tat ✽.Kullanici, kullanici adina tiklar(file:///C:/Users/ersn1/IdeaProjects/gmibankaplication/src/test/resources/features/settings.feature:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Kullanici ayarlar sekmesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.SettingsStepDefinitions.kullanici_ayarlar_sekmesine_tiklar()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Kullanici e-mail textbox\u0027a \"@\" karakteri icermeyen bir mail adresi girdiginde e-mail textbox\u0027inin hemen altinda \"This field is invalid\" uyarisini gorur.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SettingsPage"
    },
    {
      "name": "@US_7_1"
    }
  ]
});
formatter.step({
  "name": "Kullanici e-posta textbox\u0027ini temizler ve e-posta textbox\u0027ina icerisinde @ karakteri olmayan bir e-mail \"\u003ccustomer01.com\u003e\" girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.SettingsStepDefinitions.kullanici_e_posta_textbox_ini_temizler_ve_e_posta_textbox_ina_icerisinde_karakteri_olmayan_bir_e_mail_girer(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#email\"}\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9KDP0QC2\u0027, ip: \u0027192.168.0.198\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\ersn1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52208}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 9c37aca035a63c666807826c72812f93\n*** Element info: {Using\u003did, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.clear(Unknown Source)\r\n\tat gmibank.stepdefinitions.SettingsStepDefinitions.kullanici_e_posta_textbox_ini_temizler_ve_e_posta_textbox_ina_icerisinde_karakteri_olmayan_bir_e_mail_girer(SettingsStepDefinitions.java:34)\r\n\tat ✽.Kullanici e-posta textbox\u0027ini temizler ve e-posta textbox\u0027ina icerisinde @ karakteri olmayan bir e-mail \"\u003ccustomer01.com\u003e\" girer(file:///C:/Users/ersn1/IdeaProjects/gmibankaplication/src/test/resources/features/settings.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Kullanici This field is invalid uyarisinin göründügünü dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.SettingsStepDefinitions.kullanici_This_field_is_invalid_uyarisinin_göründügünü_dogrular()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Kullanici e-mail textbox\u0027a .com uzantisi icermeyen bir mail adresi girdiginde e-mail textbox\u0027inin hemen altinda \"This field is invalid\" uyarisini gorur.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SettingsPage"
    },
    {
      "name": "@US_7_2"
    }
  ]
});
formatter.step({
  "name": "Kullanici e-posta textbox\u0027ini temizler ve e-posta textbox\u0027ina icerisinde .com uzantisi olmayan bir e-mail \"\u003ccustomer01@mail.net\u003e\" girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.SettingsStepDefinitions.kullanici_e_posta_textbox_ini_temizler_ve_e_posta_textbox_ina_icerisinde_com_uzantisi_olmayan_bir_e_mail_girer(java.lang.String)"
});
