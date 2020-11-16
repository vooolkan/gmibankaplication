$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/password.feature");
formatter.feature({
  "name": "Ana sayfadaki sifre bolumu duzenlenebilir olmalidir.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PasswordPage"
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
      "name": "@PasswordPage"
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
      "name": "@PasswordPage"
    },
    {
      "name": "@US_8_0"
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
  "status": "passed"
});
formatter.step({
  "name": "Kullanici password sekmesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_password_sekmesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Kullanici mevcut passwordu degistirmek istediginde mevcut passwordu,yeni password olarak kullanamaz.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PasswordPage"
    },
    {
      "name": "@US_8_1"
    }
  ]
});
formatter.step({
  "name": "Kullanici Mevcut sifre \"\u003c3edc.%TGB:\u003e\", Yeni sifre ve Yeni sifre tekrar textboxlarinin hepsine mevcut sifreyi yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_Mevcut_sifre_Yeni_sifre_ve_Yeni_sifre_tekrar_textboxlarinin_hepsine_mevcut_sifreyi_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Kaydet butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_Kaydet_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici mevcut passwordun yeni password olarak kullanilamadigini dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_mevcut_passwordun_yeni_password_olarak_kullanilamadigini_dogrular()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[.\u003d\u0027Şifre değiştirildi!\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9KDP0QC2\u0027, ip: \u0027192.168.0.198\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\ersn1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59295}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 24a832c3b6cdd437814d35ee5649310e\n*** Element info: {Using\u003dxpath, value\u003d//*[.\u003d\u0027Şifre değiştirildi!\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.getText(Unknown Source)\r\n\tat gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_mevcut_passwordun_yeni_password_olarak_kullanilamadigini_dogrular(PasswordStepDefinitions.java:32)\r\n\tat ✽.Kullanici mevcut passwordun yeni password olarak kullanilamadigini dogrular(file:///C:/Users/ersn1/IdeaProjects/gmibankaplication/src/test/resources/features/password.feature:24)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Kullanici yeni passwordde kucuk harf kullandiginda seviye grafigi degisir.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PasswordPage"
    },
    {
      "name": "@US_8_2"
    }
  ]
});
formatter.step({
  "name": "Kullanici Mevcut sifre \"\u003c3edc.%TGB:\u003e\" textboxina mevcut sifreyi girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_Mevcut_sifre_textboxina_mevcut_sifreyi_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Yeni sifre textboxina icinde kucuk harf olmayan alti haneli \"\u003c2!58.G\u003e\" password girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_Yeni_sifre_textboxina_icinde_kucuk_harf_olmayan_alti_haneli_password_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici seviye grafigini kontrol eder",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_seviye_grafigini_kontrol_eder()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[@style\u003d\u0027background-color: rgb(255, 0, 0);\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9KDP0QC2\u0027, ip: \u0027192.168.0.198\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\ersn1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59295}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 24a832c3b6cdd437814d35ee5649310e\n*** Element info: {Using\u003dxpath, value\u003d//li[@style\u003d\u0027background-color: rgb(255, 0, 0);\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.getCssValue(Unknown Source)\r\n\tat gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_seviye_grafigini_kontrol_eder(PasswordStepDefinitions.java:52)\r\n\tat ✽.Kullanici seviye grafigini kontrol eder(file:///C:/Users/ersn1/IdeaProjects/gmibankaplication/src/test/resources/features/password.feature:30)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Kullanici alti haneli passworde yedinci hane olarak herhangi bir kucuk harf \"\u003ca\u003e\" ekler",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_alti_haneli_passworde_yedinci_hane_olarak_herhangi_bir_kucuk_harf_ekler(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanici seviye grafiginde degisim oldugunu dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_seviye_grafiginde_degisim_oldugunu_dogrular()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Kullanici yeni passwordde buyuk harf kullandiginda seviye grafigi degisir.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PasswordPage"
    },
    {
      "name": "@US_8_3"
    }
  ]
});
formatter.step({
  "name": "Kullanici Mevcut sifre \"\u003c3edc.%TGB:\u003e\" textboxina mevcut sifreyi girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_Mevcut_sifre_textboxina_mevcut_sifreyi_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Yeni sifre textboxina icinde buyuk harf olmayan alti haneli password \"\u003c2!58.g\u003e\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_Yeni_sifre_textboxina_icinde_buyuk_harf_olmayan_alti_haneli_password_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici seviye grafigini kontrol eder",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_seviye_grafigini_kontrol_eder()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[@style\u003d\u0027background-color: rgb(255, 0, 0);\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9KDP0QC2\u0027, ip: \u0027192.168.0.198\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\ersn1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59295}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 24a832c3b6cdd437814d35ee5649310e\n*** Element info: {Using\u003dxpath, value\u003d//li[@style\u003d\u0027background-color: rgb(255, 0, 0);\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.getCssValue(Unknown Source)\r\n\tat gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_seviye_grafigini_kontrol_eder(PasswordStepDefinitions.java:52)\r\n\tat ✽.Kullanici seviye grafigini kontrol eder(file:///C:/Users/ersn1/IdeaProjects/gmibankaplication/src/test/resources/features/password.feature:38)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Kullanici alti haneli passworde yedinci hane olarak herhangi bir büyük harf \"\u003cA\u003e\" ekler",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_alti_haneli_passworde_yedinci_hane_olarak_herhangi_bir_büyük_harf_ekler(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanici seviye grafiginde degisim oldugunu dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_seviye_grafiginde_degisim_oldugunu_dogrular()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Kullanici yeni passwordde rakam kullandiginda seviye grafigi degisir.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PasswordPage"
    },
    {
      "name": "@US_8_4"
    }
  ]
});
formatter.step({
  "name": "Kullanici Mevcut sifre \"\u003c3edc.%TGB:\u003e\" textboxina mevcut sifreyi girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_Mevcut_sifre_textboxina_mevcut_sifreyi_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Yeni sifre textboxina icinde rakam olmayan alti haneli password \"\u003ck!mX.g\u003e\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_Yeni_sifre_textboxina_icinde_rakam_olmayan_alti_haneli_password_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici seviye grafigini kontrol eder",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_seviye_grafigini_kontrol_eder()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[@style\u003d\u0027background-color: rgb(255, 0, 0);\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9KDP0QC2\u0027, ip: \u0027192.168.0.198\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\ersn1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59295}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 24a832c3b6cdd437814d35ee5649310e\n*** Element info: {Using\u003dxpath, value\u003d//li[@style\u003d\u0027background-color: rgb(255, 0, 0);\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.getCssValue(Unknown Source)\r\n\tat gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_seviye_grafigini_kontrol_eder(PasswordStepDefinitions.java:52)\r\n\tat ✽.Kullanici seviye grafigini kontrol eder(file:///C:/Users/ersn1/IdeaProjects/gmibankaplication/src/test/resources/features/password.feature:46)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Kullanici alti haneli passworde yedinci hane olarak herhangi bir rakam \"\u003c5\u003e\" ekler",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_alti_haneli_passworde_yedinci_hane_olarak_herhangi_bir_rakam_ekler(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanici seviye grafiginde degisim oldugunu dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_seviye_grafiginde_degisim_oldugunu_dogrular()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Kullanici yeni passwordde ozel karakter kullandiginda seviye grafigi degisir.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PasswordPage"
    },
    {
      "name": "@US_8_5"
    }
  ]
});
formatter.step({
  "name": "Kullanici Mevcut sifre \"\u003c3edc.%TGB:\u003e\" textboxina mevcut sifreyi girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_Mevcut_sifre_textboxina_mevcut_sifreyi_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Yeni sifre textboxina icinde ozel karakter olmayan alti haneli bir \"\u003ck7mX2g\u003e\" password girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_Yeni_sifre_textboxina_icinde_ozel_karakter_olmayan_alti_haneli_bir_password_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici seviye grafigini kontrol eder",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_seviye_grafigini_kontrol_eder()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[@style\u003d\u0027background-color: rgb(255, 0, 0);\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9KDP0QC2\u0027, ip: \u0027192.168.0.198\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\ersn1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59295}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 24a832c3b6cdd437814d35ee5649310e\n*** Element info: {Using\u003dxpath, value\u003d//li[@style\u003d\u0027background-color: rgb(255, 0, 0);\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.getCssValue(Unknown Source)\r\n\tat gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_seviye_grafigini_kontrol_eder(PasswordStepDefinitions.java:52)\r\n\tat ✽.Kullanici seviye grafigini kontrol eder(file:///C:/Users/ersn1/IdeaProjects/gmibankaplication/src/test/resources/features/password.feature:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Kullanici alti haneli passworde yedinci hane olarak herhangi bir ozel karakter \"\u003c!\u003e\" ekler",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_alti_haneli_passworde_yedinci_hane_olarak_herhangi_bir_ozel_karakter_ekler(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanici seviye grafiginde degisim oldugunu dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_seviye_grafiginde_degisim_oldugunu_dogrular()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Kullanici yeni passwordde 7 karakter kullandiginda seviye grafigi degisir.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PasswordPage"
    },
    {
      "name": "@US_8_6"
    }
  ]
});
formatter.step({
  "name": "Kullanici Mevcut sifre \"\u003c3edc.%TGB:\u003e\" textboxina mevcut sifreyi girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_Mevcut_sifre_textboxina_mevcut_sifreyi_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Yeni sifre textboxina alti haneli bir password \"\u003c4r6AY.\u003e\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_Yeni_sifre_textboxina_alti_haneli_bir_password_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici seviye grafigini kontrol eder",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_seviye_grafigini_kontrol_eder()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[@style\u003d\u0027background-color: rgb(255, 0, 0);\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9KDP0QC2\u0027, ip: \u0027192.168.0.198\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\ersn1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59295}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 24a832c3b6cdd437814d35ee5649310e\n*** Element info: {Using\u003dxpath, value\u003d//li[@style\u003d\u0027background-color: rgb(255, 0, 0);\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.getCssValue(Unknown Source)\r\n\tat gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_seviye_grafigini_kontrol_eder(PasswordStepDefinitions.java:52)\r\n\tat ✽.Kullanici seviye grafigini kontrol eder(file:///C:/Users/ersn1/IdeaProjects/gmibankaplication/src/test/resources/features/password.feature:62)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Kullanici Yeni sifre textboxina yedi haneli password \"\u003c4r6AY.a\u003e\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_Yeni_sifre_textboxina_yedi_haneli_password_girer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanici seviye grafiginde degisim oldugunu dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_seviye_grafiginde_degisim_oldugunu_dogrular()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Kullanici password basarili bir sekilde degistirir.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PasswordPage"
    },
    {
      "name": "@US_8_7"
    }
  ]
});
formatter.step({
  "name": "Kullanici Mevcut sifre \"\u003c3edc.%TGB:\u003e\" textboxina mevcut sifreyi girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_Mevcut_sifre_textboxina_mevcut_sifreyi_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Yeni sifre textboxina gecerli passwordu \"\u003c4rfv.1QAY.\u003e\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_Yeni_sifre_textboxina_gecerli_passwordu_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Yeni Sifre Tekrar textboxina gecerli passwordu \"\u003c4rfv.1QAY.\u003e\" tekrar girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_Yeni_Sifre_Tekrar_textboxina_gecerli_passwordu_tekrar_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Kaydet butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_Kaydet_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici mevcut passwordun basarili bir sekilde degistigini dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordStepDefinitions.kullanici_mevcut_passwordun_basarili_bir_sekilde_degistigini_dogrular()"
});
formatter.result({
  "status": "passed"
});
});