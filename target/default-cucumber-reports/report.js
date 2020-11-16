$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/registration.feature");
formatter.feature({
  "name": "Kullanici kayit sayfasi",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@kullaniciGiris"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC01_kullanici registration sayfasina kayit olur",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@register"
    }
  ]
});
formatter.step({
  "name": "kullanici Register linkine tiklar",
  "keyword": "Given "
});
formatter.step({
  "name": "kullanici ssn numarasini \"\u003cssn\u003e\" yazar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici ad ve soyad \"\u003cad\u003e\" ve \"\u003csoyad\u003e\" yazar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici adresini \"\u003cadres\u003e\" yazar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici cep telefonunu \"\u003ccep telefon\u003e\" yazar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici username \"\u003cusername\u003e\" yazar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici e-mail adresini \"\u003ce-mail\u003e\" yazar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici password \"\u003cpassword\u003e\" yazar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici dogrulama password u \"\u003cconfirm password\u003e\" tekrar yazar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici Register buttonuna tiklar ve \"Registration saved! \" iceren mesaji gorur",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test Verileri",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ssn",
        "ad",
        "soyad",
        "adres",
        "cep telefon",
        "username",
        "e-mail",
        "password",
        "confirm password"
      ]
    },
    {
      "cells": [
        "567-88-3609",
        "kul",
        "abdullah",
        "deneme street 67800",
        "055-555-5555",
        "kl",
        "klem@gmail.com",
        "Forkul04.",
        "Forkul04."
      ]
    },
    {
      "cells": [
        "567-88-1667",
        "kul",
        "abdullh",
        "deneme street 67800",
        "055-555-5555",
        "kuol",
        "kalem@gmail.com",
        "Forkul04.",
        "Forkul04."
      ]
    }
  ]
});
formatter.background({
  "name": "kullanici giris linkleri",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici site \"https://www.gmibank.com/\" adresine gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_site_adresine_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_kullanici registration sayfasina kayit olur",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@kullaniciGiris"
    },
    {
      "name": "@register"
    }
  ]
});
formatter.step({
  "name": "kullanici Register linkine tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_Register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ssn numarasini \"567-88-3609\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_ssn_numarasini_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ad ve soyad \"kul\" ve \"abdullah\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_ad_ve_soyad_ve_yazar(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici adresini \"deneme street 67800\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_adresini_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici cep telefonunu \"055-555-5555\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_cep_telefonunu_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici username \"kl\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_username_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici e-mail adresini \"klem@gmail.com\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_e_mail_adresini_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici password \"Forkul04.\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_password_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici dogrulama password u \"Forkul04.\" tekrar yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_dogrulama_password_u_tekrar_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Register buttonuna tiklar ve \"Registration saved! \" iceren mesaji gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_Register_buttonuna_tiklar_ve_iceren_mesaji_gorur(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cRegistration saved![]\u003e but was:\u003cRegistration saved![ ]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_Register_buttonuna_tiklar_ve_iceren_mesaji_gorur(RegistrationStepDefinitions.java:84)\r\n\tat ✽.kullanici Register buttonuna tiklar ve \"Registration saved! \" iceren mesaji gorur(file:///C:/Users/User/Documents/Java%20Dosyalarim/JavaPrograms/gmibankaplication/src/test/resources/features/registration.feature:20)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "kullanici giris linkleri",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici site \"https://www.gmibank.com/\" adresine gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_site_adresine_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_kullanici registration sayfasina kayit olur",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@kullaniciGiris"
    },
    {
      "name": "@register"
    }
  ]
});
formatter.step({
  "name": "kullanici Register linkine tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_Register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ssn numarasini \"567-88-1667\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_ssn_numarasini_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ad ve soyad \"kul\" ve \"abdullh\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_ad_ve_soyad_ve_yazar(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici adresini \"deneme street 67800\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_adresini_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici cep telefonunu \"055-555-5555\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_cep_telefonunu_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici username \"kuol\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_username_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici e-mail adresini \"kalem@gmail.com\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_e_mail_adresini_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici password \"Forkul04.\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_password_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici dogrulama password u \"Forkul04.\" tekrar yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_dogrulama_password_u_tekrar_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Register buttonuna tiklar ve \"Registration saved! \" iceren mesaji gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_Register_buttonuna_tiklar_ve_iceren_mesaji_gorur(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cRegistration saved![]\u003e but was:\u003cRegistration saved![ ]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat gmibank.stepdefinitions.RegistrationStepDefinitions.kullanici_Register_buttonuna_tiklar_ve_iceren_mesaji_gorur(RegistrationStepDefinitions.java:84)\r\n\tat ✽.kullanici Register buttonuna tiklar ve \"Registration saved! \" iceren mesaji gorur(file:///C:/Users/User/Documents/Java%20Dosyalarim/JavaPrograms/gmibankaplication/src/test/resources/features/registration.feature:20)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
});