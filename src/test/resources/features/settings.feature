@SettingsPage
Feature: Sistem gecersiz kimlik bilgileriyle güncelleme yapmaya izin vermemelidir.

  Scenario Outline: Kullanici gecerli kimlik bilgileriyle login olur

    Given Kullanici login sayfasina gider
    And  username textbox kutusuna gecerli username "<username>" girer
    And password textbox kutusuna gecerli password "<password>" girer
    And sign in butonuna tiklayarak giris yapar
    Then kullanici kendi username ini login kisminda gorur

    Examples: Gecerli data girilir
      |username|password|
      |customer01|3edc.%TGB:|


  @US_7_0
  Scenario: Kullanici ayarlar sayfasina gider
    Given Kullanici, kullanici adina tiklar
    And Kullanici ayarlar sekmesine tiklar


  @US_7_1
  Scenario: Kullanici e-mail textbox'a "@" karakteri icermeyen bir mail adresi girdiginde e-mail textbox'inin hemen altinda "This field is invalid" uyarisini gorur.
    Given Kullanici e-posta textbox'ini temizler ve e-posta textbox'ina icerisinde @ karakteri olmayan bir e-mail "<customer01.com>" girer
    Then Kullanici This field is invalid uyarisinin göründügünü dogrular

  @US_7_2
  Scenario: Kullanici e-mail textbox'a .com uzantisi icermeyen bir mail adresi girdiginde e-mail textbox'inin hemen altinda "This field is invalid" uyarisini gorur.
    Given Kullanici e-posta textbox'ini temizler ve e-posta textbox'ina icerisinde .com uzantisi olmayan bir e-mail "<customer01@mail.net>" girer
    Then Kullanici This field is invalid uyarisinin göründügünü dogrular

  @US_7_3
  Scenario: Kullanici e-mail textbox'a ".com" uzantisi ve "@" karakteri icermeyen bir mail adresi girdiginde e-mail textbox'inin hemen altinda "This field is invalid" uyarisini gorur.
    Given Kullanici e-posta textbox'ini temizler ve e-posta textbox'ina icerisinde .com uzantisi ve @ karakteri olmayan bir e-mail "<customer01.mail.net>" girer
    Then Kullanici This field is invalid uyarisinin göründügünü dogrular

  @US_7_4
  Scenario: Kullanici dil secimi icin dropdown'a tiklandiginda sadece "Turkce" ve "Ingilizce" dil seceneklerini gorur.
    Given Kullanici dil secimi icin dropdown'a tiklar
    Then Kullanici dropdownd'da sadece Turkce ve Ingilizce dil seceneklerinin oldugunu dogrular
