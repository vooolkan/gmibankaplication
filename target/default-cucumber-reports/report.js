$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/manage_account.feature");
formatter.feature({
  "name": "Employee hesap olusturur ve yonetir",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@accountmanage"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC13_manage account testi",
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
formatter.examples({
  "name": "",
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
        "memur",
        "cucumber01."
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC13_manage account testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@accountmanage"
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
  "name": "username textbox kutusuna gecerli username \"memur\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CustomerStepDefinitions.username_textbox_kutusuna_gecerli_username_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "password textbox kutusuna gecerli password \"cucumber01.\" girer",
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
formatter.scenario({
  "name": "Employee customer account olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@accountmanage"
    },
    {
      "name": "@accountcreate"
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
  "name": "employee Manage Accounts tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.AccountManageStepDefinitions.employee_Manage_Accounts_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "employee Create a new Account a tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.AccountManageStepDefinitions.employee_Create_a_new_Account_a_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "employee Description text box a \"buraya hesap aciklamasi yazilmali\" bilgisini girer bos birakamaz",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.AccountManageStepDefinitions.employee_Description_text_box_a_bilgisini_girer_bos_birakamaz(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "employee Balance text box\u0027a dolar miktarini sadece rakam girer.",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.AccountManageStepDefinitions.employee_Balance_text_box_a_dolar_miktarini_sadece_rakam_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "employee Account Type secimi yapabilir",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.AccountManageStepDefinitions.employee_Account_Type_secimi_yapabilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "employee Account Status Type secimi yapabilmelidir",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.AccountManageStepDefinitions.employee_Account_Status_Type_secimi_yapabilmelidir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Employee kutusundan bir calisan secebilmelidir",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.AccountManageStepDefinitions.employee_kutusundan_bir_calisan_secebilmelidir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sign in butonuna tiklayarak Manage Account sayfasina geri doner",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.AccountManageStepDefinitions.kullanici_sign_in_butonuna_tiklayarak_Manage_Account_sayfasina_geri_doner()"
});
formatter.result({
  "status": "passed"
});
});