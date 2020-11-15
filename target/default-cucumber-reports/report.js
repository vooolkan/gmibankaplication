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
formatter.match({});
formatter.result({
  "status": "undefined"
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