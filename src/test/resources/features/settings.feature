@US_7
Feature: Sistem gecersiz kimlik bilgileriyle güncelleme yapmaya izin vermemelidir.




  @US_7_0
  Scenario: Kullanici ayarlar sayfasina gider
    Given Kullanici, kullanici adina tiklar
    And Kullanici ayarlar sekmesine tiklar


  @US_7_1
  Scenario: Kullanici e-mail textbox'a "@" karakteri icermeyen bir mail adresi girdiginde e-mail textbox'inin hemen altinda "This field is invalid" uyarisini gorur.
    Given Kullanici e-posta textbox'ini temizler ve e-posta textbox'ina icerisinde "@" karakteri olmayan bir e-mail girer
    Then Kullanici "This field is invalid" uyarisinin göründügünü dogrular

  @US_7_2
  Scenario: Kullanici e-mail textbox'a ".com" uzantisi icermeyen bir mail adresi girdiginde e-mail textbox'inin hemen altinda "This field is invalid" uyarisini gorur.
    Given Kullanici e-posta textbox'ini temizler ve e-posta textbox'ina icerisinde ".com" uzantisi olmayan bir e-mail girer
    Then Kullanici "This field is invalid" uyarisinin göründügünü dogrular

  @US_7_3
  Scenario: Kullanici e-mail textbox'a ".com" uzantisi ve "@" karakteri icermeyen bir mail adresi girdiginde e-mail textbox'inin hemen altinda "This field is invalid" uyarisini gorur.
    Given Kullanici e-posta textbox'ini temizler ve e-posta textbox'ina icerisinde ".com" uzantisi ve "@" karakteri olmayan bir e-mail girer
    Then Kullanici "This field is invalid" uyarisinin göründügünü dogrular

  @US_7_4
  Scenario: Kullanici dil secimi icin dropdown'a tiklandiginda sadece "Turkce" ve "Ingilizce" dil seceneklerini gorur.
    Given Kullanici dil secimi icin dropdown'a tiklar
    Then Kullanici dropdownd'da sadece "Turkce" ve "Ingilizce" dil seceneklerinin oldugunu dogrular
